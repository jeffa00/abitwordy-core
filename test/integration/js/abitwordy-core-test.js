$(document).ready(function () {

    if (abwWordlistExists) {
        alert('Wordlist exists!');
    } else {
        alert('Wordlist does NOT exist. :-(');
    }

    $('#test-word-button').click(function() {
        var wordToTest = $('#word-to-test').val();
        var wordExists = abwTestWord(wordToTest);

        if (wordExists){
            alert(wordToTest + ' is in the list');
        } else {
            alert(wordToTest + ' is NOT in the list');
        }
    });
});
