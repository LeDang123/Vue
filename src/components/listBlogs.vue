<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1> List Blogs Title </h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filterBlogs" v-bind:key="blog" class="single-blog">
        <h2 v-rainbow> {{ blog.title | to-uppercase }}</h2>
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

  mixins: [searchMinxins]
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