function isSameType(value1, value2) {
  //your js code here

	if (Number.isNaN(value1)&& Number.isNaN(value2)) {
		return true;
	}
	let check = typeof value1;
	let check2 = typeof value2;
	if (check===check2) {
		return true;
	}
	else{
		return false;
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));


