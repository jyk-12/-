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

        // ⭐ 처음에는 오프닝
        if (!openingViewed) {

            openOpening();

            return;

        }

        // ⭐ 두 번째부터 미션목록
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

    showLightFragment();


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

    showLightFragment();


    missionPanel.classList.add("show");



});

}

// ==========================
// MISSION 03 TIMER
// ==========================

function startMission03Timer(){

    const timerText =
    document.getElementById("mission03Timer");

    if(!timerText) return;

    const timer = setInterval(()=>{

        const now = new Date();

        const distance = mission03OpenTime - now;

        if(distance <= 0){

            clearInterval(timer);

            mission03Status.innerHTML = "OPEN";

            timerText.style.display = "none";

            mission03Card.classList.remove("locked");
            mission03Card.classList.add("opened");

            return;

        }

        const min = Math.floor(distance/1000/60);
        const sec = Math.floor((distance/1000)%60);

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

const rotatePortraitNotice =
document.getElementById("rotatePortraitNotice");

let mission03NeedPortrait = false;

function openMission03(){

    missionPanel.classList.remove("show");

    mission03Detail.classList.add("show");

    // 실제 플레이 시작 시간
    mission03PlayTime = new Date();

    // 버튼 잠금
    mission03CanClose = false;

    // 이벤트 시작
    startMission03Event();

}


// ==========================
// CARD CLICK
// ==========================

if(mission03Card){

    mission03Card.addEventListener("click",()=>{

        if(mission03Card.classList.contains("locked")) return;

        // ⭐ 모바일 여부 먼저 확인
        const isMobile = window.innerWidth <= 900;

        // PC는 바로 오픈
        if(!isMobile){

            openMission03();
            return;

        }

        // 모바일
        if(window.innerHeight > window.innerWidth){

            rotateNotice.style.display="flex";

        }

        else{

            openMission03();

        }

    });

}



// ==========================
// CLOSE
// ==========================

if(mission03Close){

    mission03Close.addEventListener("click",()=>{

        mission03Detail.classList.remove("show");

        missionPanel.classList.add("show");

    });

}



// ==========================
// ROTATE CHECK
// ==========================

window.addEventListener("resize",()=>{

    const isMobile = window.innerWidth <= 900;

    // ⭐ PC는 회전 안내 사용 안 함
    if(!isMobile) return;

    // 처음 가로 안내
    if(

        rotateNotice &&
        rotateNotice.style.display==="flex" &&
        window.innerWidth > window.innerHeight

    ){

        rotateNotice.style.display="none";

        openMission03();

    }

    // 게임 중 세로 돌리면
    if(

        mission03Detail.classList.contains("show") &&
        !mission03NeedPortrait &&
        window.innerHeight > window.innerWidth

    ){

        mission03Detail.classList.remove("show");

        rotateNotice.style.display="flex";

    }

    // 클리어 후 세로 안내
    if(

        mission03NeedPortrait &&
        rotatePortraitNotice &&
        window.innerHeight > window.innerWidth

    ){

        rotatePortraitNotice.style.display="none";

        mission03ClearPopup.style.display="flex";

        mission03NeedPortrait = false;

    }

});



// ==========================
// HIDDEN ITEM
// ==========================

const hiddenItems =
document.querySelectorAll(".hidden-item");

let mission03FoundCount = 0;

hiddenItems.forEach(item=>{

    item.addEventListener("click",()=>{

        if(item.classList.contains("found")) return;

        item.classList.add("found");

        mission03FoundCount++;

        if(mission03FoundCount===5){

            setTimeout(()=>{

                mission03FacePopup.style.display="flex";

            },300);

        }

    });

});

// ==========================
// FACE POPUP → PORTRAIT
// ==========================

if(closeMission03FacePopup){

    closeMission03FacePopup.addEventListener("click",()=>{

        mission03FacePopup.style.display="none";

        // ⭐ 모바일 여부 먼저 확인
        const isMobile = window.innerWidth <= 900;

        // PC는 바로 인증번호
        if(!isMobile){

            mission03CodeArea.style.display="block";
            return;

        }

        // 모바일 가로 → 세로 안내
        if(window.innerWidth > window.innerHeight){

            mission03NeedPortrait = true;

            rotatePortraitNotice.style.display="flex";

        }

        // 이미 세로
        else{

            mission03CodeArea.style.display="block";

        }

    });

}



// ==========================
// ROTATE → CODE
// ==========================

window.addEventListener("resize",()=>{

    const isMobile = window.innerWidth <= 900;

    // ⭐ PC는 사용 안 함
    if(!isMobile) return;

    if(

        mission03NeedPortrait &&
        rotatePortraitNotice &&
        window.innerHeight > window.innerWidth

    ){

        rotatePortraitNotice.style.display="none";

        mission03NeedPortrait = false;

        mission03CodeArea.style.display="block";

    }

});




// ==========================
// CODE CHECK
// ==========================

if(checkMission03Code){

    checkMission03Code.addEventListener("click",()=>{

        const code =
        mission03Code.value.trim();

        if(code==="3333"){

            mission03CodeArea.style.display="none";

            // ⭐ 다른 미션과 동일
            mission03ClearPopup.style.display="flex";

            mission03Status.innerHTML="CLEAR ✓";

        }

        else{

            alert("인증번호가 틀렸어!");

        }

    });

}

// ==========================
// FINAL CLOSE
// ==========================

if(closeMission03Clear){

    closeMission03Clear.addEventListener("click",()=>{

        // ==========================
        // 25분 이후
        // ==========================
        if(mission03CanClose){

            mission03ClearPopup.style.display="none";

            mission03Detail.classList.remove("show");

            showLightFragment();

            missionPanel.classList.add("show");

            startMission04Timer();

            startHidden01Timer();

            return;

        }

        // ==========================
        // 24분 이후
        // ==========================
        if(mission03Notice24){

            // 아무 반응 없음
            return;

        }

        // ==========================
        // 24분 이전
        // ==========================
        alert("최종 확인이 진행 중입니다.\n잠시 후 다시 시도해주세요.");

    });

}


/* =====================================================
                MISSION03 EVENT
===================================================== */

// 실제 플레이 시작 시간
let mission03PlayTime = null;

// 25분 이후 닫기 가능
let mission03CanClose = false;

// 이벤트 타이머
let mission03EventTimer = null;

// 중복 방지
let mission03Notice20 = false;
let mission03Notice22 = false;
let mission03Notice24 = false;


function startMission03Event(){

   // ===== 테스트용 =====
const EVENT20 = 2 * 60;   // 2분
const EVENT22 = 3 * 60;   // 3분
const EVENT24 = 5 * 60;   // 5분
const EVENT25 = 6 * 60;   // 6분
    /*
    // ===== 실제 =====
    const EVENT20 = 20*60;
    const EVENT22 = 22*60;
    const EVENT24 = 24*60;
    const EVENT25 = 25*60;
    */

    mission03Notice20 = false;
    mission03Notice22 = false;
    mission03Notice24 = false;

    mission03CanClose = false;

    if(mission03EventTimer){

        clearInterval(mission03EventTimer);

    }

    mission03EventTimer = setInterval(()=>{

        const elapsed =
        Math.floor((new Date()-mission03PlayTime)/1000);

        // ==========================
        // 20분
        // ==========================
        if(!mission03Notice20 && elapsed>=EVENT20){

            mission03Notice20 = true;

            // 아직 미션 진행 중인 사람만
            if(
                mission03Detail.classList.contains("show") &&
                mission03ClearPopup.style.display!="flex"
            ){

                // navigator.vibrate([500,150,500]);

                console.log("20분 진동");

            }

        }

        // ==========================
        // 22분
        // ==========================
        if(!mission03Notice22 && elapsed>=EVENT22){

            mission03Notice22 = true;

            // 아직 미션 진행 중인 사람만
            if(
                mission03Detail.classList.contains("show") &&
                mission03ClearPopup.style.display!="flex"
            ){

                alert("시간이 얼마 남지 않았습니다.\n서둘러 미션을 완료해주세요.");

            }

        }

        // ==========================
        // 24분
        // ==========================
        if(!mission03Notice24 && elapsed>=EVENT24){

            mission03Notice24 = true;

            // 전원 공통
            alert("곧 다음 구역이 활성화됩니다.\n준비해주세요.");

        }

        // ==========================
        // 25분
        // ==========================
        if(elapsed>=EVENT25){

            mission03CanClose = true;

            clearInterval(mission03EventTimer);

            console.log("25분 오픈");

            if(closeMission03Clear){

                closeMission03Clear.classList.add("active");

            }

        }

    },1000);

}

// =====================================================
//                    MISSION 04
// =====================================================

const mission04Card =
document.getElementById("mission04Card");

const mission04Status =
document.getElementById("mission04Status");

const mission04Detail =
document.getElementById("mission04Detail");

const mission04Close =
document.getElementById("mission04Close");

const mission04Timer =
document.getElementById("mission04Timer");


// 처음에는 잠금 상태

if (mission04Card) {

    mission04Card.classList.add("locked");

    mission04Card.classList.remove("open");

}


// ==========================
// MISSION 04 TIMER
// ==========================

function startMission04Timer() {

    if (!mission04Timer) return;

    let timeLeft = 30;   // ← 필요하면 30초를 원하는 시간으로 변경

    mission04Timer.style.display = "block";

    const timer = setInterval(() => {

        const min = Math.floor(timeLeft / 60);

        const sec = timeLeft % 60;

        mission04Timer.innerHTML =
            `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

        if (timeLeft <= 0) {

            clearInterval(timer);

            mission04Status.innerHTML = "OPEN";

            mission04Timer.style.display = "none";

            mission04Card.classList.remove("locked");

            mission04Card.classList.add("open");

        }

        timeLeft--;

    }, 1000);

}


// ==========================
// MISSION 04 OPEN
// ==========================

if (mission04Card) {

    mission04Card.addEventListener("click", () => {

        // OPEN 전에는 열리지 않음
        if (!mission04Card.classList.contains("open")) {

            return;

        }

        missionPanel.classList.remove("show");

        mission04Detail.classList.add("show");

    });

}


// ==========================
// CLOSE
// ==========================

if (mission04Close) {

    mission04Close.addEventListener("click", () => {

        mission04Detail.classList.remove("show");

        missionPanel.classList.add("show");

    });

}


// =====================================================
//                    MISSION 04 QUIZ
// =====================================================

const mission04QuizAnswer =
document.getElementById("mission04QuizAnswer");

const checkMission04Quiz =
document.getElementById("checkMission04Quiz");

const mission04FacePopup =
document.getElementById("mission04FacePopup");

const closeMission04FacePopup =
document.getElementById("closeMission04FacePopup");

const mission04CodeArea =
document.getElementById("mission04CodeArea");



if(mission04FacePopup){

    mission04FacePopup.style.display="none";

}

if(mission04CodeArea){

    mission04CodeArea.style.display="none";

}



if(checkMission04Quiz){

    checkMission04Quiz.addEventListener("click",()=>{

        const answer =
        mission04QuizAnswer.value.trim();

        if(answer==="정답"){

            mission04FacePopup.style.display="block";

        }

        else{

            alert("다시 입력해주세요!");

        }

    });

}



if(closeMission04FacePopup){

    closeMission04FacePopup.addEventListener("click",()=>{

        mission04FacePopup.style.display="none";

        mission04CodeArea.style.display="block";

    });

}



// =====================================================
//                    MISSION 04 CLEAR
// =====================================================

const mission04Code =
document.getElementById("mission04Code");

const checkMission04Code =
document.getElementById("checkMission04Code");

const mission04ClearPopup =
document.getElementById("mission04ClearPopup");

const closeMission04Clear =
document.getElementById("closeMission04Clear");



if(mission04ClearPopup){

    mission04ClearPopup.style.display="none";

}



if(checkMission04Code){

    checkMission04Code.addEventListener("click",()=>{

        const code =
        mission04Code.value.trim();

        if(code==="4444"){

            mission04ClearPopup.style.display="flex";

            mission04Status.innerHTML="CLEAR ✓";

            startMission05Timer();
            
            startHidden02Timer();

        }

        else{

            alert("인증번호가 틀렸습니다.");

        }

    });

}



if(closeMission04Clear){

    closeMission04Clear.addEventListener("click",()=>{

        mission04ClearPopup.style.display="none";

        mission04Detail.classList.remove("show");

        showLightFragment();

        missionPanel.classList.add("show");

        startMission05Timer();

    });

}

// =====================================================
//                    MISSION 05
// =====================================================

const mission05Card =
document.getElementById("mission05Card");

const mission05Status =
document.getElementById("mission05Status");

const mission05Detail =
document.getElementById("mission05Detail");

const mission05Close =
document.getElementById("mission05Close");

const mission05Timer =
document.getElementById("mission05Timer");


// 처음에는 잠금

if(mission05Card){

    mission05Card.classList.add("locked");

    mission05Card.classList.remove("open");

}


// ======================================
// ⭐ 실제 오픈 시간 (행사 전날 수정)
// ======================================

let mission05OpenTime = new Date();

// 날짜 (행사 전날 설정)
// mission05OpenTime.setFullYear(2026);
// mission05OpenTime.setMonth(8);
// mission05OpenTime.setDate(25);

// 시간 (행사 전날 설정)
// mission05OpenTime.setHours(15);
// mission05OpenTime.setMinutes(40);
// mission05OpenTime.setSeconds(0);


// ==========================
// MISSION 05 TIMER
// ==========================

function startMission05Timer(){

    if(!mission05Timer) return;

    let timeLeft = 30;

    mission05Timer.style.display="block";

    const timer=setInterval(()=>{

        const min=Math.floor(timeLeft/60);

        const sec=timeLeft%60;

        mission05Timer.innerHTML=
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

        if(timeLeft<=0){

            clearInterval(timer);

            mission05Status.innerHTML="OPEN";

            mission05Timer.style.display="none";

            mission05Card.classList.remove("locked");

            mission05Card.classList.add("open");

        }

        timeLeft--;

    },1000);

}


// ==========================
// OPEN
// ==========================

if(mission05Card){

    mission05Card.addEventListener("click",()=>{

        if(!mission05Card.classList.contains("open")){

            return;

        }

        missionPanel.classList.remove("show");

        mission05Detail.classList.add("show");

    });

}


// ==========================
// CLOSE
// ==========================

if(mission05Close){

    mission05Close.addEventListener("click",()=>{

        mission05Detail.classList.remove("show");

        missionPanel.classList.add("show");


    });

}

// =====================================================
//                    MISSION 05 QUIZ
// =====================================================

const mission05QuizAnswer =
document.getElementById("mission05QuizAnswer");

const checkMission05Quiz =
document.getElementById("checkMission05Quiz");

const mission05FacePopup =
document.getElementById("mission05FacePopup");

const closeMission05FacePopup =
document.getElementById("closeMission05FacePopup");

const mission05CodeArea =
document.getElementById("mission05CodeArea");



if(mission05FacePopup){

    mission05FacePopup.style.display="none";

}

if(mission05CodeArea){

    mission05CodeArea.style.display="none";

}



if(checkMission05Quiz){

    checkMission05Quiz.addEventListener("click",()=>{

        const answer =
        mission05QuizAnswer.value.trim();

        if(answer==="정답"){

            mission05FacePopup.style.display="block";

        }

        else{

            alert("다시 입력해주세요!");

        }

    });

}



// ==========================
// FACE POPUP
// ==========================

if(closeMission05FacePopup){

    closeMission05FacePopup.addEventListener("click",()=>{

        mission05FacePopup.style.display="none";

        mission05CodeArea.style.display="block";

    });

}



// =====================================================
//                    MISSION 05 CLEAR
// =====================================================

const mission05Code =
document.getElementById("mission05Code");

const checkMission05Code =
document.getElementById("checkMission05Code");

const mission05ClearPopup =
document.getElementById("mission05ClearPopup");

const closeMission05Clear =
document.getElementById("closeMission05Clear");



if(mission05ClearPopup){

    mission05ClearPopup.style.display="none";

}



if(checkMission05Code){

    checkMission05Code.addEventListener("click",()=>{

        const code =
        mission05Code.value.trim();

        if(code==="5555"){

            mission05ClearPopup.style.display="flex";

            mission05Status.innerHTML="CLEAR ✓";

            

        }

        else{

            alert("인증번호가 틀렸습니다.");

        }

    });

}



// ==========================
// FINAL CLOSE
// ==========================

if(closeMission05Clear){

    closeMission05Clear.addEventListener("click",()=>{

        mission05ClearPopup.style.display="none";

        mission05Detail.classList.remove("show");

        showLightFragment();

        missionPanel.classList.add("show");
        
        startMission06Timer();


    });

}

// =====================================================
//                    MISSION 06
// =====================================================

const mission06Card =
document.getElementById("mission06Card");

const mission06Status =
document.getElementById("mission06Status");

const mission06Detail =
document.getElementById("mission06Detail");

const mission06Close =
document.getElementById("mission06Close");

const mission06Timer =
document.getElementById("mission06Timer");


// 처음에는 잠금

if(mission06Card){

    mission06Card.classList.add("locked");

    mission06Card.classList.remove("open");

}


// ======================================
// ⭐ 실제 오픈 시간 (행사 전날 수정)
// ======================================

let mission06OpenTime = new Date();

// 날짜 (행사 전날 설정)
// mission06OpenTime.setFullYear(2026);
// mission06OpenTime.setMonth(8);
// mission06OpenTime.setDate(25);

// 시간 (행사 전날 설정)
// mission06OpenTime.setHours(16);
// mission06OpenTime.setMinutes(0);
// mission06OpenTime.setSeconds(0);


// ==========================
// MISSION 06 TIMER
// ==========================

function startMission06Timer(){

    if(!mission06Timer) return;

    let timeLeft = 30;

    mission06Timer.style.display="block";

    const timer=setInterval(()=>{

        const min=Math.floor(timeLeft/60);

        const sec=timeLeft%60;

        mission06Timer.innerHTML=
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

        if(timeLeft<=0){

            clearInterval(timer);

            mission06Status.innerHTML="OPEN";

            mission06Timer.style.display="none";

            mission06Card.classList.remove("locked");

            mission06Card.classList.add("open");

        }

        timeLeft--;

    },1000);

}



// ==========================
// OPEN
// ==========================

if(mission06Card){

    mission06Card.addEventListener("click",()=>{

        if(!mission06Card.classList.contains("open")){

            return;

        }

        missionPanel.classList.remove("show");

        mission06Detail.classList.add("show");

    });

}



// ==========================
// CLOSE
// ==========================

if(mission06Close){

    mission06Close.addEventListener("click",()=>{

        mission06Detail.classList.remove("show");

        missionPanel.classList.add("show");

    });

}

// =====================================================
//                    MISSION 06 QUIZ
// =====================================================

const mission06QuizAnswer =
document.getElementById("mission06QuizAnswer");

const checkMission06Quiz =
document.getElementById("checkMission06Quiz");

const mission06FacePopup =
document.getElementById("mission06FacePopup");

const closeMission06FacePopup =
document.getElementById("closeMission06FacePopup");

const mission06CodeArea =
document.getElementById("mission06CodeArea");



if(mission06FacePopup){

    mission06FacePopup.style.display="none";

}

if(mission06CodeArea){

    mission06CodeArea.style.display="none";

}



if(checkMission06Quiz){

    checkMission06Quiz.addEventListener("click",()=>{

        const answer =
        mission06QuizAnswer.value.trim();

        if(answer==="정답"){

            mission06FacePopup.style.display="block";

        }

        else{

            alert("다시 입력해주세요!");

        }

    });

}



// ==========================
// FACE POPUP
// ==========================

if(closeMission06FacePopup){

    closeMission06FacePopup.addEventListener("click",()=>{

        mission06FacePopup.style.display="none";

        mission06CodeArea.style.display="block";

    });

}



// =====================================================
//                    MISSION 06 CLEAR
// =====================================================

const mission06Code =
document.getElementById("mission06Code");

const checkMission06Code =
document.getElementById("checkMission06Code");

const mission06ClearPopup =
document.getElementById("mission06ClearPopup");

const closeMission06Clear =
document.getElementById("closeMission06Clear");



if(mission06ClearPopup){

    mission06ClearPopup.style.display="none";

}



if(checkMission06Code){

    checkMission06Code.addEventListener("click",()=>{

        const code =
        mission06Code.value.trim();

        if(code==="6666"){

            mission06ClearPopup.style.display="flex";

            mission06Status.innerHTML="CLEAR ✓";

        }

        else{

            alert("인증번호가 틀렸습니다.");

        }

    });

}



// ==========================
// FINAL CLOSE
// ==========================

if(closeMission06Clear){

    closeMission06Clear.addEventListener("click",()=>{

        mission06ClearPopup.style.display="none";

        mission06Detail.classList.remove("show");

        showLightFragment();

        missionPanel.classList.add("show");

        if(endingButton){ endingButton.style.display="block";}

       

    });

}

// =====================================================
//                      ENDING
// =====================================================

const endingButton =
document.getElementById("endingButton");

const endingWaitingPopup =
document.getElementById("endingWaitingPopup");

const closeEndingWaiting =
document.getElementById("closeEndingWaiting");

const endingTimer =
document.getElementById("endingTimer");

const endingDetail =
document.getElementById("endingDetail");

const endingStar =
document.getElementById("endingStar");

const endingStory =
document.getElementById("endingStory");

const showConstellation =
document.getElementById("showConstellation");

const constellationPopup =
document.getElementById("constellationPopup");

const endingReplay =
document.getElementById("endingReplay");


// ==========================
// 실제 행사 전날 수정
// ==========================

let endingOpenTime = new Date();

endingOpenTime.setMinutes(
    endingOpenTime.getMinutes()+4
);

// 날짜
// endingOpenTime.setFullYear(2026);
// endingOpenTime.setMonth(8);
// endingOpenTime.setDate(25);

// 시간
// endingOpenTime.setHours(21);
// endingOpenTime.setMinutes(50);
// endingOpenTime.setSeconds(0);


// ==========================
// 처음에는 모두 숨김
// ==========================

if(endingDetail){

    endingDetail.classList.remove("show");

}

if(endingWaitingPopup){

    endingWaitingPopup.style.display="none";

}

if(endingStory){

    endingStory.style.display="none";

}

if(constellationPopup){

    constellationPopup.style.display="none";

}


// ==========================
// ENDING BUTTON
// ==========================

if(endingButton){

    endingButton.addEventListener("click",()=>{

        const updateTimer = ()=>{

            const now = new Date();

            const distance = endingOpenTime - now;

            if(distance <= 0){

                clearInterval(timer);

                endingWaitingPopup.style.display="none";

                missionPanel.classList.remove("show");

                endingDetail.classList.add("show");

                return;

            }

            const hour = Math.floor(distance/1000/60/60);

            const min = Math.floor((distance/1000/60)%60);

            const sec = Math.floor((distance/1000)%60);

            endingTimer.innerHTML =
            `${String(hour).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

        };

        const now = new Date();

        if(now < endingOpenTime){

            endingWaitingPopup.style.display="flex";

            updateTimer();

            const timer = setInterval(updateTimer,1000);

            return;

        }

        missionPanel.classList.remove("show");

        endingDetail.classList.add("show");

    });

}


// ==========================
// WAITING CLOSE
// ==========================

if(closeEndingWaiting){

    closeEndingWaiting.addEventListener("click",()=>{

        endingWaitingPopup.style.display="none";

    });

}


// ==========================
// STAR CLICK
// ==========================

if(endingStar){

    endingStar.addEventListener("click",()=>{

        endingStory.style.display="flex";

    });

}


// ==========================
// STORY
// ==========================

if(showConstellation){

    showConstellation.addEventListener("click",()=>{

        endingStory.style.display="none";

        constellationPopup.style.display="flex";

    });

}


// ==========================
// REPLAY
// ==========================

if(endingReplay){

    endingReplay.addEventListener("click",()=>{

        constellationPopup.style.display="none";

        endingDetail.classList.remove("show");

        missionPanel.classList.add("show");

    });

}

// =====================================================
//                  HIDDEN 01
// =====================================================

const hidden01Popup =
document.getElementById("hidden01Popup");

const hidden01Answer =
document.getElementById("hidden01Answer");

const checkHidden01 =
document.getElementById("checkHidden01");



if(hidden01Popup){

    hidden01Popup.style.display="none";

}



// ======================================
// TEST
// ======================================

function startHidden01Timer(){

    setTimeout(()=>{

        hidden01Popup.style.display="flex";

    },30000);

}



// ======================================
// ANSWER
// ======================================

if(checkHidden01){

    checkHidden01.addEventListener("click",()=>{

        const answer=
        hidden01Answer.value.trim();

        if(answer==="정답"){

            hidden01Popup.style.display="none";

        }

        else{

            alert("다시 입력해주세요.");

        }

    });

}

// =====================================================
//                  HIDDEN 02
// =====================================================

const hidden02Popup =
document.getElementById("hidden02Popup");

const hidden02Answer =
document.getElementById("hidden02Answer");

const checkHidden02 =
document.getElementById("checkHidden02");



if(hidden02Popup){

    hidden02Popup.style.display="none";

}



// ======================================
// TEST
// ======================================

function startHidden02Timer(){

    setTimeout(()=>{

        hidden02Popup.style.display="flex";

    },30000);

}



// ======================================
// ANSWER
// ======================================

if(checkHidden02){

    checkHidden02.addEventListener("click",()=>{

        const answer=
        hidden02Answer.value.trim();

        if(answer==="정답"){

            hidden02Popup.style.display="none";

        }

        else{

            alert("다시 입력해주세요.");

        }

    });

}

/* =====================================================
                    OPENING STORY
===================================================== */

const openingOverlay =
document.getElementById("openingOverlay");

const openingStory =
document.getElementById("openingStory");

const storyLines =
document.querySelectorAll(".story-line");

const storyNext =
document.getElementById("storyNext");

const closeOpening =
document.getElementById("closeOpening");

let storyIndex = 0;

// ⭐ 처음 오프닝을 봤는지
let openingViewed = false;

// ⭐ 다시보기 여부
let replayMode = false;


// =====================================================
// OPEN
// =====================================================

function openOpening(replay = false){

    // ⭐ 혹시 숨겨놨다면 다시 표시
    openingOverlay.style.display = "block";
    openingStory.style.display = "flex";

    replayMode = replay;

    storyIndex = 0;

    storyLines.forEach(line=>{

        line.classList.remove("show");

    });

    storyNext.style.display="block";
    closeOpening.style.display="none";

    openingOverlay.classList.add("show");
    openingStory.classList.add("show");

    setTimeout(()=>{

        // 📜 다시보기
        if(replay){

            storyLines.forEach(line=>{

                line.classList.add("show");

            });

            storyNext.style.display="none";
            closeOpening.style.display="block";

            return;

        }

        // 🌌 첫 실행
        storyLines[0].classList.add("show");

        storyIndex = 1;

    },350);

}


// =====================================================
// NEXT
// =====================================================

openingStory.addEventListener("click",(e)=>{

    if(replayMode) return;

    if(e.target===closeOpening) return;

    if(storyIndex>=storyLines.length) return;

    storyLines[storyIndex].classList.add("show");

    storyIndex++;

    if(storyIndex===storyLines.length){

        storyNext.style.display="none";

        setTimeout(()=>{

            closeOpening.style.display="block";

        },250);

    }

});


// =====================================================
// CLOSE
// =====================================================

closeOpening.addEventListener("click",()=>{

    openingOverlay.classList.remove("show");
    openingStory.classList.remove("show");

    // ⭐ 테스트용 : 완전히 제거
    openingOverlay.style.display="none";
    openingStory.style.display="none";

    closeOpening.style.display="none";
    storyNext.style.display="block";

    openingViewed=true;

    if(replayMode){

        missionPanel.classList.add("show");
        return;

    }

    startScreen.classList.remove("hidden");

});


// ==========================
// START
// ==========================

if(missionStart){

    missionStart.addEventListener("click",()=>{

        if(!openingViewed){

            replayMode=false;

            openOpening(false);

            return;

        }

        missionPanel.classList.add("show");

        startScreen.classList.add("hidden");

    });

}


if(closeMission){

    closeMission.addEventListener("click",()=>{

        missionPanel.classList.remove("show");

        startScreen.classList.remove("hidden");

    });

}


/* =====================================================
                OPENING REPLAY
===================================================== */

const openingReplay =
document.getElementById("openingReplay");

if(openingReplay){

    openingReplay.addEventListener("click",()=>{

        missionPanel.classList.remove("show");

        startScreen.classList.add("hidden");

        replayMode=true;

        openOpening(true);

    });

}

/* =====================================================
                LIGHT FRAGMENT
===================================================== */

function showLightFragment(){
    
    const fragment = document.querySelector(".fragment");

    if(!fragment) return;

    // 이전 애니메이션 초기화
    fragment.style.animation = "none";
    fragment.offsetWidth;

    // 애니메이션 시작
    fragment.style.animation = "fragmentAppear .28s forwards";

    // 위로 이동
    setTimeout(()=>{

        fragment.style.animation =
        "fragmentFly .9s ease-in forwards";

    },280);

}