const bar = document.querySelector('.bar');

window.addEventListener('scroll', function () {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
	const scrollRate = (scrollTop / scrollHeight) * 100;

	// bar.style.width = scrollRate + '%';
	bar.style.width = `${scrollRate}%`;
});
