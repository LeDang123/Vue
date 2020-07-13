<template>
  <div>
    <app-header v-bind:title="title" v-on:click="changeTitle"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-formHelper>
      
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
    </app-formHelper>
    <app-footer v-bind:title="title" v-on:click="changeTitle"></app-footer>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";
import formHelper from "./components/formatHelper.vue";

export default {
  components: {
  "app-header": Header,
  "app-footer": Footer,
  "app-ninjas": Ninjas,
  "app-formHelper": formHelper
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