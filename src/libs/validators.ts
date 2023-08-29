import { setLocale } from 'yup';
import { errorMessages } from 'constants/validator-base';

setLocale({
  mixed: {
    required: errorMessages.required,
    notOneOf: errorMessages.notOneOf,
    oneOf: errorMessages.matches,
    notType: errorMessages.notType,
  },
  string: {
    length: errorMessages.length,
    max: errorMessages.maxLength,
    email: errorMessages.email,
    matches: errorMessages.matches,
  },
  number: {
    min: errorMessages.minNumber,
    max: errorMessages.maxNumber,
    lessThan: errorMessages.lessThanNumber,
    moreThan: errorMessages.moreThanNumber,
    integer: errorMessages.integer,
  },
  date: {
    min: errorMessages.minDate,
    max: errorMessages.maxDate,
  },
  array: {
    min: errorMessages.minArray,
    max: errorMessages.maxArray,
  },
});
