// 반응형 대응
// 1. 미디어 쿼리 문자열 정의
const wrap = document.querySelector('#wrap');
const mediaQueryString = '(max-width: 1040px)';

// 2. matchMedia() 함수를 사용하여 미디어 쿼리 객체 생성
const mediaQueryList = window.matchMedia(mediaQueryString);

console.log(mediaQueryList);
// 초기 상태 확인
console.log(mediaQueryList.matches); // 현재 미디어 상태와 일치하는지 여부를 확인

// 4. 변경 감지 이벤트 등록
function handleMediaChange(tablet) {
	if (tablet.matches === true) {
		// 미디어 쿼리에 일치할 때 실행되는 코드
		console.log('현재 미디어 상태와 일치합니다.');
		wrap.className = 'tablet';
		wrap.style.background = 'rosybrown';
	} else if (tablet.matches === false) {
		// 미디어 쿼리에 일치하지 않을 때 실행되는 코드
		console.log('현재 미디어 상태와 일치하지 않습니다.');
		wrap.className = 'desktop';
	}
}

// 5. 변경 감지 이벤트 리스너 추가
mediaQueryList.addListener(handleMediaChange);

// 3. 초기 실행
handleMediaChange(mediaQueryList);

// 6. resize 이벤트에 대한 이벤트 리스너 추가
window.addEventListener('resize', function () {
	// 뷰포트 크기가 변경될 때 실행되는 코드
	console.log('뷰포트 크기가 변경되었습니다.');
	handleMediaChange(mediaQueryList); // 변경 감지 함수 호출
});
