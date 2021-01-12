<template>
  <div id="app" class="bg-dark text-light vh-100">
      <b-navbar type="dark" sticky class="bg-off-black shadow drag-area py-3">
        <router-link to="/" class="text-light no-drag">
          <b-navbar-brand class="no-drag grab mx-4">Gemini</b-navbar-brand>
        </router-link>

        <b-navbar-toggle class="no-drag" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <router-link to="/" class="text-light no-drag">Projects</router-link>
          </b-navbar-nav> -->
          <!-- <b-navbar-nav>
            <router-link to="/settings" class="text-light no-drag">Settings</router-link>
          </b-navbar-nav> -->
        </b-collapse>
        <b-button to="settings" size="sm" class="float-right no-drag" variant="transparent">
            <b-icon-gear class="p-1 border rounded-circle border-dark bg-light grab" style="width: 22px; height: 22px;" variant="dark"/>
        </b-button>
        <b-button @click="minimise()" size="sm" class="float-right no-drag" variant="transparent">
            <b-icon-dash class="border rounded-circle border-dark bg-light grab" style="width: 22px; height: 22px;" variant="dark"/>
        </b-button>
        <b-button @click="quit()" size="sm" class="float-right no-drag" variant="transparent">
            <b-icon-x class="border rounded-circle border-dark bg-light grab" style="width: 22px; height: 22px;" variant="dark"/>
        </b-button>
    </b-navbar>
    <br>
    <transition :name="transitionType" mode="out-in">
          <router-view/>
    </transition>
  </div>
</template>

<script>

let default_transition = "fade";

import { remote } from 'electron'
  export default {
    name: 'gemini',
    data() {
      return {
        transitionType: "",
        
      }
    },
    created() {
      this.$router.beforeEach((to, from, next) => {
        let _transitionType = from.meta.transitionType || default_transition;
        this.transitionType = _transitionType || default_transition;
        next();
      });
    },
    methods: {
      minimise() {
        remote.BrowserWindow.getFocusedWindow().minimize();
      },
      quit() {
        window.close()
      }
    },
    //
  }
</script>

<style>
  /* CSS */

:not(input):not(textarea),
:not(input):not(textarea)::after,
:not(input):not(textarea)::before {
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
}
input, button, textarea, :focus {
    outline: none;
}

  /* General Restyling */
.text-shadow-sm,
.text-shadow-small {
   text-shadow: 2px 2px 2px rgba(80, 80, 80, 0.1)
}
.text-shadow,
.text-shadow-md,
.text-shadow-medium {
   text-shadow: 4px 4px 4px rgba(80, 80, 80, 0.1)
}
.text-white {
  color: #fff;
}
.text-grey,
.text-gray {
  color: #6c757d;
}

.bg-off-black {
  background-color: #222 !important;
}

.bg-wilbur {
  background-color: rgb(62, 199, 62) !important;
}
.bg-light-pink {
  background-color: rgb(255,230,230) !important;
}
.bg-light-blue {
  background-color: rgb(230,230,255) !important;
}


.vh-75 {
  height: 75vh;
}
.vh-50 {
  height: 50vh;
}
.vh-25 {
  height: 25vh;
}
.vh-10 {
  height: 10vh;
}

.inverted {
	filter: invert(100%);
}

.text-center {
  text-align: center;
}

.fit-fill {
  object-fit: fill;
}
.fit-contain {
  object-fit: contain;
}
.fit-cover {
  object-fit: cover;
}
.fit-scale-down {
  object-fit: scale-down;
}
.fit-none {
  object-fit: none;
}
::placeholder {
  color: #f8f9fa !important;
  opacity: 1 !important;
}
input:active,
input:focus,
button:active,
button:focus {
  box-shadow: none !important;
}

a{
  text-decoration: none !important;
}

.drag-area {
  -webkit-app-region: drag
}
.no-drag {
  -webkit-app-region: no-drag;
  cursor: auto;
}
.grab {
  cursor: pointer;
}

/* Transition Styling */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.75s;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(-100vh);
}

.custom-enter,
.custom-enter-active {
  transition-duration: 1s;
  transition-property: opacity transform;
  transition-timing-function: ease;
  opacity: 0;
  transform: translateY(-2vh);
}
.custom-leave,
.custom-leave-active {
  transition-duration: 1s;
  transition-property: opacity transform;
  transition-timing-function: ease;
  opacity: 0;
  transform: translateY(2vh);
}

/* .slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition-duration: 2s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}

.slide-up-enter,
.slide-down-leave-active {
  transform: translate(0, 100vh);
}

.slide-up-leave-active,
.slide-down-enter {
  transform: translate(0, -100vh);
} */




/* hovers */
.hover-light {
  background-color: #343a40 !important;
  color: #f8f9fa !important;
}
.hover-light:hover {
  background-color: #f8f9fa !important;
  color: #343a40 !important;
}
.hover-invert:hover {
	filter: invert(100%);
}
</style>
