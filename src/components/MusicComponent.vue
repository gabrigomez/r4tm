<template>  
  <div 
    v-if="song"
    class="flex flex-col w-2/4 justify-center border border-red-500 border-opacity-30 items-center text-white mt-4 p-2 gap-1"
  >
    <img
      class="h-36 w-36 border border-red-200" 
      :src="song.cover" 
      alt=""
    >
    <p class="text-2xl font-bold">
      {{ song.name }}
    </p>
    <p class="text-sm">
      {{ song.album }}
    </p>
    <a :href="song.link" target="blank" class="hover:text-red-500 duration-300">
      link
    </a>      
  </div>
</template>

<script setup>
defineProps({
  song: {
    type: Object,
    default: null,
  }
})

</script>
