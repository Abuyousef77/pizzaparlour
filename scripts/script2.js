$(document).ready(function() {
    function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    this.price = "zero";
    };

Pizza.prototype.totalprice =function(){
  if(this.size=="small") {
    this.price="three dollars"
  }else if (this.size=="medium"){
    this.price="five dollars"
  }else{
    this.price="ten dollars"
  }
};
    $("#order").submit(function(event) {
      event.preventDefault()
      var size=$(this.size).val();
      var toppings=$(this.toppings).val();
      var newpizza=new Pizza(size, toppings)
      newpizza.totalprice
        alert(newpizza.price)

    });
});
