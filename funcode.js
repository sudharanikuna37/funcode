function showInput() {
    document.getElementById('input-container').style.display = 'block';
    document.getElementById('first-button').style.display = 'none';
}

function showSecondButton() {
    var input = document.getElementById('space').value;
    if(input.trim() !== "") {
        document.getElementById('second-button').style.display = 'block';
        document.getElementById('input-container').style.display = 'none';
    } else {
        alert("Please fill the space");
    }
}

function showMessage() {
    document.getElementById('message-container').style.display = 'block';
    document.getElementById('message').innerText = "EKKADA KALDDAM SUNDAY.....";
}