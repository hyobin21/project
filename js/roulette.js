const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');

const category = localStorage.getItem('selectedCategory');
const menuList = foodDatabase[category]; 
const colors = ['#FFB7B2', '#B5EAD7', '#E2F0CB', '#FFDAC1', '#C7CEEA', '#90DBF4'];

let startAngle = 0;
const arc = (2 * Math.PI) / menuList.length;   // 한 조각의 실제 각도(정확한 원형 유지)

// -----------------------------
// 1. 룰렛 그리기
// -----------------------------
function drawRoulette() {
    menuList.forEach((item, i) => {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i % colors.length];
        
        ctx.beginPath();
        ctx.arc(250, 250, 250, angle, angle + arc);
        ctx.arc(250, 250, 0, angle + arc, angle, true);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "#555";
        ctx.font = "bold 24px Jua";
        ctx.translate(
            250 + Math.cos(angle + arc / 2) * 180,
            250 + Math.sin(angle + arc / 2) * 180
        );
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.fillText(item.name, -ctx.measureText(item.name).width / 2, 0);
        ctx.restore();
    });
}

// -----------------------------
// 2. 룰렛 돌리기
// -----------------------------
spinBtn.onclick = function () {
    const rotateTime = 5;
    const randomRotate = Math.floor(Math.random() * 360) + 3600; // 최소 10바퀴

    canvas.style.transition = `transform ${rotateTime}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    canvas.style.transform = `rotate(${randomRotate}deg)`;

    spinBtn.disabled = true;

    // -----------------------------
    // 3. 회전이 끝난 뒤 실제 선택 항목 계산
    // -----------------------------
    setTimeout(() => {
            const finalDeg = randomRotate % 360;     // 0~359의 최종 회전 각도
            const arcDeg = 360 / menuList.length;    // 한 조각의 각도(도 단위)

            // ===== 좌표계 설명 =====
            // Canvas 각도 기준:
            //   270도 (위쪽 12시) ← 포인터 위치
            //     |
            // 180--+--0도 (오른쪽)
            //     |
            //   90도 (아래쪽)
            //
            // drawRoulette에서:
            // - 각 항목 i는 angle = i * arc 라디안 위치에서 시계 반대방향으로 arc만큼 범위를 차지
            // - index 0은 0라디안(오른쪽)부터 시작
            //
            // 회전 후:
            // - CSS transform rotate(finalDeg)로 시계방향 회전
            // - 원래 angle에 있던 항목은 angle_도 + finalDeg 위치로 이동
            // =====================
            
            const pointerAngle = 270;  // Canvas 기준 포인터 각도 (위쪽 12시)
            
            // 포인터 위치에서 원래 각도를 역산
            // 회전된 각도 = 원래 각도 + finalDeg
            // 원래 각도 = 회전된 각도 - finalDeg = 270 - finalDeg
            const originalAngle = (pointerAngle - finalDeg + 360) % 360;
            
            // 어느 조각에 해당하는지 계산
            // index i의 조각은 [i*arcDeg, (i+1)*arcDeg) 범위
            const index = Math.floor(originalAngle / arcDeg) % menuList.length;
            const selectedFood = menuList[index];

            // 디버그 정보 출력 (개발 완료 후 제거 가능)
            console.log("=== 룰렛 선택 정보 ===");
            console.log("카테고리:", category);
            console.log("항목 개수:", menuList.length);
            console.log("한 조각 각도:", arcDeg.toFixed(2) + "도");
            console.log("회전 각도:", finalDeg + "도");
            console.log("포인터 위치:", pointerAngle + "도 (위쪽)");
            console.log("역산된 원래 각도:", originalAngle.toFixed(2) + "도");
            console.log("선택 인덱스:", index);
            console.log("선택된 음식:", selectedFood.name);
            console.log("================================");

        // 결과 저장
        localStorage.setItem('resultFood', JSON.stringify({
            name: selectedFood.name,
            stores: selectedFood.store
        }));

        location.href = "result.html";
    }, rotateTime * 1000);
};

drawRoulette();
