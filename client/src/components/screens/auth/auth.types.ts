export type T_FormField = {
  value: string;
  isValid: boolean | null;
}

export type T_User = {
  firstName: T_FormField;
  lastName: T_FormField;
  password: T_FormField;
  passwordRepeat: T_FormField;
  phone: T_FormField;
}

export type T_UserReg = {
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
}

export type T_UserLogin = {
  password: string;
  phone: string;
}