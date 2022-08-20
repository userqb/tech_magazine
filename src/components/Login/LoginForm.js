import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const LoginForm = () => {
  const passwordRules =
    /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{5,}$/;

  const validationForm = yup.object().shape({
    name: yup.string().min(3).required("Обязательное поле!"),
    email: yup
      .string()
      .email("Пожалуйста введите корректный email!")
      .required("Обязательное поле!"),
    password: yup
      .string()
      .typeError("ошибка")
      .min(5)
      .matches(passwordRules, { message: "Хороший пароль!" })
      .required("Обязательное поле!"),
    confirmPassword: yup
      .string()
      .typeError("ошибка")
      .oneOf([yup.ref("password"), "Пароль не соответствует!"])
      .required("Обязательное поле!"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: validationForm,
      onSubmit() {
        console.log("login");
      },
    });

  return (
    <form className="login_form" onSubmit={handleSubmit} autoComplete="off">
      <div>
        <strong>Вход</strong>
      </div>
      <label className="form_label">Ваше имя:</label>
      <input
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        id="name"
        type="name"
        className="validate_input"
      />
      {errors.name && touched.name && (
        <p className="error_text">{errors.name}</p>
      )}
      <label className="form_label">Почтовый адрес:</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        className="validate_input"
      />
      {errors.email && touched.email && (
        <p className="error_text">{errors.email}</p>
      )}
      <label className="form_label">Пароль:</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        className="validate_input"
      />
      {errors.password && touched.password && (
        <p className="error_text">{errors.password}</p>
      )}
      <label className="form_label">Подтверждение пароля:</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="confirmPassword"
        className="validate_input"
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error_text">{errors.confirmPassword}</p>
      )}
      <button className="btn">Отправить</button>
    </form>
  );
};
