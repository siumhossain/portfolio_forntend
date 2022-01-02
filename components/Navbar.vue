<template >
    <div>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div></div>
    <div class="my-2">
      <a data-toggle="tooltip" data-placement="bottom" title="sium.hossain@yahoo.com">Email</a>
      <a class="mx-2" href="https://github.com/siumhossain" target="_blank">Github</a>
     
      <svg  @click="sideCardShow()" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
      

    </div>
    
  </div>
</nav>
        <div v-if="sideCard" class="d-flex flex-row-reverse bd-highlight">
        <div class="card mx-2 my-2" style="width: 22rem;">
            
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <img src="~/assets/me.jpg" class="img-thumbnail" alt="sium hossain">
                </div>
                <div class="d-flex justify-content-center">
                    <h3 class="card-title mt-2">Sium hossain</h3>
                </div>
                <div class="d-flex justify-content-center">
                    <p>sium.hossain@yahoo.com</p>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="text-center">As-salamu alaykum. Welcome to my portfolio website. I'm currently studying at green university in computer science and engineering. Expertise in <b>Googling</b>, Django, Django-rest, FastApi, Vue, Nuxt, Flutter, Linux server administrator work, serverless deployment, Docker. <b>Very poor at css.</b> 
                        <br>
                        <a href="https://github.com/siumhossain">Github</a> | <a href="https://gist.github.com/siumhossain">Gist</a>
</p>
                </div>
                
                
                
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Navbar",
    data(){
        return{
            sideCard:false
        }
    },
   methods:{
    sideCardShow(){
      this.sideCard = !this.sideCard
    }
  } 
}
</script>
<style scoped>
  .bi-person:active{
  border:solid;
  border-radius:15px;
  
  transform: translateY(4px);
}
.bi-person:hover{
  cursor: pointer
}  
.card{
    border-radius:15px;
    position:absolute;
    z-index:1;
}
a:hover{
cursor: pointer;
}

</style>