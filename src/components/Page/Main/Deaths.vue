<template>
    <div class="col-md-4">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="blue" dark class="p-3">
                <v-card-title class="headline">
                  <h5 class="m-auto">{{worldtotal.TotalDeaths}}</h5>
                </v-card-title>
                <v-card-subtitle>Deaths</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
</template>

<script>
export default {
  props: ['worldtotal']
}
</script>
