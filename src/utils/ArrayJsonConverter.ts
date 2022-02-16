class ArrayJsonConverter {
  arrayToString(input: JSON[]): string {
    const stringfied = input.map((item) => {
      return JSON.stringify(item);
    });

    return stringfied.join(';');
  }

  stringToArray(input: string): JSON[] {
    const parsed = input.split(';');

    const final = parsed.map((item) => {
      return JSON.parse(item);
    });

    return final;
  }
}

export default new ArrayJsonConverter();