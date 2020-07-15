<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1> All Blog Articles - GET REQUEST </h1>
    <div v-for="blog in blogs" v-bind:key="blog" class="single-blog">
        <h2 v-rainbow> {{ blog.title | to-uppercase }}</h2>
        <article>{{ blog.body | snippet }}</article>
    </div>
<br/>
  </div>
</template>

<script>

export default {
 
  data: () => ({
    blogs: [],
  }),

  methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          this.blogs = data.body.slice(0,10);
      })
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