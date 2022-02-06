<template >
    <div>
        
        <div class="card mx-2" >
            <div class="card-body">
                <div class="mb-3">
    <input v-if="searchField === false" v-on:keyup.enter="submit()"  v-model="search" type="text" class="form-control" placeholder="search..." >
    <input v-if="searchField" v-model="search" type="text" class="form-control" placeholder="search..." disabled>
    <div class="list-group mt-3">
        
        <button @click="about_me()" type="button" class="list-group-item list-group-item-action">⏱️ about me</button>
        <button @click="projects()" type="button" class="list-group-item list-group-item-action">⏱️ projects</button>
        <button @click="gists()" type="button" class="list-group-item list-group-item-action">⏱️ gists</button>
        <button  @click="images()" type="button" class="list-group-item list-group-item-action" >⏱️ images</button>
    </div>
   
  </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchCard',
    data() {
        return{
            search:'',
            searchField:false,
        }
    },
    watch: {
        search(){
            if(this.search === 'project' || this.search ==='projects')
            {
                this.$router.push('/projects')
                this.searchField = true
                
            }
            else if(this.search === 'gists' || this.search ==='gist'){
                this.$router.push('/gists')
                this.searchField = true
            }
            else if(this.search === 'about'){
                this.$router.push('/about')
                this.searchField = true
            }
            else{
                this.searchField = false
            }
        }
    },
    methods:{
        about_me(){
            this.$router.push('/about');
        },
        projects(){
            this.$router.push('/projects')
        },
        gists(){
            this.$router.push('/gists');
            },
        images(){
            console.log('image')
            },
        submit(){
            this.$store.dispatch('search',this.search)
            this.$router.push('search/')
        }
    }
}
</script>
<style scoped>
.form-control {
    border: 0;
}
 .card{
     border-radius:20px;
 } 
 
 @media only screen and (min-width: 768px) {
  /* For desktop: */
  .card {
      width:35rem;
    }
}
 @media only screen and (max-width: 390px) {
  /* For desktop: */
  .card {
      width:23rem;
    }
}
</style>