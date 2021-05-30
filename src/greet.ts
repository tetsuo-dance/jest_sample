//export default (name: string): string => `Hello, ${name}!`;
export function greet(name: string) {
    return `Hello, ${name}!`
}

export function sum(a: number, b:number) {
    return a + b;
}

export function setssValue(value: Number) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const inputSheet = ss.getSheetByName('inputSheet');
    inputSheet!.getRange(2, 1).setValue(value);
}

export function getssValue() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const inputSheet = ss.getSheetByName('inputSheet');
    const data = inputSheet!.getRange(1, 1, 1, 2).getValues();
    return  sum(Number(data[0][0]),Number(data[0][1]))

}

function main() {
    console.log(greet("tim"))
    console.log(sum(4, 5))
    setssValue(getssValue())
}
