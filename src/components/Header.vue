<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
data: () => ({
    title: "Vue Ninja"
  })
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