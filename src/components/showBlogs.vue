<template>
   <div v-theme:column="'wide'" id="show-blogs">
      <h1> All Blog Articles - GET REQUEST </h1>
      <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filterBlogs" v-bind:key="blog" class="single-blog">
         <router-link v-bind:to="'/blog/' + blog.id "><h2 v-rainbow> {{ blog.title | to-uppercase }}</h2></router-link>
         <article>{{ blog.body | snippet }}</article>
      </div>
      <br/>
   </div>
</template>
<script>
   import searchMinxins from "../mixins/searchMinxins";
   
   export default {
    
     data: () => ({
       blogs: [],
       search: ''
     }),
   
     methods:{
   
     },
     created(){
         this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
             console.log(data);
             this.blogs = data.body.slice(0,10);
         })
     },
   
       computed: {
   
       },
       mixins: [searchMinxins],
       filters: {
           toUppercase(value){
               return value.toUpperCase();
           }
       },
       directives: {
           'rainbow':{
              bind(el){
               el.style.color = "#" + Math.random().toString().slice(2,8);
        }
           }
       }
   }
</script>
<style>
   #show-blogs{
   max-width: 960px;
   margin: 0 auto;
   }
   .single-blog{
   padding: 20px;
   margin: 20px 0;
   box-sizing: border-box;
   background: #eee;
   }
</style>