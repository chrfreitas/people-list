export const CURRENCY_TYPE = Object.freeze({
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
});

export const formatCurrenty = (type, value) => {
  const options = {
    minimumFractionDigits: 2,
  };

  switch (type) {
    case CURRENCY_TYPE.GBP:
    case CURRENCY_TYPE.USD:
      return new Intl.NumberFormat('en-US', options).format(value);

    case CURRENCY_TYPE.EUR:
      return new Intl.NumberFormat('de-DE', options).format(value);

    default:
      break;
  }
};

export const getCurrencySign = (type) => {
  switch (type) {
    case CURRENCY_TYPE.USD:
      return '$';

    case CURRENCY_TYPE.EUR:
      return '€';

    case CURRENCY_TYPE.GBP:
      return '£';

    default:
      break;
  }
};
