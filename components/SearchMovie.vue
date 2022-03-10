<template>
  <div class="w-1/2" v-if="movies.length > 0">
    <input type="text" name="search" id="search" placeholder="Search for movie" class="w-full bg-white p-2 focus:outline-none ">
  </div>
</template>

<script>
export default {
    name: 'SearchMovie',
    computed: {
        movies() {
            return this.$store.state.movies
        }
    }
}
</script>

<style>

</style>
