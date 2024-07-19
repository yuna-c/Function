const scrollTop = function () {
	// html 버튼 만들기
	const scrollBtn = document.createElement('button');

	scrollBtn.innerHTML = '&uarr;';
	scrollBtn.setAttribute('id', 'btn-top'); // 속성 값을 추가하는 함수, 이미 있으면 업데이트 된다.

	document.body.appendChild(scrollBtn);

	// hide/show 버튼 베이스를 스크롤 거리에 따라 설정
	const scrollBtnDisplay = function () {
		// 윈도우의 문서가 수직으로 얼마나 스크롤 됬는지 픽셀 단위로 반환
		window.scrollY > window.innerHeight ? scrollBtn.classList.add('show') : scrollBtn.classList.remove('show');
	};

	window.addEventListener('scroll', scrollBtnDisplay);
	// 버튼 클릭시 위로가기
	const scrollWindow = function () {
		if (window.scrollY != 0) {
			// 이 구문을 사용하면 scroll-behavior: smooth를 사용 했을 시 버벅이고 잘 안내려가는 현상이 발생하기 때문에 scrollBy로 변경하였다.
			// setTimeout(function () {
			// 	window.scrollTo(0, window.scrollY - 50);
			// 	scrollWindow();
			// }, 10);
			window.scrollBy({ top: wrap.getBoundingClientRect().top, behavior: 'smooth' });
			// getBoundingClientRect() : HTML 요소의 크기와 현재 뷰포트에서의 요소의 상대적인 위치 정보를 반환, 스크롤 될 때마다 바뀜
		}
	};

	scrollBtn.addEventListener('click', scrollWindow);
};

scrollTop();

console.clear();
const elem = document.querySelectorAll('.box');
console.log(elem);
const box1 = elem[0].getBoundingClientRect();
const box2 = elem[1].getBoundingClientRect();
console.log(box1);
console.log('----------------------');
console.log(box2);
