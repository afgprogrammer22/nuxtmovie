<template>
  <div class="px-10">
    <TheHeader />
    <Movies />
  </div>
</template>

<script>
import TheHeader from '../components/UI/TheHeader.vue'
export default {
  name: 'IndexPage',
  components: {
    TheHeader,
  }
}
</script>
