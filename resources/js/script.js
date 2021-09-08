// Navigation Bar
const navSlide = () => {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".nav-links");

	// navigation toggle
	hamburger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		// close hamburger animaion
		hamburger.classList.toggle("close");
	});
};
navSlide();

// Testimonial Slider

var indexValue = 1;
showTestimonial(indexValue);

function slider(e) {
	showTestimonial((indexValue = e));
}
function arrow(e) {
	showTestimonial((indexValue += e));
}
function showTestimonial(e) {
	var i;
	const test_div = document.querySelectorAll(".test-box");
	const sliderOption = document.querySelectorAll(".slider-options span");

	if (e > test_div.length) {
		indexValue = 1;
	}
	if (e < 1) {
		indexValue = test_div.length;
	}
	for (i = 0; i < test_div.length; i++) {
		test_div[i].style.display = "none";
	}
	for (i = 0; i < test_div.length; i++) {
		sliderOption[i].style.background = "transparent";
	}
	test_div[indexValue - 1].style.display = "block";
	sliderOption[indexValue - 1].style.background = "hsl(12, 88%, 59%)";
}

// Form Validation
const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkEmail();
});
function checkEmail() {
	const emailValue = email.value.trim();

	if (emailValue === "") {
		setErrorFor(email, "Please insert an email address");
	} else {
		setSuccessFor(email);
	}
}
function setErrorFor(input, message) {
	const myForm = input.parentElement;
	const small = myForm.querySelector("small");

	myForm.className = "updates error";
	small.innerText = message;
}
function setSuccessFor(input) {
	const myForm = input.parentElement;

	myForm.className = "updates success";
}

// Scrolling behaviour
window.addEventListener("scroll", function () {
	const header = document.getElementById("header");
	const windowPosition = window.scrollY > 0;

	header.classList.toggle("scroll-active", windowPosition);
});
