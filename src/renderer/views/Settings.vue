<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="6" class="text-center">
        <h1>Gemini</h1>
        <!-- Add ref that auto updates-->
        <h6 class="text-grey">Version 0.0.1</h6>
      </b-col>
    </b-row>
    <br>
    <b-row align-h="center">
      <b-col cols="6" class="text-center">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="IP for destination:" label-for="input-1">
            <b-form-input
              id="input-1"
              required
              value="127.0.0.1"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Port for destination:" label-for="input-2">
            <b-form-input
              id="input-2"
              required
              value="8001"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'settings',
    methods: {
    onSubmit(data) {
      let parsedData = {
        ip: data.target[0].value,
        port: data.target[1].value
      }
      console.log(parsedData)
      this.$store.dispatch("setNetData", parsedData)
    }
  }
}
</script>
