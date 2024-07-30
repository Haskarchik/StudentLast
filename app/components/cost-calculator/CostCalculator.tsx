"use client";
import { useState } from "react";
import "./CostCalculator.scss";
import { SubmitHandler } from "react-hook-form";
import SubjectAutocomplete from "../subject-autocomplete/SubjectAutocomplete";
import ErrorBlock from "../error-block/ErrorBlock";
import WorkTypeAutocomplete from "../work-type-autocomplete/WorkTypeAutocomplete";
import TermPicker from "../term-picker/TermPicker";
import EmailField from "../email-field/EmailField";
import WorkTopicField from "../work-topic-field/WorkTopicField";
import PhoneControl from "../phone/PhoneControl";
import CustomSlider from "../custom-slider/CustomSlider";
import FileInput from "../file-input/FileInput";
import AdditionalRequirementsField from "../additional-requirements-field/AdditionalRequirementsField";
import Button from "../button/Button";
import SuccessModal from "../success-modal/SuccessModal";
import OrderResult from "../order-result/OrderResult";
import { Locale } from "@/i18n.config";
import useCalculatorForm, {
  CalculatorSchema,
} from "../cost-calculator copy/useCalculatorForm";

const CostCalculator = ({
  Home,
  subjects,
  lang,
}: {
  Home: any;
  subjects: any;
  lang: Locale;
}) => {
  const { handleSubmit, errors, control, watch } = useCalculatorForm();
  const [files, setFiles] = useState<File[]>();
  const uniqueness = watch("uniqueness", 0);
  const pages = watch("pages", 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  function handleCloseSuccessModal() {
    setOpenSuccessModal(false);
  }

  const handleSendForm: SubmitHandler<CalculatorSchema> = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    const text =
      `Привіт, Людмило!🙌\n` +
      `Надійшло нове замовлення.🤑\n` +
      `📚Дисципліна: ${data.subject}\n` +
      `📖Тип роботи: ${data.workType}\n` +
      `🕒Термін: ${data.term}\n` +
      `📧E-mail: ${data.email}\n` +
      `⁉️Тема роботи: ${data.topic}\n` +
      `📱Телефон: ${data.phone}\n` +
      `✨Оригінальність роботи: ${data.uniqueness}%\n` +
      `✍️Кількість сторінок: ${data.pages} ст.\n` +
      `➕Додаткові вимоги: ${
        data.requirements ? data.requirements : "Поки немає"
      }`;
    const body = {
      chat_id: process.env.REACT_APP_CHAT_ID,
      text,
    };
    try {
      const result = await (
        await fetch(
          `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        )
      ).json();
      console.log(result);
      if (files) {
        if (result.ok === true) {
          if (!files || files.length === 0) {
            setOpenSuccessModal(true);
            setTimeout(function () {
              window.location.reload();
            }, 2000);
            return;
          }
          for (const file of files) {
            const form = new FormData();
            form.append("document", file);

            form.append("chat_id", process.env.REACT_APP_CHAT_ID!);
            form.append("reply_to_message_id", result.result.message_id);
            await fetch(
              `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_CHAT_ID}/sendDocument`,
              {
                method: "POST",
                body: form,
              }
            );
          }
        }
        setOpenSuccessModal(true);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      alert("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  function handleFileChange(files: File[]) {
    setFiles(files);
  }

  return (
    <form
      className="wrapper-costCalc"
      id="cost-calculation"
      onSubmit={handleSubmit(handleSendForm)}
    >
      <div className="work-article">
        <div className="w-100">
          <div>{Home.discipline}</div>
          <SubjectAutocomplete
            subjects={subjects}
            Home={Home}
            control={control}
          />
          <ErrorBlock error={errors.subject} />
        </div>

        <div className="w-100">
          <div>{Home.type_work}</div>
          <WorkTypeAutocomplete
            subjects={subjects}
            Home={Home}
            control={control}
          />
          <ErrorBlock error={errors.workType} />
        </div>
      </div>
      <div className="date-pages">
        <div className="w-100">
          <div>{Home.term}</div>

          <TermPicker control={control} />
          <ErrorBlock error={errors.term} />
        </div>
        <div className="w-100">
          <div>E-mail</div>
          <EmailField Home={Home} control={control} />
          <ErrorBlock error={errors.email} />
        </div>
      </div>
      <div className="subject w-100">
        <div>{Home.topic_work}</div>
        <WorkTopicField Home={Home} control={control} />
        <ErrorBlock error={errors.topic} />
      </div>
      <div style={{ position: "relative" }} className="phone">
        <PhoneControl
          label={Home.phone_number}
          control={control}
          name={"phone"}
        />
        <ErrorBlock error={errors.phone} />
      </div>
      <div className="additional">
        <div className="w-100">
          <div className="center-text">{Home.uniqueness}</div>
          <CustomSlider control={control} name={"uniqueness"} />
          <div className="center-text">{uniqueness}%</div>
          <ErrorBlock error={errors.uniqueness} />
        </div>
        <div className="w-100">
          <div className="center-text">{Home.page_count}</div>
          <CustomSlider control={control} name={"pages"} />

          <div className="center-text">
            {pages}&nbsp;
            {lang == "ua"
              ? pages == 0
                ? "сторінок"
                : pages.toString()[pages.toString().length - 1] == "1"
                  ? "сторінка"
                  : parseInt(pages.toString()[pages.toString().length - 1]) <= 4
                    ? "сторінки"
                    : "сторінок"
              : pages == 1
                ? "page"
                : "pages"}
          </div>
          <ErrorBlock error={errors.pages} />
        </div>
      </div>
      <div className="file-field">
        <FileInput Home={Home} onChange={handleFileChange} />
      </div>
      <div className="additional-requirements">
        <div>{Home.additional_requirements}</div>
        <AdditionalRequirementsField Home={Home} control={control} />
      </div>
      <div className="order-button">
        <Button
          disabled={isSubmitting}
          text={Home.order}
          type={"submit"}
        ></Button>
      </div>
      <SuccessModal open={openSuccessModal} onClose={handleCloseSuccessModal} />
      <div>
        <OrderResult label={"test"} />
      </div>
    </form>
  );
};

export default CostCalculator;
