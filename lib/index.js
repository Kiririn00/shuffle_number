//index.js

//var exports = module.exports = {};

module.exports = {

  start: function(req) {

    console.log("HTTP method:"+req.method);
    console.log("HTTP body:"+JSON.stringify(req.body));

  },


};
