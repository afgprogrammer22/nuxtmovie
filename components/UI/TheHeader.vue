<template>
  <header class="flex justify-between items-center py-10">
      <nuxt-link to="/" class="text-3xl font-bold border-b-2 border-green-500"><span class="text-green-500">Nuxt</span>Movies</nuxt-link>
      <div class="w-1/2">
          <input type="text" name="search" id="search" placeholder="Search for movie" class="w-full bg-white p-2 focus:outline-none">
      </div>
  </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style>

</style>
