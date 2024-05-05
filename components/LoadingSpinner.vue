<template>
    <div v-if="isLoading" class="conts animate__animated animate__fadeIn">
        <div id="center" class="">
        <div id="main" :style="{ width: progressWidth + '%' }"></div>
        <div class="row">
            <div class="sq" id="sq-1"></div>
            <div class="sq" id="sq-2"></div>
            <div class="sq" id="sq-3"></div>
            <div class="sq" id="sq-4"></div>
            <div class="sq" id="sq-5"></div>
            <div class="sq" id="sq-6"></div>
            <div class="sq" id="sq-7"></div>
            <div class="sq" id="sq-8"></div>
            <div class="sq" id="sq-9"></div>
            <div class="sq" id="sq-10"></div>
            <div class="sq" id="sq-11"></div>
            <div class="sq" id="sq-12"></div>
        </div>
        </div>
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      isLoading: Boolean,
      progress: Number 
    },
    computed: {
      progressWidth() {
        return Math.min(Math.max(this.progress, 0), 100);
      }
    }
  }
  </script>
  
  <style scoped>
  .conts{
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: black;
  }
  #center {
    width: 600px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,1);
    border: 2px solid rgba(255,255,255,1);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(255,255,255,0.2);
  }

  @media (max-width: 768px) {
    #center {
      width: 300px;
      height: 20px;
    }
  }

  
  #main {
    height: 40px;
    background: #c81a1a;
    box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.5);
    transition: width 0.5s ease-out;  
  }
  
  .row {
    height: 10px;
    width: 100%; 
    display: flex;
  }
  
  .sq {
    height: 10px;
    width: 10px;
    flex: 1;  
  }
  </style>
  