$(document).ready(function () {
    $('#test-word-button').click(function() {
        var wordToTest = $('#word-to-test').val();

        var idx = $.inArray(wordToTest.toLowerCase(), wordlist);

        if( idx != -1){
            alert(wordToTest + ' is in the list.');
        }else{
            alert(wordToTest + ' is NOT in the list.');
        }
    });
});
