<template >
    <div>
        <!-- Just an image -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <a @click='brand()' class="navbar-brand mb-2" >Sium</a>
            
           
                <ul class="navbar-nav">
                    
                <li class="nav-item active mb-2">
                    <input v-on:keyup.enter="submit()" type="text" v-model="search"  class="form-control" placeholder="search...">
                </li>
                
                </ul>
                
            
        </nav>
        <div class="result">
            <b-tabs content-class="mt-3">
                <b-tab title="Result" active>
                    <h5 class="caption">🕵🏼‍♂ About {{Object.keys(aboutObj).length}} results </h5>
                    <div v-for="i in aboutObj" :key="i.id">
                        
                        <div class="card my-3 mt-3" style="width: 65%">
                            <div class="card-body">
                                <h5 class="card-title text-primary">{{i.title}}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{{i.created}}</h6>
                                
                                <span v-html="i.description"></span>
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
    name: 'About',
    data(){
        return{
            search:"about",
            aboutObj:[]
        }
    },
    async asyncData({$axios}){
        const aboutObj = await $axios.$get('about/')
        return { aboutObj }
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
a:hover{
    cursor: pointer;
}
.form-control{
    width:30rem;
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