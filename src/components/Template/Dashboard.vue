<template>
  <v-app>
    <Nav />
    <v-content class="custom-paddding">
    <div class="container">
      <div class="row">
        <router-view />
      </div>
    </div>
  </v-content>

  </v-app>
</template>

<script>
import Nav from '../Layout/Nav'
export default {
  props: {
    source: String
  },
  components: {
    Nav
  }
}

</script>

<style>
  @import '../../assets/sass/Main.sass';
</style>
