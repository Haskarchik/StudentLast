export type typeOffersData = {
  id: number;
  workName: string;
  price: number;
  time: string;
  processingTime: string;
  experience: number;
  desc: string;
  question: [
    {
      question: string;
      description: string;
    },
    {
      question: string;
      description: string;
    },
    {
      question: string;
      description: string;
    },
    {
      question: string;
      description: string;
    },
  ];
};

export function getOfferData(OffersData: any, OffersDataDesc: any) {
  const from = OffersData.from;
  const days = OffersData.days;
  const hour = OffersData.hour;
  const to = OffersData.to;
  const offersData: typeOffersData[] = [
    {
      id: 5,
      workName: OffersData.coursework,
      price: 750,
      time: `${from} 2 ${days}`,
      processingTime: `${from} 7 ${days}`,
      experience: 10,
      desc: OffersDataDesc.coursework,
      question: [
        {
          question: OffersData.question_1_1,
          description: OffersData.description_1_1,
        },
        {
          question: OffersData.question_1_2,
          description: OffersData.description_1_2,
        },
        {
          question: OffersData.question_1_3,
          description: OffersData.description_1_3,
        },
        {
          question: OffersData.question_1_4,
          description: OffersData.description_1_4,
        },
      ],
    },
    {
      id: 6,
      workName: OffersData.graduate_work,
      price: 4000,
      time: `${from} 7 ${days}`,
      processingTime: `${from} 14 ${days}`,
      experience: 8,
      desc: OffersDataDesc.graduate_work,
      question: [
        {
          question: OffersData.question_2_1,
          description: OffersData.description_2_1,
        },
        {
          question: OffersData.question_2_2,
          description: OffersData.description_2_2,
        },
        {
          question: OffersData.question_2_3,
          description: OffersData.description_2_3,
        },
        {
          question: OffersData.question_2_4,
          description: OffersData.description_2_4,
        },
      ],
    },
    {
      id: 3,
      workName: OffersData.practice_report,
      price: 750,
      time: `${from} 2 ${days}`,
      processingTime: `3 ${days}`,
      experience: 9,
      desc: OffersDataDesc.practice_report,
      question: [
        {
          question: OffersData.question_9_1,
          description: OffersData.description_9_1,
        },
        {
          question: OffersData.question_9_2,
          description: OffersData.description_9_2,
        },
        {
          question: OffersData.question_9_3,
          description: OffersData.description_9_3,
        },
        {
          question: OffersData.question_9_4,
          description: OffersData.description_9_4,
        },
      ],
    },
    {
      id: 19,
      workName: OffersData.business_plan,
      price: 800,
      time: `${from} 2 ${days}`,
      processingTime: `1 ${days}`,
      experience: 7,
      desc:  OffersDataDesc.business_plan,
      question: [
        {
          question: OffersData.question_18_1,
          description: OffersData.description_18_1,
        },
        {
          question: OffersData.question_18_2,
          description: OffersData.description_18_2,
        },
        {
          question: OffersData.question_18_3,
          description: OffersData.description_18_3,
        },
        {
          question: OffersData.question_18_4,
          description: OffersData.description_18_4,
        },
      ],
    },
    {
      id: 2,
      workName: OffersData.dissertation,
      price: 50000,
      time: `${from} 30 ${days}`,
      processingTime: `7 ${days}`,
      experience: 15,
      desc: OffersDataDesc.dissertation,
      question: [
        {
          question: OffersData.question_3_1,
          description: OffersData.description_3_1,
        },
        {
          question: OffersData.question_3_2,
          description: OffersData.description_3_2,
        },
        {
          question: OffersData.question_3_3,
          description: OffersData.description_3_3,
        },
        {
          question: OffersData.question_3_4,
          description: OffersData.description_3_4,
        },
      ],
    },
    {
      id: 15,
      workName: OffersData.abstract,
      price: 250,
      time: `${to} 1 ${hour}`,
      processingTime: `${to} 7 ${days}`,
      experience: 5,
      desc: OffersDataDesc.abstract,
      question: [
        {
          question: OffersData.question_4_1,
          description: OffersData.description_4_1,
        },
        {
          question: OffersData.question_4_2,
          description: OffersData.description_4_2,
        },
        {
          question: OffersData.question_4_3,
          description: OffersData.description_4_3,
        },
        {
          question: OffersData.question_4_4,
          description: OffersData.description_4_4,
        },
      ],
    },
    {
      id: 12,
      workName: OffersData.article,
      price: 250,
      time: `${to} 3 ${hour}`,
      processingTime: `${to} 1 ${days}`,
      experience: 4,
      desc: OffersDataDesc.article,
      question: [
        {
          question: OffersData.question_5_1,
          description: OffersData.description_5_1,
        },
        {
          question: OffersData.question_5_2,
          description: OffersData.description_5_2,
        },
        {
          question: OffersData.question_5_3,
          description: OffersData.description_5_3,
        },
        {
          question: OffersData.question_5_4,
          description: OffersData.description_5_4,
        },
      ],
    },
    {
      id: 1,
      workName: OffersData.abstracts,
      price: 250,
      time: `${to} 3 ${hour}`,
      processingTime: `${to} 1 ${days}`,
      experience: 4,
      desc: OffersDataDesc.abstracts,
      question: [
        {
          question: OffersData.question_6_1,
          description: OffersData.description_6_1,
        },
        {
          question: OffersData.question_6_2,
          description: OffersData.description_6_2,
        },
        {
          question: OffersData.question_6_3,
          description: OffersData.description_6_3,
        },
        {
          question: OffersData.question_6_4,
          description: OffersData.description_6_4,
        },
      ],
    },
    {
      id: 11,
      workName: OffersData.essay,
      price: 200,
      time: `${to} 3 ${hour}`,
      processingTime: `${to} 1 ${days}`,
      experience: 5,
      desc: OffersDataDesc.essay,
      question: [
        {
          question: OffersData.question_7_1,
          description: OffersData.description_7_1,
        },
        {
          question: OffersData.question_7_2,
          description: OffersData.description_7_2,
        },
        {
          question: OffersData.question_7_3,
          description: OffersData.description_7_3,
        },
        {
          question: OffersData.question_7_4,
          description: OffersData.description_7_4,
        },
      ],
    },
    {
      id: 8,
      workName: OffersData.control_work,
      price: 200,
      time: `1 ${days}`,
      processingTime: `1 ${days}`,
      experience: 5,
      desc: OffersDataDesc.control_work,
      question: [
        {
          question: OffersData.question_8_1,
          description: OffersData.description_8_1,
        },
        {
          question: OffersData.question_8_2,
          description: OffersData.description_8_2,
        },
        {
          question: OffersData.question_8_3,
          description: OffersData.description_8_3,
        },
        {
          question: OffersData.question_8_4,
          description: OffersData.description_8_4,
        },
      ],
    },
    {
      id: 4,
      workName: OffersData.homework,
      price: 150,
      time: `2 ${days}`,
      processingTime: `3 ${days}`,
      experience: 3,
      desc: OffersDataDesc.homework,
      question: [
        {
          question: OffersData.question_10_1,
          description: OffersData.description_10_1,
        },
        {
          question: OffersData.question_10_2,
          description: OffersData.description_10_2,
        },
        {
          question: OffersData.question_10_3,
          description: OffersData.description_10_3,
        },
        {
          question: OffersData.question_10_4,
          description: OffersData.description_10_4,
        },
      ],
    },
    {
      id: 13,
      workName: OffersData.problem,
      price: 60,
      time: `${from} 1 ${days}`,
      processingTime: `2 ${days}`,
      experience: 4,
      desc: OffersDataDesc.problem,
      question: [
        {
          question: OffersData.question_11_1,
          description: OffersData.description_11_1,
        },
        {
          question: OffersData.question_11_2,
          description: OffersData.description_11_2,
        },
        {
          question: OffersData.question_11_3,
          description: OffersData.description_11_3,
        },
        {
          question: OffersData.question_11_4,
          description: OffersData.description_11_4,
        },
      ],
    },
    {
      id: 7,
      workName: OffersData.master_thesis,
      price: 4500,
      time: `${from} 9 ${days}`,
      processingTime: `7 ${days}`,
      experience: 2,
      desc: OffersDataDesc.master_thesis,
      question: [
        {
          question: OffersData.question_12_1,
          description: OffersData.description_12_1,
        },
        {
          question: OffersData.question_12_2,
          description: OffersData.description_12_2,
        },
        {
          question: OffersData.question_12_3,
          description: OffersData.description_12_3,
        },
        {
          question: OffersData.question_12_4,
          description: OffersData.description_12_4,
        },
      ],
    },
    {
      id: 10,
      workName: OffersData.increasing_uniqueness,
      price: 100,
      time: `${from} 1 ${days}`,
      processingTime: `1 ${days}`,
      experience: 6,
      desc: OffersDataDesc.increasing_uniqueness,
      question: [
        {
          question: OffersData.question_13_1,
          description: OffersData.description_13_1,
        },
        {
          question: OffersData.question_13_2,
          description: OffersData.description_13_2,
        },
        {
          question: OffersData.question_13_3,
          description: OffersData.description_13_3,
        },
        {
          question: OffersData.question_13_4,
          description: OffersData.description_13_4,
        },
      ],
    },
    {
      id: 14,
      workName: OffersData.review,
      price: 150,
      time: `${from} 1 ${days}`,
      processingTime: `3 ${hour}`,
      experience: 10,
      desc: OffersDataDesc.review,
      question: [
        {
          question: OffersData.question_14_1,
          description: OffersData.description_14_1,
        },
        {
          question: OffersData.question_14_2,
          description: OffersData.description_14_2,
        },
        {
          question: OffersData.question_14_3,
          description: OffersData.description_14_3,
        },
        {
          question: OffersData.question_14_4,
          description: OffersData.description_14_4,
        },
      ],
    },
    {
      id: 16,
      workName: OffersData.translation,
      price: 100,
      time: `${from} 1 ${days}`,
      processingTime: `7 ${days}`,
      experience: 10,
      desc: OffersDataDesc.translation,
      question: [
        {
          question: OffersData.question_15_1,
          description: OffersData.description_15_1,
        },
        {
          question: OffersData.question_15_2,
          description: OffersData.description_15_2,
        },
        {
          question: OffersData.question_15_3,
          description: OffersData.description_15_3,
        },
        {
          question: OffersData.question_15_4,
          description: OffersData.description_15_4,
        },
      ],
    },
    {
      id: 17,
      workName: OffersData.drawing,
      price: 150,
      time: `${from} 1 ${days}`,
      processingTime: `1 ${days}`,
      experience: 5,
      desc: OffersDataDesc.drawing,
      question: [
        {
          question: OffersData.question_16_1,
          description: OffersData.description_16_1,
        },
        {
          question: OffersData.question_16_2,
          description: OffersData.description_16_2,
        },
        {
          question: OffersData.question_16_3,
          description: OffersData.description_16_3,
        },
        {
          question: OffersData.question_16_4,
          description: OffersData.description_16_4,
        },
      ],
    },
    {
      id: 18,
      workName: OffersData.presentation,
      price: 150,
      time: `${from} 3 ${hour}`,
      processingTime: `1 ${hour}`,
      experience: 2,
      desc: OffersDataDesc.presentation,
      question: [
        {
          question: OffersData.question_17_1,
          description: OffersData.description_17_1,
        },
        {
          question: OffersData.question_17_2,
          description: OffersData.description_17_2,
        },
        {
          question: OffersData.question_17_3,
          description: OffersData.description_17_3,
        },
        {
          question: OffersData.question_17_4,
          description: OffersData.description_17_4,
        },
      ],
    },
    {
      id: 9,
      workName: OffersData.lab,
      price: 150,
      time: `${from} 1 ${days}`,
      processingTime: `1 ${days}`,
      experience: 3,
      desc: OffersDataDesc.lab,
      question: [
        {
          question: OffersData.question_19_1,
          description: OffersData.description_19_1,
        },
        {
          question: OffersData.question_19_2,
          description: OffersData.description_19_2,
        },
        {
          question: OffersData.question_19_3,
          description: OffersData.description_19_3,
        },
        {
          question: OffersData.question_19_4,
          description: OffersData.description_19_4,
        },
      ],
    },
    {
      id: 21,
      workName: OffersData.online_exam,
      processingTime: `1 ${days}`,
      price: 250,
      time: `${from} 1 ${days}`,
      experience: 12,
      desc: OffersDataDesc.online_exam,
      question: [
        {
          question: OffersData.question_19_1,
          description: OffersData.description_19_1,
        },
        {
          question: OffersData.question_19_2,
          description: OffersData.description_19_2,
        },
        {
          question: OffersData.question_19_3,
          description: OffersData.description_19_3,
        },
        {
          question: OffersData.question_19_4,
          description: OffersData.description_19_4,
        },
      ],
    },
    {
      id: 20,
      workName: OffersData.copywriting,
      price: 100,
      time: `${from} 1 ${days}`,
      processingTime: `1 ${days}`,
      experience: 5,
      desc: OffersDataDesc.copywriting,
      question: [
        {
          question: OffersData.question_21_1,
          description: OffersData.description_21_1,
        },
        {
          question: OffersData.question_21_2,
          description: OffersData.description_21_2,
        },
        {
          question: OffersData.question_21_3,
          description: OffersData.description_21_3,
        },
        {
          question: OffersData.question_21_4,
          description: OffersData.description_21_4,
        },
      ],
    },
    {
      id: 22,
      workName: OffersData.other,
      price: 100,
      time: `${from} 1 ${days}`,
      processingTime: `${from} 1 ${days}`,
      experience: 2,
      desc: OffersDataDesc.other,
      question: [
        {
          question: OffersData.question_22_1,
          description: OffersData.description_22_1,
        },
        {
          question: OffersData.question_22_2,
          description: OffersData.description_22_2,
        },
        {
          question: OffersData.question_22_3,
          description: OffersData.description_22_3,
        },
        {
          question: OffersData.question_22_4,
          description: OffersData.description_22_4,
        },
      ],
    },
  ];
  return offersData;
}
