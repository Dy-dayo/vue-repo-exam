<template>
    <div>
        <div>
            <h1>Welcome to Github repository page built with Vue</h1>
            <h2>Ojo Oladayo has {{ repoArray.length }} repositories.</h2>
            <p>All of which you will see as you navigate with the prev and next button.</p>
        </div>
        <div v-for="(repo, i) in repoArray" :key="i">
            <div className="repos">
                <h3>{{ repo.name }}</h3>
                <p>The link to this repository is: <a :href="repo.html_url">here</a> </p>
                <router-link to="/about"><button @click="viewMore(i)">View More</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Repos',
    // props: ['link', 'name'],
    data() {
        return {
            repoLength: 0,
            repoArray: [],
            clickedRepo: {}
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
                    // console.log(err)
                    this.repoArray = JSON.parse(localStorage.getItem('repos'))
                    // console.log(this.repoArray)
                })
        },
        viewMore(index) {
            this.clickedRepo = this.repoArray[index]
            localStorage.setItem('repo', JSON.stringify(this.clickedRepo))

        }
    },
    mounted() {
        this.handleFetch()
        // fetch('https://api.github.com/users/dy-dayo/repos')
    }

}
</script>

<style></style>