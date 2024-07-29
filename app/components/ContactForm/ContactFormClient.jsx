// components/ContactFormClient.jsx
"use client";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ContactFormClient = ({ contactUs, lang, variant }) => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (router && router.query && router.query.message) {
      const message = router.query.message || "";
      setValue("desc", message);
    }
  }, [router, setValue]);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__personal}>
        <input
          {...register("name")}
          className={styles.form__input}
          placeholder={contactUs.name}
        />
        <input
          {...register("phone")}
          className={styles.form__input}
          placeholder={contactUs.phone}
        />
      </div>
      <input
        {...register("email")}
        className={styles.form__input}
        placeholder={contactUs.email}
      />
      <label
        htmlFor="desc"
        className={variant ? styles.form__label__alt : styles.form__label}
      >
        {contactUs.desc}
      </label>
      <textarea
        {...register("desc")}
        id={"desc"}
        className={styles.form__textarea}
        placeholder={contactUs.descPlaceholder}
      />
      <button
        title={contactUs.btn}
        type="submit"
        className={variant ? styles[`${variant}-btn`] : styles.form__btn}
      >
        {contactUs.btn}
      </button>
    </form>
  );
};

export default ContactFormClient;
