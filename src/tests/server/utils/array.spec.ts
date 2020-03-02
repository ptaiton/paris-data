import { splitAndGetLast } from '../../../server/utils/array'

describe('array.ts', () => {
  test('returns last element of a splitted string', () => {
    const string = 'a.b.c.d'
    const separator = '.'
    const expectedResult = 'd'
  
    const result = splitAndGetLast(separator, string)
    expect(result).toEqual(expectedResult)
  })

  test('returns a empty string with an empty string as entry', () => {
    const string = ''
    const separator = '.'
  
    const result = splitAndGetLast(separator, string)
    expect(result).toEqual('')
  })

  test('returns entry string with a bad separator', () => {
    const string = 'abcd'
    const separator = '.'
  
    const result = splitAndGetLast(separator, string)
    expect(result).toEqual(string)
  })
})