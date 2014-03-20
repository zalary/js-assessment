if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0; (i < arr.length); i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
     var index = arr.indexOf(item);
     while (index > -1) {
       arr.splice(index, 1);
       index = arr.indexOf(item);
     }
       return arr;
    },

    removeWithoutCopy : function(arr, item) {
     var index = arr.indexOf(item);
     while (index > -1) {
       arr.splice(index, 1);
       index = arr.indexOf(item);
     }
       return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.splice(0, 0, item);
      return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
       var join = arr1.concat(arr2);
       return join;
    },

    insert : function(arr, item, index) {
       arr.splice(index, 0, item);
       return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for(var i = 0; i < arr.length; ++i){
        if(arr[i] === item) {
        count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var dupe_list = [];
      for(var i = 0; i < arr.length; i++) {
        if((arr.lastIndexOf(arr[i]) !== i) &&
           (dupe_list.indexOf(arr[i]) === -1)) {
            dupe_list.push(arr[i]);
        }
    }
    //console.log(dupe_list);
    return dupe_list;

    },

    square : function(arr) {
      for(var i = 0; i < arr.length; ++i){
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var unique_list = [];
      var counter = 0;
      while (arr.indexOf(target, counter) > -1) {
        unique_list.push(arr.indexOf(target, counter));
        counter = arr.indexOf(target, counter) + 1;
        //counter++;
  }
   return unique_list;
      var unique_list = [];
       for(var i = 0; i < arr.length; i++) {
         if (array.lastIndexOf(arr[i]) !== i) 
          {
             unique_list.push(i);
         }
     }
     console.log(unique_list);

     return unique_list;

     }

  };
});
