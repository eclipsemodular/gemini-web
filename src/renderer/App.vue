<template>
  <div id="app" class="bg-dark text-light vh-100">
    <b-navbar type="dark" variant="dark" class="shadow">
    <router-link to="/" class="text-light">
      <b-navbar-brand>OSC Tools</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/settings" class="text-light">Settings</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <transition name="global-transition" mode="out-in">
          <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'osc-tools'
  }
</script>

<style>
  /* CSS */

  /* General Restyling */
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


/* Transition Styling */
.global-transition-enter-active, .global-transition-leave-active {
  transition: opacity .5s;
}
.global-transition-enter, .global-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
