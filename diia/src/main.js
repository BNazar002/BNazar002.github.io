let password = [];
let secret = [1, 1, 1, 1]
let i = 0
let sucsess = []
$(".password").click(
	function () {
		if (this.id === "password-1") {
			password.push(1)
			checkPassword()
		} else if (this.id === "password-2") {
			password.push(2)
			recover()
		} else if (this.id === "password-3") {
			password.push(3)
			recover()
		} else if (this.id === "password-4") {
			password.push(4)
			recover()
		} else if (this.id === "password-5") {
			password.push(5)
			recover()
		} else if (this.id === "password-6") {
			password.push(6)
			recover()
		} else if (this.id === "password-7") {
			password.push(7)
			recover()
		} else if (this.id === "password-8") {
			recover()
			password.push(8)
		} else if (this.id === "password-9") {
			password.push(9)
			recover()
		} else {
			password.push(0)
			recover()
		}

		if (password.length === 1) {
			$("#point-1").css(
				"background-color", "#000"
			)

		} else if (password.length === 2) {
			$("#point-2").css(
				"background-color", "#000"
			)

		} else if (password.length === 3) {
			$("#point-3").css(
				"background-color", "#000"
			)

		} else if (password.length === 4) {
			password = []
			$("#point-4").css(
				"background-color", "#000"
			)
			setTimeout(function () {
				pointBg()
			}, 120)

			errorProcess()
		}
	}
)
$('#clear').click(
	function () {
		pointBg()
	}
)

function checkPassword() {
	if (i < password.length) {
		if (password[i] == secret[i]) {
			sucsess.push(true)
		}
		if (sucsess.length === 4) {
			$('.second-screen').css(
				'opacity', '0',
				'z-index', '-100'
			)
			$('.forward-screen').css(
				'display', 'block',
			)

			setTimeout(function () {
				$('.second-screen').css(
					'display', 'none',
				)
			}, 1000)
		}
	}
}

function globalPassword() {
	if (condition) {

	}
}

function recover() {
	sucsess = []
}
setTimeout(function () {
	$(".second-screen").css(
		'opacity', '1',
		'z-index', '100'
	)
	$('.first-screen').css(
		'display', 'none'
	)
}, 4000)

function errorProcess() {
	if (sucsess.length < 4) {
		$('#error').css({
			'opacity': '1',
			'bottom': '37px'
		});
		setTimeout(function () {
			$('#error').css({
				'opacity': '0',
				'bottom': '30px'

			})
		}, 1000)
	}
}

function pointBg() {
	$("#point-1").css(
		"background-color", "transparent"
	)
	$("#point-2").css(
		"background-color", "transparent"
	)
	$("#point-3").css(
		"background-color", "transparent"
	)
	$("#point-4").css(
		"background-color", "transparent"
	)
	password = []
	sucsess = []
}

// $(function () {

// 	$('.forward-slider').slick({
// 		centerMode: true,
// 		// centerPadding: '40px',
// 		slidesToShow: 1,
// 		arrows: false,
// 		infinite: false,
// 		mobileFirst: true,
// 		swipeToSlide: true

// 	});
// });