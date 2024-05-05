<template>
	<div class="cont text-white">
	  <div class="w-full justify-center text-end absolute bottom-[50px] right-[50px] cursor-pointer" @click="toggle()">
		Go to showroom &#8594;
	  </div>
	  <div class="w-full justify-center text-start absolute top-[50px] left-[50px] cursor-pointer">
		Martina's Homepage
	  </div>
	  <div class="d-flex justify-content-center align-items-center vh-100">
		<section id="slideshow" :class="slideAnimation">
		  <div class="entire-content">
			<div class="content-slideshow" ref="slideshow">
			  <figure class="shadow" v-for="(slide, index) in images" :key="index" v-show="index === currentIndex">
				<img class="imgPolaroid" :src="`_nuxt/assets/${slide.url}`" />
			  </figure>
			</div>
		  </div>
		</section>
	  </div>
	  <button @click="prevSlide">Prev</button>
	  <button @click="nextSlide">Next</button>
	</div>
  </template>


<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { url: '1.jpg'},
        { url: '2.jpg'},
        { url: '3.jpg'},
        { url: '4.jpg'},
        { url: '5.jpeg'},
        { url: '6.jpeg'},
        { url: '7.jpeg'},
        { url: '8.jpeg'},
        { url: '9.jpeg'},
      ],
      slideAnimation: 'animate__animated animate__backInUp',
    };
  },
  methods: {
    toggle() {
      this.slideAnimation = 'animate__animated animate__backOutUp';
      this.$refs.slideshow.addEventListener('animationend', () => {
        this.navigateTo({ path: '/showroom' });
      }, { once: true });
    },
    navigateTo({ path }) {
      // Logic to navigate to another route
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.resetAnimation();
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.resetAnimation();
    },
    resetAnimation() {
      this.slideAnimation = '';
      this.$nextTick(() => {
        this.slideAnimation = 'animate__animated animate__backInUp';
      });
    },
  },
  mounted() {
    setInterval(this.nextSlide, 5000); // Auto-advance to the next slide every 5 seconds
  },
};
</script>

<style scoped>
.imgPolaroid {
  width: 95%; /* Adjusts the width to 70% of its container */
  max-width: 400px; /* Ensures images do not exceed 500px in width */
  height: auto; /* Maintains the aspect ratio of the image */
  display: block; /* Ensures the img tag behaves as a block-level element */
}

.content-slideshow {
  width: 100%; /* Ensures the slideshow takes full width of its container */
  display: flex; /* Aligns children (figure tags) in a row */
  justify-content: center; /* Centers the figures horizontally */
  align-items: center; /* Centers the figures vertically */
}

.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds subtle shadow for depth */
  transition: transform 0.3s ease-in-out; /* Smooth transform on size change */
  background-color: rgba(255, 254, 230, 0.94); /* Sets the background color to white for the Polaroid effect */
  padding: 20px 20px 60px; /* Adds specific padding: top, sides, and bottom */
  display: flex; /* Uses flex to center the image vertically within the figure */
  justify-content: center; /* Center aligns the image horizontally */
  align-items: center; /* Center aligns the image vertically */
}

figure {
  margin: 20px; /* Adds space around each image */
}
</style>
