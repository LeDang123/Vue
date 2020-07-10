<template>
  <div>
    <h1>List of Ninja</h1>
    <ul>
      <li v-for="ninja in ninjas" v-bind:key="ninja">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    ninjas: ["Yoshi", "Mario", "Ryu"]
  })
};
</script>
