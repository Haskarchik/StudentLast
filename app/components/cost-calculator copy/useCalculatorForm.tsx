'use client'
import * as yup from 'yup';
import { InferType, object } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const calculatorSchema = object({
  subject: yup.string().required('Вкажіть дисципліну'),
  workType: yup.string().required('Вкажіть вид роботи'),
  email: yup
    .string()
    .email('E-mail, який Ви написали не схожий на E-mail')
    .required('Заповніть поле E-mail'),
  phone: yup.string().required('Заповніть поле номеру телефона'),
  topic: yup.string().required('Заповніть тему роботи'),
  uniqueness: yup.number().required().default(0),
  pages: yup.number().required().default(1),
  term: yup.string().required('Виберіть термін роботи'),
  requirements: yup.string().optional(),
  reset: yup.mixed()
    .test('reset', 'Скинути форму', function (value) {
      const { reset } = this.parent || {};
      if (value === true) {
        reset && reset();
      }
      return true;
    }),
  
});




export type CalculatorSchema = InferType<typeof calculatorSchema>;

export default function useCalculatorForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },  
    control,
    watch,
  } = useForm<CalculatorSchema>({
    resolver:   yupResolver(calculatorSchema)
  });
  const reset = useForm().reset; // Отримайте reset функцію


  return { register, handleSubmit, errors, control, watch, reset };
}
