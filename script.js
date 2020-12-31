let bills = [124, 148, 175, 168];
let budget = 1000;

const getTotalTips = (arr) => {
	return Math.round(
		arr
			.map((bill) => {
				if (bill < 50) {
					return bill * 0.2;
				} else if (bill >= 50 && bill < 200) {
					return bill * 0.15;
				} else if (bill >= 200) {
					return bill * 0.1;
				}
			})
			.reduce((acc, val) => acc + val, 0),
	);
};

console.log(getTotalTips(bills));

const budgetDust = (arrBills, totalBudget) => {
	let balance =
		totalBudget -
		(getTotalTips(arrBills) + arrBills.reduce((acc, val) => acc + val, 0));

	if (balance >= totalBudget * 0.2) {
		return `You have spent ${
			totalBudget - balance
		} dollars. It is less than or equal to 80% of your total budget. Well DONE!!!`;
	} else {
		return `You have spent ${
			totalBudget - balance
		} dollars. It is more than 80% of your total budget. Be CAREFUL!!!`;
	}
};

console.log(budgetDust(bills, budget));
