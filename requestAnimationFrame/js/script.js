const ico = document.querySelector('.ico-cat');
const img_women = document.querySelector('.img_women');
const img_hat = document.querySelector('.img_hat');
const value = document.querySelector('.value');
let yPos = 0; //변수
let xPos = 0;
let rafId; //변수
// let yPos = 0; //변수
// let rafId; //변수

// requestAnimationFrame(() =>{
//     console.log(0); //두번째
// });
// console.log(1); //첫번째

function rander() {
	value.innerHTML = yPos; //값에 innerHTML로 yPoz를 출력 후
	img_women.style.transform = `translateY(${-yPos}px)`; //위로 올라갈 때는 -(값이 감소)
	img_hat.style.transform = `translateY(${-yPos - 10}px)`;
	ico.style.transform = `translate(${-xPos}px, ${-yPos}px)`;
	//yPos++;// 1씩 늘림
	xPos += 10;
	yPos += 10; // 10씩 증가

	//랜더 함수를 빠른 속도로 변화 시키려고 한다
	rafId = requestAnimationFrame(rander); //requestAnimationFrame 메서드 안에 인자로 rander을 함수 자체를 호출
	console.log(rafId); //숫자를 리턴
	//리턴 값 가지고 있어서
	//초당 60번을 목표로 한다

	if (yPos > 500) {
		//클릭 안하고 500보다 커지면 멈춤
		cancelAnimationFrame(rafId);
	}
}
rander(); //0으로 출력

//애니메이션 클릭 멈춤
window.addEventListener('click', () => {
	cancelAnimationFrame(rafId); //매개변수 안에 인자로 변수를 넣음
});
