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



// ==========================
// MISSION02 OPEN TIME
// ==========================

const mission02OpenTime =
new Date();


// ==========================
// 실제 오픈 시간
// ==========================

mission02OpenTime.setHours(14);
mission02OpenTime.setMinutes(0);
mission02OpenTime.setSeconds(0);


// ==========================
// TEST (30초)
// ==========================

/*mission02OpenTime.setSeconds(
    mission02OpenTime.getSeconds()+30
);//*/



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

    // 타이머 표시
    mission02Timer.style.display="block";

    const timer =
    setInterval(()=>{

        const now =
        new Date();

        const distance =
        mission02OpenTime-now;

        // ==========================
        // OPEN
        // ==========================

        if(distance<=0){

            clearInterval(timer);

            mission02Status.innerHTML=
            "OPEN";

            mission02Timer.style.display="none";

            mission02Card.classList.remove("locked");

            mission02Card.classList.add("opened");

            return;

        }

        // ==========================
        // TIMER
        // ==========================

        const min =
        Math.floor(distance/1000/60);

        const sec =
        Math.floor((distance/1000)%60);

        mission02Timer.innerHTML=
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



    if(answer==="추억"){


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

let mission03OpenTime;

if(mission02ClearPopup){

    mission02ClearPopup.style.display="none";

}

if(checkMission02Code){

    checkMission02Code.addEventListener("click",()=>{

        const code =
        mission02Code.value.trim();

        if(code==="1240"){

            mission02ClearPopup.style.display="flex";

            mission02Status.innerHTML="CLEAR ✓";

        }

        else{

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


        // ==========================
// MISSION03 OPEN TIME
// ==========================

// ===== 실제 =====

mission03OpenTime = new Date();
mission03OpenTime.setHours(15);
mission03OpenTime.setMinutes(30);
mission03OpenTime.setSeconds(0);

// ===== TEST =====

// mission03OpenTime = new Date();

// mission03OpenTime.setSeconds(
//     mission03OpenTime.getSeconds() + 30
// );


        startMission03Timer();

    });

}



// ==========================
// MISSION 03 TIMER
// ==========================

function startMission03Timer(){

    const timerText =
    document.getElementById("mission03Timer");

    if(!timerText) return;

    timerText.style.display="block";

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

const mission03FoundText =
document.getElementById("mission03FoundText");

const mission03NoticePopup =
document.getElementById("mission03NoticePopup");

const mission03NoticeText =
document.getElementById("mission03NoticeText");

const closeMission03NoticePopup =
document.getElementById("closeMission03Notice");

const mission03SystemPopup =
document.getElementById("mission03SystemPopup");

const mission03RandomText =
document.getElementById("mission03RandomText");

const mission03EventText =
document.getElementById("mission03EventText");

const closeMission03SystemPopup =
document.getElementById("closeMission03SystemPopup");

const closeMission03FacePopup =
document.getElementById("closeMission03FacePopup");

const mission03CodePopup =
document.getElementById("mission03CodePopup");

const mission03ClearPopup =
document.getElementById("mission03ClearPopup");

const mission03ReTurnPopup =
document.getElementById("mission03ReTurnPopup");

const mission03RotatePopup =
document.getElementById("mission03RotatePopup");

const mission03RotatePortraitPopup =
document.getElementById("mission03RotatePortraitPopup");

const hiddenItems =
document.querySelectorAll(".hidden-item");

// ==========================
// 게임 화면 열기
// ==========================

function openMission03(){

    // 미션 목록 닫기
    missionPanel.classList.remove("show");

    // 게임 화면 열기
    mission03Detail.classList.add("show");

    // 현재 화면 저장
    mission03CurrentScreen = "game";

    // ==========================
    // MOBILE TOP UI 생성
    // ==========================

    createMission03MobileUI();

}

// ==========================
// MISSION 03 START
// ==========================

function openMission03BeforeStart(){

    // 숨은그림 초기화
    resetMission03Hidden();

    // 플레이 시작 시간
    mission03PlayTime = new Date();

    // 이벤트 시작
    startMission03Event();

    // 이벤트 상태 초기화
    mission03CanClose = false;

    mission03Notice20 = false;
    mission03Notice22 = false;
    mission03Notice24 = false;

    // Clear 버튼 비활성화
    if(closeMission03Clear){

        closeMission03Clear.classList.remove("active");

    }

    // 미션 열기
    openMission03();

}

// ==========================
// 03 CARD CLICK
// ==========================

if(mission03Card){

    mission03Card.addEventListener("click",()=>{

        // 잠겨있으면 종료
        if(mission03Card.classList.contains("locked")) return;

        const isMobile = window.innerWidth <= 900;

        // ==========================
        // PC
        // ==========================

if(!isMobile){

    /*
    원래는 최초 시작 로직을 거쳐야 함
    (타이머 기능 활성화 시 사용)
    */

    openMission03BeforeStart();

    return;

}

        // ==========================
        // MOBILE
        // ==========================

        if(window.innerHeight > window.innerWidth){

            mission03CurrentScreen = "start";

            mission03RotatePopup.style.display = "flex";

        }else{

           showMission03NoticePopup();
        }

    });

}

/* =====================================================
                MISSION03 MOBILE TOP UI
===================================================== */

function createMission03MobileUI(){

    // PC는 생성 안함
    if(window.innerWidth > 900) return;

    // 이미 생성되어 있으면 종료
    if(document.getElementById("mission03TopUI")) return;

    mission03Detail.insertAdjacentHTML(

        "afterbegin",

        `
        <div
            id="mission03TopUI"
            class="mission03-top-ui">

            <!-- 찾은 개수 -->

            <div class="mission03-count">

                🔎

                <span id="mission03MobileFound">

                    0 / 5

                </span>

            </div>

            <!-- 다시보기 -->

            <button
                id="mission03ReplayBtn"
                class="mission03-replay">

                📜

            </button>

        </div>
        `

    );

    // ==========================
    // 다시보기
    // ==========================

    document
    .getElementById("mission03ReplayBtn")
    .addEventListener("click",()=>{

        showMission03NoticePopup();

    });

}

// ==========================
// 03 NOTICE POPUP
// ==========================

function showMission03NoticePopup(){



    mission03NoticeText.innerHTML =
"숲속 카페 어딘가에<br>" +
"숨겨진 흔적이 남아 있습니다.<br><br>" +
"<strong>별, 곰인형, 달,<br>열쇠, 편지</strong>를 찾아보세요. 👀";

    mission03NoticePopup.style.display = "flex";

}

if(closeMission03NoticePopup){

    closeMission03NoticePopup.addEventListener("click",()=>{

        // Notice 닫기
        mission03NoticePopup.style.display = "none";

        // ==========================
        // 최초 시작만 게임 시작
        // ==========================

        if(mission03CurrentScreen === "start"){

        

            openMission03BeforeStart();

        }

    });

}

// ==========================
// 03 CLOSE
// ==========================

if(mission03Close){

    mission03Close.addEventListener("click",()=>{

        // 게임 화면 닫기
        mission03Detail.classList.remove("show");

        // 현재 화면 저장
        mission03CurrentScreen = "list";

        // 미션 목록 열기
        missionPanel.classList.add("show");

    });

}

// ==========================
// 03 ROTATE CHECK
// ==========================

window.addEventListener("resize",()=>{

    const isMobile = window.innerWidth <= 900;

    if(!isMobile) return;

    // ==========================
    // 세로
    // ==========================

    if(window.innerHeight > window.innerWidth){

        // 시작 전
        if(mission03CurrentScreen === "start"){

            mission03RotatePopup.style.display = "flex";

            return;

        }

        // 게임 진행 중
        if(mission03CurrentScreen === "game"){

            mission03RotatePopup.style.display = "flex";

            return;

        }

        // ==========================
        // 숨은그림 완료 후
        // 세로 공지
        // ==========================

        if(mission03CurrentScreen === "rotate"){

            // 기존 가로 공지 숨김
            mission03RotatePopup.style.display = "none";

            // 세로 공지 표시
            mission03RotatePortraitPopup.style.display = "flex";

            setTimeout(()=>{

                // 세로 공지 닫기
                mission03RotatePortraitPopup.style.display = "none";

                // Face Popup
                showMission03FacePopup();

                // 현재 화면
                mission03CurrentScreen = "face";

            },2000);

            return;

        }

    }

    // ==========================
    // 가로
    // ==========================

    // 가로 공지 닫기
    mission03RotatePopup.style.display = "none";

    // 세로 공지도 닫기
    mission03RotatePortraitPopup.style.display = "none";

    // 최초 시작
    if(mission03CurrentScreen === "start"){

     
        showMission03NoticePopup();

    }

});

// ==========================
// 03 HIDDEN
// ==========================

// 찾은 개수
let mission03FoundCount = 0;

// 초기화
function resetMission03Hidden(){

    mission03FoundCount = 0;

    // ==========================
    // PC COUNT
    // ==========================

    if(mission03FoundText){

        mission03FoundText.innerHTML =
        `0 / ${hiddenItems.length}`;

    }

    // ==========================
    // MOBILE COUNT
    // ==========================

    const mobileFound =

    document.getElementById("mission03MobileFound");

    if(mobileFound){

        mobileFound.innerHTML =
        `0 / ${hiddenItems.length}`;

    }

    hiddenItems.forEach(item=>{

        // 찾음 여부 초기화
        item.dataset.found = "false";

        // 빨간 원 숨김
        const foundCircle =
        item.querySelector(".found-circle");

        if(foundCircle){

            foundCircle.style.display = "none";

        }

    });

}

// 아이템 클릭
hiddenItems.forEach(item=>{

    item.addEventListener("click",()=>{

        // 이미 찾았으면 종료
        if(item.dataset.found === "true") return;

        // 찾음 표시
        item.dataset.found = "true";

        // 애니메이션용
        item.classList.add("found");

        // 빨간 원 표시
        const foundCircle =
        item.querySelector(".found-circle");

        if(foundCircle){

            foundCircle.style.display = "block";

        }

        // 카운트 증가
        mission03FoundCount++;

        // ==========================
        // PC COUNT
        // ==========================

        if(mission03FoundText){

            mission03FoundText.innerHTML =
            `${mission03FoundCount} / ${hiddenItems.length}`;

        }

        // ==========================
        // MOBILE COUNT
        // ==========================

        const mobileFound =

        document.getElementById("mission03MobileFound");

        if(mobileFound){

            mobileFound.innerHTML =
            `${mission03FoundCount} / ${hiddenItems.length}`;

        }

        // ==========================
        // 모두 찾음
        // ==========================

        if(mission03FoundCount >= hiddenItems.length){

            const isMobile =
            window.innerWidth <= 900;

            // PC
            if(!isMobile){

                showMission03FacePopup();
                return;

            }

            // 모바일
            if(window.innerHeight > window.innerWidth){

                showMission03FacePopup();

            }else{

                mission03CurrentScreen = "rotate";

                mission03RotatePortraitPopup.style.display = "flex";

            }

        }

    });

});

// ==========================
// OVERLAY
// ==========================

let mission03Overlay = null;

function showMission03Overlay(){

    // 최초 1회 생성
    if(!mission03Overlay){

        mission03Overlay = document.createElement("div");

        mission03Overlay.style.position = "fixed";
        mission03Overlay.style.top = "0";
        mission03Overlay.style.left = "0";
        mission03Overlay.style.width = "100%";
        mission03Overlay.style.height = "100%";
        mission03Overlay.style.background = "rgba(1, 1, 16, 0.94)";
        mission03Overlay.style.zIndex = "9998";

        document.body.appendChild(mission03Overlay);

    }

    mission03Overlay.style.display = "block";

}

// ==========================
// FACE POPUP
// ==========================

function showMission03FacePopup(){

    // Overlay
    showMission03Overlay();

    // Face Popup
    mission03FacePopup.style.display = "flex";

}

if(closeMission03FacePopup){

    closeMission03FacePopup.addEventListener("click",()=>{

        // Face Popup 닫기
        mission03FacePopup.style.display = "none";

        // Code Popup
        showMission03CodePopup();

    });

}

// ==========================
// 03 CODE POPUP
// ==========================

function showMission03CodePopup(){

    mission03CodePopup.style.display = "flex";

    mission03CodeInput.value = "";
    mission03CodeInput.focus();

}

mission03CodeBtn.addEventListener("click",()=>{

   const code =
mission03Code.value.trim().toLowerCase();

if(code==="record"){

    mission03CodePopup.style.display="none";

    showMission03ClearPopup();

}else{

        alert("인증번호를 다시 확인해주세요.");

    }

});

// ==========================
// CLEAR POPUP
// ==========================

function showMission03ClearPopup(){

    // Code Popup 닫기
    mission03CodePopup.style.display = "none";

    mission03Status.innerHTML="CLEAR ✓";

    // Clear Popup 열기
    mission03ClearPopup.style.display = "flex";

    // 현재 화면
    mission03CurrentScreen = "clear";

    // Clear 버튼 비활성화
    if(closeMission03Clear){

        closeMission03Clear.classList.remove("active");

    }

}

if(closeMission03Clear){

    closeMission03Clear.addEventListener("click",()=>{

        // ==========================
        // 24분 이전
        // ==========================

        if(!mission03Notice24){

            // Random Text
            showMission03RandomMessage();
            return;

        }

        // ==========================
        // 24분 이후
        // ==========================

        if(!mission03CanClose){

            return;

        }

        // ==========================
        // 25분 이후
        // ==========================

        mission03ClearPopup.style.display = "none";

        if(mission03Overlay){
    mission03Overlay.style.display = "none";
}

         mission03Detail.classList.remove("show");

         mission03CurrentScreen = "list";

         showLightFragment();

         missionPanel.classList.add("show");

         startMission04Timer();

         setTimeout(()=>{ startHidden01Opening(); },1700);

    });

}

// ==========================
// RANDOM TEXT
// ==========================

// 랜덤 문구
const mission03RandomMessages = [

    "오래된 기록을 정리하고 있습니다.",

    "ㄷㄹㅇㄹ디화앋ㅇㅇㅇㅇㅇ.",

    "미확인 신호를 추적하고 있습니다.",

    "ㅇㅇㄱ구어럳로뷀거아라디어ㅏ라",

    "잠시 후 시도해주세요"

];

// 랜덤 문구 출력
function showMission03RandomMessage(){

    // 랜덤 선택
    const randomMessage =
    mission03RandomMessages[
        Math.floor(Math.random() * mission03RandomMessages.length)
    ];

    // System Popup 문구 변경
    if(mission03RandomText){

        mission03RandomText.innerHTML = randomMessage;

    }

    // System Popup 열기
    if(mission03SystemPopup){

        mission03SystemPopup.style.display = "flex";

    }

}

// ==========================
// SYSTEM POPUP
// ==========================

// System Popup 닫기
if(closeMission03SystemPopup){

    closeMission03SystemPopup.addEventListener("click",()=>{

        if(mission03SystemPopup){

            mission03SystemPopup.style.display = "none";

        }

    });

}

/* =====================================================
                    EVENT
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

    console.log("🚀 Mission03 Event Start");


    // ===== 실제 =====
    const EVENT20 = 20 * 60;
    const EVENT22 = 22 * 60;
    const EVENT24 = 24 * 60;
    const EVENT25 = 25 * 60;


    mission03Notice20 = false;
    mission03Notice22 = false;
    mission03Notice24 = false;
    mission03CanClose = false;

    if(closeMission03Clear){

        closeMission03Clear.classList.remove("active");

    }

    if(mission03EventTimer){

        clearInterval(mission03EventTimer);

    }

    mission03EventTimer = setInterval(()=>{

        const elapsed =
        Math.floor((new Date()-mission03PlayTime)/1000);

        console.log("⏱ elapsed =", elapsed);

        // ==========================
        // 20분
        // ==========================

        if(!mission03Notice20 && elapsed>=EVENT20){

            console.log("✅ EVENT20");

            mission03Notice20 = true;

            if(
                mission03Detail.classList.contains("show") &&
                mission03ClearPopup.style.display!="flex"
            ){

                if(navigator.vibrate){

                    navigator.vibrate([500,150,500]);

                }

            }

        }

        // ==========================
        // 22분 Event
        // ==========================

        if(!mission03Notice22 && elapsed>=EVENT22){

            console.log("✅ EVENT22");

            mission03Notice22 = true;

            if(
                mission03Detail.classList.contains("show") &&
                mission03ClearPopup.style.display!="flex"
            ){

                mission03EventText.innerHTML =
                "서둘러 미션 및 인증을 완료해주세요.";

                mission03SystemPopup.style.display = "flex";

            }

        }

        // ==========================
        // 24분 Event
        // ==========================

        if(!mission03Notice24 && elapsed>=EVENT24){

            console.log("✅ EVENT24");

            mission03Notice24 = true;

            if(navigator.vibrate){

                navigator.vibrate([700,200,700]);

            }

            if(mission03ClearPopup.style.display=="flex"){

                mission03EventText.innerHTML =
                "최종 확인이 진행 중입니다.<br>버튼이 재설정되고 있습니다.";

            }else{

                mission03EventText.innerHTML =
                "곧 다음 구역이 활성화됩니다.<br>서둘러 미션 및 인증을 완료해주세요.";

            }

            mission03SystemPopup.style.display = "flex";

        }

        // ==========================
        // 25분
        // ==========================

        if(elapsed>=EVENT25){

            console.log("✅ EVENT25");

            mission03CanClose = true;

            clearInterval(mission03EventTimer);

            if(closeMission03Clear){

                closeMission03Clear.classList.add("active");

            }

        }

    },1000);

}

// ==========================
// RE-TURN POPUP
// ==========================

// Re-Turn Popup 열기
function showMission03ReTurnPopup(){

    mission03ReTurnPopup.style.display = "flex";

}

// Re-Turn Popup 닫기
if(closeMission03ReTurn){

    closeMission03ReTurn.addEventListener("click",()=>{

        // Re-Turn Popup 닫기
        mission03ReTurnPopup.style.display = "none";

        // 미션 목록 열기
        missionPanel.classList.add("show");

    });

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


// ======================================
// ⭐ 실제 오픈 시간 (리허설)
// ======================================

let mission04OpenTime = new Date();

// 시간 (리허설)
mission04OpenTime.setHours(16);
mission04OpenTime.setMinutes(50);
mission04OpenTime.setSeconds(0);

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

    mission04Timer.style.display = "block";

    const timer = setInterval(() => {

        const now = new Date();

        const distance =
        mission04OpenTime - now;

        if (distance <= 0) {

            clearInterval(timer);

            mission04Status.innerHTML = "OPEN";

            mission04Timer.style.display = "none";

            mission04Card.classList.remove("locked");

            mission04Card.classList.add("open");

            return;

        }

        const min =
        Math.floor(distance / 1000 / 60);

        const sec =
        Math.floor((distance / 1000) % 60);

        mission04Timer.innerHTML =
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

    },1000);

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

        if(answer==="지름신"){

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

        if(code==="0"){

            mission04ClearPopup.style.display="flex";

            mission04Status.innerHTML="CLEAR ✓";

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


        // =================================================
        //              TIMER 시간 설정
        // =================================================

        // ⭐ Hidden02 실제 오픈 시간 (행사 전날 수정)

        // ⭐ Hidden02

hidden02OpenTime = new Date();

hidden02OpenTime.setHours(16);
hidden02OpenTime.setMinutes(54);
hidden02OpenTime.setSeconds(0);


// ⭐ Mission05 Fake OPEN

mission05FakeOpenTime = new Date();

mission05FakeOpenTime.setHours(17);
mission05FakeOpenTime.setMinutes(30);
mission05FakeOpenTime.setSeconds(0);

        // =================================================
        //              TWO TIMER START
        // =================================================

        startHidden02Timer();

        startMission05FakeTimer();

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


// =====================================================
//                  MISSION05 STATE
// =====================================================

let mission05State="locked";

// locked
// fakeOpen
// realOpen


// =====================================================
//          MISSION05 상태 표시 함수
// =====================================================

function setMission05Status(text){

    for(const node of mission05Status.childNodes){

        if(
            node.nodeType===3 &&
            node.textContent.trim()
        ){

            node.textContent=text;

            return;
        }
    }
}


// =====================================================
//              MISSION05 OPEN TIME
// =====================================================

// ⭐ Fake Mission05 OPEN
let mission05FakeOpenTime;

// ⭐ Real Mission05 OPEN
let mission05OpenTime;


// =====================================================
//              FAKE TIMER
// =====================================================

let mission05FakeTimerStarted=false;
let mission05FakeInterval=null;

function startMission05FakeTimer(){

    if(mission05FakeTimerStarted) return;

    mission05FakeTimerStarted=true;

    mission05Timer.style.display="block";

    mission05FakeInterval=setInterval(()=>{

        const now=new Date();

        const distance=
        mission05FakeOpenTime-now;

        const timeLeft=
        Math.max(
            0,
            Math.floor(distance/1000)
        );

        const min=
        Math.floor(timeLeft/60);

        const sec=
        timeLeft%60;

        if(mission05State==="locked"){

            mission05Timer.innerHTML=
            `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

        }

        if(distance<=0){

            clearInterval(mission05FakeInterval);

            mission05State="fakeOpen";

            mission05Timer.style.display="none";

            setMission05Status("OPEN");

            mission05Card.classList.remove("locked");
            mission05Card.classList.add("open");

        }

    },1000);

}


// =====================================================
//              REAL TIMER
// =====================================================

let mission05RealTimerStarted=false;
let mission05RealTimeLeft=0;
let mission05RealInterval=null;

function startMission05Timer(){

    if(mission05RealTimerStarted) return;

    mission05RealTimerStarted=true;

    mission05RealInterval=setInterval(()=>{

        const now=new Date();

        const distance=
        mission05OpenTime-now;

        mission05RealTimeLeft=
        Math.max(
            0,
            Math.floor(distance/1000)
        );

        // Fake OPEN 클릭 후에만 표시

        if(
            mission05State==="locked" &&
            mission05Timer.style.display==="block"
        ){

            const min=
            Math.floor(mission05RealTimeLeft/60);

            const sec=
            mission05RealTimeLeft%60;

            mission05Timer.innerHTML=
            `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

        }

        if(distance<=0){

            clearInterval(mission05RealInterval);

            mission05State="realOpen";

            setMission05Status("OPEN");

            mission05Timer.style.display="none";

            mission05Card.classList.remove("locked");
            mission05Card.classList.add("open");

        }

    },1000);

}


// =====================================================
//                    MISSION 05 OPEN
// =====================================================

if(mission05Card){

    mission05Card.addEventListener("click",()=>{

        // ==========================================
        // LOCKED
        // ==========================================

        if(mission05State==="locked"){
            return;
        }


        // ==========================================
        // FAKE OPEN
        // ==========================================

        if(mission05State==="fakeOpen"){

            mission05State="locked";

            mission05Card.classList.remove("open");
            mission05Card.classList.add("locked");

            setMission05Status("🔒");

            mission05Timer.style.display="block";

            return;

        }


        // ==========================================
        // REAL OPEN
        // ==========================================

        if(mission05State==="realOpen"){

            missionPanel.classList.remove("show");

            mission05Detail.classList.add("show");

        }

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

        if(answer==="4570"){

            mission05FacePopup.style.display="block";

        }

        else{

            alert("다시 입력해주세요!");

        }

    });

}



if(closeMission05FacePopup){

    closeMission05FacePopup.addEventListener("click",()=>{

        mission05FacePopup.style.display="none";

        mission05CodeArea.style.display="block";

    });

}

// =====================================================
//                  MISSION 05 CODE
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


// =====================================================
//                  CHECK CODE
// =====================================================

if(checkMission05Code){

    checkMission05Code.addEventListener("click",()=>{

        const code =
        mission05Code.value.trim();


        if(code==="3180"){

            mission05Status.innerHTML="CLEAR ✓";

            mission05ClearPopup.style.display="flex";


            // =================================================
            // Mission06 Timer
            // =================================================

            startMission06Timer();


        }else{

            alert("인증번호가 틀렸습니다.");

        }

    });

}


// =====================================================
//                  CLEAR CLOSE
// =====================================================

if(closeMission05Clear){

    closeMission05Clear.addEventListener("click",()=>{

        mission05ClearPopup.style.display="none";

        mission05Detail.classList.remove("show");

        showLightFragment();

        missionPanel.classList.add("show");

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
// ⭐ 실제 오픈 시간 (리허설)
// ======================================

let mission06OpenTime = new Date();

// 시간 (리허설)
mission06OpenTime.setHours(19);
mission06OpenTime.setMinutes(55);
mission06OpenTime.setSeconds(0);


// ==========================
// MISSION 06 TIMER
// ==========================

function startMission06Timer(){

    if(!mission06Timer) return;

    mission06Timer.style.display="block";

    const timer=setInterval(()=>{

        const now = new Date();

        const distance =
        mission06OpenTime - now;

        if(distance<=0){

            clearInterval(timer);

            mission06Status.innerHTML="OPEN";

            mission06Timer.style.display="none";

            mission06Card.classList.remove("locked");

            mission06Card.classList.add("open");

            return;

        }

        const min =
        Math.floor(distance/1000/60);

        const sec =
        Math.floor((distance/1000)%60);

        mission06Timer.innerHTML=
        `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

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

if (checkMission06Quiz) {

    checkMission06Quiz.addEventListener("click", () => {

        const answer = mission06QuizAnswer.value
            .trim()
            .replace(/\s+/g, "")
            .toUpperCase();

        if (
            answer === "C구역7열37" ||
            answer === "C구역7열36" ||
            answer === "C구역7열38"
        ) {

            mission06FacePopup.style.display = "block";

        } else {

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

        if(code==="true love"){

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

        if(endingButton){

            endingButton.style.display="block";

        }

        endingOpenTime = new Date();

        // 날짜
        // endingOpenTime.setFullYear(2026);
        // endingOpenTime.setMonth(8);
        // endingOpenTime.setDate(25);

        // 시간 (리허설용으로 변경)
        endingOpenTime.setHours(21);
        endingOpenTime.setMinutes(30);
        endingOpenTime.setSeconds(0);

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

const endingSystemPopup =
document.getElementById("endingSystemPopup");

const endingRandomText =
document.getElementById("endingRandomText");

const closeEndingSystemPopup =
document.getElementById("closeEndingSystemPopup");


// =====================================================
//                  STORY ELEMENT
// =====================================================

const endingStoryOverlay =
document.getElementById("endingStoryOverlay");

const endingStoryText =
document.getElementById("endingStoryText");

const endingStoryNext =
document.getElementById("endingStoryNext");

const showConstellation =
document.getElementById("showConstellation");


// =====================================================
//                  CONSTELLATION
// =====================================================

const constellationPopup =
document.getElementById("constellationPopup");

const endingReplay =
document.getElementById("endingReplay");


// =====================================================
//              ENDING RANDOM TEXT
// =====================================================

// ==========================
// RANDOM TEXT
// ==========================

const endingRandomMessages=[

    "최종 암호를 해석하고 있습니다.",

    "미확인 흔적을 분석하고 있습니다.",

    "오래된 사랑을 대조하고 있습니다.",

    "전설의 발자취를 추적하고 있습니다.",

    "기록의 일치 여부를 확인하고 있습니다.",

    "누락된 수집템를 복원하고 있습니다.",

    "최종 절차를 진행하고 있습니다.",

    "분석 결과를 정리하고 있습니다.",

    "ㄹㅇㄷㅂㅇ...ㅁㄱㄹㅇ...",

    "잠시 후 다시 시도해주세요."

];


// ==========================
// RANDOM TEXT
// ==========================

function showEndingRandomMessage(){

    const randomMessage =
    endingRandomMessages[
        Math.floor(Math.random()*endingRandomMessages.length)
    ];

    if(endingRandomText){

        endingRandomText.innerHTML =
        randomMessage;

    }

    if(endingSystemPopup){

        endingSystemPopup.style.display="flex";

    }

}


// ==========================
// CLOSE
// ==========================

if(closeEndingSystemPopup){

    closeEndingSystemPopup.addEventListener("click",()=>{

        endingSystemPopup.style.display="none";

    });

}


// ==========================
// 실제 행사 전날 수정
// ==========================

let endingOpenTime;

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

if(endingStoryOverlay){

    endingStoryOverlay.style.display="none";

}

if(endingStoryNext){

    endingStoryNext.classList.remove("show");

}

if(showConstellation){

    showConstellation.style.display="none";

}

if(constellationPopup){

    constellationPopup.style.display="none";

}


// ==========================
// ENDING BUTTON
// ==========================

if(endingButton){

    endingButton.addEventListener("click",()=>{

        const now = new Date();

        // ==========================
        // LOCK
        // ==========================

        if(now < endingOpenTime){

            showEndingRandomMessage();

            return;

        }

        // ==========================
        // OPEN
        // ==========================

        startEnding();

    });

}


// ==========================
// START ENDING
// ==========================

function startEnding(){

    const endingFade =
    document.getElementById("endingFade");

    const glitter =
    document.querySelectorAll(".glitter");

    endingFade.classList.add("show");

    setTimeout(()=>{

        missionPanel.classList.remove("show");

        endingDetail.classList.add("show");

    },5000);

    setTimeout(()=>{

        endingFade.classList.remove("show");

    },5500);

    glitter.forEach((star,index)=>{

        setTimeout(()=>{

            star.classList.add("show");

        },2500+(index*120));

    });

    setTimeout(()=>{

        endingStar.classList.add("show");

    },4500);

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

        startEndingStory();

    });

}

// =====================================================
//                  LIBRA CONST
// =====================================================

const constellationTitle =
document.getElementById("constellationTitle");

const constellationDate =
document.getElementById("constellationDate");

const theEnd =
document.getElementById("theEnd");

const endingClose =
document.getElementById("endingClose");

const libraStars = [

document.getElementById("libraStar1"),
document.getElementById("libraStar2"),
document.getElementById("libraStar3"),
document.getElementById("libraStar4"),
document.getElementById("libraStar5"),
document.getElementById("libraStar6"),
document.getElementById("libraStar7")

];

// =====================================================
//                  LIBRA STORY
// =====================================================

const endingStoryList = [

`오래전,
누구도 끝을 맺지 못했던 전설은
긴 시간 동안 수많은 
조각으로 흩어졌습니다.

그 조각들은
사람들의 기억이 되었고,
누군가의 사랑이 되었으며,
누군가의 우정이 되어있기도 했습니다.

그렇게 전설은 오래된 기록과
작은 흔적 속에 조용히 남아 있었습니다.`,

`그러나 오늘,
당신은 그 흩어진 조각들을
하나씩 다시 이어 주었습니다.

그리고...

마지막 조각이
제자리를 찾는 순간,`,

`오래된 기록 속에 감춰져 있던
그 길을 지켜온 이름 모를 '길지기'의 역할도
비로소 끝났으며

오래도록 감춰져 있던
전설의 진실이 모습을 드러냈습니다.`,

`사람들은
이 이야기를
'디케의 전설'이라 불렀지만

그 전설은 처음부터
완성된 이야기가 아닌
디케조차 끝맺지 못했던 전설이었습니다.`,

`하지만 오늘,
당신이 마지막 조각을
제자리로 되돌려 놓음으로써,

비로소
전설은 완성되었습니다.`,

`전설은 완성되는 순간
끝나는 것이 아니라

누군가가 기억하고,누군가가 이어갈 때,
전설은 계속해서 살아갑니다.`,

`오늘,

당신의 하루가
그 전설의 마지막 페이지이자
새로운 첫 페이지가 되었습니다.

이제 이 이야기는
더 이상 디케의 전설이 아닙니다.....`

];

let endingStoryIndex = 0;

// =====================================================
//                  LIBRA STORY START
// =====================================================

function startEndingStory(){

    endingStoryIndex = 0;

    endingStoryOverlay.style.display="flex";

    showEndingStory();

}


// =====================================================
//                  LIBRA STORY SHOW
// =====================================================

function showEndingStory(){

    endingStoryText.classList.remove("show");

    endingStoryNext.classList.remove("show");

    setTimeout(()=>{

        endingStoryText.innerHTML =
        endingStoryList[endingStoryIndex];

        endingStoryText.classList.add("show");

        // 모든 페이지 동일하게 ✦ 하나만 사용
        endingStoryNext.innerHTML="✦";

        endingStoryNext.classList.add("show");

    },600);

}

// =====================================================
//                  LIBRA STORY NEXT
// =====================================================

if(endingStoryNext){

    endingStoryNext.addEventListener("click",()=>{

        if(endingStoryIndex < endingStoryList.length-1){

            endingStoryIndex++;

            showEndingStory();

            return;

        }

        // 마지막 페이지

        endingStoryText.classList.remove("show");
        endingStoryNext.classList.remove("show");

        setTimeout(()=>{

            endingStoryNext.style.display="none";

            showConstellation.style.display="block";

            showConstellation.classList.add("show");

        },600);

    });

}

// =====================================================
//                  LIBRA SYSTEM
// =====================================================

function startLibraEnding(){

    constellationTitle.innerHTML="LIBRA";
    constellationDate.innerHTML="09.24 ~ 10.22";

    constellationTitle.style.color="#ffffff";
    constellationDate.style.color="rgba(255,255,255,.75)";

    constellationTitle.style.opacity="0";
    constellationDate.style.opacity="0";

    theEnd.style.opacity="0";

    endingClose.style.opacity="0";
    endingClose.style.pointerEvents="none";



    // ==========================
    // STAR RESET
    // ==========================

    libraStars.forEach(star=>{

        star.classList.remove("show");

    });



    // ==========================
    // STAR APPEAR
    // (랜덤 느낌)
    // ==========================

    const starDelay=[

        800,     // star1
        0,       // star2
        2600,    // star3
        1700,    // star4
        350,     // star5
        2100,    // star6
        1300     // star7

    ];

    libraStars.forEach((star,index)=>{

        setTimeout(()=>{

            star.classList.add("show");

        },starDelay[index]);

    });



    // ==========================
    // STAR FINISH
    // ==========================

    const starFinish=4400;



    // ==========================
    // LIBRA FADE IN
    // ==========================

    setTimeout(()=>{

        constellationTitle.style.opacity="1";
        constellationDate.style.opacity="1";

    },starFinish);



    // ==========================
    // LIBRA → LIBRA.JH
    // ==========================

    setTimeout(()=>{

        constellationTitle.style.opacity="0";
        constellationDate.style.opacity="0";

    },starFinish+2200);



    setTimeout(()=>{

        constellationTitle.innerHTML="LIBRA.JH";
        constellationDate.innerHTML="9.25";

        constellationTitle.style.color="#e7d6a5";
        constellationDate.style.color="#e7d6a5";

        constellationTitle.style.opacity="1";
        constellationDate.style.opacity="1";

    },starFinish+3200);



    // ==========================
    // THE END
    // ==========================

    setTimeout(()=>{

        theEnd.style.opacity="1";

    },starFinish+5600);



    // ==========================
    // 목록으로
    // ==========================

    setTimeout(()=>{

        endingClose.style.opacity="1";

        endingClose.style.pointerEvents="auto";

    },starFinish+6900);

}

// =====================================================
//          LIBRA SHOW CONSTELLATION
// =====================================================

if(showConstellation){

    showConstellation.addEventListener("click",()=>{

        showConstellation.classList.remove("show");
        showConstellation.style.display="none";

        endingStoryOverlay.style.display="none";

        constellationPopup.style.display="flex";

        startLibraEnding();

    });

}

// =====================================================
//                  LIBRA BUTTON
// =====================================================

if(endingClose){

    endingClose.addEventListener("click",()=>{

        constellationPopup.style.display="none";

        endingDetail.classList.remove("show");

        missionPanel.classList.add("show");

    });

}

// =====================================================
//              HIDDEN 01 OPENING
// =====================================================

// ==========================
// COLOR
// ==========================

const hiddenOpeningColors = [

    "#ffffff", // White
    "#fc6edbcb", //pink
    "#7a5cff", // Purple
    "#80ef94", // green
    "#ffe14d"  // Gold

];


// ==========================
// SPEED
// ==========================

const hiddenOpeningSpeeds = [

    25,
    20,
    15,

];


// ==========================
// PATTERN
// ==========================

const hiddenPatterns = [

    "AAABBBAAABBBAAABBB",
    "ABABABABABABABAB",
    "AAAABBBBABAABBBB",
    "AABBAABBBBAAAABB",
    "ABBAABBABAABBABA"

];


// ==========================
// START
// ==========================

function startHidden01Opening(){

    const opening =
    document.getElementById("hidden01Opening");

    opening.style.display="block";

    // ======================
    // Color Random
    // ======================

    const colorA =
    hiddenOpeningColors[
        Math.floor(Math.random()*hiddenOpeningColors.length)
    ];

    let colorB = colorA;

    while(colorB===colorA){

        colorB =
        hiddenOpeningColors[
            Math.floor(Math.random()*hiddenOpeningColors.length)
        ];

    }

    // ======================
    // Speed Random
    // ======================

    const speed =
    hiddenOpeningSpeeds[
        Math.floor(Math.random()*hiddenOpeningSpeeds.length)
    ];

    // ======================
    // Pattern Random
    // ======================

    const pattern =
    hiddenPatterns[
        Math.floor(Math.random()*hiddenPatterns.length)
    ];

    let index = 0;

    // ======================
    // Opening Duration
    // ======================

    const openingDuration = 7000; // 7초 (5000=5초 / 10000=10초)

    const startTime = Date.now();

    opening.style.opacity = "1";

    const flash = setInterval(()=>{

        // 지정 시간 종료
        if(Date.now() - startTime >= openingDuration){

            clearInterval(flash);

            opening.style.display = "none";
            opening.style.opacity = "0";

            hidden01Popup.style.display = "flex";

            return;

        }

        // 패턴 끝나면 다시 처음부터
        if(index >= pattern.length){

            index = 0;

        }

        if(pattern[index] === "A"){

            opening.style.background = colorA;

        }else{

            opening.style.background = colorB;

        }

        index++;

    }, speed);

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

        startHidden01Opening();

    },30000);

}



// ======================================
// ANSWER
// ======================================

if(checkHidden01){

    checkHidden01.addEventListener("click",()=>{

        const answer=
        hidden01Answer.value.trim();

        if(answer==="모노멘션"){

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


// =====================================================
//              HIDDEN 02 OPENING
// =====================================================

function startHidden02Opening(){

    const opening =
    document.getElementById("hidden02Opening");

    opening.style.display="block";
    opening.style.opacity="1";

    // ======================
    // Purple Strobe
    // ======================

    const colorA="#7a5cff";
    const colorB="#ffffff";
    const pattern="AAABBABBAAABABBBAAABBB";
    const speed=18;
    const openingDuration=2200;

    let index=0;

    const startTime=Date.now();

    const flash=setInterval(()=>{

        if(Date.now()-startTime>=openingDuration){

            clearInterval(flash);

            opening.style.display="none";
            opening.style.opacity="0";

            hidden02Popup.style.display="flex";

            return;

        }

        if(index>=pattern.length){

            index=0;

        }

        if(pattern[index]==="A"){

            opening.style.background=colorA;

        }

        else{

            opening.style.background=colorB;

        }

        index++;

    },speed);

}

// =====================================================
//                  HIDDEN 02 ANSWER
// =====================================================

if(checkHidden02){

    checkHidden02.addEventListener("click",()=>{

        const answer =
        hidden02Answer.value.trim();

        if(answer==="케키하우스"){

            console.log("Hidden02 CLEAR");

            hidden02Popup.style.display="none";

// =================================================
//          REAL MISSION05 TIMER START
// =================================================

mission05OpenTime = new Date();

// 날짜
// mission05OpenTime.setFullYear(2026);
// mission05OpenTime.setMonth(8);
// mission05OpenTime.setDate(25);

// 시간 (리허설용)
mission05OpenTime.setHours(18);
mission05OpenTime.setMinutes(0);
mission05OpenTime.setSeconds(0);

console.log("Real Timer Start");

startMission05Timer();

        }

        else{

            alert("다시 입력해주세요.");

        }

    });

}


// =====================================================
//              HIDDEN 02 TIMER
// =====================================================

let hidden02OpenTime;
let hidden02TimerStarted=false;

function startHidden02Timer(){

    if(hidden02TimerStarted) return;

    hidden02TimerStarted=true;

    const timer=setInterval(()=>{

        const now = new Date();

        const distance =
        hidden02OpenTime - now;

        if(distance <= 0){

            clearInterval(timer);

            startHidden02Opening();

            return;

        }

    },1000);

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