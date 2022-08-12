<template>
  <div class="container">
    <div class="top-container">
      <h4 class="header">Top Header Container App</h4>
    </div>
    <div class="remote-component">
      <header-element></header-element>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.remote-component {
  padding: 10px;
}
.top-container {
  background-color: #ff6600;
  width: 100%;
  height: 100px;
}
.header {
  color: #ffffff;
  padding-top: 20px;
}
</style>
