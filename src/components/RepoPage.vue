<template>
    <div>            
        <h1>Welcome to {{Repo.name}} repository</h1>
        <p>The link to repository <a :href="Repo.html_url">{{Repo.html_url}}.</a> Hopefully you will find things useful to you  </p>
        <p>It was pushed on {{Repo.pushed_at}}</p>
        <p>The size of this repo is {{Repo.size}}</p>
    </div>
</template>

<script>

export default{
    data(){
        return {
            Repo: {}
        }
    },
    mounted(){
        this.Repo = JSON.parse(localStorage.getItem('repo'))
    },
}
</script>