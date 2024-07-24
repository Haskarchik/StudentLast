'use client'
import { Slider } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";

interface CustomSliderProps {
  control: Control<CalculatorSchema>;
  name: keyof CalculatorSchema;
}

export default function CustomSlider({ control, name }: CustomSliderProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Slider
          aria-label={"Оригінальність роботи"}
          value={value as number}
          onChange={onChange}
          sx={{
            "& .MuiSlider-rail": {
              color: "white",
              opacity: 0.8,
              height: 3,
            },
            marginTop: "0.5rem",
          }}
          defaultValue={0}
        />
      )}
    />
  );
}
