class ArrayJsonConverter {
  arrayToString<T>(input: T[]): string {
    const stringfied = input.map((item) => {
      return JSON.stringify(item);
    });

    return stringfied.join(';');
  }

  stringToArray<T>(input: string): T[] {
    const parsed = input.split(';');

    const final = parsed.map((item) => {
      return JSON.parse(item);
    });

    return final;
  }
}

export default new ArrayJsonConverter();