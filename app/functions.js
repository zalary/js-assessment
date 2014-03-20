if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
       //return fn(arr[0], arr[1], arr[2]);
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
    //  console.log(str);
        return function(arg) {
        return str + ', ' + arg;
      };
    },

    makeClosures : function(arr, fn) {
      var blah = fn(arr);
      // console.log(fn);
      // console.log(arr);

      for (var i = 0; i < arr.length; i++) {
        //console.log(fn(arr[i]));
        return fn(arr[i]);
      }

    },

    partial : function(fn, str1, str2) {
     // return partial.call(function ()fn, str1, str2,
     // console.log(fn);
     // console.log(str1 + str2);
     //  var blah = fn;
     //  var partial = fn.apply(this);
     //  console.log(partial);

      //  part2 = function part(arg) {
      // return fn(str1, str2, arg);


      //  console.log(partial());
      // return part2();



      // var partial = answers.partial(sayIt, 'Hello', 'Ellie');
      // expect(partial('!!!')).to.eql('Hello, Ellie!!!');
      // expect(sayItCalled).to.be.ok;
      var x = function(fn) {
      var args = Array.protoype.slice.call(arguments,1);

          return function() {
            var newArgs = Array.protoype.slice.apply(arguments, 1);
            var newArgs = args.concat(arguments);
            return fn.apply(null, newArgs);
          };

};
  var test = function(x, y, z) {
    console.log(x,y,z);
  };
  var newPartial = x(test, 'Hello', 'World');
  return newPartial();


    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  }
});
