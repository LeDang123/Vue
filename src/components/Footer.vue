<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
export default {
data: () => ({
    copyright: "Copyright 2007 Vue Ninja"
  })
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p{
 color: lightgreen;
 text-align: center;
}
</style>