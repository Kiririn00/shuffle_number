
## Installation

``` bash
$ npm install shuffle_range_number --save
```

## Usage

``` javascript
var shuffle = require('shuffle_range_number'),
    array;//this value will get the random number
/*
1 is minimum and 10 is maximum. This min,max will
be use for define range of shuffle numbers
*/
array = shuffle.range(1,10);

//this should get a random number of array between 1-10
console.log(array);
```

## License

[MIT license](http://opensource.org/licenses/MIT).
