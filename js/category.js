// 페이지 로드 시 실행
window.onload = function() {
    const mealType = localStorage.getItem('mealType'); // 1단계 선택값 가져오기
    const categoryBox = document.getElementById('category-box');

    let categories = [];

    if (mealType === 'main') {
        categories = ['면', '한식', '중식', '일식', '양식'];
    } else {
        categories = ['패스트푸드', '카페/디저트'];
    }

    // 버튼 생성 로직
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.innerText = cat;
        // 색상을 번갈아가며 적용하기 위한 배열
        const colors = ['blue', 'pink', 'green', 'purple', 'yellow'];
        btn.className = `btn ${colors[index % colors.length]}`;
        
        btn.onclick = () => {
            localStorage.setItem('selectedCategory', cat);
            location.href = 'roulette.html'; // 룰렛 페이지로 이동
        };
        categoryBox.appendChild(btn);
    });
};