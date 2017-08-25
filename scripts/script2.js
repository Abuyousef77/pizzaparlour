$(document).ready(function() {
    function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
    };

Pizza.prototype.totalprice = function() {
  // var totalprice= 0 ;
  if(this.size==="small") {
    return 3
  }else if (this.size==="medium"){
    return 5
  }else{
    return 10
  }
};
    $("#order").submit(function(event) {
      event.preventDefault();


      var size=$(this.size).val();
      console.log(size);
      var toppings=$(this.toppings).val();
      console.log(toppings);
      var newpizza = new Pizza(size, toppings);
      console.log(newpizza);
      newpizza.totalprice;
      alert(newpizza.totalprice());
      // var newpizza={
      //   size: size,
      //   toppings: toppings,
      //   totalprice: 0
      // }
      // var newpizza=Pizza(size, toppings);
      // // var newpizza=new Pizza(size, toppings);
      // console.log(newpizza);
      // newpizza.totalprice
      //   alert(newpizza.totalprice);

    });
});
