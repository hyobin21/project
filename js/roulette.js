// roulette.js (교체본)
// foodDatabase는 food.js에서 제공됩니다.

const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');

const category = localStorage.getItem('selectedCategory'); // 선택한 카테고리
const menuList = (typeof foodDatabase !== 'undefined' && category && foodDatabase[category]) ? foodDatabase[category] : null;
const colors = ['#FFB7B2', '#B5EAD7', '#E2F0CB', '#FFDAC1', '#C7CEEA', '#90DBF4'];

if (!menuList || !Array.isArray(menuList) || menuList.length === 0) {
    // 카테고리나 메뉴가 없으면 사용자에게 알리고 카테고리 페이지로 복귀
    alert('선택된 카테고리에 메뉴가 없습니다. 카테고리를 다시 선택해주세요.');
    location.href = 'category.html';
}

// 캔버스 레이아웃/해상도 설정 (반응형 + 선명도 보정)
(function setupCanvas() {
    const size = 500; // CSS 픽셀 기준 캔버스 정사각 크기
    const dpr = window.devicePixelRatio || 1;

    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    canvas.width = Math.floor(size * dpr);
    canvas.height = Math.floor(size * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // 디바이스 픽셀 스케일 적용
})();

const CANVAS_SIZE = Math.min(canvas.clientWidth, canvas.clientHeight); // CSS 픽셀 기준
const CENTER = CANVAS_SIZE / 2;
const RADIUS = CENTER; // 바깥 반지름
let startAngle = 0;
const arc = (2 * Math.PI) / menuList.length; // 섹터 각도 (라디안)

// 룰렛 그리기
function drawRoulette() {
    // 캔버스 초기화
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    menuList.forEach((item, i) => {
        const angle = startAngle + i * arc;

        // 섹터 채우기
        ctx.beginPath();
        ctx.moveTo(CENTER, CENTER);
        ctx.arc(CENTER, CENTER, RADIUS, angle, angle + arc, false);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        // 텍스트 그리기 (섹터 중앙 근처, 회전 적용)
        ctx.save();
        ctx.fillStyle = "#333";
        // 글자 크기: 캔버스 크기에 따라 조금 조정
        const fontSize = Math.max(14, Math.floor(CANVAS_SIZE / 20));
        ctx.font = `bold ${fontSize}px Jua, sans-serif`;
        // 텍스트 위치: 섹터 중앙 방향으로 약간 안쪽 위치
        const textAngle = angle + arc / 2;
        const textRadius = RADIUS * 0.68;
        const x = CENTER + Math.cos(textAngle) * textRadius;
        const y = CENTER + Math.sin(textAngle) * textRadius;
        ctx.translate(x, y);
        // 텍스트 회전: 텍스트가 바깥을 향하도록 조정
        ctx.rotate(textAngle + Math.PI / 2);
        const name = String(item.name || '');
        // 간단한 텍스트 길이 조정: 너무 길면 축약
        const maxWidth = RADIUS * 0.9;
        let displayName = name;
        if (ctx.measureText(displayName).width > maxWidth) {
            // 길면 잘라서 말줄임
            while (displayName.length > 1 && ctx.measureText(displayName + '...').width > maxWidth) {
                displayName = displayName.slice(0, -1);
            }
            displayName = displayName + '...';
        }
        ctx.fillText(displayName, -ctx.measureText(displayName).width / 2, 0);
        ctx.restore();
    });
}

// 초기에 그리기
drawRoulette();

// 회전 및 결과 처리
spinBtn.addEventListener('click', function onSpinClick() {
    if (!menuList || menuList.length === 0) {
        alert('메뉴가 없습니다.');
        return;
    }

    spinBtn.disabled = true;

    const totalSectors = menuList.length;
    const rotateTime = 5; // 초
    const spins = 10; // 정수 바퀴 수 (눈속임용)
    // 당첨 인덱스 미리 결정
    const resultIndex = Math.floor(Math.random() * totalSectors);

    // 각도 계산 (deg 단위로 계산해서 CSS rotate에 사용)
    const sectorAngleDeg = 360 / totalSectors;
    // 해당 섹터의 중앙 각도 (캔버스 0도 = 오른쪽(3시) 기준)
    let sectorCenterDeg = (resultIndex * sectorAngleDeg) + (sectorAngleDeg / 2);

    // 화살표(멈춤 기준) 각도: 기본 12시(위)를 가리키는 경우 270deg 사용
    // 캔버스 0deg = 오른쪽(3시). 12시는 270deg입니다.
    const arrowAngleDeg = 270;

    // 회전 보정: 섹터 중앙이 화살표 각도로 오도록 계산
    // finalRotation = spins*360 + (arrowAngleDeg - sectorCenterDeg)
    let rotationDelta = arrowAngleDeg - sectorCenterDeg;

    // 정밀도 문제 완화를 위해 소수점 반올림
    rotationDelta = Math.round(rotationDelta * 1000) / 1000;

    let finalRotation = spins * 360 + rotationDelta;

    // 이전 transform 제거(연속 클릭 대비)
    canvas.style.transition = 'none';
    canvas.style.transform = 'rotate(0deg)';
    // 강제 reflow
    void canvas.offsetWidth;

    // transform-origin 중앙으로 지정
    canvas.style.transformOrigin = '50% 50%';

    // 애니메이션 적용
    canvas.style.transition = `transform ${rotateTime}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    canvas.style.transform = `rotate(${finalRotation}deg)`;

    // 애니메이션 종료 시 동작: 로컬스토리지에 결과 저장 후 결과 페이지로 이동
    setTimeout(() => {
        const selectedFood = menuList[resultIndex];
        // 결과 저장 형식: { name, stores }
        try {
            localStorage.setItem('resultFood', JSON.stringify({
                name: selectedFood.name,
                stores: selectedFood.store
            }));
        } catch (e) {
            console.error('resultFood 저장 중 오류:', e);
        }
        // 페이지 이동
        location.href = 'result.html';
    }, rotateTime * 1000 + 50); // 애니메이션이 끝난 직후
});
