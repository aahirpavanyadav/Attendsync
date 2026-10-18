console.log("Hellow");
let newsubname;
let newsubmarks;
let createsub;


document.getElementById("submit_new_subname").onclick = function () {
    newsubname = document.getElementById("create_subject_name").value;

    document.getElementById("ur_enter_newsub").textContent =
        `You entered the new name of subject: ${newsubname}`;

    console.log(newsubname);
};
document.getElementById("submit_new_submarks").onclick = function () {
    newsubmarks = document.getElementById("marks_new_sub").value;

    document.getElementById("ur_enter_newmarks").textContent =
        `You entered the new marks of new subject: ${newsubmarks}`;

    console.log(newsubmarks);
};
//  function createnew_sub_marks(newsubmarks,newsubname){
//     result= console.log(`U r Enterd Details - name of sub ${newsubname} and marks : ${newsubmarks}` )
//  }
// document.getElementById("create_newsub").oneclick =  function createnew_sub_marks