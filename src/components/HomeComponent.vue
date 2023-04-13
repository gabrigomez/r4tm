<template>
  <div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const song = ref("");

const getSong = async() => {
  const result = await axios.get('https://rage-api.onrender.com/songs');
  song.value = result;  
  console.log(result);
}

</script>