const wheel = document.getElementById("roulette-wheel");
const spinBtn = document.getElementById("spin-btn");

spinBtn.addEventListener("click", () => {
    const randomRotation = Math.floor(Math.random() * 360) + 720;
    wheel.style.transform = `rotate(${randomRotation}deg)`;

    // 4초 후 결과 페이지로 이동
    setTimeout(() => {
        window.location.href = "result.html";
    }, 4000);
});
