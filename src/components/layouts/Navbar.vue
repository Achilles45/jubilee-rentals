<template>
    <div class="main__wrapper">
       <div class="top__nav container-fluid d-none d-lg-block">
           <div class="container">
               <div class="row text-center bg-dark">
                   <div class="col-12">
                       <img src="../../assets/jubilee-logo.jpg" class="form-control" alt="">
                   </div>
                   <!-- <div class="col-md-10">
                       <div class="row">
                           <div class="col-md-5">
                              <p> <i class="fa fa-map-marker"></i>&nbsp; 50B Ughelli Road, Ozoro, Delta State, Nigeria</p>
                           </div>
                            <div class="col-md-4">
                                <p><i class="fa fa-envelope"></i>&nbsp; jubileerentalsoz@gmail.com</p>
                           </div>
                            <div class="col-md-3">
                                 <a href="tel:08103199173"><p class="phone-contact">+234 8103 199 173</p></a>
                           </div>
                       </div>
                   </div> -->
                    <div class="col-md-2">
                      <!-- <p> <a href="https://www.facebook.com/jubileerentalsoz" class="top__nav--icons"><i class="fab fa-facebook-f"></i></a></p>
                      <p> <a href="https://www.instagram.com/jubilee_rentals_oz" class="top__nav--icons"><i class="fab fa-instagram"></i></a></p> -->
                   </div>
               </div>
           </div>
       </div>
       <!--End of top nav
       ==================-->
       <!--Navbar section
       ==================-->
      <div class="container-fluid">
          <div class="container">
             <nav class="navbar navbar-expand-lg">
                 <router-link to="/" class="navbar-brand"><img src="../../assets/jubilee-logo.jpg" class="brand-logo" alt=""></router-link>
                 <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-labelledby="true">
                     <i class="fa fa-bars navbar-toggler"></i>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarResponsive">
                     <ul class="navbar-nav ml-auto">
                         <li class="nav-item">
                             <router-link to="/" class="nav-link">Home</router-link>
                         </li>
                          <li class="nav-item">
                             <router-link to="/about" class="nav-link">About Us</router-link>
                         </li>
                          <li class="nav-item">
                             <router-link to="/services" class="nav-link">Services</router-link>
                         </li>
                          <li class="nav-item">
                             <router-link to="/contact" class="nav-link contact-link">Contact Us</router-link>
                         </li>
                     </ul>
                 </div>
             </nav>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>
<style>

</style>
