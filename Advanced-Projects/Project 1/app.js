let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
    let dateTimeData = new Date(); // Moved inside
    hrs.innerHTML = String(dateTimeData.getHours()).padStart(2, '0');
    min.innerHTML = String(dateTimeData.getMinutes()).padStart(2, '0');
    sec.innerHTML = String(dateTimeData.getSeconds()).padStart(2, '0');
}, 1000);
