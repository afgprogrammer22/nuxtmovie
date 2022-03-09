<template>
  <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        <Movie v-for="(movie, index) in movies" :key="index" class="" :movie=movie />
        <!-- :movie=movie  is our props which passed to Movie component--> 
      </div>
  </div>
</template>

<script>
export default {
    computed: {
    movies() {
      return this.$store.state.movies;
    }
  },

  mounted() {
    this.$store.dispatch('getAllMovies');
  }
    
}
</script>

<style>

</style>
