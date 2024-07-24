'use client'
import React from "react";
import { Control } from "react-hook-form";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import CustomField from "../custom-field/CustomField";

export interface EmailFieldProps {
  control: Control<CalculatorSchema>;
  Home:any
}

export default function EmailField({ control,Home }: EmailFieldProps) {
   
  return (
    <CustomField
      placeholder={Home.enter_email}
      control={control}
      name={"email"}
    />
  ); // Використовуємо переклад для плейсхолдера
}
