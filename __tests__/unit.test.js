// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test isPhoneNumber
describe("isPhoneNumber tests", () => {
    test('valid phone number', () => {
      expect(functions.isPhoneNumber("858-111-0000")).toBe(true);
    });

    test('valid phone number', () => {
      expect(functions.isPhoneNumber("(858)111-0000")).toBe(true);
    });

    test('invalid phone number', () => {
      expect(functions.isPhoneNumber("8581110000")).toBe(false);
    });

    test('invalid phone number', () => {
      expect(functions.isPhoneNumber("858-1-0")).toBe(false);
    });
})


// test isEmail
describe("isEmail tests", () => {
    test('valid email', () => {
      expect(functions.isEmail("nan@gmail.com")).toBe(true);
    });

    test('valid email', () => {
      expect(functions.isEmail("nan@ab.cd")).toBe(true);
    });

    test('invalid email', () => {
      expect(functions.isEmail("nan@ab.cd.ef")).toBe(false);
    });

    test('invalid email', () => {
      expect(functions.isEmail("nan@1a.bc")).toBe(false);
    });
})

// test isStrongPassword
describe("isStrongPassword tests", () => {
    test('valid strong password', () => {
      expect(functions.isStrongPassword("abcd")).toBe(true);
    });

    test('valid strong password', () => {
      expect(functions.isStrongPassword("a_Bc1D")).toBe(true);
    });

    test('invalid strong password', () => {
      expect(functions.isStrongPassword("1abcd")).toBe(false);
    });

    test('invalid strong password', () => {
      expect(functions.isStrongPassword("abc")).toBe(false);
    });
})

// test isDate
describe("isDate tests", () => {
    test('valid date', () => {
      expect(functions.isDate("01/01/2001")).toBe(true);
    });

    test('valid date', () => {
      expect(functions.isDate("1/1/2001")).toBe(true);
    });

    test('invalid date', () => {
      expect(functions.isDate("1/1/01")).toBe(false);
    });

    test('invalid date', () => {
      expect(functions.isDate("01 Jan 2001")).toBe(false);
    });
})

// test isHexColor
describe("isHexColor tests", () => {
    test('valid hex color', () => {
      expect(functions.isHexColor("fff")).toBe(true);
    });

    test('valid hex color', () => {
      expect(functions.isHexColor("#AAAAAA")).toBe(true);
    });

    test('invalid hex color', () => {
      expect(functions.isHexColor("#AAAAA")).toBe(false);
    });

    test('invalid hex color', () => {
      expect(functions.isHexColor("red")).toBe(false);
    });
})