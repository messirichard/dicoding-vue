<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
            </v-col>
          </v-row>
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-group>
          <v-list-item v-else :key="item.text" link router :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <Header />
      <v-spacer></v-spacer>
      <MyACC />
    </v-app-bar>
  </div>
</template>

<script>
import Header from './Header'
import MyACC from './MyAcc'
export default {
  components: {
    Header,
    MyACC
  },
  data: () => ({
    drawer: true,
    items: [{
      icon: 'mdi-home',
      text: 'Dashboard',
      link: '/'
    },
    {
      icon: 'mdi-cellphone-link',
      text: 'My info',
      link: '/acc'
    }
    ]
  })
}

</script>
