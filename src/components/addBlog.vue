<template>
   <div id="add-blog">
      <h1>Add a new Blog Post - HTTP REQUEST</h1>
      <form v-if="!submitted">
         <label> Blog Title </label>
         <input type="text" v-model.lazy="blog.title" required />
         <label> Blog Content </label>
         <textarea type="textarea" v-model.lazy="blog.content" required></textarea><br/>
         <label>Blog categories:</label>
         <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories"/>
            <label>Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories"/>
            <label>Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories"/>
            <label>Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories"/>
         </div>
         <label>Author:</label>
         <select v-model="blog.author" class="custom-select">
            <option disabled value="" selected>Please select one </option>
            <option v-for="option in options" v-bind:key="option.value">
               {{ option.value }}
            </option>
         </select>
         <button v-on:click="post">Add Blog</button>
      </form>
      <div v-if="submitted">
         <h3>Thanks for adding your post</h3>
      </div>
      <br/>
      <div id="preview">
         <h3>Preview Blog</h3>
         <p>Blog title: {{ blog.title }}</p>
         <p>Blog content: {{ blog.content }}</p>
         <p>Blog categories:</p>
         <ul>
            <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
         </ul>
         <span>Author: {{ blog.author }}</span>
      </div>
      
   </div>
</template>
<script>
   export default {
     
     data: () => ({
       blog: {
           title: "",
           content: "",
           categories: [],
           author: "",
       },
       options: [
         { text: 'One', value: 'The Net Ninja' },
         { text: 'Two', value: 'The Angualar Avenger' },
         { text: 'Three', value: 'The Vue Candicator' }
         ],
     }),
      submitted: false,
     methods: {
        post: function(){
           this.$http.post('https://jsonplaceholder.typicode.com/posts' , {
              title: this.blog.title,
              body: this.blog.content,
              userId: 1,
           }).then(function(data){
              console.log(data);
              this.submitted = true;
           })
        }
     }
   }
</script>
<style>
   #add-blog *{
   box-sizing: border-box;
   }
   #add-blog{
   margin: 20px auto;
   max-width: 500px;
   }
   label{
   display: block;
   margin: 20px 0 10px;
   }
   input[type="text"], [type="textarea"] {
   display: block;
   width: 100%;
   padding:8px;
   border: 1px dotted red;
   }
   #preview{
   padding: 10px 20px;
   border: 1px dotted red;
   }
   h3{
   margin-top: 10px;
   }
   #checkboxes input{
   display: inline-block;
   margin-right: 10px;
   }
   #checkboxes label{
   display:inline-block
   }

   /* The container must be positioned relative: */
.custom-select {
  position: relative;
  font-family: Arial;
  border: 1px dotted red;
}
</style>