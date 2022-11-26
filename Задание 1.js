let numberOne = +prompt ('Write Number');

 if (typeof Infinity && numberOne){
      if (numberOne % 2 == 0) {
        console.log(numberOne + " - Это число четное")
      }

      else {
        console.log(numberOne + " - Это число нечетное")
      }
    }
   else{
     console.log("Упс, кажется, вы ошиблись");
   }
