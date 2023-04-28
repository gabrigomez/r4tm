<template>
  <div class="flex flex-col font-rage items-center justify-center">
    <div class="flex flex-col w-full items-center">
      <img
        class="h-36 w-36 mb-4" 
        src="../assets/red_start.png" 
        alt=""
      />
      <p class="text-3xl font-medium text-slate-200">
        RAGE FOR TODAY
      </p>
      <button 
        class="bg-white rounded-full mt-6 w-42 p-2 hover:bg-red-200 duration-300"
        @click="getSong"
      >
        Today's bombtrack
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