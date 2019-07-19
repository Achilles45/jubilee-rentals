<template>
    <div class="contact">
        <div class="google-map" id="map"></div>
        <div class="contact__details">
            <div class="contact__details container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3>Contact us today!</h3>
                        </div><br /><br /><br />
                        <div class="row">
                            <div class="col-md-6">
                                <h6>Our customer care is more than ready to respond to all your queries in real time</h6><br />
                                <h6><i class="fa fa-home"></i> &nbsp; Office Address</h6>
                                <p>50B Along Ughelli Road, Ozoro, Isoko North LGA, Delta State, Nigeria.</p><br />
                                <h6><i class="fa fa-envelope"></i> &nbsp; Email Support</h6>
                                <p>jubileerentalsoz@gmail.com.</p><br />
                                <h6><i class="fa fa-phone"></i> &nbsp; Help Line</h6>
                                <p>+234 810 319 9173</p>
                                <p>+234 905 783 0925</p><br />
                                <h6><i class="fa fa-check-square"></i> &nbsp; Get Social</h6>
                                 <a href="https://www.facebook.com/jubileerentalsoz"><i class="fab fa-facebook footer-links"></i></a>
                   <a href="https://www.instagram.com/jubilee_rentals_oz"><i class="fab fa-instagram footer-links"></i></a>
                            </div>
                            <div class="col-md-6">
                               <h6>You can may also want to send us a message here</h6><br />
                               <div v-if="err" class="alert alert-danger" role="alert">
                                 {{ err }}
                               </div>
                               <div v-if="success" class="alert alert-success" role="alert">
                                   {{ success }}
                               </div>
                               <form @submit.prevent="sendMessage()" class="contact__form" autocomplete="off" data-netlify="true" name="jubilee-rentals">
                                   <div class="row">
                                       <div class="col-md-6">
                                           <div class="form-group">
                                           <label for="first-name">First Name</label>
                                           <input type="text" name="fname" class="form-control" v-model="fname">
                                            </div>
                                       </div>
                                       <div class="col-md-6">
                                            <div class="form-group">
                                           <label for="last-name">Last Name</label>
                                           <input type="text" name="lname" class="form-control" v-model="lname">
                                            </div>
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-12">
                                           <div class="form-group">
                                               <label for="email">Email Address</label>
                                                <input type="email" name="email" class="form-control" v-model="email">
                                           </div>
                                       </div>
                                   </div>
                                   <div class="row">
                                       <div class="col-12">
                                           <div class="form-group">
                                           <textarea name="message" class="form-control" placeholder="Enter your message here" v-model="message"></textarea>
                                       </div>
                                   </div>
                                   </div>
                                   <button type="submit" class="contact-btn">Send Message</button>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Footer from "@/components/layouts/Footer.vue";
import { setTimeout } from 'timers';
export default {
    name:'contact',
    components:{
        Footer
    },
    data(){
        return{
            lat:  5.542690,
            lng: 6.227680,
            fname: null,
            lname: null,
            email:null,
            message:null,
            err:null,
            success: null
        }
    },
    methods:{
        renderMap: function(){
            const map = new google.maps.Map(document.querySelector('#map'), {
                center: {lat: this.lat, lng: this.lng},
                zoom: 10,
                maxZoom: 15,
                minZoom: 3,
                streetViewControl: true
            });
            const marker = new google.maps.Marker({
                position: {lat: this.lat, lng: this.lng},
                map: map
            });
        },
        //Function to clear the alert alert message
        clearAlert: function(){
            setTimeout(()=>{
                document.querySelector('.alert').remove()
            }, 4000);
        },
        //Function to clear all fields
        clearField: function(){
            this.fname = '';
            this.lname = '';
            this.email = '';
            this.message = '';
        },
    
        //Function to validate the form
        sendMessage: function(){
           if (!this.fname || !this.lname|| !this.email || !this.message) {
               this.err = 'Please fill in all fields';
               this.clearAlert();
           }else{
               this.success  = 'Thank you for reaching out to us. We will get back to you soon!'
               this.clearAlert();
               setTimeout(this.clearField, 3000);
           }
        }
    },
    created(){
        this.renderMap();
    },
    mounted(){
        this.renderMap();
    }
}
</script>
<style>

</style>
