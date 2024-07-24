'use client'
import React, { useState } from "react";
import "./PerformerForm.scss";
import PhoneControl from "../phone/PhoneControl";
import Button from "../button/Button";
import { Autocomplete, TextField } from "@mui/material";
import { Controller, FieldError, SubmitHandler } from "react-hook-form";
import usePerformerForm, { PerformerSchema } from "../performer-form copy/usePerformerForm";
import CustomInput from "../custom-input/CustomInput";
import ErrorBlock from "../error-block/ErrorBlock";
import { TagsContext } from "../tags-input/TagsContext";
import TagsInput from "../tags-input/TagsInput";
import SuccessModal from "../success-modal/SuccessModal";


const PerformerForm = ({Performer,profession,typesOfWorkOptions,subjectsOptions}:{subjectsOptions:any,Performer:any,profession:string[],typesOfWorkOptions:any}) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = usePerformerForm();
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  function handleCloseModal() {
    setSuccessModalOpen(false);
  }

  const handleAddJob: SubmitHandler<PerformerSchema> = async (data) => {
    const message =
      "Привіт, Людмило!🙌\n" +
      "Надійшло нове повідомлення щодо авторства, поглянеш?🥰\n" +
      `👨‍🎓Ім’я та прізвище: ${data.fullName}\n` +
      `📕Спеціальність: ${data.profession}\n` +
      `📚Виконувані предмети: ${data.subjects}\n` +
      `✍️Виконувані типи робіт: ${data.workTypes}\n` +
      `📱Телефон: ${data.phone}`;
    const body = {
      chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
      text: message,
    };
    try {
      await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      setSuccessModalOpen(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      alert(error);
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit(handleAddJob)}
      className="wrapper-performer-form"
    >
      <span className="span-sub-article span-title">
        {Performer.provide_information}
        <span className="span-br">{Performer.about_qualification}</span>
      </span>
      <div className="performer-form-item">
        <p>
          {Performer.tell_about_skills}
          {Performer.we_contact_you}
        </p>
        <div className={"form-controls"}>
          <Controller
            render={({
              field: { value: fullName, onChange: handleFullNameChange },
            }) => (
              <CustomInput
                article={"Ім'я та прізвище"}
                type="text"
                value={fullName}
                change={handleFullNameChange}
              />
            )}
            name={"fullName"}
            control={control}
          />
          <ErrorBlock error={errors.fullName} />
        </div>
        <div>
          <span>{Performer.specialty}</span>
          <Controller
            control={control}
            name={"profession"}
            render={({
              field: { value: professions, onChange: setProfession },
            }) => (
              <Autocomplete
                fullWidth
                freeSolo
                onInputChange={(e, value) => setProfession(value)}
                options={profession}
                placeholder={Performer.specialty}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      sx: { borderBottom: "2px solid white" },
                      disableUnderline: true,
                    }}
                    variant="standard"
                  />
                )}
              />
            )}
          />
          <ErrorBlock error={errors.profession} />
        </div>

        <div className="tags-inputs">
          <div>
            <Controller
              control={control}
              name={"subjects"}
              render={({
                field: { value: subjects, onChange: setSubjects },
              }) => (
                <TagsContext.Provider
                  value={{
                    tags: subjects ? subjects : [],
                    setTags: (tags) => setSubjects(tags),
                  }}
                >
                  <TagsInput
                    Performer={Performer}
                    items={subjectsOptions}
                    titleText={Performer.performed_subjects}
                    emptyTagsText={Performer.add_performed_subjects}
                  />
                </TagsContext.Provider>
              )}
            />
            <ErrorBlock error={errors.subjects as FieldError} />
          </div>
          <div>
            <Controller
              control={control}
              name={"workTypes"}
              render={({
                field: { value: typesOfWork, onChange: setTypesOfWork },
              }) => (
                <TagsContext.Provider
                  value={{
                    tags: typesOfWork ? typesOfWork : [],
                    setTags: (tags) => setTypesOfWork(tags),
                  }}
                >
                  <TagsInput
                    Performer={Performer}
                    items={typesOfWorkOptions}
                    titleText={Performer.performed_works}
                    emptyTagsText={Performer.add_performed_works}
                  />
                </TagsContext.Provider>
              )}
            />
            <ErrorBlock error={errors.workTypes as FieldError} />
          </div>
        </div>
        <div>
          <PhoneControl
            control={control}
            label={Performer.number_phone}
            name={"phone"}
          />
          <ErrorBlock error={errors.phone} />
        </div>
        <div className={"button-wrapper"}>
          <Button text={Performer.apply} type={"submit"} />
        </div>
        <SuccessModal open={isSuccessModalOpen} onClose={handleCloseModal} />
      </div>
    </form>
  );
};

export default PerformerForm;
