<template >
    <div>
        <!-- Just an image -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <a @click='brand()' class="navbar-brand mb-2" >Sium</a>
            
           
                <ul class="navbar-nav">
                    
                <li class="nav-item active mb-2">
                    <input type="text" v-on:keyup.enter="submit()" v-model="search"  class="form-control" placeholder="search...">
                </li>
                
                </ul>
                
            
        </nav>
        <div class="result">
            <b-tabs content-class="mt-3">
                <b-tab title="Result" active>
                    <h5 >🕵🏼‍♂ Gist {{Object.keys(blogObj).length}} results </h5>
                    <div v-for="i in blogObj" :key="i.id">
                        
                        <div class="card my-3" style="width: 65%">
                            <div class="card-body mt-3">
                                <Nuxt-link :to="{ path:`gists/${i.id}`}">
                                    <h5 class="card-title text-primary">{{i.title}}</h5>
                                 
                                </Nuxt-link>
                                <!-- <h5 class="card-title text-primary">{{i.title}}</h5> -->
                                <h6 class="card-subtitle mb-2 text-muted">{{i.created}}</h6>
                                
                                <span v-html="i.short_description"></span>
                            </div>
                        </div>
                        
                        
                        
                        
                    </div>
                    
                </b-tab>
                <b-tab title="Images"><p>I'm the second tab</p></b-tab>
                
            </b-tabs>
        </div>
        
        
    </div>
</template>
<script>
export default {
    name: 'Gists',
    data(){
        return{
            search:"gists",
            
        }
    },
    async asyncData({$axios}){
        const blogObj = await $axios.$get('blogs/')
        return { blogObj }
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
}
</script>
<style scoped>

.form-control{
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
}
</style>