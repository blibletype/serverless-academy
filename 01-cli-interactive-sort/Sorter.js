export class Sorter {
  array = [];
  arrayOfNumbers = [];
  arrayOfStrings = [];

  constructor(array) {
    this.array = array;
    this.divide();
  }

  divide() {
    const wordRegex = /[A-z]/;
    const intOrFloatRegex = /-?\d+(\.\d+)?/;

    this.arrayOfStrings = this.array.filter((value) => wordRegex.test(value));

    for (const value of this.array) {
      if (intOrFloatRegex.test(value)) {
        this.arrayOfNumbers.push(+value);
      }
    }
  }

  sort(sortType) {
    switch (sortType) {
      case '1':
        console.log(
          this.arrayOfStrings.sort((a, b) =>
            a.toLowerCase().localeCompare(b.toLowerCase())
          )
        );
        break;

      case '2':
        console.log(this.arrayOfNumbers.sort((a, b) => a - b));
        break;

      case '3':
        console.log(this.arrayOfNumbers.sort((a, b) => b - a));
        break;

      case '4':
        console.log(this.arrayOfStrings.sort((a, b) => a.length - b.length));
        break;

      case '5':
        console.log([...new Set(this.arrayOfStrings)]);
        break;

      case '6':
        console.log([
          ...new Set([...this.arrayOfNumbers, ...this.arrayOfStrings]),
        ]);
        break;

      default:
        console.log('Incorrect sorting type');
        break;
    }
  }
}
