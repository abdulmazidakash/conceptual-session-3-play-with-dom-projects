// console.log('test write');
//calculate button event listener add
let count = 0;
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
	// console.log('click calculate button');

	count += 1;

	const income = parseFloat(document.getElementById('income').value) ;
	// console.log(income);
	const software = parseFloat(document.getElementById('software').value);
	const courses = parseFloat(document.getElementById('courses').value);
	const internet = parseFloat(document.getElementById('internet').value);

	// console.table({income, software, courses, internet});



	const totalExpense = software + courses + internet;
	const balance = income - totalExpense;

	// console.log(balance);

	const totalExpensesElement = document.getElementById('total-expenses');
	totalExpensesElement.innerText = totalExpense.toFixed(2);

	const balanceElement = document.getElementById('balance');
	balanceElement.innerText = balance.toFixed(2);

	//results section hidden
	const results = document.getElementById('results');
	results.classList.remove('hidden');
	// console.log(results);


	//history card section add

	const historyItemDiv = document.createElement('div');
	historyItemDiv.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';
	historyItemDiv.innerHTML =
	`
		<p class='text-xs text-gray-500'>Serial: ${count}</p>
		<p class='text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
		<p class='text-xs text-gray-500'>Income: ${income.toFixed(2)}</p>
		<p class='text-xs text-gray-500'>Expenses: ${totalExpense.toFixed(2)}</p>
		<p class='text-xs text-gray-500'>Balance: ${balance.toFixed(2)}</p>

	`;

	const historyContainer = document.getElementById('history-list');
	historyContainer.insertBefore(historyItemDiv, historyContainer.firstChild);
})

//----------calculate button complete--------------------

//calculate savings button start -------

const calculateSavingsButton = document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function(){
	// console.log('calculate savings button clicked');
	const savingsPercentage = parseFloat(document.getElementById('savings').value);
	// console.log(savings);
	const income = parseFloat(document.getElementById('income').value);
	const software = parseFloat(document.getElementById('software').value);
	const courses = parseFloat(document.getElementById('courses').value);
	const internet = parseFloat(document.getElementById('internet').value);

	const totalExpense = software + courses + internet;
	const balance = income - totalExpense;

	const savingAmount = (savingsPercentage * balance) / 100;
	// console.log(savingAmount);

	const remainingBalance = balance - savingAmount;

	const savingAmountElement = document.getElementById('savings-amount');
	savingAmountElement.innerText = savingAmount;

	const remainingBalanceElement = document.getElementById('remaining-balance');
	remainingBalanceElement.innerText = remainingBalance;

})

//history tab button clickable 
const assistantTab = document.getElementById('assistant-tab');
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function(){
	historyTab.classList.add(
		'text-white',
		'bg-gradient-to-r',
		'from-blue-600',
		'to-purple-600'
	);
	
	historyTab.classList.remove('text-gray-600');
	assistantTab.classList.remove(
		'text-white',
		'bg-gradient-to-r',
		'from-blue-600',
		'to-purple-600'
	);
	assistantTab.classList.add('text-gray-600');

	document.getElementById('expense-form').classList.add('hidden');
	document.getElementById('history-section').classList.remove('hidden');
});

assistantTab.addEventListener('click', function(){
	assistantTab.classList.add(
		'text-white',
		'bg-gradient-to-r',
		'from-blue-600',
		'to-purple-600'
	);
	historyTab.classList.remove(
		'text-white',
		'bg-gradient-to-r',
		'from-blue-600',
		'to-purple-600'
	);

	document.getElementById('expense-form').classList.remove('hidden');
	document.getElementById('history-section').classList.add('hidden');
})