<script setup lang="ts">
import MagicZoom from './components/MagicZoom.vue';
</script>

<template>
  <main>
    <div class="wrapper">
      <MagicZoom src="https://mjksz.hu/sites/default/files/media/images/szanentali.jpg" modifier="ControlLeft" />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
