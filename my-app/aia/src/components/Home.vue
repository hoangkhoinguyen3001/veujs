<template>
  <div id="home">
    <Header />
    <main>
      <div class="hero-banner">
        <img :src="require('../assets/img/banner.jpg')" alt="">
      </div>
      <ChooseProducts />
      <CountingUp />
      <Testimonial />
    </main>
    <Footer />
  </div>
</template>


<script>
import Testimonial from './Testimonial';
import CountingUp from './Counting-up';
import ChooseProducts from './Choose-product';
import Footer from './Footer.vue';
import Header from "./Header";

export default {
  path: '/',
  name: 'Home',
  props: {
    
  },
  components: {
    Testimonial,
    CountingUp,
    ChooseProducts,
    Header,
    Footer
  }
}
</script>

