<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>

// IMPORT COMPONENTS

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">

// IMPORT ICONS, MAIN CSS & VARIABLES

@import '~@fortawesome/fontawesome-free';
@import "style/generals.scss";
@import "style/vars.scss";

</style>
