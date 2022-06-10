function beepboop(input) {
   let newArray =[];
   let total = 0;
   for (let i = 0; i <= input; i++) {
     newArray.push(total++);
   }
   console.log(newArray);
}
beepboop('5'); 