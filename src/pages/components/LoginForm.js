import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

export const RegistrationForm = () => {
  const validationForm = yup.object().shape({
    name: yup.string().typeError("ошибка").required("поле обязательно"),
    secondName: yup.string().typeError("ошибка").required("поле обязательно"),
    email: yup
      .string()
      .email("Введен не вырный email")
      .required("поле обязательно"),
    password: yup.string().typeError("ошибка").required("поле обязательно"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароль не соответствует")
      .required("поле обязательно"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          secondName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationForm={validationForm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="registration_form">
            <p>
              <label htmlFor={"name"}>Имя</label>
              <input
                type={"text"}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <p className={"form__item"}>{errors.name}</p>
              )}
            </p>
            <p>
              <label htmlFor={"secondName"}>Фамилия</label>
              <input
                type={"text"}
                name={"secondName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
              />
              {touched.secondName && errors.secondName && (
                <p className={"form__item"}>{errors.secondName}</p>
              )}
            </p>
            <p>
              <label htmlFor={"email"}>Email</label>
              <input
                type={"text"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <p className={"form__item"}>{errors.email}</p>
              )}
            </p>
            <p>
              <label htmlFor={"password"}>Пароль</label>
              <input
                type={"password"}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className={"form__item"}>{errors.password}</p>
              )}
            </p>
            <p>
              <label htmlFor={"confirmPassword"}>Подтверждение пароля</label>
              <input
                type={"password"}
                name={"confirmPassword"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={"form__item"}>{errors.confirmPassword}</p>
              )}
            </p>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              set
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};
