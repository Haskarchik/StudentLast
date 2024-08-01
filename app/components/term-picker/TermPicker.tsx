'use client'
import { useEffect, useState } from "react";
import { Control } from "react-hook-form";
import "./TermPicker.scss";
import { log } from "console";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export interface TermPickerProps {
  control: Control<CalculatorSchema>;
}

export default function TermPicker({ control }: TermPickerProps) {
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    control._formValues.term = new Date().toISOString().slice(0, 10);
  }, []);
  const handleDateChange = (e: any) => {
    control._formValues.term = e.target.value;
    setCurrentDate(e.target.value);
  };

  return (
    <div className="date-picker">
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={currentDate}
        onChange={handleDateChange}
       
      />
    </div>
  );
}
