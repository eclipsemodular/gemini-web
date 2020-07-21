<template>
  <!-- A Preset is a group of Connections -->
  <div>
    <b-row class='preset' align-h="center">
      <b-col>
        <b-card bg-variant="dark" class="shadow text-center">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="group-1" label="MIDI trigger">
              <b-form-select id="input-1" v-model="typeSelect" :options="['Note', 'CC']" value="Note"/>
              <b-form-input id="input-2" type="number" min="0" max="127" v-if="typeSelect == 'CC'"/>
              <b-form-select id="input-3" :options='noteNames' v-if="typeSelect == 'Note'"/>
              <b-form-input id="input-4" type="number" min="-1" max="8" v-if="typeSelect == 'Note'"/>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <Connection :key="connection.key" v-for="connection in connections" :data="connection"/>
    </b-row>
  </div>
</template>

<script>
import Connection from './Connection.vue'
// @ is an alias to /src
export default {
  name: 'preset',
  data() {
    return {
      typeSelect: "",
      noteNames: ['C','C#','D','D#','E','F','F#','G',"G#",'A','A#','B']
    }
  },
  components: {
    Connection
  },
   methods: {
    onSubmit(event) {
      //
    },
    onReset(event) {
      //
    },
  },
  computed: {
    connections() {
      let path = this.$store.state.FileIO.mapData.connections
      console.log(path)
      return path
    }
  }
}
</script>
