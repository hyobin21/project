// 예시 데이터 (팀원이 수정)
const foodData = {
    "noodle": {
        "cold": [
            { name: "냉모밀", store: "가게A" },
            { name: "냉우동", store: "가게B" }
        ],
        "hot": [
            { name: "우동", store: "가게C" },
            { name: "라면", store: "가게D" }
        ]
    },
    "korean": {
        "cold": [
            { name: "냉면", store: "가게E" }
        ],
        "hot": [
            { name: "김치찌개", store: "가게F" }
        ]
    }
};

// 저장된 선택 정보 가져오기
const selectedCategory = localStorage.getItem("category");
const selectedTemp = localStorage.getItem("temp");

// 결과 랜덤 추출
function showResult() {
    const list = foodData[selectedCategory][selectedTemp];
    const randomIndex = Math.floor(Math.random() * list.length);
    const item = list[randomIndex];

    document.getElementById("food-name").textContent = `추천 메뉴 : ${item.name}`;
    document.getElementById("store-name").textContent = `추천 매장 : ${item.store}`;
}

showResult();
