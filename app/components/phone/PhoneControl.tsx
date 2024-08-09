"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import "./PhoneControl.scss";
import parsePhoneNumber from "libphonenumber-js";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { countries, countryNames } from "./countries";
import { Control, Controller, FieldValues } from "react-hook-form";

interface PhoneControlProps<T extends FieldValues> {
  label?: string;
  control: Control<T>;
  name: keyof T;
}

const PhoneControl = <T extends FieldValues>({
  label,
  control,
  name,
}: PhoneControlProps<T>) => {
  const [countryCode, setCountryCode] = useState<string>("ua");
  const [phoneNumber, setPhoneNumber] = useState("+(380) ");
  const phoneRef = useRef();

  function formatPhoneNumber(value: string) {
    // Видаляємо всі символи, які не є цифрами, крім початкового коду країни
    const cleanValue = value.replace(/[^\d]/g, "");

    // Розділяємо номер на частини після коду країни
    const match = cleanValue.match(/^380(\d{2})(\d{3})(\d{4})$/);

    if (match) {
      return `+(380) ${match[1]} ${match[2]} ${match[3]}`;
    }

    return `+(380) ${cleanValue.slice(3)}`; // Залишаємо код країни нетронутим
  }

  function onPhoneNumberChanged(
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
  ) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const allowedChars = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "(",
        ")",
        " ",
      ];

      for (const c of e.target.value) {
        if (allowedChars.every((c2) => c !== c2)) {
          return;
        }
      }

      if (e.target.value.length <= 18) {
        const formattedNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedNumber);
        onChange({ ...e, target: { ...e.target, value: formattedNumber } });

        if (e.target.value === "") {
          setCountryCode("ua");
          setPhoneNumber("+(380) ");
        }

        e.preventDefault();
      }
    };
  }

  function handleCountryChange(onChange: (s: string) => void) {
    return (event: SelectChangeEvent) => {
      if (event.target.value) {
        setCountryCode(event.target.value);
        const phoneNumber = `+(${countries.find(
          (country) => country.code === event.target.value
        )?.phone}) `;
        setPhoneNumber(phoneNumber);
        onChange(phoneNumber);
        event.preventDefault();
      }
    };
  }

  return (
    <>
      <span>{label}</span>
      <div className="phone-container">
        <div className="phone-field">
          <Controller
            control={control}
            name={name as never}
            render={({ field: { value, onChange } }) => (
              <>
                <Select
                  className={"phone-flag"}
                  value={countryCode}
                  variant={"standard"}
                  onChange={handleCountryChange(onChange)}
                  renderValue={(value) =>
                    countryNames.get(value) ? (
                      <ReactCountryFlag
                        countryCode={value}
                        svg
                        style={{ margin: "0 0.25rem" }}
                        id={"select-country-id"}
                        alt={value}
                      />
                    ) : null
                  }
                  disableUnderline={true}
                  sx={{ borderBottom: "2px solid white" }}
                >
                  {countries.map((country) => (
                    <MenuItem
                      key={country.code}
                      value={country.code}
                      sx={{ display: "flex", gap: "0.5rem" }}
                    >
                      <ReactCountryFlag
                        className="phone-flag"
                        countryCode={country.code}
                        svg
                        style={{ marginLeft: "0.25rem" }}
                        alt={country.code}
                      />
                      <div>{countryNames.get(country.code)}</div>
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  defaultValue={"+(380) "}
                  className="themeInput"
                  autoComplete="off"
                  fullWidth
                  variant="standard"
                  value={value}
                  sx={{
                    "input::placeholder": {
                      opacity: 0.8,
                      fontFamily: "Times, Times New Roman, serif",
                      fontSize: "17px",
                    },
                  }}
                  inputRef={phoneRef}
                  InputProps={{
                    sx: {
                      borderBottom: "2px solid white",
                      height: "100%",
                      paddingLeft: "0.5rem",
                    },
                    disableUnderline: true,
                  }}
                  onChange={onPhoneNumberChanged(onChange)}
                />
              </>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default PhoneControl;
