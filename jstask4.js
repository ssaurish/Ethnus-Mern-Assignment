document.body.innerHTML = "";  

let dateButton = document.createElement("button");
dateButton.innerText = "show date";
dateButton.onclick = function() {
    let now = new Date();
    let formattedDate = `${now.getDate()}/${now.toLocaleString('default', { month: 'long' })}/${now.getFullYear()}`;
    dateResult.innerText = formattedDate;
};

let dateResult = document.createElement("p");

let timeButton = document.createElement("button");
timeButton.innerText = "show Time";
timeButton.onclick = function() {
    timeResult.innerText = new Date().toString();
};

let timeResult = document.createElement("p");

document.body.appendChild(dateButton);
document.body.appendChild(dateResult);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(timeButton);
document.body.appendChild(timeResult);

