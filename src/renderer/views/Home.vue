<template>
<div>
  <b-container>
    <b-row align-v="center" class="text-center">
      <b-col>
        <h2>MIDI - OSC Connections</h2>
      </b-col>
    </b-row>
    <preset/>
    <br>
    
  </b-container>
</div>
</template>

<script>
  import Preset from '../components/Preset.vue'
  export default {
    name: 'home',
    data() {
      return {
        //
      }
    },
    components: {
      Preset
    }
  }
</script>

<style>
</style>
