if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
     return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
     var result = [  ];
     for(var key in obj) {
      if (obj.hasOwnProperty(key)) {
     var value = obj[key];
     //console.log(result);
     result.push(key +': '+ value );
   }
 }
  return result;

    }
  };
});
