'use client'
import React from "react";
import CustomField from "../custom-field/CustomField";
import { Control } from "react-hook-form";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export interface WorkTopicFieldProps {
  control: Control<CalculatorSchema>;
  Home:any
}

export default function WorkTopicField({ control,Home }: WorkTopicFieldProps) {

  return (
    <CustomField
      placeholder={Home.enter_topic}
      control={control}
      name={"topic"}
    />
  ); // Використовуємо переклад для плейсхолдера
}
