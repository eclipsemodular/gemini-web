<template>
  <!-- <b-button v-b-toggle="this.data.id+'-details'" class="border-dark bg-transparent m-0 p-0 w-100"> -->
    <b-card bg-variant="dark" :id="this.data.id" class="shadow">
      <h4 class="grab">{{this.data.name}}</h4>
      <!-- <b-collapse :id="this.data.id+'-details'"> -->
        <h6 v-if="this.data.modified"><i>Last opened on {{this.data.modified.date}} at {{this.data.modified.time}}</i></h6>
        <!-- <br> -->
        <h6 v-if="this.data.note">"{{this.data.note}}"</h6>
      <!-- </b-collapse> -->
    </b-card>
  <!-- </b-button> -->
</template>

<script>
// @ is an alias to /src
export default {
  name: 'project-card',
  props: ["data"],
  data() {
    return {
      //
    }
  },
  components: {
  }
}
</script>
