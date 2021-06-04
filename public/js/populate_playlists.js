let sourceSelectField = document.getElementById('sources');
let destinationDataList = document.getElementById('destination_playlists');

var url = window.location.href;
var arr = url.split('/');
var domain = arr[0] + '//' + arr[2];

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE) {
        if (xhr.status != 200) {
            window.location.href = "/login.html";
            return;
        }
        var response = JSON.parse(this.responseText);
        for (var key in response) {
            let newOptionSelect = document.createElement('option');
            newOptionSelect.value = key;
            newOptionSelect.innerHTML = response[key];
            sourceSelectField.appendChild(newOptionSelect);
            let newOptionDataList = document.createElement('option');
            newOptionDataList.setAttribute("data", key);
            newOptionDataList.innerHTML = response[key];
            destinationDataList.appendChild(newOptionDataList);
        }
    }
}

<<<<<<< HEAD
// DEV URL
xhr.open('GET', 'http://localhost:5000/playlists');
xhr.withCredentials = true; // DEV ONLY
=======
xhr.open('GET', domain + '/api/playlists');
>>>>>>> 21dbe94b883da4c1bbd7230f7349bc929f60ab71
xhr.send()
