"use client";
import * as yup from "yup";
import { InferType, object } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const calculatorSchema = object({
  subject: yup.string().required("Вкажіть дисципліну"),
  workType: yup.string().required("Вкажіть вид роботи"),
  email: yup
    .string()
    .email("E-mail, який Ви написали не схожий на E-mail")
    .required("Заповніть поле E-mail"),
  phone: yup.string().required("Заповніть поле номеру телефона"),
  topic: yup.string().required("Заповніть тему роботи"),
  uniqueness: yup.number().required().default(0),
  pages: yup.number().required().default(1),
  term: yup.string().required("Виберіть термін роботи"),
  requirements: yup.string().optional(),
  reset: yup.mixed().test("reset", "Скинути форму", function (value) {
    const { reset } = this.parent || {};
    if (value === true) {
      reset && reset();
    }
    return true;
  }),
});

function calculatorSchemaFunc(lang:string) {
  if (lang == "ua") {
    const Schema = object({
      subject: yup.string().required("Вкажіть дисципліну"),
      workType: yup.string().required("Вкажіть вид роботи"),
      email: yup
        .string()
        .email("Щось не схоже на E-mail")
        .required("Заповніть поле E-mail"),
      phone: yup.string().required("Заповніть поле номеру телефона"),
      topic: yup.string().required("Заповніть тему роботи"),
      uniqueness: yup.number().required().default(0),
      pages: yup.number().required().default(1),
      term: yup.string().required("Виберіть термін роботи"),
      requirements: yup.string().optional(),
      reset: yup.mixed().test("reset", "Скинути форму", function (value) {
        const { reset } = this.parent || {};
        if (value === true) {
          reset && reset();
        }
        return true;
      }),
    });
    return Schema;
  } else {
    const Schema = object({
      subject: yup.string().required("Укажите дисциплину"),
      workType: yup.string().required("Укажите вид работы"),
      email: yup
        .string()
        .email("Что-то не похоже на E-mail")
        .required("Заполните поле E-mail"),
      phone: yup.string().required("Заполните поле телефонного номера"),
      topic: yup.string().required("Заполните тему работы"),
      uniqueness: yup.number().required().default(0),
      pages: yup.number().required().default(1),
      term: yup.string().required("Выберите срок работы"),
      requirements: yup.string().optional(),
      reset: yup.mixed().test("reset", "Сбросить форму", function (value) {
        const { reset } = this.parent || {};
        if (value === true) {
          reset && reset();
        }
        return true;
      }),
    });
    return Schema;
  }
}

export type CalculatorSchema = InferType<typeof calculatorSchema>;

export default function useCalculatorForm(lang: string) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<CalculatorSchema>({
    resolver: yupResolver(calculatorSchemaFunc(lang)),
  });
  const reset = useForm().reset; // Отримайте reset функцію

  return { register, handleSubmit, errors, control, watch, reset };
}
