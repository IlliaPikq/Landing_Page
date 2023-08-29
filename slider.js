
if(screen && screen.width == 800) {
	const slider = document.querySelector(".slider");
	let pressed = false,
		startX;
	slider.addEventListener("mousedown", (e) => {
		pressed = true;
		startX = e.clientX;
		e.target.style.cursor = "grabbing";
		e.preventDefault();
	});
	
	window.addEventListener("mouseup", () => {
		pressed = false;
	});
	
	slider.addEventListener("mouseleave", () => {
		pressed = false;
	});
	
	slider.addEventListener("mousemove", function (e) {
		if (!pressed) return;
		this.scrollLeft += 5 * (startX - e.clientX);	
	});
}