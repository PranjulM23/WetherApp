var info = document.getElementById('tym')
function ims() {
    // const city = document.getElementById('city')
    // loc = document.getElementById('inputt').value;
    // city.innerHTML = `<h2> ${loc} , IN </h2>`
    alert("hi");
}
var sub = document.getElementById('inputt')
sub.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        var sube = sub.value
        const city = document.getElementById('city')
        city.innerHTML = `<h2> ${sube} , IN </h2>`
    }
})
var days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

let currenttime = new Date();


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var perios = "AM"
const gettime = () => {
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth();
    var time = now.getHours();
    if (time > 11) {
        perios = "PM"
        if (time > 12) time -= 12;
    }
    if (time < 10) {
        time = "0" + time;
    }
    var min = now.getMinutes();
    if (min < 10) {
        min = "0" + min
    }
    return `${months[month]} ${date} | ${time}:${min} ${perios}`;
};

info.innerHTML = `${days[currenttime.getDay()]} | ${gettime()}`