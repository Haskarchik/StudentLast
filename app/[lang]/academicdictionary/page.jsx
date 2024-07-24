import React from "react";
import style from "./academStyle.module.scss";
import Spoiler from "./Spoiler";
import { getDictionary } from "@/lib/dictionary";
import { Metadata, ResolvingMetadata } from 'next'
 
export async function generateMetadata(
  { params },
) {
  return params.lang=="ua"?
      {
        title:"Академічний словник",
        description: "У нашому Академічному словнику зібрана величезна кількість корисних термінів і визначень, які стануть вам у пригоді під час навчання. Ми надаємо роз'яснення ключових понять, допомагаємо розібратися в особливостях різних предметів та дисциплін. Відкрийте для себе широкий спектр термінів, що стосуються науки, мистецтва та багатьох інших галузей. Використовуйте наш Академічний словник як незамінний ресурс для поглибленого розуміння тем та понять у вашому навчанні.",
        robots: 'index, follow',
        keywords:"купити, замовити, курсову, дипломну, контрольну, лабораторну, математику, англійську"
      }
    :
      {
        title:"Academic Dictionary",
        description: "In our Academic Dictionary, you'll find a vast collection of useful terms and definitions that will come in handy during your studies. We provide explanations for key concepts, helping you understand the intricacies of various subjects and disciplines. Explore a wide range of terms related to science, arts, and many other fields. Use our Academic Dictionary as an invaluable resource for a deeper understanding of topics and concepts in your learning journey.",
        robots: 'index, follow',
        keywords: "Академічний словник"
      }
}


const AcademicDictionary =async ({params:{lang}}) => {
  const {academicDictionary}=await getDictionary(lang);
  const array = [
    98, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2,
    2, 2, 2, 2,
  ];

  let idMainTitle = 1;
  let idText = 1;
  return (
    <div className={style.academac_dictionary}>
      {array.map((countText, idx) => {
        return (
          <div key={idx} className={style.subject}>
              {Array(countText)
                .fill(null)
                .map((_, subIdx) => (
                  <div key={subIdx} className={style.title_and_text}>
                    <h1>{academicDictionary[`title${idText}`]}</h1>
                    <div className={style.text}>
                      {academicDictionary[`text${idText++}`]}
                    </div>
                  </div>
                ))}
          </div>
        );
      })}
    </div>
  );
};

export default AcademicDictionary;
