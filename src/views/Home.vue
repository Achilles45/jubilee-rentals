<template>
  <div class="home">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 slide-img" src="../assets/slider-1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 slide-img" src="../assets/slider-2.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 slide-img" src="../assets/slider-4.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <!--End of Carousel slides
  =======================-->
  <!--Intro section
  ======================-->
  <section class="intro container-fluid">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h2>We know some moments happens once in life. Let's help you achieve that event or party of your dreams</h2>
          <p>When we say that we are your partner of choice in making you have the event or parties of your dreams, we actually mean it. Beyound just helping you to plan your weddings, dinner parties, graduation, family reunion, birthday parties, special ceremonies, or corporate events, we provide you with a broad range of rental services from classy tables, chairs, party tents, dinnerwares, decoration essentials, mist fan, Uhaul van, to catering equipments and any other material needed to make your event a success all on budget. We strive to always provide you with the highest level of customer support. We are your one-stop shop for all your events. Try us today!</p>
        </div>
      </div>
    </div>
  </section> 
  <!--End of Intro section
  =========================-->
  <!--Why us
  ========================-->
  <section class="why__us container-fluid">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h2>Why you should consider us</h2>
        </div>
      </div>
      <div class="why__us--contents">
        <div class="why__us--cards">
          <i class="fa fa-comments why__us--icons"></i>
          <h4>24/7 Support</h4>
          <p>Our customer support service is top notch. We are always handy to give you any required assistance</p>
        </div>
        <div class="why__us--cards">
          <i class="fa fa-cubes why__us--icons"></i>
          <h4>Quality & Class</h4>
          <p>We want to give your guest the kind of comfort they can't get anywhere. All our services and rental products are of great class and quality</p>
        </div>
        <div class="why__us--cards">
          <i class="fa fa-truck why__us--icons"></i>
          <h4>Quick Logistics</h4>
          <p>Don't worry about logistics while you party. Our team has got a very good and affordable plan for all your logistics when you use any of our services</p>
        </div>
      </div>
    </div>
  </section>
  <!--End of why us section
  ===========================-->
  <!--Products section
  ==========================-->
  <Products />
  <!--End of products sectio
  =======================-->
  <!--Service section
   =====================-->
  <section class="service container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-center">We create CUSTOMIZED and UNIQUE Event and Party Experience</h1>
          <p>Jubilee Rentals and Decor pride herself as your partner of choice to help you achieve that event or party of your dreams, be it marriage ceremonies, graduation, dinner parties, family reunion, bithday parties or even corporate events. We don't just provide you with quality rental services, we make sure you have a beautiful and holistic experience working with us.</p>
          <p>We put all factors into consideration from the type and location of the venue, weather condition, lightings and others, so We can then guide you on the choice of colors, linens and other materials to use based on these conditions.</p>
          <p>You don't need to break the bank to have a wonderful party experience. All our products and services were designed with our users in mind, so we have got your back.</p>
          <router-link to="/about" class="service-btn">Learn More</router-link>
        </div>
        <div class="col-md-6 service-img">
          <img src="../assets/celebrate2.jpg" class="img-fluid" alt=""><br /><br />
           <p>Jubilee Rentals and Decor is 100% customer centric. Your satisfaction is what matters to us. We therefore work very hard to make sure your guest have the best of experience while they celebrate with you thus every body is happy. Give us a try today!</p>
        </div>
      </div>
    </div>
  </section>
  <!--End of service
  ====================-->
  <!--Planning section
  =======================-->
  <section class="planning container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/celebrate.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-md-6 mt-3">
          <h1 class="text-center">Our Event Planning and Decoration Services</h1>
          <p class="text-center">With the help of our professional event planners, you are sure of getting the best. From ideation stage through planning and execution, we work with you to make sure your event becomes the talk of the city</p>
          <p class="text-center">We are on the constant look out to make sure our concepts are relevant and up-to-date so we can give you the best. You deserves an unforgettable experience. Reach to us today!</p>
           <router-link to="/contact" class="plan-btn">Begin Planning</router-link>
        </div>
      </div>
    </div>
  </section>
  <!--End of planning section
  =========================-->
  <!--Newsletter section
  =========================-->
  <section class="newsletter container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Subscribe to our newsletter</h2>
          <p>Stay in the loop with the latest news, products and inspirational ideas for your next event. We promise you won't be spammed.</p>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <form class="d-flex justify-content-between">
            <div class="input">
              <input type="text" class="form-control" placeholder="example@gmail.com" required>
            </div>
            <div class="form-btn">
              <button type="submit" class="newsletter-btn">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!--End of Newsletter section
  ==============================-->
  <!--Footer section begins here
  =========================-->
  <Footer />
  </div>
</template>

<script>
import { setTimeout } from 'timers';
import Products from "@/components/Products.vue";
import Footer from "@/components/layouts/Footer.vue";
// @ is an alias to /src
export default {
  name: 'home',
  components:{
    Products,
    Footer
  },
  data(){
    return{
      
    }
  }
}
</script>
<style>
.slide-img{
  height: auto;
  max-height: 535px;
}
@media only screen and (max-width: 600px) {
  .slide-img{
  height: auto;
  max-height: 800px !important;
}
}
</style>
