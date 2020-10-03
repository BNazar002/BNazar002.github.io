let previousValue_1, previousValue_2, previousValue_3, previousValue_4,
	previousValue_5, previousValue_6, previousValue_7, previousValue_8;

let currentValue_1, currentValue_2, currentValue_3, currentValue_4,
	currentValue_5, currentValue_6, currentValue_7, currentValue_8;

let valueMassive = [
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null
];

let initialValues = [
	[true, true, true],
	[true, true, false],
	[true, false, true],
	[true, false, false],
	[false, true, true],
	[false, true, false],
	[false, false, true],
	[false, false, false]
]

let currentValue, currentNumber;

let falseMassive = [];

let idx;

let falseMassiveChecked, currentFalseMassiveNumber;
let readyFalseMassiveNumber = 0,
	readyFalseMassive = []

function valueMassiveProcess() {
	if (currentValue === 't') {
		valueMassive[currentNumber - 1] = true
	} else if (currentValue === 'f') {
		valueMassive[currentNumber - 1] = false
	}
	console.log(valueMassive)
	if (valueMassive.indexOf(null) === -1) {
		$('.results__container').css({
			'z-index': 100,
			'opacity': 1
		});
		$('#show-result').css({
			'z-index': 100,
			'opacity': 1
		})
		idx = valueMassive.indexOf(false);
		while (idx != -1) {
			falseMassive.push(idx);
			idx = valueMassive.indexOf(false, idx + 1);
		}
		console.log(falseMassive);

		falseMassiveChecked = falseMassive.length

		while (falseMassiveChecked != 0) {
			currentFalseMassiveNumber = falseMassive[falseMassive.length - falseMassiveChecked]
			console.log(initialValues[currentFalseMassiveNumber])
			readyFalseMassive[readyFalseMassiveNumber] = initialValues[currentFalseMassiveNumber]

			readyFalseMassiveNumber++
			currentFalseMassiveNumber++
			falseMassiveChecked--
		}

		console.log(readyFalseMassive)
		readyFalseMassiveNumber = 0
		falseMassiveChecked = falseMassive.length
		currentFalseMassiveNumber = falseMassive[falseMassive.length - falseMassiveChecked]


		let readyFalseMassiveNumberLength = falseMassive.length
		let bigMassiveValues = readyFalseMassive.length
		let currentReadyFalseMassive, currentBigMassiveValues;
		let smallMassiveValueLength = 3,
			currentBigMassiveLength = 3,
			currentSmallMassiveValue;

		while (readyFalseMassiveNumberLength != 0) {
			currentReadyFalseMassive = falseMassive[falseMassive.length - readyFalseMassiveNumberLength] //позиція відносно номеру де вибрано false
			currentBigMassiveValues = readyFalseMassive[readyFalseMassive.length - bigMassiveValues]
			if (initialValues[currentReadyFalseMassive][0] != false) {
				$('#' + currentReadyFalseMassive + '-p').css({
					'text-decoration': 'overline'
				})
			}
			if (initialValues[currentReadyFalseMassive][1] != false) {
				$('#' + currentReadyFalseMassive + '-q').css({
					'text-decoration': 'overline'
				})
			}
			if (initialValues[currentReadyFalseMassive][2] != false) {
				$('#' + currentReadyFalseMassive + '-r').css({
					'text-decoration': 'overline'
				})
			}

			readyFalseMassiveNumberLength--
			bigMassiveValues--
		}




		$('.expressions').css({
			'display': 'none'
		})
		$('.' + falseMassive[0] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[1] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[2] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[3] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[4] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[5] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[6] + '-expression').css({
			'display': 'inline-block'
		})
		$('.' + falseMassive[7] + '-expression').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(1, 2) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(2, 3) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(3, 4) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(4, 5) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(5, 6) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(6, 7) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(0, 1) + '-and').css({
			'display': 'none'
		})
		$('#' + falseMassive.slice(-1) + '-and').css({
			'display': 'inline-block'
		})
		$('#' + falseMassive.slice(-1) + '-and-e').css({
			'display': 'none'
		})
		if (falseMassive.length = 1) {
			$('#' + falseMassive[0] + '-and').css({
				'display': 'none'
			})
			$('#' + falseMassive[0] + '-and-e').css({
				'display': 'none'
			})
		}
		falseMassive = []
		readyFalseMassive = []
	}
}


$('.value-container-1 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_1).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_1 = '#' + this.id
});
$('.value-container-2 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_2).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_2 = '#' + this.id
});
$('.value-container-3 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_3).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_3 = '#' + this.id
});
$('.value-container-4 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_4).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_4 = '#' + this.id
});
$('.value-container-5 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_5).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_5 = '#' + this.id
});
$('.value-container-6 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_6).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_6 = '#' + this.id
});
$('.value-container-7 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_7).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_7 = '#' + this.id
});
$('.value-container-8 .value').click(function () {
	currentValue = this.id.slice(-1)
	currentNumber = Number(this.id.slice(0, 1))

	valueMassiveProcess()

	$(previousValue_8).toggleClass('active')
	$(this).toggleClass('active')
	previousValue_8 = '#' + this.id
});