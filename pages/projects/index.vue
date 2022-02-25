<template >
    <div>
        
       

         <header>
    <div>
      <h1 @click='brand()' class="mx-2 my-2 display-5 brand">Sium</h1>
      <div class='search-box'>
        
          <input type="search" name="search" v-on:keyup.enter="submit()" v-model="search"   class="search-prompt">
        
      </div>
      
    </div>
  
  <!-- top nav-->
  <nav>
      <a href="#home">All</a>
      <a href="#news">News</a>
      
  </nav>

    <hr>
    <!-- top nav end-->
  </header>
  <!-- head end-->

  <main>
    <!-- search results -->
    <p class="results-returned">About {{Object.keys(projectObj).length}} results</p>

    <ul>
      <li v-for="i in projectObj" :key="i.id">
        
            <Nuxt-link :to="{ path:`projects/${i.id}`}">
            <h2 class="result-link">{{i.title}}</h2>
            </Nuxt-link>
            <small>{{i.created}}</small>
       
        <span v-html="i.short_description"></span>

        
        
      </li>
      
    </ul>
    <!-- end of search results -->

    <!-- search suggestions-->
    
  </main>
        
    </div>
</template>
<script>
export default {
    name: 'Projects',
    data(){
        return{
            search:"projects",
            projectObj:[]
        }
    },
    async asyncData({$axios}){
        const projectObj = await $axios.$get('projects/')
        return { projectObj }
    },
    methods:{
        brand(){
            this.$router.push('/')
        },
        submit(){
            this.$store.dispatch('search',this.search)
            this.$router.push('search/')
        }
    },
    head:{
        title:'Project',
        meta:[
            {
                hid:'description',
                name:'description',
                content:'Author:sium hossain,All of project description so far i worked on.And from this section anyone will get idea about which framework i\'m familiar with'
            },
            
        ],
        
    }
}
</script>
<style scoped>

/* .form-control{
    width:30rem;
}
a:hover{
    cursor: pointer;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 0;
    margin:0
}
.card{
    border:none;
    margin: 10px;
}
.result{
    margin-left:80px;
    margin-top:30px
}
@media only screen and (max-width: 600px) {
  .result {
    margin-left:10px;
  }
} */



body {
  background-color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin: 0px;
}

.brand {
    cursor: pointer;
}

/* remove bullet points */
ul {
  list-style-type: none;
}

/* hr styling */
hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

header div {
    padding: 15px 15px 15px;
    white-space: nowrap;
    display: flex;
    align-items: center;
}

header div img {
    margin-right: 30px;
}

main {
    margin-left: 150px;
    width: 650px;
}

nav {
    align-items: center;
    display: flex;
    margin-left: 150px;
    width: 632px;
    max-height: 40px;
}

header nav a {
    font-family: arial,sans-serif;
    font-size: 13px;
    color: #5f6368;
    text-decoration-line: none;
    padding-block-start: 15px;
}

nav a {
    padding-right: 35px;
    padding-bottom: 30px;
}

.search-box {
  width: 630px;
  min-width: 300px;
  height: 45px;
  border: 0.5px solid #fff;
  display: flex;
  padding: 0;
  justify-content: space-between;
  border-radius: 24px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.87);
}

.search-prompt {
  border: none;
  outline: none;
  float: left;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: 20px;
  line-height: 31px;
  font-size: 16px;
  font-family: arial, sans-serif;
  width: 78%;
}

.nav-right {
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: auto;
  padding-right: 0px;
}

.nav-right img {
  padding-right: 20px;
  opacity: 0.7;
}
.nav-right a {
  padding-right: 20px;
}

.nav-right a button {
    background: -webkit-linear-gradient(top,#4387fd,#4683ea);
    border: 1px solid #4285f4;
    color: #fff;
    font-weight: bold;
    line-height: 28px;
    padding: 0 12px;
    border-radius: 2px;
}




main ul {
    padding-left: 0px;
    list-style: none;
}

main li a {
    text-decoration-line: none;
    margin-bottom: 7px;
    margin-top: 0px;
}

.result-link {
    color: #1a0dab;
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 2px;
}

.green-link {
    color: #006621;
    max-width: 650px;
    display: inline-block;
    margin-bottom: 5px;
    margin-top: 0px;
}

main li p {
    margin-bottom: 40px;
    margin-top: 0px;
}

.down-arrow {
    border-color: #006621 transparent;
    border-style: solid;
    border-width: 5px 4px 0;
    display: inline-block;
    vertical-align: middle;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

#related ul {
    list-style: none;
    padding: 5px 0;
    column-width: auto;
    column-count: 2;
    padding-bottom: 20px;
    width: 450px;
}

#related li {
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
}
</style>