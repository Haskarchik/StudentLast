'use client'
import { Locale } from "@/i18n.config";
import CustomAutocomplete from "../custom-autocomplete/CustomAutocomplete";
import { Control } from "react-hook-form";
import { getDictionary } from "@/lib/dictionary";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";

export interface WorkTypeAutocompleteProps {
  control: Control<CalculatorSchema>;
  subjects:any,
  Home:any
}

export default function WorkTypeAutocomplete({
  control,subjects,Home
}: WorkTypeAutocompleteProps) {
  const typesOfWorkOptions: Array<string> = [
    subjects.Coursework,
    subjects.Thesis,
    subjects.MasterThesis,
    subjects.Abstract,
    subjects.Annotation,
    subjects.BusinessPlan,
    subjects.AnswersToQuestions,
    subjects.Dissertation,
    subjects.Homework,
    subjects.OnlineExamHelp,
    subjects.Essay,
    subjects.Problem,
    subjects.EssayAbstract,
    subjects.InternshipReport,
    subjects.CaseStudy,
    subjects.ControlWork,
    subjects.Copywriting,
    subjects.Drawing,
    subjects.LabReport,
    subjects.Monograph,
    subjects.MotivationLetter,
    subjects.IncreaseUniqueness,
    subjects.Translation,
    subjects.Presentation,
    subjects.Plan,
    subjects.Review,
    subjects.Article,
    subjects.CreativeWork,
    subjects.Theses,
    subjects.Tests,
    subjects.PracticeDiary,
  ];
  return (
    <CustomAutocomplete
      placeholder={Home.select_type_work}
      options={typesOfWorkOptions}
      control={control}
      name={"workType"}
    />
  );
}
