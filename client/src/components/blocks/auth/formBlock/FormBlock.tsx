import React, { useEffect, useState } from 'react';
import FormInput from '@/components/UI/input/formInput/FormInput';
import { T_FormField } from '@/components/screens/auth/auth.types';
import { styled } from 'styled-components';

const nameRegExp = /^[a-zA-Zа-яА-Я]+$/u;

type Props = {
  pageType: string;
  changeUser: (
    param1: T_FormField,
    param2: T_FormField,
    param3: T_FormField,
    param4: T_FormField,
    param5: T_FormField
  ) => void;
  correctPasswordStatus: boolean;
  setCorrectPasswordStatus: (param: boolean) => void;
  availableNumberStatus: boolean;
  setAvailableNumberStatus: (param: boolean) => void;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function FormBlock({
  pageType,
  changeUser,
  correctPasswordStatus,
  setCorrectPasswordStatus,
  availableNumberStatus,
  setAvailableNumberStatus,
}: Props) {
  useEffect(() => {
    setCorrectPasswordStatus(true);
    setAvailableNumberStatus(true);
  }, [pageType]);
  const [firstName, setFirstName] = useState<T_FormField>({
    value: '',
    isValid: null,
  });
  const [lastName, setLastName] = useState<T_FormField>({
    value: '',
    isValid: null,
  });
  const [password, setPassword] = useState<T_FormField>({
    value: '',
    isValid: null,
  });
  const [passwordRepeat, setPasswordRepeat] = useState<T_FormField>({
    value: '',
    isValid: null,
  });
  const [phone, setPhone] = useState<T_FormField>({ value: '', isValid: null });

  useEffect(() => {
    changeUser(firstName, lastName, password, passwordRepeat, phone);
  }, [firstName, lastName, password, passwordRepeat, phone]);

  const firstNameValid = (value: string) => {
    const isValid = value === '' ? null : nameRegExp.test(value);
    setFirstName({ value, isValid });
  };
  const lastNameValid = (value: string) => {
    const valid = value === '' ? null : nameRegExp.test(value);
    setLastName({ value: value, isValid: valid });
  };
  const passwordValid = (value: string) => {
    const valid =
      pageType === 'registration'
        ? value === ''
          ? null
          : value.length >= 8
          ? true
          : false
        : value === ''
        ? null
        : true;
    setPassword({ value: value, isValid: valid });
  };
  const passwordRepeatValid = (value: string) => {
    const valid = value === '' ? null : value === password.value;
    setPasswordRepeat({ value: value, isValid: valid });
  };
  const phoneValid = (value: string) => {
		setAvailableNumberStatus(true)
		if (pageType === 'registration') {
			const valid = value === '' ? null : value.length === 11;
			setPhone({ value: value, isValid: valid });

		} else setPhone({ value: value, isValid: true });
  };
  
  return (
    <Form>
      {(pageType === 'registration' || pageType === 'login') && (
        <FormInput
          placeholder={'Введите номер'}
          label={
            pageType === 'registration'
              ? !availableNumberStatus
                ? 'Номер занят'
                : 'Некорректный номер'
              : !availableNumberStatus
              ? 'Такого номера нет'
              : ''
          }
          value={phone.value}
          status={
            availableNumberStatus
              ? pageType === 'registration'
                ? phone.isValid
                : true
              : availableNumberStatus
          }
          onChange={phoneValid}
        />
      )}
      {pageType === 'registration' && (
        <FormInput
          placeholder={'Введите имя'}
          label={'Неверное имя'}
          value={firstName.value}
          onChange={firstNameValid}
          status={firstName.isValid}
        />
      )}
      {pageType === 'registration' && (
        <FormInput
          placeholder={'Введите фамилию'}
          label={'Неверная фамилия'}
          value={lastName.value}
          onChange={lastNameValid}
          status={lastName.isValid}
        />
      )}
      {(pageType === 'registration' || pageType === 'login') && (
        <FormInput
          type={'password'}
          placeholder={'Пароль'}
          label={
            pageType === 'registration'
              ? 'Пароль не менее 8 символов'
              : 'Неверный пароль'
          }
          value={password.value}
          onChange={passwordValid}
          status={
            !correctPasswordStatus ? correctPasswordStatus : password.isValid
          }
        />
      )}
      {pageType === 'registration' && (
        <FormInput
          type={'password'}
          placeholder={'Повторите пароль'}
          label={'Пароли не совпадают'}
          value={passwordRepeat.value}
          onChange={passwordRepeatValid}
          status={passwordRepeat.isValid}
        />
      )}
    </Form>
  );
}
