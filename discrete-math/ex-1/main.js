let previousOperator, previousAtom_p, previousAtom_q;

$('img.operator').click(function () {
	$(previousOperator).toggleClass('active')
	$(this).toggleClass('active')
	previousOperator = '#' + this.id
});

$('img.atom-p').click(function () {
	$(previousAtom_p).toggleClass('active')
	$(this).toggleClass('active')
	previousAtom_p = '#' + this.id
});

$('img.atom-q').click(function () {
	$(previousAtom_q).toggleClass('active')
	$(this).toggleClass('active')
	previousAtom_q = '#' + this.id
});

let valueMassive = [];
let readyMassive;

$('#true-p, #false-p').click(function () {
	valueMassive[0] = this.id;
	forwardMassive()
	outputValue()
});

$('#and, #or, #hardor, #implication, #equivalence').click(function () {
	valueMassive[1] = this.id;
	forwardMassive()
	outputValue()
});

$('#true-q, #false-q').click(function () {
	valueMassive[2] = this.id;
	forwardMassive()
	outputValue()
});

function forwardMassive() {
	if (valueMassive.length === 3) {
		readyMassive = valueMassive.join('_')
		console.log(readyMassive)
	}
};

function outputValue() {

	if (readyMassive === 'true-p_and_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'true-p_or_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'true-p_hardor_true-q') {
		$('#value').text('f')
	} else if (readyMassive === 'true-p_implication_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'true-p_equivalence_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'false-p_equivalence_true-q') {
		$('#value').text('f')
	} else if (readyMassive === 'false-p_implication_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'false-p_hardor_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'false-p_or_true-q') {
		$('#value').text('t')
	} else if (readyMassive === 'false-p_and_true-q') {
		$('#value').text('f')
	} else if (readyMassive === 'false-p_and_false-q') {
		$('#value').text('f')
	} else if (readyMassive === 'false-p_or_false-q') {
		$('#value').text('f')
	} else if (readyMassive === 'false-p_hardor_false-q') {
		$('#value').text('f')
	} else if (readyMassive === 'false-p_implication_false-q') {
		$('#value').text('t')
	} else if (readyMassive === 'false-p_equivalence_false-q') {
		$('#value').text('t')
	} else if (readyMassive === 'true-p_equivalence_false-q') {
		$('#value').text('f')
	} else if (readyMassive === 'true-p_implication_false-q') {
		$('#value').text('f')
	} else if (readyMassive === 'true-p_hardor_false-q') {
		$('#value').text('t')
	} else if (readyMassive === 'true-p_or_false-q') {
		$('#value').text('t')
	} else if (readyMassive === 'true-p_and_false-q') {
		$('#value').text('f')
	}
}

