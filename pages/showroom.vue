<template>
  <div class="containerS">
    <loading-spinner :is-loading="loading" :progress="progress" />
    <div v-if="showModal" class="modal">
      <span class="close no-underline" @click="closeModal">&times;</span>
      <a class="prev no-underline" @click="prevImage">&#10094;</a>
      <img :src="images[currentImageIndex]" class="modal-content">
      <a class="next no-underline" @click="nextImage">&#10095;</a>
    </div>
    <figure v-for="(item, index) in images" :key="index" @click="openModal(index)" >
      <v-lazy-image :src="item" alt="" class="image-container" @load="onImageLoad" @error="onImageError(item)" />
    </figure>
    <audio ref="audioPlayer" preload="auto"></audio>
    <div class="fixed rounded-full bg-black z-50 w-[50px] h-[50px] right-[10px] bottom-[10px] cursor-pointer text-white flex justify-center items-center" @click="playSong()">
      <span v-if="isPlaying" class="">&#10074;&#10074;</span>
      <span v-else class="">&#9658;</span>
    </div>
    <div class="fixed rounded-full bg-black z-50 w-[50px] h-[50px] left-[10px] bottom-[10px] cursor-pointer text-white flex justify-center items-center" @click="goTo('home')">
      <span class="">&#127968;</span>
    </div>
  </div>
</template>


<style scoped>
.scroll-lock {
}
body {
  background-color: #000;
  font: 1.1em Arial, Helvetica, sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

figure a {
  color: black;
  text-decoration: none;
}

figcaption {
  grid-row: 2;
  grid-column: 1;
  background-color: rgba(255,255,255,.5);
  padding: .2em .5em;
  justify-self: start;
}

.containerS {
  column-count: 4;
  column-gap: 10px;
  padding: 10px;
}

@media (max-width: 768px) {
  .containerS {
    column-count: 2;
  }
}

@media (max-width: 300px) {
  .containerS {
    column-count: 1;
  }
}
.back{
  background: black;
}
.modal {
  position: fixed;
  z-index: 1000; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  display: block;
  max-height: 80%;
  width: fit-content;
  max-width: 80%;
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  transition: 0.6s ease;
  user-select: none;
  -webkit-user-select: none;
  background: transparent;
}

.prev {
  left: 0;
  border-radius: 0 3px 3px 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.image-container {
  max-width: 100%;
  display: block;
  transition: transform 0.3s ease, box-shadow 0.5s ease; 
  cursor: pointer;
}

.image-container:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 1); 
}

</style>


<script>
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import LoadingSpinner from '~/components/LoadingSpinner';
import VLazyImage from 'v-lazy-image';

export default {
  components: {
    LoadingSpinner,
    VLazyImage
  },
  data() {
    return {
      images: [],
      loading: false,
      loadCount: 0,
      progress: 0,
      showModal: false,
      currentImageIndex: 0,
      songs: [
        'fineline.mp3',
        'yesimchanging.mp3',
        'godisawoman.mp3'
      ],
      currentSongIndex: 0,
      isPlaying: false
    };
  },
  methods: {
    async fetchImages() {
      this.loading = true;
      const storage = getStorage();
      const imagesRef = ref(storage, 'images/');

      try {
        const listResult = await listAll(imagesRef);
        this.images = await Promise.all(
          listResult.items.map(itemRef => getDownloadURL(itemRef))
        );
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },
    onImageLoad() {
      this.incrementLoadCount();
    },
    onImageError(item) {
      console.error('Failed to load image', item);
      this.incrementLoadCount();
    },
    incrementLoadCount() {
      this.loadCount++;
      this.progress = (this.loadCount / this.images.length) * 100;
      if (this.loadCount === this.images.length) {
        setTimeout(() => {
          this.loading = false;  
        }, 500);
      }
    },
    openModal(index) {
      console.log(index)
      this.showModal = true;
      this.currentImageIndex = index;
    },
    closeModal() {
      this.showModal = false;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    async goTo(where){
      await navigateTo({ path: '/'+where })
    },
    playSong() {
        const audioPlayer = this.$refs.audioPlayer;

        if (audioPlayer) {
          if(audioPlayer.currentTime === 0){
            this.isPlaying = true;
            audioPlayer.src = "_nuxt/assets/" + this.songs[0];
            audioPlayer.play().catch(error => {
              console.error('Failed to play audio:', error);
            });

            audioPlayer.onended = () => {
              this.currentSongIndex++;
              this.playSong(this.currentSongIndex);
            };
          }else if(audioPlayer.paused){
            audioPlayer.play()
            this.isPlaying = true;
          }else{
            audioPlayer.pause()
            this.isPlaying = false;
          }
          
        } else {
          console.error('Audio player not found.');
        }
    }
  },
  created() {
    this.fetchImages();  
  },
  mounted(){
  },
}
</script>
