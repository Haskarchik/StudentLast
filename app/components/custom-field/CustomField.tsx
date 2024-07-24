'use cleint'
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { Control, Controller } from "react-hook-form";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";

interface CustomFieldProps {
  name: keyof CalculatorSchema;
  placeholder: string;
  control: Control<CalculatorSchema>;
}

export default function CustomField({
  placeholder,
  control,
  name,
}: CustomFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <TextField
          defaultValue={""}
          fullWidth
          variant="standard"
          type="text"
          autoCorrect="off"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            "input::placeholder": {
              fontSize: "16px",
              opacity: 0.8,
            },
            borderBottom: "2px solid white",
          }}
        />
      )}
    />
  );
}
