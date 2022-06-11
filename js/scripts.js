function beepBoop(countTo) {
   let newArray =[];
   
   for (let i = 0; i <= countTo; i++) {
     
    if (i.toString().includes(3)) {
      newArray.push("Won't you be my neighbor?")
    } else if (i.toString().includes(2)) {
      newArray.push("Boop")
    } else if (i.toString().includes(1)) {
      newArray.push("Beep")
    } else { 
      newArray.push(i);
    }; 
   }
   return newArray;
}; 
//beepBoop(5);

$(document).ready(function () {
  $("form#numbermatch").submit(function(event){
    const number = parseInt($("input#number").val());
    event.preventDefault();
    $("#match").text(beepBoop(number));
  });
});

$(document).ready(function () {
  $("button#hide-match").click(function(event) {
    event.preventDefault();
    $("#match").text("");
    $("#number").val("");
  });
});