<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title">
          <h3>Information Corona Global</h3>
        </div>
      </div>
    </div>
    <div class="row pt-4">
      <Confirmed v-bind:worldtotal="worldtotal" />
      <Deaths v-bind:worldtotal="worldtotal" />
      <Recovered v-bind:worldtotal="worldtotal" />
    </div>
    <div class="row pt-4">
      <div class="col-md-12">
        <h3>List Country</h3>
      </div>
      <div class="col-md-12 pt-2">
        <v-card>
          <v-card-title>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="listcountry" :search="search"></v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Confirmed from './Confirmed'
import Deaths from './Deaths'
import Recovered from './Recovered'

import { mapState } from 'vuex'
export default {
  components: {
    Confirmed,
    Deaths,
    Recovered
  },
  created () {
    this.$store.dispatch('worldtotal/loadWorldtotal')
    this.$store.dispatch('listcountry/loadListcountry')
  },
  computed: {
    ...mapState(
      'worldtotal', ['worldtotal']
    ),
    ...mapState(
      'listcountry', ['listcountry']
    )
  },
  data () {
    return {
      search: '',
      headers: [
        // eslint-disable-next-line standard/object-curly-even-spacing
        { text: 'Country', value: 'Country'},
        { text: 'Confirmed', value: 'TotalConfirmed' },
        { text: 'Deaths', value: 'TotalDeaths' },
        { text: 'Recovered', value: 'TotalRecovered' },
        { text: 'New Confirmed', value: 'NewConfirmed' },
        { text: 'New Deaths', value: 'NewDeaths' },
        { text: 'New Recovered', value: 'NewRecovered' }
      ]
    }
  }
}
</script>

<style>
  @import '../../../assets/sass/Main.sass';
</style>
