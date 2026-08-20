/* ==========================
   SCRIPT.JS PART 1/3
   START + MISSION PANEL
   + MISSION 01
========================== */


// ==========================
// START
// ==========================

const missionStart = document.getElementById("missionStart");
const startScreen = document.getElementById("startScreen");
const missionPanel = document.getElementById("missionPanel");
const closeMission = document.getElementById("closeMission");


if (missionStart) {

    missionStart.addEventListener("click", () => {

        missionPanel.classList.add("show");
        startScreen.classList.add("hidden");

    });

}


if (closeMission) {

    closeMission.addEventListener("click", () => {

        missionPanel.classList.remove("show");
        startScreen.classList.remove("hidden");

    });

}



// ==========================
// MISSION 01 OPEN
// ==========================

const mission01Card =
document.querySelector(".mission-card.open");

const missionDetail =
document.getElementById("missionDetail");

const detailClose =
document.getElementById("detailClose");


if(mission01Card){

    mission01Card.addEventListener("click",()=>{

        missionPanel.classList.remove("show");

        missionDetail.classList.add("show");

    });

}


if(detailClose){

    detailClose.addEventListener("click",()=>{

        missionDetail.classList.remove("show");

        missionPanel.classList.add("show");

    });

}




// ==========================
// MISSION 01 QUIZ
// ==========================


const quizAnswer =
document.getElementById("quizAnswer");


const checkQuiz =
document.getElementById("checkQuiz");


const facePopup =
document.getElementById("facePopup");


const closeFacePopup =
document.getElementById("closeFacePopup");


const codeArea =
document.getElementById("codeArea");



if(facePopup){

    facePopup.style.display="none";

}


if(codeArea){

    codeArea.style.display="none";

}



if(checkQuiz){

    checkQuiz.addEventListener("click",()=>{


        const answer =
        quizAnswer.value.trim();



        if( answer==="강주연" ||
    answer==="진다현" ||
    answer==="배수현" ||
    answer==="홍윤진"
){

            facePopup.style.display="block";


        }else{


            alert("다시 입력해주세요");

        }



    });

}



if(closeFacePopup){

    closeFacePopup.addEventListener("click",()=>{


        facePopup.style.display="none";


        codeArea.style.display="block";


    });

}




// ==========================
// MISSION 01 CLEAR
// ==========================


const missionCode =
document.getElementById("missionCode");


const checkCode =
document.getElementById("checkCode");


const clearPopup =
document.getElementById("clearPopup");


const closeClear =
document.getElementById("closeClear");


const mission01Status =
document.getElementById("mission01Status");



const mission02Card =
document.getElementById("mission02Card");


const mission02Status =
document.getElementById("mission02Status");


const mission02Timer =
document.getElementById("mission02Timer");



if(clearPopup){

    clearPopup.style.display="none";

}



const mission02OpenTime =
new Date();


mission02OpenTime.setHours(0);
mission02OpenTime.setMinutes(0);
mission02OpenTime.setSeconds(0);



if(checkCode){

checkCode.addEventListener("click",()=>{


    const code =
    missionCode.value.trim();



    if(code==="0905"){


        clearPopup.style.display="flex";


        mission01Status.innerHTML=
        "CLEAR ✓";



        startMission02Timer();



    }else{


        alert("인증번호가 틀렸습니다!");

    }



});


}



if(closeClear){

closeClear.addEventListener("click",()=>{


    clearPopup.style.display="none";


    missionDetail.classList.remove("show");


    missionPanel.classList.add("show");



});

}




// ==========================
// MISSION 02 TIMER
// ==========================


function startMission02Timer(){


    if(!mission02Timer){
        return;
    }



    const timer =
    setInterval(()=>{


        const now =
        new Date();


        const distance =
        mission02OpenTime - now;



        if(distance <=0){


            clearInterval(timer);


            mission02Status.innerHTML=
            "OPEN";


            mission02Timer.style.display="none";


            mission02Card.classList.remove("locked");


            mission02Card.classList.add("opened");


            return;

        }



        const min =
        Math.floor(distance /1000/60);


        const sec =
        Math.floor((distance/1000)%60);



        mission02Timer.innerHTML =
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;



    },1000);


}

