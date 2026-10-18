let present;
let total_attend;
let student;


document.getElementById("presentsubmit").onclick = function () {
    present = document.getElementById("aaya").value;

    document.getElementById("urpresent").textContent =
        `You entered the number of days present in class: ${present}`;

    console.log(present);
};

document.getElementById("totalsubmit").onclick = function () {
    total_attend = document.getElementById("totalclass").value;

    document.getElementById("totalin").textContent =
        `You entered the total number of classes: ${total_attend}`;

    console.log(total_attend);
};

function calculateAttendance(attended, total) {
    return (attended / total) * 100;
}

document.getElementById("calculatemytotal").onclick = function () {
    let result = calculateAttendance(present, total_attend);
    document.getElementById("attendance").textContent =
        `Your Attendance is ${result}`
    console.log(result);

};