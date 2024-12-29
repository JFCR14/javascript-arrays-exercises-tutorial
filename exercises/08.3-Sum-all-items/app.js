function sumTheElements(theArray) {
	let total = 0;
	for (let i = 0; i < theArray.length; i++) {
		const index = theArray[i];
		total = total + index;
	}

	return total;
}

console.log(sumTheElements([2,13,34,5]));