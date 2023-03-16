<template>
  <header>
    <h1>D</h1>
    <nav>
      <div class="choose-mode">
        <!-- For light and darkmode -->
        <div class="to-left" v-show="darkMode===false" @click="toggleMode">L</div>
        <div class="to-right" v-show="darkMode===true" @click="toggleMode">D</div>
      </div>
      <router-link to='/' class="r-link">Home</router-link>
      <router-link to='/error' class="r-link">Error Page</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer><small>(c)</small>2023, Ojo Oladayo. Alt School Exam </footer>
</template>

<script>

export default{
  data(){
    return{
      darkMode:false
    }
  },
  methods:{
    toggleMode(){
      this.darkMode = !this.darkMode
      document.body.classList.toggle("darkMode")
     
    }
  }
}

</script>
<style>
/* Typography */
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap');
*{
  box-sizing: border-box;
}
body{
  font-family: 'Karla', sans-serif;
  margin: 0;
  background: rgba(186, 186, 186, 0.275);
  color: rgba(19, 19, 19, 0.922);
  
}

.darkMode{
    background: rgb(11, 11, 26);
    color: rgb(218, 217, 217);
}
header{
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:rgba(1, 83, 83, 0.858) ;
  padding: 10px 15px;
  color: rgb(225, 224, 224);
}
nav{
  display: flex;
  gap: 10px;
  margin-right: 10px;
  text-decoration: none;
}
.choose-mode{
  display: flex;
  width: 40px;
  border-radius:40% ;
  background: grey;

}
.choose-mode div{
  width: 20px;
  border-radius:50% ;
  background:rgba(1, 83, 83, 0.858) ;
  border: 1px solid grey;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.to-left{
  margin-right: auto;
}
.to-right{
  margin-left: auto;
}

nav .r-link{
    text-decoration: none;
    color: rgb(238, 238, 238);
    
    font-weight: 500;
}


footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 45px;
  background:rgba(1, 83, 83, 0.803) ;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(237, 237, 237);
}
</style>