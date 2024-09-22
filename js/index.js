// console.log('kaj kortese ....');

//getting all the value 



//add event listener for calculate button

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){

	const income = parseFloat(document.getElementById('income').value);
	// console.log(income);
	const software = parseFloat(document.getElementById('software').value);
	const courses = parseFloat(document.getElementById('courses').value);
	const internet = parseFloat(document.getElementById('internet').value);

	// console.table({income, software, courses, internet});

	const totalExpense = software + courses + internet;
	const balance = income - totalExpense;

	// console.table({totalExpense, balance})

	const totalExpenseElement = document.getElementById('total-expenses');
	totalExpenseElement.innerText = totalExpense.toFixed(2);

	const balanceElement = document.getElementById('balance');
	balanceElement.innerText = balance.toFixed(2);

	const result = document.getElementById('results');
	result.classList.remove('hidden');
})

//add event listener for saving button
const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function(){
	// console.log('test ');
	const income = parseFloat(document.getElementById('income').value);
	// console.log(income);
	const software = parseFloat(document.getElementById('software').value);
	const courses = parseFloat(document.getElementById('courses').value);
	const internet = parseFloat(document.getElementById('internet').value);

	const savingPercentage = parseFloat(document.getElementById('savings').value);
	// console.log(savingPercentage);

	const totalExpense = software + courses + internet;
	const balance = income - totalExpense;

	const savingAmount = (savingPercentage * balance) / 100;
	// console.log(savingAmount);

	const remainingBalance = balance - savingAmount;

	const savingElement = document.getElementById('savings-amount');
	savingElement.innerText = savingAmount.toFixed(2);

	const remainingElement = document.getElementById('remaining-balance');
	remainingElement.innerText = remainingBalance.toFixed(2);
});

//history tab functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
	historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

	historyTab.classList.remove('text-gray-600');
	assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
	assistantTab.classList.add('text-gray-600');

	document.getElementById('expense-form').classList.add('hidden');
});