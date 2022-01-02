<template >
    <div>
        <!-- Just an image -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <a @click='brand()' class="navbar-brand mb-2">Sium</a>
            
           
                <ul class="navbar-nav">
                    
                <li class="nav-item active mb-2">
                    <input type="text" v-model="search" v-on:keyup.enter="submit()"  class="form-control" placeholder="search...">
                </li>
                
                </ul>
                
            
        </nav>
        <div class="result">
            <b-tabs content-class="mt-3">
                <b-tab title="Result" active>
                    <div v-if="not_found" class="row">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Your search <span class=" mx-2 text-danger"><i>{{$store.state.search}}</i></span>- didn't match any documents🤦🏼‍♂.</h5>
                                <b>Suggestions:</b>
                                <ul class="my-3">
                                    <li>Make sure that all words are spelled correctly.</li>
                                    <li>Try different keywords.</li>
                                    <li>Try more general keywords.</li>
                                    <li >Or you can go 
                                        <Nuxt-link to="/about">about me</Nuxt-link>
                                        <Nuxt-link to="/projects">projects</Nuxt-link>
                                        <Nuxt-link to="/gists">gists</Nuxt-link>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </div>
                    <div v-if="about">
                      <h5 class="caption">🕵🏼‍♂ About {{Object.keys(obj).length}} results </h5>
                        <div class="row">
                            <div v-for="i in obj" :key="i.id" class="card" style="width: 65%;">
                                <div class="card-body">
                                    <h5 class="card-title text-primary">{{i.title}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{{i.created}}</h6>
                                    <span v-html="i.description"></span>
                                </div>
                            </div>
                        </div> 

                    </div>
                    <div v-if="project">
                      <h5 class="caption">🕵🏼‍♂ About {{Object.keys(obj).length}} results </h5>
                        <div class="row">
                            <div v-for="i in obj" :key="i.id" class="card" style="width: 65%;">
                                <div class="card-body">
                                    <Nuxt-link :to="{ path:`/projects/${i.id}`}">
                                    <h5 class="card-title text-primary">{{i.title}}</h5>
                                 
                                    </Nuxt-link>
                                    <h6 class="card-subtitle mb-2 text-muted">{{i.created}}</h6>
                                    <span v-html="i.short_description"></span>
                                </div>
                            </div>
                        </div> 

                    </div>

                    <div v-if="blog">
                      <h5 class="caption">🕵🏼‍♂ About {{Object.keys(obj).length}} results </h5>
                        <div class="row">
                            <div v-for="i in obj" :key="i.id" class="card" style="width: 65%;">
                                <div class="card-body">
                                    <Nuxt-link :to="{ path:`/gists/${i.id}`}">
                                    <h5 class="card-title text-primary">{{i.title}}</h5>
                                 
                                    </Nuxt-link>
                                    <h6 class="card-subtitle mb-2 text-muted">{{i.created}}</h6>
                                    <span v-html="i.short_description"></span>
                                </div>
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
import axios from 'axios'

export default {
    name: 'Search',
    data(){
        return{
            search:this.$store.state.search,
            obj:[],
            about:false,
            project:false,
            blog:false,
            not_found:false,
        }
    },
    
    methods:{
        brand(){
            this.$router.push('/')
        },
        async submit(){
            this.$store.dispatch('search',this.search)
            await axios.get(`https://damp-wave-93524.herokuapp.com/api/search/${this.search}/`)
        .then(res => {
            if(res.status === 200){
                console.log('201')
                this.about = true
                this.project = false
                this.blog = false
                this.not_found = false
                this.obj = res.data
            }
            else if(res.status === 201){
                console.log('201')
                this.about = false
                this.project = true
                this.blog = false
                this.not_found = false
                this.obj = res.data
            }
            else if(res.status === 202){
                console.log('202')
                this.about = false
                this.project = false
                this.blog = true
                this.not_found = false
                this.obj = res.data
            }
            
        })
        .catch(e => {
            console.log(e.response.status)
            if(e.response.status === 404){
                // console.log('yes404')
                this.not_found = true
                this.blog =false
                this.project = false
                this.about = false
            }
            
        })
        }
    },
    async created(){
        
        this.submit()
        
        
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