// back end logic
function Pizza(size, toppings) {
 this.size = size;
 this.toppings = toppings;
};

Pizza.prototype.totalprice = function() {
  var price = 0;

  if(this.size==="small") {
    price += 3;
  }else if (this.size==="medium"){
    price += 5;
  }else{
    price += 10;
  }

  this.toppings.forEach(function(topping){
    console.log(topping);
    if(topping === "Pepperoni") {
      price += 2;
    }
    else if(topping === "Pineapple" || topping === "Olives" || topping === "Cheese"){

      price +=1;
    }
  });

  return price;
  }


// front end logic
$(document).ready(function() {


    $("#order").submit(function(event) {
      event.preventDefault();


      var size=$(this.size).val();
      var toppings = [];

      $("input:checkbox[name=topping]:checked").each(function(){

       toppings.push($(this).val());
     });
      var newpizza = new Pizza(size, toppings);
      alert("$" + newpizza.totalprice());


    });
});
