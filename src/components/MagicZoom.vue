<template>
  <div class="magic-zoom">
    <div class="magic-zoom-lens">
      <div class="magic-zoom-lens-box">
        <img class="magic-zoom-lens-image" :src="src" />
      </div>
    </div>
    <img
      ref="originalImage"
      class="magic-zoom-image"
      :alt="alt"
      :src="src"
      @mousemove="mouseMoved"
      @mouseover="onMouseEnter"
      @mouseout="onMousLeave"
      @load="onImageLoaded"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'

export interface Props {
  src: string
  zoomScale?: number
  aspectRatio?: number
  lensSize?: number
  modifier?: string
  width?: string | number
  height?: string | number
  alt?: string
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' | 'initial'
}

const props = withDefaults(defineProps<Props>(), {
  zoomScale: 4,
  aspectRatio: 16 / 9,
  lensSize: 200,
  width: '100%',
  height: '100%',
  fit: 'initial',
  modifier: ''
})

const emit = defineEmits<{
  (event: 'change:lens', lesnState: boolean): void
}>()
const isImageHovered = ref(false)
const isModifierPressed = ref(false)
const imageWidth = ref(0)
const imageHeight = ref(0)
const originalImage = ref()
const lensX = ref(0)
const lensY = ref(0)

const isLensShown = computed(() =>
  props.modifier ? isImageHovered.value && isModifierPressed.value : isImageHovered.value
)

watchEffect(() => {
  emit('change:lens', isLensShown.value)
})

const opacity = computed(() => (isLensShown.value ? 1 : 0))
const cursor = computed(() => (isLensShown.value ? 'zoom-in' : 'default'))

function mouseMoved(event: MouseEvent) {
  lensX.value = event.offsetX
  lensY.value = event.offsetY
}

function onMouseEnter() {
  isImageHovered.value = true
}

function onMousLeave() {
  isImageHovered.value = false
}

async function onImageLoaded() {
  if (!originalImage.value) return
  imageHeight.value = originalImage.value.clientHeight
  imageWidth.value = originalImage.value.clientWidth
}

function onKeydown(event: KeyboardEvent) {
  isModifierPressed.value = props.modifier === event.code
}

function onKeyUp() {
  isModifierPressed.value = false
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('keyup', onKeyUp)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('keyup', onKeyUp)
})
</script>

<style scoped>
.magic-zoom {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  border: 2px solid white;
}
.magic-zoom-image {
  width: v-bind(width);
  height: v-bind(height);
  aspect-ratio: v-bind(aspectRatio);
  object-fit: v-bind(fit);
  background: black;
  cursor: v-bind(cursor);
  overflow: hidden;
}
.magic-zoom-lens-box {
  transform: translate(50%, 50%);
  width: v-bind(lensSize + 'px');
  height: v-bind(lensSize + 'px');
}
.magic-zoom-lens-image {
  position: fixed;
  width: v-bind(imageWidth * zoomScale + 'px');
  height: v-bind(imageHeight * zoomScale + 'px');
  aspect-ratio: v-bind(aspectRatio);
  object-fit: v-bind(fit);
  overflow: hidden;
  display: inline;
  transform: translate(v-bind(-(lensX * zoomScale) + 'px'), v-bind(-(lensY * zoomScale) + 'px'));
}
</style>
