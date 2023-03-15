<template>
    <div class="error">
        <h2 >{{ errorMessage }}</h2>
        <p v-show="hasError"> There was an error while loading this page. Go back to <router-link to="./" class="go-home">home</router-link> </p> 
    </div>
   
</template>
<!-- Composition API -->
<script setup>
import { ref } from 'vue';
const errorMessage = ref('')
const hasError = ref(false)
try
{
    throw "Error occurred 404";
}
catch(ex)
{
    errorMessage.value = (ex)
    hasError.value = true
}

</script>
<style>
.error h2{
    color: rgb(141, 3, 3);
}
.error{
    width: 50%;
    margin: 20vh auto 0;
    text-align: center;
}
.go-home{
    font-weight: 500;
    font-size: large;
}
</style>
