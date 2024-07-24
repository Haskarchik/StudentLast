'use client'
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
  const [phoneNumber, setPhoneNumber] = useState("+(380)");
  const phoneRef = useRef();

  function onPhoneNumberChanged(
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
  ) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const parsedNumber = parsePhoneNumber(e.target.value);
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
      ];
      for (const c of e.target.value) {
        if (allowedChars.every((c2) => c !== c2)) {
          return;
        }
      }
      if (e.target.value.length <= 15) {
        setPhoneNumber(e.target.value);
        onChange(e);

        if (e.target.value === "") {
          setCountryCode("ua");
        }
        if (parsedNumber && countryCode === "ua" && parsedNumber.country) {
          setCountryCode(parsedNumber.country.toLowerCase());
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
        )?.phone})`;
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
                  defaultValue={"+(380)"}
                  className="themeInput"
                  autoComplete="off"
                  fullWidth
                  variant="standard"
                  value={value}
                  sx={{
                    "input::placeholder": {
                      opacity: 0.8,
                      fontFamily: "Times, Times New Roman, serif",
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
