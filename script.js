let bills = [124, 48, 75, 268];

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

alert(getTotalTips(bills));
