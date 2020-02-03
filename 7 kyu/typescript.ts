/**
 * Help Bob count letters and digits.
 * @param input {String}
 * @returns {Number}
 */
export function countLettersAndDigits(input: string): number {
  const letterPattern: RegExp = /^[A-Za-z]+$/;
  const trimmedInput: string = input.replace(/\s+/g, '');
  let count: number = 0;

  for (let value of trimmedInput) {
    if (isNaN(+value)) {
      if (letterPattern.test(value)) count++;
    } else {
      count++;
    }
  }
  return count;
}