/* ==========================
   SCRIPT.JS PART 2/3
   MISSION 02
   + MISSION 03 TIMER
========================== */


// ==========================
// MISSION 02 OPEN
// ==========================

const mission02Detail =
document.getElementById("mission02Detail");

const mission02Close =
document.getElementById("mission02Close");


if(mission02Card){

    mission02Card.addEventListener("click",()=>{


        if(mission02Card.classList.contains("locked")){

            return;

        }


        missionPanel.classList.remove("show");


        mission02Detail.classList.add("show");


    });

}



if(mission02Close){

    mission02Close.addEventListener("click",()=>{


        mission02Detail.classList.remove("show");


        missionPanel.classList.add("show");


    });

}



// ==========================
// MISSION 02 QUIZ
// ==========================


const mission02QuizAnswer =
document.getElementById("mission02QuizAnswer");


const checkMission02Quiz =
document.getElementById("checkMission02Quiz");


const mission02FacePopup =
document.getElementById("mission02FacePopup");


const closeMission02FacePopup =
document.getElementById("closeMission02FacePopup");


const mission02CodeArea =
document.getElementById("mission02CodeArea");



if(mission02FacePopup){

    mission02FacePopup.style.display="none";

}


if(mission02CodeArea){

    mission02CodeArea.style.display="none";

}



if(checkMission02Quiz){

checkMission02Quiz.addEventListener("click",()=>{


    const answer =
    mission02QuizAnswer.value.trim();



    if(answer==="정답"){


        mission02FacePopup.style.display="block";


    }else{


        alert("땡!");

    }



});


}



if(closeMission02FacePopup){

closeMission02FacePopup.addEventListener("click",()=>{


    mission02FacePopup.style.display="none";


    mission02CodeArea.style.display="block";



});


}





// ==========================
// MISSION 02 CLEAR
// ==========================


const mission02Code =
document.getElementById("mission02Code");


const checkMission02Code =
document.getElementById("checkMission02Code");


const mission02ClearPopup =
document.getElementById("mission02ClearPopup");


const closeMission02Clear =
document.getElementById("closeMission02Clear");



const mission03Card =
document.getElementById("mission03Card");


const mission03Status =
document.getElementById("mission03Status");


let mission03OpenTime =
new Date();


mission03OpenTime.setHours(0);
mission03OpenTime.setMinutes(10);
mission03OpenTime.setSeconds(0);



if(mission02ClearPopup){

    mission02ClearPopup.style.display="none";

}



if(checkMission02Code){

checkMission02Code.addEventListener("click",()=>{


    const code =
    mission02Code.value.trim();



    if(code==="2222"){


        mission02ClearPopup.style.display="flex";


        mission02Status.innerHTML="CLEAR ✓";



        startMission03Timer();



    }else{


        alert("인증번호가 틀렸어!");

    }



});

}



if(closeMission02Clear){

closeMission02Clear.addEventListener("click",()=>{


    mission02ClearPopup.style.display="none";


    mission02Detail.classList.remove("show");


    missionPanel.classList.add("show");



});

}







// ==========================
// MISSION 03 TIMER
// ==========================


function startMission03Timer(){


    const timerText =
    document.getElementById("mission03Timer");



    if(!timerText){

        return;

    }



    const timer =
    setInterval(()=>{


        const now =
        new Date();


        const distance =
        mission03OpenTime - now;



        if(distance<=0){


            clearInterval(timer);



            mission03Status.innerHTML =
            "OPEN";



            timerText.style.display="none";



            mission03Card.classList.remove("locked");


            mission03Card.classList.add("opened");



            return;

        }



        const min =
        Math.floor(distance/1000/60);


        const sec =
        Math.floor((distance/1000)%60);



        timerText.innerHTML =
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;



    },1000);


}




// ==========================
// MISSION 03 OPEN
// ==========================

