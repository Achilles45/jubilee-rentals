<template>
    <div class="wrapper">
        <div class="services container-fluid">
            <div class="container">
                <div class="row mt-5 text-center service-heading">
                    <div class="col-12">
                        <h1>Jubilee Rentals and Decor provides you with world class event/party planning and Rental solutions </h1>
                        <p class="mt-4">We are the go-to company when it comes to events and party planning, decoration and rental services. With our extensive experience in the industry, you are sure of getting the best services. Jubilee Rentals and Decor truely care to give you an outstanding party experience. Give us a chance to impress you today!</p>
                        <p>From child naming ceremonies, traditional marriages, white wedding, graduation parties, family get-together, birthday parties among others, Jubilee Rentals and Decor provides you with a beautiful holistics experience. Our services are unique and our pricing is affordable.</p>
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-md-6">
                        <h3>Event Services</h3>
                        <p>We are more than capable of planning and executing any type of event. Some of our services includes but not limited to:</p>
                        <ul class="list-group">
                            <li class="list-group-item">Corporate events</li>
                            <li class="list-group-item">Birthday parties</li>
                            <li class="list-group-item">Graduations</li>
                            <li class="list-group-item">Weddings</li>
                            <li class="list-group-item">Conferences</li>
                            <li class="list-group-item">And many others...</li>
                        </ul>
                    </div>
                    <div class="col-md-6 mt-5">
                        <img src="../assets/celebrate2.jpg" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-md-6">
                        <img src="../assets/celebrate.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-6 mt-5">
                        <h3>Retal Services</h3>
                        <p>Our inventory consist of quality materials that will give your guest a mind-blowing experience. We have a variety of:</p>
                        <ul class="list-group">
                            <li class="list-group-item">Tables and Chairs</li>
                            <li class="list-group-item">Canopies/Tents</li>
                            <li class="list-group-item">Buffet and Serving</li>
                            <li class="list-group-item">General Catering equipments</li>
                            <li class="list-group-item">Decor Essentials</li>
                            <li class="list-group-item">Uhaul/Cooling van</li>
                            <li class="list-group-item">And many others...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "@/components/layouts/Footer.vue";
export default {
    name: 'Services',
    components:{
        Footer,
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
   
</style>
