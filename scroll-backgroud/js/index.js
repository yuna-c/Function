const bgScroll = () => {
  const scrollTop = document.documentElement.scrollTop;// HTML(document.documentElement) 요소에서 스크롤 되는 픽셀 수를 가지고 와라
  const docHeight = window.innerHeight;// 화면 안에 전체 페이지 길이(창 내부 스크롤 되는 지점까지)
  const fallRate = scrollTop / docHeight * 10; // Html 전체의 스크롤 위치에서 / 화면 안의 길이를 나눠 * 10을 곱하여 계산하라.
  const fallImage = document.querySelector('.alice-falling');
  fallImage.style.transform = `translateX(-${fallRate}%)`; // x의 위치를 %로 표시하기 
};

window.addEventListener('scroll', bgScroll);

// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
// $(window).scroll(function () {
//   var scrollTop = $(window).scrollTop();
//   var docHeight = $(document).height();
//   var fallRate = scrollTop / docHeight * 100;
//   // console.log(fallRate);
//   $('.alice-falling').css({
//     'transform': 'translateX(-' + fallRate + '%)' });
// });
// //# sourceURL=pen.js

