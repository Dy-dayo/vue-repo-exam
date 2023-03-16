<template>
    <div class="repo-template">
        <section class="intro">
            <div>
                <h1>Ojo Oladayo</h1>
                <h2>Welcome to Github repository page built with Vue</h2>
                <h2>My Github has {{ repoArray.length }} repositories.</h2>
                <p>My Github consist of most of the projects I have work on. This page show all of the repositories on my
                    github</p>
            </div>
            <div class="img-div">
                <img src="../images/exam-pic.jpeg" alt="Profile Pic">
            </div>
        </section>

        <h2 style="text-align: center;">Repositories</h2>

        <section class="repos-area">
            <div v-for="(repo, i) in currentSlide" :key="i" className="repos">
                <h3>{{ repo.name }}</h3>
                <p>The link to this repository is: <a :href="repo.html_url">here</a> </p>
                <button @click="$router.push(`/repo/${repo.id}`)">View More</button>
            </div>
        </section>

        <div class="control-btns">
            <button @click="prev()" class="prev">Prev</button>
            <button v-for="but in pageCounter" :key="but" @click="goToPage(but)">{{ but }}</button>
            <button @click="next()" class="next">Next</button>
        </div>
    </div>
</template>

<script>
// Options API
export default {
    name: 'Repos',
    data() {
        return {
            repoLength: 0,
            repoArray: [],
            pageSize: 8,
            currentPage: 1,
        }
    },
    computed: {
        currentSlide() {
            return this.repoArray.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        },
        pageCounter() {
            return Math.ceil(this.repoArray.length / this.pageSize)
        }

    },

    methods: {
        handleFetch() {
            fetch('https://api.github.com/users/dy-dayo/repos')
                .then(res => res.json())
                .then(data => {
                    this.repoArray = data
                    this.repoLength = data.length
                    localStorage.setItem('repos', JSON.stringify(data))
                })
                .catch(err => {
                    this.repoArray = JSON.parse(localStorage.getItem('repos'))
                })
        },
        goToPage(num) {
            this.currentPage = num
        },
        next() {
            this.currentPage < this.pageCounter ? this.currentPage++ : ""
        },
        prev() {
            this.currentPage > 1 ? this.currentPage-- : ""
        }

    },
    mounted() {
        this.handleFetch()
    },
}
</script>

<style>
.repo-template {
    padding: 10px 15px;
}

.intro div h1 {
    font-size: 1.95rem;
    margin: 0;
}

.intro div h2 {
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 1.2rem;
}

.img-div img {
    width: 150px;
    max-height: 165px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
}

.repos-area {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
}

.repos {
    background: rgba(1, 74, 74, 0.202);
    box-shadow: 1px 1px 1.5px rgba(1, 83, 83, 0.423);
    text-align: center;
    border-radius: 10px;
}

.repos p a {
    color: inherit;
}

.repos button,
.control-btns button {
    font-family: 'Karla', sans-serif;
    cursor: pointer;
}

.repos button {
    display: block;
    width: 80%;
    padding: 8px;
    border-radius: 10px;
    margin: 5px auto 15px;

}

button {
    background: rgba(1, 83, 83, 0.803);
    color: rgb(233, 231, 231);
    font-size: 18px;
    font-weight: 500;
    /* border: none; */

}

.control-btns {
    margin: 0 auto 50px;
    width: 350px;
    display: flex;
    align-items: center;
}

.control-btns button {
    width: 50px;
    padding: 15px 0;
    margin-right: 5px;
    background: rgb(1, 83, 83);
}

button.next {
    border-radius: 0px 50% 50% 0px;
}

button.prev {
    border-radius: 50% 0 0 50%;
}

@media (min-width:630px) {
    .intro {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .intro div h1 {
        font-size: 2.4rem;
    }

    .intro div h2 {
        margin-top: 1rem;
        font-size: 1.7rem;
    }

    .img-div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-div img {
        width: 70%;
        max-width: 400px;
        max-height: 280px;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
    }
}</style>