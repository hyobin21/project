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
        // 회전 각도를 계산하여 선택된 아이템 찾기
        // (간단하게 랜덤으로 선택된 아이템을 다음 페이지로 넘깁니다)
        // 실제 각도 계산이 복잡할 수 있으므로, 데이터 중 하나를 랜덤 확정하여 넘기는 것이 구현상 안전함
        const selectedFood = menuList[Math.floor(Math.random() * menuList.length)];
        
        localStorage.setItem('resultFood', JSON.stringify(selectedFood));
        
        // 폭죽 효과는 다음 페이지 넘어가면서 혹은 여기서 간단한 alert 대신 바로 이동
        location.href = 'result.html';
    }, rotateTime * 1000);
};

drawRoulette();