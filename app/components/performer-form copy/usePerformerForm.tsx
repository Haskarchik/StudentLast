'use client'
import { array, InferType, object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const initialSubjects: string[] = [];
const initialWorkTypes: string[] = [];

const performerSchema = object({
  fullName: string().required("Заповніть своє ім'я та прізвище").min(3),
  profession: string().required('Виберіть спеціальність'),
  subjects: array()
    .of(string().defined())
    .required('Виберіть хоча б один виконуваний предмет')
    .test({ message: 'Виберіть хоча б один виконуваний предмет', test: (arr) => arr?.length >= 1 }),
  workTypes: array()
    .of(string().defined())
    .required('Виберіть вид роботи, який ви можете виконувати')
    .test({ message: 'Виберіть хоча б один вид роботи', test: (arr) => arr?.length >= 1 }),

  phone: string().required('Заповніть свій номер телефону')
});

export type PerformerSchema = InferType<typeof performerSchema>;

export default function usePerformerForm() {
  return useForm({
    resolver: yupResolver(performerSchema)
  });
}
