module.exports = {

  range: function(min,max){

    function arrayRange(min,max) {

      var range = [];

      for(var i=0; i<max; i++){

        range[i] = min;
        min++;
      }

      return range;

    }//end arrayRange

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


  }//end random

}//end module exports
