<template>
  <div id="app">
    <TopNav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';


export default {
  components: { TopNav },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

body {
  color: white;
  background-color: $primary;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

:root {
  --lighter: #818384;
  --dark: #202225;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}
</style>
