const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
	
	const income = getInputValueById('income');
	const software = getInputValueById('software');
	const courses = getInputValueById('courses');
	const internet = getInputValueById('internet');

	if(income <= 0 || isNaN(income)){
		showError('income-error');
		return;
	}

	if(software <= 0 || isNaN(software)){
		showError('software-error');
		return;
	}

	if(totalExpenses > income){
		showError('logic-error');
		return;
	}
})


addToHistory()