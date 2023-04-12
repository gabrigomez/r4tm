<template>
  <div>
    <div class="flex flex-col items-center">
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const song = ref("");

const getSong = async() => {
  const result = await axios.get('https://rage-api.onrender.com/songs');
  song.value = result.data;  
  console.log(result.data);
}

</script>