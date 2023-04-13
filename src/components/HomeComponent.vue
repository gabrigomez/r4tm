<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <img
        class="h-24 w-24 rounded-full mb-4" 
        src="https://i.etsystatic.com/28177244/r/il/99634b/3125970924/il_570xN.3125970924_l1vu.jpg" 
        alt=""
      />
      <p class="text-3xl font-medium text-red-500">
        Rage Against The Machine everyday
      </p>
      <button 
        class="bg-white rounded-full mt-6 w-1/4 hover:bg-red-200 duration-300"
        @click="getSong"
      >
        Song for today
      </button>      
    </div>
    <div 
      v-if="song"
      class="flex flex-col w-2/4 justify-center border border-red-500 border-opacity-30 items-center mt-4 p-2 gap-1"
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
        Link
      </a>      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const song = ref(null);

const getSong = async() => {
  const result = await axios.get('https://rage-api.onrender.com/songs');
  song.value = result.data[0]; 
  console.log(song.value) 
}

</script>