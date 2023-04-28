<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center">
      <img
        class="h-24 w-24 rounded-full mb-4" 
        src="https://i.etsystatic.com/28177244/r/il/99634b/3125970924/il_570xN.3125970924_l1vu.jpg" 
        alt=""
      />
      <p class="text-3xl font-medium text-slate-200">
        Rage Against The Machine everyday
      </p>
      <button 
        class="bg-white rounded-full mt-6 w-1/4 hover:bg-red-200 duration-300"
        @click="getSong"
      >
        Song for today
      </button>      
    </div>
    <div class="flex justify-center w-full">
      <div>
        <i class="fa-solid fa-spinner animate-spin text-5xl text-red-500 mt-6" v-if="loading && !song"></i>    
      </div>
      <MusicComponent :song="song" />
    </div>    
  </div>
</template>

<script setup>
import MusicComponent from '../components/MusicComponent.vue'
import { ref } from 'vue';
import axios from 'axios';

const song = ref(null);
const loading = ref(false);

const getSong = async() => {
  loading.value = true;
  const result = await axios.get('https://rage-api.onrender.com/songs');
  song.value = result.data[0]; 
  loading.value = false; 
}

</script>