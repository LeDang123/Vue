<template>
  <div>
    <app-header v-bind:title="title" v-on:click="changeTitle"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <hr/>
    <!--<app-formHelper>
      
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <input type="password" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </app-formHelper>-->
    <!--<app-blog></app-blog>
    <hr/>
    <show-blogs></show-blogs>
    <hr/>-->
    
    <router-view></router-view>
    <br/>
    <!--<list-blogs></list-blogs>-->
    <app-footer v-bind:title="title" v-on:click="changeTitle"></app-footer>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";
//import formHelper from "./components/formatHelper.vue";
//import addBlog from "./components/addBlog.vue";
//import showBlogs from "./components/showBlogs.vue";
//import listBlogs from "./components/listBlogs.vue"

export default {
  components: {
  "app-header": Header,
  "app-footer": Footer,
  "app-ninjas": Ninjas,
  //"app-formHelper": formHelper,
  //"app-blog": addBlog,
  //"show-blogs": showBlogs,
  //"list-blogs": listBlogs,
  },

  data: () => ({
    ninjas: [
      {name:'Ryu', speciality:'Vue Components', show:false},
      {name:'Crystal', speciality:'HTML Wizardry', show:false},
      {name:'Hitoshi', speciality:'Click Events', show:false},
      {name:'Tango', speciality:'Conditionals', show:false},
      {name:'Kami', speciality:'Webpack', show:false},
      {name:'Yoshi', speciality:'Data Diggin', show:false}
      ], 
      title: "Vue Ninjas",
  }),

  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>
h1 {
  color: purple;
}
</style>