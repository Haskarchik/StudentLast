
import './QuestionsSection.scss';
import React from 'react';
import Question from './question/Question';

type Props={
  questions:any
}

const QuestionsSection:React.FC<Props>=({questions})=> {
  /*const questions = [
    {
      question: t("Work_type.question1"),
      answer:t("Work_type.answer1")
    },
    {
      question: t("Work_type.question2"),
      answer:t("Work_type.answer2")
    },
    {
      question: t("Work_type.question3"),
      answer:t("Work_type.answer3")
    },
    {
      question: t("Work_type.question4"),
      answer:t("Work_type.answer4")
    }
  ];*/

  return (
    <div className="question-wrapper">
      <div className="question-section-title span-sub-article span-title">Популярні питання</div>
      {questions.map((question:{question:string,description:string}, index:number) => (
        <Question key={index} question={question.question} answer={question.description} />
      ))}
    </div>
  );
}
export default QuestionsSection;
