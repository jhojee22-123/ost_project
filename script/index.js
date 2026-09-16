const topbanner = new Swiper ('.top-banner-swiper',{
    slidesPerView:'auto', // 화면에 보여주는 갯수 'auto'는 자동으로 화면맞춤 기본값1
    spaceBetween:60, //슬라이드와 다음 슬라이드 사이의 간격
    speed:10000, //속도
    loop:true, //무한반복
    autoplay:{
        delay: 0, //딜레이없이 움직임
        disableOnInteraction: false, //마우스 올려도 재생 유지
    },
    freeMode: true, //툭툭 끊기지 않고 부드럽게 이동
});

const mainbanner = new Swiper ('.main-banner-swiper',{

    // 1. 기본 설정
    loop: true,               // 슬라이드가 끝나면 첫 번째로 부드럽게 무한 반복
    speed: 800,               // 슬라이드가 넘어가는 전환 속도 (800은 0.8초)

    // 2. 자동 재생 설정
    autoplay: {
    delay: 4000,            // 몇 초 동안 머물렀다 넘어갈지 (4000 = 4초)
    disableOnInteraction: false, // 사용자가 마우스로 건드려도 자동 재생이 멈추지 않음
    },

    // 3. 하단 스크롤바 연결
    scrollbar: {
    el: '.banner-scrollbar', //고유 변수로 변경
    draggable: true,        // 스크롤바를 마우스로 잡고 움직일 수 있는지 여부
}});

//bestnew-container for03.js 참고
// 1. 변수지정(2,2)
    const tabButtons = document.querySelectorAll('.bestnew-tabs .tab-btn');
    const productLists = document.querySelectorAll('.bestnew-product .product-list');

// 2.모든 active 비활성화
    function resetFunc(target) {  //target 배열변수가 있는 resetFunc함수지정
    for (let reset of target) { //모든 target배열의 '객체정보'가 reset에 저장 <>in 은 '인덱스'저장
        reset.classList.remove('active'); //reset의 클래스명 active를 모두제거
    }
}

// 3. 
tabButtons.forEach((o, i) => { //o는 객체정보, i는 index(순서)/ tabButtons을 하나씩 꺼내서 o,i에 넣고 실행
    o.addEventListener('click', () => { //o 에게 click시 실행할 이벤트를 추가

        resetFunc(tabButtons); // 위 함수실행
        o.classList.add('active'); //o의 classList에 active를 추가한다
        console.log(i);//버튼클릭시 확인가능
        resetFunc(productLists);
        productLists[i].classList.add('active'); // 상품목록[상품정보의 순서와 동일]의 classList에 active 실행
    });
});