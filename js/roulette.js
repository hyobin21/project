const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');

const category = localStorage.getItem('selectedCategory'); // 선택한 카테고리
const menuList = foodDatabase[category]; // store.js에서 데이터 가져옴
const colors = ['#FFB7B2', '#B5EAD7', '#E2F0CB', '#FFDAC1', '#C7CEEA', '#90DBF4'];

let startAngle = 0;
const arc = Math.PI / (menuList.length / 2);

// 1. 룰렛 그리기
function drawRoulette() {
    menuList.forEach((item, i) => {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i % colors.length];
        
        ctx.beginPath();
        ctx.arc(250, 250, 250, angle, angle + arc, false);
        ctx.arc(250, 250, 0, angle + arc, angle, true);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "#555";
        ctx.font = "bold 24px Jua";
        ctx.translate(250 + Math.cos(angle + arc / 2) * 180, 250 + Math.sin(angle + arc / 2) * 180);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.fillText(item.name, -ctx.measureText(item.name).width / 2, 0);
        ctx.restore();
    });
}

// 2. 룰렛 돌리기
spinBtn.onclick = function() {
    const randomRotate = Math.floor(Math.random() * 360) + 3600; // 최소 10바퀴 이상 회전
    const rotateTime = 5; // 5초

    canvas.style.transition = `transform ${rotateTime}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    canvas.style.transform = `rotate(${randomRotate}deg)`;
    
    spinBtn.disabled = true; // 버튼 비활성화

    // 5초 후 결과 계산 및 이동
    setTimeout(() => {
    const selectedFood = menuList[Math.floor(Math.random() * menuList.length)];
    
    localStorage.setItem('resultFood', JSON.stringify({
        name: selectedFood.name,
        stores: selectedFood.store
    }));
    
    location.href = 'result.html';
}, rotateTime * 1000);
}

drawRoulette();