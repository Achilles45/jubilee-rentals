<template>
  <div class="about">
     <div class="container">
       <div class="row text-center">
         <div class="col-12">
           <h1>Your one-stop shop for all your Event/Party Planning and Rental Services</h1>
           <p>Jubilee Rentals and Decor is your partner of choice in any thing relating to event/party planning and event rental services. We are the company to talk to if you ever plan to have that party of your dreams and give your guest the best of experience. We creates products and services that are highly customized to the needs of our clients. You are provided with quality and professional advice on choice of colors, linens, lightnings and others. Our rental products ranging from all kinds of tents, tables, chairs, cooking equipments to decoration essentials are also world class.</p>
         </div>
       </div>
       <div class="row mt-5 mb-5">
         <div class="col-md-6">
            <img src="../assets/celebrate3.jpg" class="img-fluid" alt="">
         </div>
          <div class="col-md-6">
          <h2 class="text-center">We plan for you, supply all the materials needed while you party</h2>
          <p>It does not matter how big or small you want your event to be, or even the location and the budget you have allocated for it. Our products and services were created and priced with you in mind.</p>
          <!-- <p>We have an offer that you can't resist. This is the best choice you can ever make to make that event an incredible one.</p> -->
          <router-link to="/contact" class="contact-btn">Get Started</router-link>
         </div>
       </div>
       <div class="row text-center categories">
         <div class="col-12">
           <h3>Events And Party Rental Categories</h3>
           <p>We have all the items you need to make your events faboulous. You don't have to look elsewhere for anything!</p>
           <div class="categories-wrapper mb-5">
             <div class="categories-contents">
               <i class="fas fa-chair categories-icons"></i>
               <h6>SEATING</h6>
               <p>You are provided with a range of options in seating. From modern plastic and fancy chairs to executive chairs, you are truly covered</p>
             </div>
             <div class="categories-contents categories-icons">
              <i class="fas fa-dice-d6"></i>
               <h6>Tables</h6>
                <p>You have got access to good number of inventory here. We have tables of various types and sizes to suit your needs.</p>
             </div>
             <div class="categories-contents">
               <i class="fas fa-clone categories-icons"></i>
               <h6>Canopies and Tents</h6>
               <p>Our inventory consist of various types and sizes of canopies and tents.</p>
             </div>
             <div class="categories-contents">
              <i class="fas fa-cubes categories-icons"></i>
               <h6>Table Wares</h6>
               <p>We have got simple but beautiful dinnerwares for you. Our materials enable you give your guest  beautiful presentaion.</p>
             </div>
             <div class="categories-contents">
               <i class="fas fa-eye categories-icons"></i>
               <h6>Decor</h6>
               <p>The company provides you with any material needed to achieve both simple and complex design concepts straight out of the box</p>
             </div>
              <div class="categories-contents">
               <i class="fas fa-toggle-on categories-icons"></i>
               <h6>Others</h6>
               <p>Whatever you think would make your party or event stand out, let us know. We will find it for you even if we don't have it.</p>
             </div>
             <div class="categories-contents">
               <i class="fas fa-fire categories-icons"></i>
               <h6>Cooking</h6>
               <p>From industrial burners, cooking pots to chafing dish and others, we provide you with all the items needed to make your cooking fast and efficient.</p>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="foot">
     <Footer />
     </div>
  </div>
</template>
<script>
import Footer from "@/components/layouts/Footer.vue";
export default {
  name:'About',
  components:{
    Footer
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/_footer.scss';
</style>