const mission03Detail =
document.getElementById("mission03Detail");

const mission03Close =
document.getElementById("mission03Close");

const rotateNotice =
document.getElementById("rotateNotice");


// 숨은그림 열기
function openMission03(){

    missionPanel.classList.remove("show");

    mission03Detail.classList.add("show");

}


// 미션3 클릭
if(mission03Card){

mission03Card.addEventListener("click",()=>{

    if(mission03Card.classList.contains("locked")){

        return;

    }

    // 📱 세로
    if(window.innerHeight > window.innerWidth){

        rotateNotice.style.display="flex";

    }

    // 💻 가로
    else{penMission03();

    }

});

}


// 화면 회전 감지
window.addEventListener("resize",()=>{

    if(!rotateNotice){

        return;

    }

    // 안내창이 떠있을 때 가로로 돌리면
    if(

        rotateNotice.style.display==="flex" &&

        window.innerWidth > window.innerHeight

    ){

        rotateNotice.style.display="none";

        openMission03();

    }

    // 다시 세로로 돌리면
    if(
        mission03Detail.classList.contains("show") &&
        window.innerHeight > window.innerWidth
    ){

        mission03Detail.classList.remove("show");
        rotateNotice.style.display="flex";

    }

});




// 미션창 닫기
if(mission03Close){

mission03Close.addEventListener("click",()=>{

    mission03Detail.classList.remove("show");

    missionPanel.classList.add("show");

});

}

/* ==========================
   SCRIPT.JS PART 3/3
   MISSION 03 HIDDEN GAME
========================== */


// ==========================
// MISSION 03 HIDDEN ITEMS
// ==========================


const hiddenItems =
document.querySelectorAll(".hidden-item");


const foundCount =
document.getElementById("foundCount");


const mission03FacePopup =
document.getElementById("mission03FacePopup");


const closeMission03FacePopup =
document.getElementById("closeMission03FacePopup");


const mission03CodeArea =
document.getElementById("mission03CodeArea");


const mission03Code =
document.getElementById("mission03Code");


const checkMission03Code =
document.getElementById("checkMission03Code");


const mission03ClearPopup =
document.getElementById("mission03ClearPopup");


const closeMission03Clear =
document.getElementById("closeMission03Clear");



let foundItemsCount = 0;



if(mission03FacePopup){

    mission03FacePopup.style.display="none";

}


if(mission03CodeArea){

    mission03CodeArea.style.display="none";

}


if(mission03ClearPopup){

    mission03ClearPopup.style.display="none";

}




// ==========================
// HIDDEN CLICK
// ==========================


hiddenItems.forEach(item=>{


    item.addEventListener("click",()=>{


        if(item.classList.contains("found")){

            return;

        }


        item.classList.add("found");
        item.stlye.pointerEvents="none";



        foundItemsCount++;



        if(foundCount){

            foundCount.innerHTML =
            '${foundItemsCount} /5';

        }



        if(foundItemsCount===5){


            setTimeout(()=>{


                mission03FacePopup.style.display="block";


            },500);



        }



    });


});





// ==========================
// FACE POPUP → CODE
// ==========================


if(closeMission03FacePopup){

closeMission03FacePopup.addEventListener("click",()=>{


    mission03FacePopup.style.display="none";


    mission03CodeArea.style.display="block";



});

}





// ==========================
// MISSION 03 CODE CHECK
// ==========================


if(checkMission03Code){

checkMission03Code.addEventListener("click",()=>{


    const code =
    mission03Code.value.trim();



    if(code==="3333"){


        mission03ClearPopup.style.display="flex";



        mission03Status.innerHTML =
        "CLEAR ✓";



    }else{


        alert("인증번호가 틀렸어!");

    }



});

}





// ==========================
// FINAL CLOSE
// ==========================


if(closeMission03Clear){

closeMission03Clear.addEventListener("click",()=>{


    mission03ClearPopup.style.display="none";


    mission03Detail.classList.remove("show");


    missionPanel.classList.add("show");



});

}



