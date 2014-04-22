function createTextBoxes(event, txtBoxCount) {
    var iCounter = 0,
        tempElement = null;

    for (iCounter = 0; iCounter < txtBoxCount; iCounter++) {
        tempElement = document.createElement('input');
        $(tempElement).attr('type', 'text');
        $(tempElement).attr('id', 'txtPlayerId' + (iCounter + 1));
        $(tempElement).attr('placeholder', 'player ' + (iCounter + 1));
        $('#container').append(tempElement);
    }
}

$("#btnStart").on('click', function(event) {
    createTextBoxes(event, 11);
});