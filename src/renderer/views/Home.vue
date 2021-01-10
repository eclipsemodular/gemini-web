<template>
<div>
  <b-container>
    <b-row align-h="center" class="text-center">
      <b-col class="m-4">
        <h2 class="text-shadow-sm">Hello. Let's begin.</h2>
      </b-col>
    </b-row>
    <b-row align-h="center" class="text-center">
      <!-- <b-col cols=12 md=6 class="p-2 text-center">
        <b-card bg-variant="dark" text-variant="light" class="shadow">
          <router-link to="Composer" class="text-light no-drag">
            <h3 class="grab m-2">New Project</h3>
          </router-link>
          </b-card>
      </b-col> -->
      <b-col cols=12 md="8" lg="6" class="p-2 text-center">
          <!-- <b-card bg-variant="dark" text-variant="light" class="shadow"> -->
          <!-- <b-button v-b-toggle.recent-proj-collapse class="border-dark bg-transparent m-0 p-0 w-100"> -->
            <!-- <h3 class="grab m-2">Projects</h3> -->
          <!-- </b-button> -->
          <!-- <b-collapse :id="'recent-proj-collapse'" visible> -->
            <router-link to="New" class="text-light no-drag">
              <project-card :data="this.newProject"/>
            </router-link>
            
            <div v-if="this.projects()">
              <br>
              <project-card :key="projectData.id" v-for="projectData in projects()" :data="projectData"/>
            </div>
          <!-- </b-collapse> -->
          <!-- </b-card> -->
      </b-col>
    </b-row>
    <br>
    
  </b-container>
</div>
</template>

<script>
  import ProjectCard from '../components/ProjectCard.vue'
  export default {
    name: 'home',
    data() {
      return {
        newProject: {
          id: "newProject",
          name: "New Project",
          
        }
      }
    },
    components: {
      ProjectCard
    },
    methods: {
      projects() {
        // console.log(this.$store.state.projects.projects);
        return this.$store.state.projects.projects;
      },
    }
  }
</script>

<style>
</style>
