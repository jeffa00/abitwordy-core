$(document).ready(function() {
    
    abwIndices = [];

    abwLoadIndices = function() {
        for(var i=0; i < abwWordlist.length; i++) {
            var wordLength = abwWordlist[i].length;

            if (abwIndices[wordLength]) {
               abwIndices[wordLength].push(i);
            } else {
               abwIndices[wordLength] = [];
               abwIndices[wordLength].push(i);
            } 
        }
    }

    abwWordlistExists = function() {
        if (abwWordlist) {
            return true;
        }else {
            return false;
        }
    }

    abwTestWord = function(wordToTest) {
        var idx = $.inArray(wordToTest.toLowerCase(), abwWordlist);

        if( idx != -1){
            return true;
        }else{
            return false;
        }
    }

    abwGetRandomWord = function() {
        var maxIdx = abwWordlist.length;

        var selectedIdx = Math.floor(Math.random() * (maxIdx + 1));

        return abwWordlist[selectedIdx];
    }

    abwGetRandomWordWithSpecifiedLetterCount = function(letterCount) {
        var tempList = abwIndices[letterCount];

        var maxIdx = tempList.length;

        var selectedIdx = Math.floor(Math.random() * (maxIdx + 1));

        var wordIdx = tempList[selectedIdx];

        var word = abwWordlist[wordIdx];

        return word; 
    }

    /*    abwGetRandomWord2 = function(int minLetters) {
          alert("foo");
          });
          */
    abwLoadIndices();

});
