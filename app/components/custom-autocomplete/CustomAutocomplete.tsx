'use client'
import { Autocomplete, TextField } from "@mui/material";
import React, { ChangeEvent, SyntheticEvent } from "react";
import { Control, Controller } from "react-hook-form";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";

type ChangeFunction = (event: SyntheticEvent, value: string) => void;

export interface CustomAutocompleteProps {
  options: string[];
  placeholder: string;
  className?: string;
  control: Control<CalculatorSchema>;
  name: keyof CalculatorSchema;
}

export default function CustomAutocomplete({
  options,
  placeholder,
  className,
  control,
  name,
}: CustomAutocompleteProps) {
  function handleChange(onChange: (s: string) => void) {
    return (event: SyntheticEvent, value: string) => {
      onChange(value);
    };
  }
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          className={className}
          fullWidth
          freeSolo
          onInputChange={handleChange(onChange)}
          options={options}
          renderInput={(params) => (
            <TextField
              placeholder={placeholder}
              {...params}
              InputProps={{
                ...params.InputProps,
                sx: {
                  borderBottom: "2px solid white",
                  "input::placeholder": { opacity: 0.8 },
                  fontFamily: "Times, Times New Roman, serif",
                },
                disableUnderline: true,
              }}
              variant="standard"
            />
          )}
        />
      )}
    />
  );
}
