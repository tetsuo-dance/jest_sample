import { greet, sum, getssValue,setssValue } from "../src/greet";

const setMock = jest.fn((value) => [value])

SpreadsheetApp.getActiveSpreadsheet = jest.fn(() => ({
  getSheetByName: jest.fn(() => (
    {
      getRange: jest.fn(() => (
        {
          getValues: jest.fn(() => [
            [1, 2],
          ]),
          setValue: setMock,
        }
      )),
    }
  )),
})) as any;

describe('greet', (): void => {
    test('should say hello to Tom.', (): void => {
        const response: string = greet('Tom');
        expect(response).toBe('Hello, Tom!');
    })
    test('sum_test.', (): void => {
    const response2: Number = sum(2,3);
    expect(response2).toBe(5);
    })
    test('getssValue_test.', (): void => {
    const response3: Number = getssValue()
    expect(response3).toBe(3);
    })
    test('setssValue_test.', (): void => {
        setssValue(3)
        expect(setMock.mock.calls[0][0]).toBe(3);
    });
})