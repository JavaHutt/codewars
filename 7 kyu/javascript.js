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