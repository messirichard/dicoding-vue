<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title">
          <h3>Information Corona</h3>
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
        <!-- <div v-bind:Country="listcountry.Country"></div> -->
        {{listcountry}}
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
  computed:
    {...mapState(
      'worldtotal', ['worldtotal'], 'listcountry', ['listcountry']
    ),
    listcountry () {
      return this.$store.state.listcountry
    }
    },
  data () {
    return {
      search: '',
      listcountrys: [],
      headers: [
        {
          text: 'Country',
          value: 'Country'
        },
        { text: 'Confirmed', value: 'TotalConfirmed' },
        { text: 'Deaths', value: 'TotalDeaths' },
        { text: 'Recovered', value: 'TotalRecovered' }
      ]
    }
  }
}

</script>

<style>
  @import '../../../assets/sass/Main.sass';

</style>
