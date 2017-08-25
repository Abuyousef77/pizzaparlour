// user
$(function() {
  $("form").submit(function() {
      event.preventDefault()
      var num=$(this.answer).val();
      var currentnumber=1
      while(currentnumber<=num){
      var newentry= $("<li>"+currentnumber+"</li>")
      currentnumber++


    if(currentnumber%2==0) {
      var evenslist= $("#even")
      newentry.appendTo(evenslist);
    // alert('This is an even number');
    }else{
      var oddslist= $("#odds")
      newentry.appendTo(oddslist);
    // alert("This is an odd number");
    }
    }
  });
});
