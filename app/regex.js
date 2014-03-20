if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var re = /\d/;
        var blah = str.match(re);
        if (blah) {
          return true;
        }
        else {
            return false;
        }
    },

    containsRepeatingLetter : function(str) {
        var re = /(\D)\1/;
        var blah = str.match(re);
        if (blah) {
          return true;
        }
        else {
            return false;
        }
    },

    endsWithVowel : function(str) {
        var re = /[aeiouAEIOU]$/;
        var blah = str.match(re);
        if (blah) {
          return true;
        }
        else {
            return false;
        }
    },

    captureThreeNumbers : function(str) {
        var re = /\d\d\d/;
        var blah = str.match(re);
        if (blah) {
          return blah[0];
        }
        else {
            return false;
        }
    },

    matchesPattern : function(str) {
        var re = /^\d{3}-\d{3}-\d{4}$/;
        var blah = str.match(re);
        if (blah) {
          return true;
        }
        else {
            return false;
        }
    },

    isUSD : function(str) {
        var re = /^\$?\d{1,3}(,?\d{3})*(\.\d{1,2})?$/;
        var blah = str.match(re);
        if (blah) {
          return true;
        }
        else {
            return false;
        }
    }
  };
});
