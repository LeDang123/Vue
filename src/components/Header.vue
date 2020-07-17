<template>
<div>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>

  <nav>
      <ul>
        <li><router-link to="/" exact>Blog</router-link></li>
        <li><router-link to="/add" exact>Add a new blog</router-link></li>
    </ul>
  </nav>
</div>
</template>

<script>
import {bus} from "../main.js";
export default {

props: {
  title: {
    type: String
  }
},

data: () => ({
    title: "Hello"
  }),

methods:{
  changeTitle: function(){
    //this.$emit=('changeTitle' , 'Widzard Vue');
    this.title = 'Widzard Vue';
    bus.$emit('changeTitle' , 'Widzard Vue');
  }
},

};
</script>

<style>
header {
  background: lightgreen;
  padding: 10px;
}
h1{
 color: purple;
 text-align: center;
}
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
  border-radius: 10px solid red;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px solid red;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background: #eee;
  color: #444;
}
</style>