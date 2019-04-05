<template>
  <div id="app">
    <input placeholder="Ask me something..." />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
$background-color: #18181e;

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background-color;
  color: white;
  padding: 60px;
}

input {
  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 60px;
  background: none;
  font-family: inherit;
}

img {
  margin-top: 30px;
  min-width: 600px;
}
</style>
