import {
  BUTTON_TEXT_CONTINUE,
  BUTTON_TEXT_ORDER,
  DELIVERY_CITY,
  DELIVERY_COMPANY,
  DELIVERY_DATE,
  DELIVERY_DEPARTMENT,
  DELIVERY_SUM,
  EMAIL_ADMIN,
  FINAL_SUM,
  ORDER,
  ORDER_SUM,
  PACKING_SUM,
  PHONE_ADMIN,
  USER_EMAIL,
  USER_NAME,
  USER_PHONE
} from '../constants/checkout-result.constants';

export class CheckoutResultHelper {
  public order = ORDER;
  public deliveryDate = DELIVERY_DATE;
  public emailAdmin = EMAIL_ADMIN;
  public phoneAdmin = PHONE_ADMIN;
  public buttonTextContinue = BUTTON_TEXT_CONTINUE;
  public buttonTextOrder = BUTTON_TEXT_ORDER;
  public userName = USER_NAME;
  public userPhone = USER_PHONE;
  public userEmail = USER_EMAIL;
  public deliveryCity = DELIVERY_CITY;
  public deliveryCompany = DELIVERY_COMPANY;
  public deliveryDepartment = DELIVERY_DEPARTMENT;
  public orderSum = ORDER_SUM;
  public packingSum = PACKING_SUM;
  public deliverySum = DELIVERY_SUM;
  public finalSum = FINAL_SUM;
}
