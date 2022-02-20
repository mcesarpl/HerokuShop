import ArrayJsonConverter from '../../src/utils/ArrayJsonConverter';

describe('Array Json Converter Tests', () => {
  const arrayMock = [
    {
      'name': 'teste',
      'price': 34.5,
      'discount': 0.5,
    },
    {
      'name': 'teste',
      'price': 34.5,
      'discount': 0.5,
    },
  ];

  const stringMock = '{"name":"teste","price":34.5,"discount":0.5};'
  + '{"name":"teste","price":34.5,"discount":0.5}';

  it('Should transform an array json in a string', () => {

    const converted = ArrayJsonConverter.arrayToString(arrayMock);

    expect(converted).toEqual(stringMock);
  });

  it('Should transform a string json into an array', () => {

    const converted = ArrayJsonConverter.stringToArray(stringMock);

    expect(converted).toEqual(arrayMock);
  });
});