import Validator from "../app";

const testTrue = true;
const testFalse = false;

test('testing correct login', () => {
    const newLogin = new Validator().validateUsername('j258-5j');
    expect(newLogin).toBe(testTrue)
});

test('testing wrong login starting digit', () => {
    const newLogin = new Validator('2j58-5j');
    expect(newLogin.validateUsername()).toBe(testFalse)
});

test('testing wrong login with 4 digit', () => {
    const newLogin = new Validator('j5888-5j');
    expect(newLogin.validateUsername()).toBe(testFalse)
});

test('testing wrong login starting dash', () => {
    const newLogin = new Validator('-j588-5j');
    expect(newLogin.validateUsername()).toBe(testFalse)
});

test('testing wrong login last digit', () => {
    const newLogin = new Validator('j588-5j5');
    expect(newLogin.validateUsername()).toBe(testFalse)
});