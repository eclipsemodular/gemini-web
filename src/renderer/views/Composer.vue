<template>
  <b-container>
    <b-row align-h="center" class="text-center">
      <b-col>
        <h1>{{params}}</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'composer',
  props:[],
  computed: {
    params() {
      return this.$route.params;
    }
  },
  components: {
  },
}
</script>
