<template>
    <section class="products container-fluid">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h2>Our Rental Products</h2>
          <p>Trust us. We've got more than what you need to make your events successfull</p>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-12">
          <ul>
            <li><a href="#" class="first-link" @click.prevent="serving()">Buffet & Serving</a></li>
            <li><a href="#" class="second-link" @click.prevent="seats()">Chairs & Tables</a></li>
            <li><a href="#" class="third-link" @click.prevent="canopies()">Tent & Others</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="loading text-center">
        <img src="../assets/loader.gif" class="loading" alt="">
      </div>
      <div id="serving">
      <div class="row text-center">
        <div class="col-md-3 product-cards text-center">
          <img src="../assets/dish1.jpg" class="img-fluid cafing" alt="">
          <h6>8qt Stainless Chafing Dish</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/dish5.jpg" class="img-fluid cups" alt="">
          <h6>All kinds of drinking wares</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/spoons.jpg" class="img-fluid spoons" alt="">
          <h6>Set of stainless steel cutleries</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/dish7.jpg" class="img-fluid pots" alt="">
          <h6>Sets of Cooking Pots</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/plates.png" class="img-fluid plates" alt="">
          <h6>Disposable plates</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/dish9.jpg" class="img-fluid cafing" alt="">
          <h6>Cafing dish wares</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/plates2.jpg" class="img-fluid donut" alt="">
          <h6>Tempered glass plates</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/stove.jpg" class="img-fluid burner" alt="">
          <h6>Industrial Burners</h6>
        </div>
      </div>
      </div>
      <div id="settings">
      <div class="row text-center">
        <div class="col-md-3 product-cards">
          <img src="../assets/chair.jpg" class="img-fluid chair1" alt="">
          <h6>Chiavari Chairs</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/black chair.jpg" class="img-fluid chair1" alt="">
          <h6>Dior Black Chair</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/table4.jpg" class="img-fluid table1" alt="">
          <h6>Plastic Table -50"<br />Rectangle(Seats 3-6)</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/chair2.jpg" class="img-fluid chair1" alt="">
          <h6>White Padded Chair</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/chair6.jpg" class="img-fluid chair6" alt="">
          <h6>kings Plastic Chairs</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/table2.jpg" class="img-fluid chair1" alt="">
          <h6>Banquet Rectangular Table</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/chair7.jpg" class="img-fluid chair7" alt="">
          <h6>All Kind of Plastic Chairs</h6>
        </div>
        <div class="col-md-3 product-cards">
          <img src="../assets/chair5.jpg" class="img-fluid chair1" alt="">
          <h6>Clear Chiavari Chair</h6>
        </div>
      </div>
      </div>
      <div id="tents">
        <div class="row text-center">
          <div class="col-md-3 product-cards">
            <img src="../assets/control.gif" class="img-fluid control" alt="">
            <h6>Crowd Control Units</h6>
          </div>
          <div class="col-md-3 product-cards">
            <img src="../assets/fan.jpg" class="img-fluid fan" alt="">
            <h6>Mist Fans</h6>
          </div>
          <div class="col-md-3 product-cards">
            <img src="../assets/tent3.jpg" class="img-fluid tent3" alt="">
            <h6>20ft x 20ft Array Tent</h6>
          </div>
          <div class="col-md-3 product-cards">
            <img src="../assets/flower.jpg" class="img-fluid tent3" alt="">
            <h6>Table Flowers and Wares</h6>
          </div>
          <div class="col-md-3 product-cards">
            <img src="../assets/beads.jpg" class="img-fluid tent3" alt="">
            <h6>Adrable Beads</h6>
          </div>
           <div class="col-md-3 product-cards">
            <img src="../assets/tent4.jpg" class="img-fluid tent3" alt="">
            <h6>20ft x 20ft Trasnparent Tent</h6>
          </div>
           <div class="col-md-3 product-cards">
            <img src="../assets/tent5.jpg" class="img-fluid tent5" alt="">
            <h6>Black & White Stripped Canopy</h6>
          </div>
           <div class="col-md-3 product-cards">
            <img src="../assets/table3.jpg" class="img-fluid tent3" alt="">
            <h6>Silver Bar Table</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'Products',
    data(){
        return{

        }
    },
    methods: {
    //Function to show the loader
    showLoader: function(){
      document.querySelector('.loading').style.display ="block";
    },
    //Function to remove the loader
    removeLoader: function(){
       document.querySelector('.loading').style.display ="none";
    },
    //Function to show catering items
    serving: function(){
      document.querySelector('#serving').style.display = "block";
       document.querySelector('#settings').style.display = "none";
       document.querySelector('#tents').style.display = "none";
       document.querySelector('.first-link').style.color = "rgb(235, 200, 75)";
      document.querySelector('.first-link').style.fontWeight = "bold";
      document.querySelector('.second-link').style.color = "";
      document.querySelector('.second-link').style.fontWeight = "";
      document.querySelector('.third-link').style.fontWeight = "";
        document.querySelector('.third-link').style.color = "";
    },
    //Function to show the chairs
    chairs: function(){
           document.querySelector('#serving').style.display = "none";
           document.querySelector('#settings').style.display = "block";
            document.querySelector('.second-link').style.color = "rgb(235, 200, 75)";
            document.querySelector('.second-link').style.fontWeight = "bold";
            document.querySelector('.first-link').style.color = "";
            document.querySelector('.first-link').style.fontWeight = "";
             document.querySelector('.third-link').style.fontWeight = "";
            document.querySelector('.third-link').style.color = "";
    },
    //Function seat
    seats: function(){
          this.showLoader();
          document.querySelector('#serving').style.display = "none";
          document.querySelector('#settings').style.display = "none";
          document.querySelector('#tents').style.display = "none";
          setTimeout(this.removeLoader, 1000);
          setTimeout(this.chairs, 1000);
    },
    tents: function(){
      document.querySelector('#tents').style.display = "block"
      document.querySelector('.first-link').style.fontWeight = "";
      document.querySelector('.first-link').style.color = "";
       document.querySelector('.second-link').style.fontWeight = "";
        document.querySelector('.second-link').style.color = "";
         document.querySelector('.third-link').style.fontWeight = "bold";
        document.querySelector('.third-link').style.color = "rgb(235, 200, 75)";
    },
    //Function to show canopies and others
    canopies: function(){
        document.querySelector('#tents').style.display = "none";
        document.querySelector('#serving').style.display = "none";
        document.querySelector('#settings').style.display = "none";
        this.showLoader();
        setTimeout(this.removeLoader, 1000);
        setTimeout(this.tents, 1000);
    }
  },
   mounted(){
    this.showLoader();
    document.querySelector('#serving').style.display = "none";
    document.querySelector('#settings').style.display = "none";
     document.querySelector('#tents').style.display = "none";
    setTimeout(this.removeLoader, 3000);
    setTimeout(this.serving, 3000);
  }
}
</script>
<style>

</style>
