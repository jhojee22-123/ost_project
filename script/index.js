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
