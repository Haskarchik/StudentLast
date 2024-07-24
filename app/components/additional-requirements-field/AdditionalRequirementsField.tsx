import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";
import { Control, Controller } from "react-hook-form";
import { CalculatorSchema } from "../cost-calculator copy/useCalculatorForm";

type Props = { 
  control: Control<CalculatorSchema>,
  Home:any
};

export default function AdditionalRequirementsField({ control, Home }: Props) {
  
  return (
    <Controller
      control={control}
      name={"requirements"}
      render={({ field: { onChange, value } }) => (
        <TextField
          defaultValue={""}
          fullWidth
          id="filled-multiline-static"
          placeholder={Home.enter_additional_requirements} // Використовуємо переклад для плейсхолдера
          multiline
          variant="standard"
          value={value}
          onChange={onChange}
          InputProps={{
            disableUnderline: true,
            sx: {
              borderBottom: "2px solid white",
              fontFamily: "Oswald, serif",
              fontWeight: "200",
            },
          }}
        />
      )}
    />
  );
}
