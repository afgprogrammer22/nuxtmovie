<template>
    <div class="">
      <div class="relative movie_img">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" class="object-cover">
        <p class="absolute top-0 left-0 px-4 py-2 bg-red-500 text-white font-bold">{{movie.vote_average}}</p>
        <div id="movie_details hidden hover:inline" class="bg-white absolute bottom-0 left-0">
          <h4>{{movie.original_title}}</h4>
          <small>{{movie.release_date}}</small>
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
