<template>
  <div class="flex w-1/2" v-if="movies.length > 0">
        <input @keyup.prevent="searchMovies" type="text" name="search" id="search" placeholder="Search for movie" class="w-full bg-white p-2 focus:outline-none rounded-lg shadow-md">
  </div>
</template>

<script>
export default {
    name: 'SearchMovie',
    computed: {
        movies() {
            return this.$store.state.movies
        }
    },

    methods: {
        searchMovie() {
            
        }
    }
}
</script>

<style>

</style>
