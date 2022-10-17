import { SortOption } from '../interfaces/sort-option';

export const patternValidators = {
  EMAIL_PATTERN: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  NAME_PATTERN: new RegExp(
    /^[A-ZА-ЯЁЇІЄҐ]+((['-][a-zA-ZА-Яа-яЁёЇїІіЄєҐґ])?[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ']*)*$/
  ),
  PASSWORD_PATTERN: new RegExp(
    /(?=.*[0-9])(?=.*[!@#$%^&*)(?/+_,.":{}|~<>])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
  ),
  PHONE_PATTERN: new RegExp(/^(?:\+38)?(0\d{9})$/)
};

export const USER_TYPE: SortOption[] = [
  { value: 'bayer', viewValue: 'Покупець' },
  { value: 'farm', viewValue: 'Фермер' }
];
export const USER_START_SELECT_TYPE = 'bayer';
