<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
    <helloworld></helloworld>
  </div>
</template>

<script>
import Ninjas from "./Ninjas.vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
  'ninjas': Ninjas,
  'helloworld': HelloWorld
  },

  data: () => ({
    title: "Ninja App"
  })
};


</script>

<style>
h1 {
  color: purple;
}
</style>