$(document).ready(function() {

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
});
