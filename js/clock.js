const clock = document.querySelector(".clock");

function clcokUpdate() {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMon = nowDate.getMonth() + 1;
    const nowDay = nowDate.getDate();
    const nowHour = String(nowDate.getHours()).padStart(2 ,"0");
    const nowMin = String(nowDate.getMinutes()).padStart(2, "0");
    const nowSec = String(nowDate.getSeconds()).padStart(2, "0");
    clock.innerText = `${nowYear}년 ${nowMon}월 ${nowDay}일\n${nowHour}:${nowMin}:${nowSec}`;
}

clcokUpdate();

setInterval(clcokUpdate, 1000);
