setInterval(function () {
    let d = new Date().toLocaleTimeString();
    let x = document.getElementById('clock');
    x.innerText = d; 
}, 1000);