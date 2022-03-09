<template>
    <div class="bg-green-400 p-4">
      <div class="relative movie_img">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" class="object-cover">
        <p class="absolute top-0 left-0 px-4 py-2 bg-red-500 text-white font-bold">{{movie.vote_average}}</p>
        <div id="movie_details hidden hover:inline" class="w-full bg-white px-2 absolute bottom-0 left-0">
          <h4 class="font-bold">{{movie.title}}</h4>
          <small class="text-gray-500 font-regular">{{movie.release_date}}</small>
        </div>   
      </div>
    </div>
</template>

<script>

export default {
  props: ['movie'],

  
}
</script>

<style>
  
</style>
