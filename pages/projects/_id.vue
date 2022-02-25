<template >
    <div>
        <div class="container my-5">
  <div style="max-width: 700px; top: -80px;" class="mx-auto text-secondary">
    <!-- <div>
        <small>
          <a href="#" class="text-primary">Election</a>, <a href="#" class="text-primary">Politics</a>
      </small>
    </div> -->
    <h1 class="font-weight-bold text-dark">{{project.title}}
</h1>
    <!-- <p class="my-2" style="line-height: 2;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p> -->

    <span class="my-2" style="line-height: 2;" v-html="project.short_description"></span>
    
    <div class="my-3 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
      <small>
        
        <!-- <a href="#" class="text-primary d-block">Sium hossain</a> -->
        <NuxtLink to="/about">Sium hossain</NuxtLink>
        <br>
        <span>{{project.created}}</span>
      </small>
    </div>
      <div class="text-primary">
         
         <a href="/#" class="w-6 mx-1">
            <svg fill="currentColor" width="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
               <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
            </svg>
         </a>
         <a href="/#" class="w-6 mx-1">
            <svg fill="currentColor" width="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2;">
               <path id="Shape" d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5
                  3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2
                  -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7
                  -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5
                  -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6
                  0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9
                  3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5
                  -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2
                  -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5
                  1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5
                  -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3
                  -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1
                  0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8
                  0.4,1.5l0,4.5l2.9,0Z"></path>
            </svg>
         </a>
      </div>
    </div>
    </div>
  <img class="w-100 my-3" :src="'https://siumhossain.store'+project.thumbnail"/>
  
  <div style="max-width: 700px; top: -80px;" class="mx-auto text-secondary">
    
    <span class="my-2" v-html="project.description"></span>
    
    
    
    
  </div>
</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            project:this.$store.state.project
        }
    },
    
    async asyncData({$axios,params,store}){
        const projectObj = await $axios.$get(`projects/${params.id}/`)
        store.dispatch('project',projectObj)
        
        return { projectObj }
    },
    
    head(){
        return{
        
        title:this.project.title,
        meta:[
            {
                hid:'description',
                name:'description',
                content:this.project.short_description
            },
            
        ],
        
    

    }

    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif !important;
}


</style>