'use client'
export interface Offer {
  id: number;
  workName: string;
  price: number;
  time: string;
  processingTime:string;
  experience:number;
}
export const offersData = [
  {
    id: 1,
    workName: 'Курсова робота',
    price: 750,
    time: 'від 2 днів',
    processingTime: 'від 7 днів',
    experience: 10
  },
  {
    id: 2,
    workName: 'Дипломна робота',
    price: 4000,
    time: 'від 7 днів',
    processingTime: 'від 14 днів',
    experience: 8
  },
  {
    id: 5,
    workName: 'Дисертація',
    price: 50000,
    time: 'від 30 днів',
    processingTime: '7 днів',
    experience: 15
  },
  {
    id: 6,
    workName: 'Реферат',
    price: 250,
    time: 'від 1 год.',
    processingTime: 'до 3ьох годин',
    experience: 5
  },
  {
    id: 7,
    workName: 'Стаття',
    price: 250,
    time: 'до 3ьох год.',
    processingTime: 'до 1 дня',
    experience: 4
  },
  {
    id: 8,
    workName: 'Анотація',
    price: 250,
    time: 'до 3ьох год.',
    processingTime: 'до 1 дня',
    experience: 4
  },
  {
    id: 9,
    workName: 'Есе',
    price: 200,
    time: 'до 3ьох год.',
    processingTime: 'до 1 дня',
    experience: 5
  },
  {
    id: 10,
    workName: 'Контрольна робота',
    price: 200,
    time: '1 день',
    processingTime: '1 день',
    experience: 5
  },
  {
    id: 11,
    workName: 'Звіт з практики',
    price: 750,
    time: 'від 2 днів',
    processingTime: '3 дні',
    experience: 9
  },
  {
    id: 12,
    workName: 'Домашня робота',
    price: 150,
    time: '2 дні',
    processingTime: '3 дні',
    experience: 3
  },
  {
    id: 13,
    workName: 'Задача',
    price: 60,
    time: 'від 1 дня',
    processingTime: '2 дні',
    experience: 4
  },
  {
    id: 14,
    workName: 'Магістерська робота',
    price: 4500,
    time: 'від 14 днів',
    processingTime: '7 днів',
    experience: 2
  },
  {
    id: 15,
    workName: 'Підвищення унікальності',
    price: 100,
    time: 'від 1 дня',
    processingTime: '1 день',
    experience: 6
  },
  {
    id: 16,
    workName: 'Рецензія',
    price: 150,
    time: 'від 1 дня',
    processingTime: '3 год.',
    experience: 10
  },
  {
    id: 17,
    workName: 'Переклад',
    price: 100,
    time: 'від 1 дня',
    processingTime: '7 днів',
    experience: 10
  },
  {
    id: 18,
    workName: 'Креслення',
    price: 150,
    time: 'від 1 дня',
    processingTime: '1 день',
    experience: 5
  },
  {
    id: 19,
    workName: 'Презентація',
    price: 150,
    time: 'від 3 год.',
    processingTime: '1 день',
    experience: 2
  },
  {
    id: 20,
    workName: 'Бізнес - план',
    price: 800,
    time: 'від 2 днів',
    processingTime: '1 день',
    experience: 7
  },
  {
    id: 22,
    workName: 'Лабораторна робота',
    price: 150,
    time: 'від 1 дня',
    processingTime: '1 день',
    experience: 3
  },
  {
    id: 23,
    workName: 'Допомога на онлайн іспиті/модулі',
    processingTime: '1 день',
    price: 250,
    time: 'від 1 дня',
    experience: 12
  },
  {
    id: 24,
    workName: 'Копірайтинг',
    price: 100,
    time: 'від 1 дня',
    processingTime: '1 день',
    experience: 5
  },
  {
    id: 27,
    workName: 'Інше',
    price: 100,
    time: 'від 1 дня',
    processingTime: 'від 1 дня',
    experience: 2
  }
];
