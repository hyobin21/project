// 팀원들이 이 부분을 수정해서 데이터를 채워넣으세요!
const foodDatabase = {
    "면": [
        { 
            name: "냉면", 
            store: [
                {store: "원조청학칡냉면", link: "https://naver.me/GzEkOGyx" }
            ]
        },
        { 
            name: "칼국수", 
            store: [
                {store: "탐나는바지락손칼국수", link: "https://naver.me/FMTOyciD" },
                {store: "밀숲", link: "https://map.naver.com" }
            ]
        },
        { 
            name: "마라탕",
            store: [
                {store: "라화쿵부", link: "https://naver.me/GDaA5ts0" },
                {store: "홍성마라미방", link: "https://naver.me/G65wNWd2" },
                {store: "탕화쿵푸", link: "https://naver.me/FpxqfxwK" }
            ]
        },
        {
            name: "짬뽕",
            store: [
                {store: "도야짬뽕", link: "https://naver.me/GKUJyNTD" },
                {store: "북경반점", link: "https://naver.me/FBepBdq3" },
                {store: "행복한짬뽕", link: "https://naver.me/GXAfUMZR" }
            ]
        },
        {
            name: "짜장",
            store: [
                {store: "도야짬뽕", link: "https://naver.me/GKUJyNTD" },
                {store: "북경반점", link: "https://naver.me/FBepBdq3" },
                {store: "행복한짬뽕", link: "https://naver.me/GXAfUMZR" }
            ]
        },
        {
            name: "라멘",
            store: [
                {store: "코운즈", link: "https://naver.me/Fmf6TDvD" },
                {store: "핵밥", link: "https://naver.me/FxFE6Hx8" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg"}
            ]
        },
        {
            name: "소바",
            store: [
                {store: "코운즈", link: "https://naver.me/Fmf6TDvD" },
                {store: "핵밥", link: "https://naver.me/FxFE6Hx8" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg"}
            ]
        },
        {
            name: "파스타",
            store: [
                {store: "파앤피파스타하우스", link: "https://naver.me/FY3WucQt" },
                {store: "성북동경양식", link: "https://naver.me/GRo4lMrI" },
                {store: "언니네화덕핏짜", link: "https://naver.me/x2jQ1Kyt"}
            ]
        },
        {
            name: "쌀국수",
            store: [
                {store: "남월", link: "https://naver.me/G58gyIQo" },
                {store: "인더비엣", link: "https://naver.me/xWTn8qZB" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg"}
            ]
        },
    ],
    "한식": [
        {
            name: "닭갈비",
            store: [
                {store: "유가네 닭갈비", link: "https://naver.me/xl0A33LT" },
                {store: "부대통령뚝배기", link: "https://naver.me/IgJGvuYv" }
            ]
        },
        {
            name: "찌개/탕",
            store: [
                {store: "찌개찌개", link: "https://naver.me/FmfPo6DQ" },
                {store: "부대통령뚝배기", link: "https://naver.me/IgJGvuYv" },
                {store: "오늘도부찌", link: "https://naver.me/xmxICYTK" }
            ]
        },
        {
            name: "비빔밥",
            store: [
                {store: "교반", link: "https://naver.me/I55aTYjz" },
                {store: "육회바른연어", link: "https://naver.me/FQVXmVln" },
                {store: "육앤샤", link: "https://naver.me/FqWtAguc" }
            ]
        },
        {
            name: "떡볶이",
            store: [
                {store: "신전떡볶이", link: "https://naver.me/GsjI0tDm" },
                {store: "참새방앗간", link: "https://naver.me/54Lqgb1S" },
                {store: "명가떡볶이", link: "https://naver.me/FCAmw3dv" }
            ]
        },
        {
            name: "순대",
            store: [
                {store: "현가병천순대장터국밥", link: "https://naver.me/5vcHntbD" }
            ]
        },
        {
            name: "두루치기",
            store: [
                {store: "두루정", link: "https://naver.me/GV2tk6kw" },
                {store: "91콩삼콩나물삼겹살", link: "https://naver.me/xk1wyi6e" }
            ]
        },
        {
            name: "짜글이",
            store: [
                {store: "두루정", link: "https://naver.me/GV2tk6kw" }
            ]
        },
        {
            name: "만두",
            store: [
                {store: "북촌손만두", link: "https://naver.me/5HkHHkR6" },
                {store: "원조청학칡냉면", link: "https://naver.me/F428yM0e" }
            ]
        },
        {
            name: "솥밥",
            store: [
                {store: "에비수", link: "https://naver.me/GI3J2IH8" },
                {store: "동양솥밥", link: "https://naver.me/FLyTXrni" }
            ]
        },
        {
            name: "샤브샤브",
            store: [
                {store: "육앤샤", link: "https://naver.me/FqWtAguc" }
            ]
        },
        {
            name: "알밥",
            store: [
                {store: "알촌", link: "https://naver.me/FO9zPVpC" }
            ]
        },
        {
            name: "구이",
            store: [
                {store: "이서식당", link: "https://naver.me/G58g18j2" },
                {store: "기찬고기", link: "https://naver.me/xnhL4dST" },
                {store: "돼지우리", link: "https://naver.me/FUhXlMuo" }
            ]
        },
        { 
            name: "냉면", 
            store: [
                {store: "원조청학칡냉면", link: "https://naver.me/GzEkOGyx" }
            ]
        },
        { 
            name: "칼국수", 
            store: [
                {store: "탐나는바지락손칼국수", link: "https://naver.me/FMTOyciD" },
                {store: "밀숲", link: "https://map.naver.com" }
            ]
        },
    ],
    "중식": [
        { 
            name: "마라탕",
            store: [
                {store: "라화쿵부", link: "https://naver.me/GDaA5ts0" },
                {store: "홍성마라미방", link: "https://naver.me/G65wNWd2" },
                {store: "탕화쿵푸", link: "https://naver.me/FpxqfxwK" }
            ]
        },
        { 
            name: "마라샹궈",
            store: [
                {store: "라화쿵부", link: "https://naver.me/GDaA5ts0" },
                {store: "홍성마라미방", link: "https://naver.me/G65wNWd2" },
                {store: "탕화쿵푸", link: "https://naver.me/FpxqfxwK" }
            ]
        },
        {
            name: "짜장",
            store: [
                {store: "도야짬뽕", link: "https://naver.me/GKUJyNTD" },
                {store: "북경반점", link: "https://naver.me/FBepBdq3" },
                {store: "행복한짬뽕", link: "https://naver.me/GXAfUMZR" }
            ]
        },
        {
            name: "짬뽕",
            store: [
                {store: "도야짬뽕", link: "https://naver.me/GKUJyNTD" },
                {store: "북경반점", link: "https://naver.me/FBepBdq3" },
                {store: "행복한짬뽕", link: "https://naver.me/GXAfUMZR" }
            ]
        },
    ],
    "일식": [
        {
            name: "카레",
            store: [
                {store: "은화수식당", link: "https://naver.me/GtURnCbu" },
                {store: "자이카", link: "https://naver.me/xbA5ILvA" },
                {store: "핵밥", link: "https://naver.me/FxFE6Hx8" }
            ]
        },
        {
            name: "덮밥",
            store: [
                {store: "육회바른연어", link: "https://naver.me/FQVXmVln" },
                {store: "앤의식탁", link: "https://naver.me/GXAaZKNY" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg" }
            ]
        },
        {
            name: "라멘",
            store: [
                {store: "코운즈", link: "https://naver.me/Fmf6TDvD" },
                {store: "오빈라멘", link: "https://naver.me/GDaRddHT" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg" }
            ]
        },
        {
            name: "돈카츠",
            store: [
                {store: "코운즈", link: "https://naver.me/Fmf6TDvD" },
                {store: "백소정", link: "https://naver.me/56R6f48f" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg" }
            ]
        },
        {
            name: "소바",
            store: [
                {store: "코운즈", link: "https://naver.me/Fmf6TDvD" },
                {store: "백소정", link: "https://naver.me/56R6f48f" },
                {store: "면식당", link: "https://naver.me/5bVsYxjg" }
            ]
        },
        {
            name: "초밥",
            store: [
                {store: "육회바른연어", link: "https://naver.me/FQVXmVln" },
                {store: "에비수", link: "https://naver.me/GI3J2IH8" },
                {store: "정직유부", link: "https://naver.me/FEUamHPI" }
            ]
        },
    ],
    "양식": [
        {
            name: "샌드위치",
            store: [
                {store: "써브웨이", link: "https://naver.me/Fy23fl1z" }
            ]
        },
        {
            name: "토스트",
            store: [
                {store: "이삭토스트", link: "https://naver.me/5fIlRYfm" }
            ]
        },
        {
            name: "파스타",
            store: [
                {store: "파앤피파스타하우스", link: "https://naver.me/FY3WucQt" },
                {store: "성북동경양식", link: "https://naver.me/GRo4lMrI" },
                {store: "언니네화덕핏짜", link: "https://naver.me/x2jQ1Kyt" }
            ]
        },
        {
            name: "리조또",
            store: [
                {store: "파앤피파스타하우스", link: "https://naver.me/FY3WucQt" },
                {store: "성북동경양식", link: "https://naver.me/GRo4lMrI" },
                {store: "언니네화덕핏짜", link: "https://naver.me/x2jQ1Kyt" }
            ]
        },
        {
            name: "필라프",
            store: [
                {store: "파앤피파스타하우스", link: "https://naver.me/FY3WucQt" },
                {store: "성북동경양식", link: "https://naver.me/GRo4lMrI" },
                {store: "양식당", link: "https://naver.me/xMjDZzrR" }
            ]
        },
    ],
    "패스트푸드": [
        {
            name: "치킨",
            store: [
                {store: "미쳐버린 파닭", link: "https://naver.me/GctJL1aw" },
                {store: "더치킨", link: "https://naver.me/FsRZ7VMn" },
                {store: "계림원", link: "https://naver.me/GalkO5I1" }
            ]
        },
        {
            name: "피자",
            store: [
                {store: "파앤피파스타하우스", link: "https://naver.me/FY3WucQt" },
                {store: "언니네화덕핏짜", link: "https://naver.me/x2jQ1Kyt" },
                {store: "페퍼로니버튼", link: "https://naver.me/FK5v8G4z" }
            ]
        },
        { 
            name: "컵밥", 
            store: [
                {store: "바비든든", link: "https://naver.me/5FEecQDm" },
                {store: "토마토도시락", link: "https://naver.me/5MVLxcth" }
            ]
        },
        { 
            name: "부리또", 
            store: [
                {store: "도스마스", link: "https://naver.me/xZVb8ZIF" },
                {store: "밀플랜비", link: "https://naver.me/FBeXgno5" }
            ]
        },
        {
            name: "햄버거",
            store: [
                {store: "뉴욕버거", link: "https://naver.me/5Kb3fIow" },
                {store: "토핑스온패티스", link: "https://naver.me/xq3arkmq" },
                {store: "봉구스밥버거", link: "https://naver.me/xprE8vO3" }
            ]
        },
    ],
    "카페/디저트": [
        {
            name: "빵",
            store: [
                {store: "한양베이커리", link: "https://naver.me/xhlmeH19" },
                {store: "프로스콘스", link: "https://naver.me/GctEQT2E" },
                {store: "이경순베이커리", link: "https://naver.me/x8tnAVsY" }
            ]
        },
        {
            name: "쿠키",
            store: [
                {store: "코지홀리데이", link: "https://naver.me/G65JIhid" },
                {store: "신디도넛", link: "https://naver.me/GrmaGVxO" }
            ]
        },
        {
            name: "빙수",
            store: [
                {store: "요거프레소", link: "https://naver.me/GctwR0fv" },
                {store: "썬더커피", link: "https://naver.me/GBvLcl3S" },
                {store: "UP플레이스", link: "https://naver.me/GgWk159w" }
            ]
        },
        {
            name: "아이스크림",
            store: [
                {store: "요거프레소", link: "https://naver.me/GctwR0fv" },
                {store: "모모커피", link: "https://naver.me/Gubs6BYh" }
            ]
        },
        {
            name: "커피",
            store: [
                {store: "블루포트", link: "https://naver.me/GalEiPGg" },
                {store: "스타벅스", link: "https://naver.me/xv3eJ4Ct" },
                {store: "UP플레이스", link: "https://naver.me/GgWk159w" }
            ]
        },
        {
            name: "논커피",
            store: [
                {store: "블루포트", link: "https://naver.me/GalEiPGg" },
                {store: "코이노커피", link: "https://naver.me/GRoqYru9" },
                {store: "더스크커피랩", link: "https://naver.me/GvcYNxCE" }
            ]
        },
        {
            name: "티",
            store: [
                {store: "시저커피", link: "https://naver.me/xdphr46M" },
                {store: "오토르테", link: "https://naver.me/FafEPhrw" },
                {store: "삐노누아", link: "https://naver.me/GPdmnl6W" }
            ]
        },
        {
            name: "주스",
            store: [
                {store: "코지홀리데이", link: "https://naver.me/G65JIhid" },
                {store: "쥬씨", link: "https://naver.me/xRhG9cqV" },
                {store: "삐노누아", link: "https://naver.me/GPdmnl6W" }
            ]
        },
        {
            name: "스무디",
            store: [
                {store: "썬더커피", link: "https://naver.me/xxFRiaXL" },
                {store: "메가MGC커피", link: "https://naver.me/xOxXSo8G" },
                {store: "UP플레이스", link: "https://naver.me/GgWk159w" }
            ]
        },
        {
            name: "에이드",
            store: [
                {store: "썬더커피", link: "https://naver.me/xxFRiaXL" },
                {store: "메가MGC커피", link: "https://naver.me/xOxXSo8G" },
                {store: "코지홀리데이", link: "https://naver.me/G65JIhid" }
            ]
        },
        {
            name: "버블티",
            store: [
                {store: "아마스빈", link: "https://naver.me/xMnmhzXY" },
                {store: "모모커피", link: "https://naver.me/Gubs6BYh" },
                {store: "UP플레이스", link: "https://naver.me/GgWk159w" }
            ]
        }
    ]
};
