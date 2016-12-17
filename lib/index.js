module.exports = {

  range: function(max,min){

    function arrayRange(min,max) {

      var range = [];

      for(var i=0; i<max; i++){

        range[i] = min;
        min++;
      }

      //console.log("range of array: ",range);
      return range;

    }//end arrayRange

    function randomNumbers(min,max) {

      var array = arrayRange(min,max);

      var current_index = array.length,
          temporary_value,
          random_index;

      while (0 != current_index){

        random_index = Math.floor(Math.random() * current_index);
        current_index--;

        temporary_value = array[current_index];
        array[current_index] = array[random_index];
        array[random_index] = temporary_value;
      }

      return array;

    }//end randomNumbers

  }//end random

}//end module exports
