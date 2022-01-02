<template >
    <div>
        <div @click="back()" class="mt-3 ml-4 backbutton">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
    <span >Back</span>

        </div>
        
        
       <div class="card" style="width: 70%">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
            <h5 class="card-title">{{blogObj.title}}</h5>
            <p class="card-text">
                <small>{{blogObj.created}}</small>
            </p>
            <span v-html="blogObj.short_description"></span>
            
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            <span v-html="blogObj.description"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
       return{
           blog_title:this.$store.state.blog.title,
           blog_short_description:this.$store.state.blog.short_description
       }
   },
    
    async asyncData({$axios,params,store}){
        const blogObj = await $axios.$get(`blog/${params.id}/`)
        
        store.dispatch('blog',blogObj)
        return { blogObj }
    },
    methods: {
        back(){
            this.$router.back()
        }
    },
    head(){
        return{
        
        title:this.blog_title,
        meta:[
            {
                hid:'description',
                name:'description',
                content:this.blog_short_description
            },
            
        ],
        
    

    }

    },
}
</script>
<style .scoped>
.card{
    border:none;
    margin-top:20px;
    margin-left:15px;
}
.backbutton:hover{
    cursor: pointer;
}
</style>