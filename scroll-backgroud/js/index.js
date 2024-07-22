const bgScroll = () => {
	const scrollTop = window.scrollY || document.documentElement.scrollTop; // 브라우저(document.documentElement) 요소에서 스크롤 되는 픽셀 수를 가지고 와라(호환성 || 호환성)
	const docHeight = document.documentElement.scrollHeight; // HTML 화면 안에 전체 페이지 길이(창 내부 스크롤 되는 지점까지)
	// 스크롤 바를 포함한 전체 문서의 높이를 반환
	const fallRate = (scrollTop / docHeight) * 100; // Html 전체의 스크롤 위치에서 / 화면 안의 길이를 나눠 * 100을 곱하여 계산하라.
	const fallImage = document.querySelector('.alice-falling');
	fallImage.style.transform = `translateX(-${fallRate}%)`; // x의 위치를 %로 표시하기
};
// window.scrollY(권장)
// 브라우저 창의 뷰포트 상단에서 문서 상단까지의 수직 거리
// 대부분의 현대 브라우저에서 지원
// window.pageYOffset과 동일

// document.documentElement.scrollTop
// HTML 문서의 <html> 요소에 대한 스크롤 위치를 나타냄
// 주로 오래된 브라우저에서 window.scrollY를 지원하지 않을 때 사용되는 대체 방법

// 문서 전체 높이 - 뷰포트 높이 뺀 값
// document.documentElement.scrollHeight
// HTML 문서의 전체 높이 (문서의 모든 콘텐츠를 포함하여 스크롤이 가능한 영역의 전체 높이)
// 중요한 것은!! 문서의 내용이 길어서 스크롤이 필요한 경우, 이 값은 스크롤바를 포함한 문서의 전체 높이를 반환

// window.innerHeight
// 브라우저 창(뷰포트)의 높이 (현재 화면에 보이는 부분의 높이)

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
