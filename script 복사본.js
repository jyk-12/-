// ==========================
// START
// ==========================

const missionStart = document.getElementById("missionStart");
const startScreen = document.getElementById("startScreen");

const missionPanel = document.getElementById("missionPanel");
const closeMission = document.getElementById("closeMission");


missionStart.addEventListener("click", () => {

    missionPanel.classList.add("show");

    startScreen.classList.add("hidden");

});


closeMission.addEventListener("click", () => {

    missionPanel.classList.remove("show");

    startScreen.classList.remove("hidden");

});




// ==========================
// MISSION 01 OPEN
// ==========================

const missionDetail = document.getElementById("missionDetail");
const detailClose = document.getElementById("detailClose");

const mission01 = document.querySelector(".mission-card.open");


mission01.addEventListener("click", () => {

    missionPanel.classList.remove("show");

    missionDetail.classList.add("show");

});


detailClose.addEventListener("click", () => {

    missionDetail.classList.remove("show");

    missionPanel.classList.add("show");

});




// ==========================
// QUIZ
// ==========================

const quizAnswer = document.getElementById("quizAnswer");
const checkQuiz = document.getElementById("checkQuiz");

const facePopup = document.getElementById("facePopup");
const closeFacePopup = document.getElementById("closeFacePopup");

const codeArea = document.getElementById("codeArea");


if(facePopup){
    facePopup.style.display = "none";
}


if(codeArea){
    codeArea.style.display = "none";
}



checkQuiz.addEventListener("click", () => {


    const answer = quizAnswer.value.trim();


    if(answer === "정답"){


        facePopup.style.display = "block";


    } else {


        alert("다시 생각해봐!");

    }

});




closeFacePopup.addEventListener("click", () => {


    facePopup.style.display = "none";


    codeArea.style.display = "block";


});




// ==========================
// MISSION CLEAR
// ==========================


const missionCode = document.getElementById("missionCode");
const checkCode = document.getElementById("checkCode");

const clearPopup = document.getElementById("clearPopup");
const closeClear = document.getElementById("closeClear");


// 미션 상태

const mission01Status =
document.getElementById("mission01Status");

const mission02Card =
document.getElementById("mission02Card");

const mission02Status =
document.getElementById("mission02Status");



if(clearPopup){

    clearPopup.style.display = "none";

}




checkCode.addEventListener("click", () => {


    const code = missionCode.value.trim();



    if(code === "1111"){


        // CLEAR 팝업

        clearPopup.style.display = "flex";



        // 미션 상태 변경

        mission01Status.innerHTML = "CLEAR ✓";


        mission02Card.classList.remove("locked");

        mission02Card.classList.add("opened");


        mission02Status.innerHTML = "OPEN";



    } else {


        alert("인증번호가 틀렸어!");

    }


});





// ==========================
// CLEAR → 목록 이동
// ==========================


closeClear.addEventListener("click", () => {


    clearPopup.style.display = "none";


    missionDetail.classList.remove("show");


    missionPanel.classList.add("show");


});