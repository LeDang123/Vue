<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
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
    this.$emit=('changeTitle' , 'Widzard Vue');
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
</style>