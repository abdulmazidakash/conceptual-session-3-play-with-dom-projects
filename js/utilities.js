//get value function

function getInputValueById(id){
	return parseFloat(document.getElementById(id).value);
}

function showError(id){
	return document.getElementById(id).classList.remove('hidden');
}

function formatCurrency(amount){
	return `${amount.toFixed(2)}`
}


function addToHistory(income, totalExpenses, balance){
	
	const historyItem = document.createElement('div');
	historyItem.className = 'bg-white p-3 rounded-md border-1-2 border-indigo-500';
	historyItem.innerHTML = `
	
		<p class='text-xs text-gray-500'>Serial: ${count}</p>
		<p class='text-xs text-gray-500'>${new Date().toLocaleDateString()}</p>
		<p class='text-xs text-gray-500'>Income: ${income.toFixed(2)}</p>
		<p class='text-xs text-gray-500'>Expense: ${totalExpense.toFixed(2)}</p>
		<p class='text-xs text-gray-500'>Balance: ${balance.toFixed(2)}</p>
	
	`;

	const historyContainer = document.getElementById('history-list');
	historyContainer.insertBefore(historyItem, historyContainer.firstChild)
}
