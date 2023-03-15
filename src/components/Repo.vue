<template>
    <div class="details">
        <h1>Welcome to {{ repo.name }} repository</h1>
        <p>The link to repository <a :href="repo.html_url">{{ repo.html_url }}.</a> Hopefully you will find things useful to
            you </p>
        <p>It was pushed on {{ repo.pushed_at }}</p>
        <p>The size of this repo is {{ repo.size }}</p>
    </div>
</template>
<!-- Composition API -->
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router"
import { onMounted } from "vue";

const route = useRoute()
const repo = ref({})

function fetchData() {
    const { repoId } = route.params

    fetch('https://api.github.com/users/dy-dayo/repos')
        .then(res => res.json())
        .then(data => {
            repo.value = data.filter(dat => dat.id === Number(repoId))[0]
        })
        .catch(err => {
            let data = JSON.parse(localStorage.getItem('repos'))
            repo.value = data.filter(dat => dat.id === Number(repoId))[0]
        })
}
onMounted(()=>{
    fetchData()
})

</script>
<style>
.details {
    padding: 10px 15px;
}

div p a {
    color: inherit;
}
</style>