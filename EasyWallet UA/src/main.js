$('#button-LE').click(function () {
	$('#content-EP').css(
		'display', 'none',
	);
	$('#content-LE').css({
		'display': 'block',
		'opacity': '1'
	});
	$('body').css(
		'background-color', '#fafafa'
	);
	$('#strip-LE').css(
		'opacity', '1'
	);
	$('#gamburger-LE').css(
		'opacity', '1'
	)
});

$('#button-EP').click(function () {
	$('#content-LE').css(
		'display', 'none'
	);
	$('#content-EP').css({
		'display': 'block',
		'opacity': '1'
	});
	$('body').css(
		'background-color', '#f3f2f8'
	);
	$('#strip-LE').css(
		'opacity', '0'
	);
		$('#gamburger-LE').css(
		'opacity', '0'
	)
});

let price = '4.0';
$('.price').text(price);

let today = new Date();

let day = today.getDate();
day = day.toString();
if (day.length === 1) {
	day = '0' + day;
};

let month = today.getMonth() + 1;
month = month.toString();
if (month.length === 1) {
	month = '0' + month;
};

let year = today.getFullYear();
year = year.toString();
year = year.substr(2)
console.log(year)

let date = day + '/' + month + '/' + year;

let hours = today.getHours();
hours = hours.toString();
if (hours.length === 1) {
	hours = '0' + hours;
};

let minutes = today.getMinutes();
minutes = minutes - 5;
if (minutes < 0) {
	hours--
	if (hours < 0) {
		hours = 23;
		day--
		if (day < 0) {
			day = 28
			month--
			if (month < 0) {
				year--
			};
		};
	};
	minutes = 60 + minutes
};
minutes = minutes.toString();
if (minutes.length === 1) {
	minutes = '0' + minutes;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

let seconds = today.getSeconds();
seconds = seconds.toString();
if (seconds.length === 1) {
	seconds = '0' + seconds;
};

let time_valid = hours + ':' + minutes;
$('.time_valid').text(time_valid)

let randomInt = getRandomInt(20)
if (randomInt < 5) {
	while (randomInt < 5) {
		randomInt = getRandomInt(20)
	}
};
minutes = minutes - randomInt
if (minutes < 0) {
	hours--
	minutes = 60 + minutes
};
minutes = minutes.toString();
if (minutes.length === 1) {
	minutes = '0' + minutes;
};
let time_invalid = hours + ':' + minutes;
$('.time_invalid').text(time_invalid)

$('.date_valid').text(date);

day -= 1;
date = day + '/' + month + '/' + year;
$('.date_invalid').text(date);
