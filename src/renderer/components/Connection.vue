<template>
  <b-col cols=12 md=6 lg=3>
    <b-card bg-variant="dark" class="shadow text-center">
      <h3>{{data.name || "default"}}</h3>
      <h5>{{data.midiAddr || "default"}}</h5>
      <h5>{{data.oscAddr || "default"}}</h5>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'connection',
  props: ['data'],
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
