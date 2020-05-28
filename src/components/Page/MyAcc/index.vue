<template>
  <v-card
    class="mx-auto"
    width="95%"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
    ></v-img>

    <v-card-title>
      Messiah Richardo Faykusa
    </v-card-title>

    <v-card-actions>
      <v-btn color="purple" dark href="https://github.com/messirichard">Github</v-btn>

      <v-btn
        color="blue" dark
        href="https://www.linkedin.com/in/messiah-faykusa/"
      >
        Linkedin
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Hello my name is Messiah Richardo Faykusa from Indonesia. Let me introduce my self. I have 3+ years experience as a Web Developer and 2+ years experience. as a Wordpress Developer. I also develop fullstack with Laravel framework, Yii framework, and CI Framework. I also too as a Sysadmin for manage hosting and Website what I develop. for my last company. My great skill as a Front End Dev. I always make a Website with Pixel Perfection. I have great HTML, CSS, JAVASCRIPT, BOOTSTRAP, LESS, SASS,Vuejs, ReactJs
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
}
</script>
