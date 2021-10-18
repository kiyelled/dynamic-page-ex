function setProfile(event){
    const imgInput = document.querySelector('#imgInput');

    var img = document.getElementById('img');

    var fReader = new FileReader();
    fReader.readAsDataURL(imgInput.files[0]);
    fReader.onloadend = function (event){
        img.src = event.target.result;
    }
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function save(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var img = document.getElementById('img');
    img = getBase64Image(img);

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number);
    localStorage.setItem('img', img);
    document.location.href = "profile.html";
}

function load(){
    var username = localStorage.getItem('username');
    var email = localStorage.getItem('email');
    var number = localStorage.getItem('number');
    var img = localStorage.getItem('img');

    document.getElementById("img").src = "data:image/png;base64," + img;
    document.getElementById("user-name").innerText = username;
    document.getElementById("e-mail").innerText = email;
    document.getElementById("phone-number").innerText = number;
}

function back(){
    document.location.href = "index.html";
}