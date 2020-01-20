/**
 * Holiday II - Plane Seating
 * @param {string} a 
 * @returns {string}
 */
const planeSeat = a => {
	const number        = parseInt(a);
	const letter        = a[a.length - 1];
	const letterCode    = letter.charCodeAt(0);
	const frontSection  = [...Array(20)].map((item, i) => i + 1);
	const middleSection = [...Array(20).fill(21)].map((item, i) => item + i);
	const backSection   = [...Array(20).fill(41)].map((item, i) => item + i);
	const leftCluster   = ['A', 'B', 'C'];
	const middleCluster = ['D', 'E', 'F'];
	const backCluster   = ['G', 'H', 'K'];

	let section, cluster;

	if (number > 60 || letterCode < 65 || letterCode > 75 || [73, 74].includes(letterCode)) {
		return 'No Seat!!';
	}

	if (frontSection.includes(number)) section = 'Front';
	else if (middleSection.includes(number)) section = 'Middle';
	else if (backSection.includes(number)) section = 'Back';

	if (leftCluster.includes(letter)) cluster = 'Left';
	else if (middleCluster.includes(letter)) cluster = 'Middle';
	else if (backCluster.includes(letter)) cluster = 'Right';

	return `${section}-${cluster}`;  
}

/**
 * List Filtering
 * @param {array} l 
 */
const filter_list = l => l.filter(item => typeof item == 'number');

/**
 * Sum of odd numbers
 * @param {number} n 
 */
const rowSumOddNumbers = n => Math.pow(n, 3);

/**
 * Divide and Conquer
 * @param {array} x 
 */
const divCon = x => {
	let stringSum = 0;
	let numSum    = 0;

	x.forEach(item => typeof item == 'number' ? numSum += item : stringSum += +item);

	return numSum - stringSum;
}

/**
 * Sort by Last Char
 * @param {string} x 
 */
const last = x => x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1) > 0 ? 1 : -1);

/**
 * Breaking the Chocolate
 * @param {number} n 
 * @param {number} m 
 */
const breakChocolate = (n, m) => {
	const multiple = n * m;

	if (multiple === 1 || multiple === 0) return 0;

	return multiple - 1;
}

/**
 * Ski Jump
 * @param {array} mountain 
 */
const skiJump = mountain => {
	const height = mountain.length;
	const speed  = height * 1.5;
	const jump   = (height * speed * 9) / 10;
	let str;

	switch (true) {
		case (jump < 10):
			str = 'He\'s crap!';
			break;
		case (jump < 25):
			str = 'He\'s ok!';
			break;
		case (jump < 50):
			str = 'He\'s flying!';
			break;
		default:
			str = 'Gold!!';
	}

	return `${jump.toFixed(2)} metres: ${str}`;
}

const tickets = peopleInLine => {
	const price = 25;
	const [firstBill] = peopleInLine;
	const yesMessage = 'YES', noMessage = 'NO';

	if (firstBill != price) return noMessage;
	
	let change = [firstBill];

	for (let i = 1; i < peopleInLine.length; i++) {
		let bill = peopleInLine[i];
		let sum = peopleInLine[i];
		if (bill == price) {
			change.push(bill);
			continue;
		}
		for (let j = 0; j < change.length; j++) {
			change.sort((a,b) => a - b);
			sum -= change[j];
			change[j] = 0;
			console.log(sum);
			console.log(change);
			if (sum != price && j == change.length - 1) {
				return noMessage;
			} else if (sum != price) {
				continue;
			} else {
				//change = change.filter(bill => bill > 0);
				console.log('push to change');
				change.push(bill);
				console.log('change: ', change);
				break;
			}
		}
				
	}
	return yesMessage;
}

const oddOrEven = array => {
	const sum = array.reduce((total, item) => {
		return total + item;
	}, 0);
	
	return sum % 2 === 0 ? 'even' : 'odd';
}

const balancedNum = number => {
	const str    = String(number);
	const length = str.length;
	const type   = length % 2 === 0 ? 'even' : 'odd';
	let leftSum, rightSum;

	if (length === 1 || length === 2) return 'Balanced';

	if (type === 'even') {
		const middleLeft  = Math.floor((length - 1) / 2);
		const middleRight = Math.ceil((length - 1) / 2);
		leftSum = [...str.slice(0, middleLeft)].reduce((total, item) => {
			return total + +item;
		}, 0);
		rightSum = [...str.slice(middleRight + 1)].reduce((total, item) => {
			return total + +item;
		}, 0);
	} else {
		const middle = Math.round((length - 1) / 2);
		leftSum = [...str.slice(0, middle)].reduce((total, item) => {
			return total + +item;
		}, 0);
		rightSum = [...str.slice(middle + 1)].reduce((total, item) => {
			return total + +item;
		}, 0);
	}

	return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}