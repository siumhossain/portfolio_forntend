<template>
<div>
  <Navbar />
  <div class="d-flex justify-content-center mt-2">
    <img src="~/assets/Sium.png" class="img-fluid" alt="sium hossain">
  </div>
  
  <div class="d-flex justify-content-center mt-2 ">
    <SearchCard />
  </div>
  <Footer />
</div>
  
</template>

<script>
export default {
  name: 'IndexPage',
  head:{
        title:'Sium hossain - Personal website',
        meta:[
            {
                hid:'description',
                name:'description',
                content:'Author: sium hossain, Email:sium.hossain@yahoo.com, Education qualification: The Bachelor Degree in CSE at Green University Of Bangladesh,Nationality:Bangladesh,Religion:Islam'
            },
            
        ],
        
    }
  
}
</script>
<style scoped>

</style>