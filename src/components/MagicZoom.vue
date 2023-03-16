<template>
  <div class="magic-zoom">
    <div class="magic-zoom-lens">
      <div class="magic-zoom-lens-box">
        <img class="magic-zoom-lens-image" :src="src" />
      </div>
    </div>
    <img
      class="magic-zoom-image"
      :src="src"
      ref="originalImage"
      @mousemove="mouseMoved"
      @mouseover="onMouseEnter"
      @mouseout="onMousLeave"
      @load="onImageLoaded"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

export interface Props {
  src: string;
  zoomScale?: number;
  aspectRatio?: number;
  lensSize?: number;
  modifier?: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  zoomScale: 3,
  aspectRatio: 16 / 9,
  lensSize: 100,
  width: '100%',
  height: '100%',
});

const isImageHovered = ref(false);
const isModifierPressed = ref(false);
const isLensShown = computed(() => isImageHovered.value && isModifierPressed.value);
const opacity = computed(() => (isLensShown.value ? 1 : 0));
const cursor = computed(() => (isLensShown.value ? 'zoom-in' : 'default'));
const imageWidth = ref(0);
const imageHeight = ref(0);
const originalImage = ref<HTMLImageElement>();

const lensX = ref(0);
const lensY = ref(0);

function mouseMoved(event: MouseEvent) {
  lensX.value = event.offsetX;
  lensY.value = event.offsetY;
}

function onMouseEnter() {
  isImageHovered.value = true;
}

function onMousLeave() {
  isImageHovered.value = false;
}

async function onImageLoaded() {
  if (!originalImage.value) return;
  imageHeight.value = originalImage.value.clientHeight;
  imageWidth.value = originalImage.value.clientWidth;
}

onMounted(() => {
  document.onkeydown = (event: KeyboardEvent) => (isModifierPressed.value = props.modifier === event.code);
  document.onkeyup = () => (isModifierPressed.value = false);
});

onUnmounted(() => {
  document.onkeydown = null;
  document.onkeyup = null;
});
</script>

<style scoped>
.magic-zoom {
  position: relative;
}

.magic-zoom-lens {
  transition: opacity 0.25s ease-in-out;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 1;
  isolation: isolate;
  width: v-bind(lensSize + 'px');
  height: v-bind(lensSize + 'px');
  background: black;
  transform: translate(-50%, -50%);
  opacity: v-bind(opacity);
  top: v-bind(lensY + 'px');
  left: v-bind(lensX + 'px');
  overflow: hidden;
}

.magic-zoom-image {
  width: v-bind(width);
  height: v-bind(height);
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background: black;
  cursor: v-bind(cursor);
  overflow: hidden;
}

.magic-zoom-lens-box {
  transform: translate(50%, 50%);
  width: v-bind(imageWidth + 'px');
  height: v-bind(imageHeight + 'px');
}

.magic-zoom-lens-image {
  position: absolute;
  width: v-bind(imageWidth * zoomScale + 'px');
  height: v-bind(imageHeight * zoomScale + 'px');
  aspect-ratio: 16 / 9;
  object-fit: contain;
  transform: translate(v-bind(-(lensX * zoomScale) + 'px'), v-bind(-(lensY * zoomScale) + 'px'));
}
</style>
