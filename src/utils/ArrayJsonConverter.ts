import { Item } from '../interfaces';

class ArrayJsonConverter {
  arrayToString(input: Item[]): string {
    const stringfied = input.map((item) => {
      return JSON.stringify(item);
    });

    return stringfied.join(';');
  }

  stringToArray(input: string): Item[] {
    const parsed = input.split(';');

    const final = parsed.map((item) => {
      return JSON.parse(item);
    });

    return final;
  }
}

export default new ArrayJsonConverter();