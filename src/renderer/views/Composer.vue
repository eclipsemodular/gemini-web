<template>
  <b-container>
    <b-row align-h="center" class="text-center">
      <b-col>
        <h1>Hey. <br> Nothing To see here.</h1>
        <b-button @click="testOSC('/test','1')">CLICK ME</b-button>
        <!-- <b-input-group class="mt-3">
          <b-form-input @input="sendSlider()" id="OSCSlider" v-model="value" type="range" min="0" max="100"></b-form-input>
        </b-input-group> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import { Client, Server } from 'node-osc'

// let OSCclient = new Client('127.0.0.1',3333);
let server = new Server(3333, '0.0.0.0');

server.on('listening', () => {
  console.log('OSC Server is listening.');
})

server.on('message', (msg) => {
  console.log(`Message: ${msg}`);
  // server.close();
});

// OSCclient.send('/hello', 'world', (err) => {
//   if (err) console.error(err);
//   OSCclient.close();
// });

// @ is an alias to /src
export default {
  name: 'composer',
  props:[],
  data() {
    return {
      sliderPos: ""
    }
  },
  computed: {
    params() {
      return this.$route.params;
    },

  },
  methods: {
    testOSC(address,data) {
      let OSCclient = new Client('127.0.0.1',3333);
      OSCclient.send('/hello', 'world', (err) => {
        if (err) console.error(err);
      OSCclient.close();
    });
    },
    sendSlider() {
      console.log(sliderPos)
      let OSCclient = new Client('127.0.0.1',3333);
      OSCclient.send('/slider', this.sliderPos, (err) => {
        if (err) console.error(err);
      OSCclient.close();
    })
    }
  },
  components: {
  },
}
</script>
