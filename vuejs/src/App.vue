<template>
  <div id="app">
    <input placeholder="Ask me something..." @keypress="onKeyPress" />
    <div class="col" v-if="data">
      <span>{{ data.answer }}</span>
      <img v-bind:src="data.image" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "app",
  data: () => ({
    data: null
  }),
  methods: {
    loadAnswer() {
      fetch("https://yesno.wtf/api")
        .then(res => res.json())
        .then(res => (this.data = res));
    },
    onKeyPress(event) {
      if (event.key === "Enter") this.loadAnswer();
    }
  }
});
</script>

<style lang="scss">
$background-color: #18181e;

%text {
  color: white;
  font-size: 60px;
}

.col {
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  > span {
    @extend %text;
  }
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background-color;
  padding: 60px;
}

input {
  width: 100%;
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
  @extend %text;
}

img {
  margin-top: 30px;
  min-width: 600px;
}
</style>
