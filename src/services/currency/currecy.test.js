import { formatCurrenty, CURRENCY_TYPE, getCurrencySign } from './currency';

describe('Currency', () => {
  describe('formatCurrenty', () => {
    test('should return the value in dollar format', () => {
      const value = 5567;

      const result = formatCurrenty(CURRENCY_TYPE.USD, value);

      expect(result).toBe('5,567.00');
    });

    test.skip('should return the value in euro format', () => {
      const value = 1788889.78;

      const result = formatCurrenty(CURRENCY_TYPE.EUR, value);

      expect(result).toBe('1.788.889,78');
    });
  });

  describe('getCurrencySign', () => {
    test('should return the sign of dollar', () => {
      const result = getCurrencySign(CURRENCY_TYPE.USD);
      expect(result).toBe('$');
    });

    test('should return the sign of euro', () => {
      const result = getCurrencySign(CURRENCY_TYPE.EUR);
      expect(result).toBe('€');
    });

    test('should return the sign of pound', () => {
      const result = getCurrencySign(CURRENCY_TYPE.GBP);
      expect(result).toBe('£');
    });
  });
});
