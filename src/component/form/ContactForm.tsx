import { Activity, type FormEvent, useState } from "react";

import { clsx } from "clsx";
import { LoaderCircle } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";

import { type AnyFieldApi, useForm } from "@tanstack/react-form";

import { sendContactEmail } from "@/api/send-contact-email";

const requiredValidator = (t: (key: string) => string) => ({
  onChange: ({ value }: { value: string }) => {
    if (!value.length) return t("required");
  },
});

export const ContactForm = () => {
  const [contactFormState, setContactFormState] = useState<
    "success" | "error" | null
  >(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async ({ value, formApi }) => {
      const resp = await sendContactEmail({ data: value });
      setContactFormState(resp.status);
      if (resp.status === "success") {
        formApi.reset();
        setTimeout(() => setContactFormState(null), 1500);
      }
    },
  });

  const { t } = useTranslation("translation", {
    keyPrefix: "home.contact.form.fields",
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    await form.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-5">
        <form.Field name={"name"} validators={requiredValidator(t)}>
          {(field) => (
            <div className={"flex flex-col gap-1"}>
              <label
                htmlFor={field.name}
                className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
              >
                <Trans t={t} i18nKey={`${field.name}.label`} />
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                type="text"
                placeholder={t(`${field.name}.placeholder`)}
                className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <div className="mb-5">
        <form.Field name={"email"} validators={requiredValidator(t)}>
          {(field) => (
            <div className={"flex flex-col gap-1"}>
              <label
                htmlFor={field.name}
                className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
              >
                <Trans t={t} i18nKey={`${field.name}.label`} />
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                type="email"
                placeholder={t(`${field.name}.placeholder`)}
                className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <div className="mb-5">
        <form.Field name={"phone"} validators={requiredValidator(t)}>
          {(field) => (
            <div className={"flex flex-col gap-1"}>
              <label
                htmlFor={field.name}
                className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
              >
                <Trans t={t} i18nKey={`${field.name}.label`} />
              </label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                type="tel"
                placeholder={t(`${field.name}.placeholder`)}
                className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <div className="mb-6">
        <form.Field name={"message"} validators={requiredValidator(t)}>
          {(field) => (
            <div className={"flex flex-col gap-1"}>
              <label
                htmlFor={field.name}
                className="block text-xs font-medium uppercase tracking-wide text-(--color-text-muted)"
              >
                <Trans t={t} i18nKey={`${field.name}.label`} />
              </label>
              <textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(event) => field.handleChange(event.target.value)}
                rows={3}
                placeholder={t(`${field.name}.placeholder`)}
                className="w-full resize-none border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-(--color-text) placeholder:text-slate-400 focus:border-(--color-primary) focus:outline-none focus:ring-0 dark:border-slate-700 dark:placeholder:text-slate-500"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>
      </div>

      <form.Subscribe selector={(state) => [state.isSubmitting]}>
        {([isSubmitting]) => (
          <button
            type="submit"
            className={
              "cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--color-primary) px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
            }
          >
            <span>
              {isSubmitting ? (
                <Trans i18nKey={"home.contact.form.button.loading"} />
              ) : (
                <Trans i18nKey={"home.contact.form.button.default"} />
              )}
            </span>
            <Activity
              name={"form-button"}
              mode={isSubmitting ? "visible" : "hidden"}
            >
              <LoaderCircle className={"h-4 w-4 animate-spin text-white"} />
            </Activity>
          </button>
        )}
      </form.Subscribe>

      <div className={"absolute -bottom-8 w-full"}>
        <div className={"flex justify-center text-sm"}>
          <p
            className={clsx("transition-all delay-300 opacity-0", {
              "text-green-500": contactFormState === "success",
              "text-red-500": contactFormState === "error",
              "opacity-100": contactFormState !== null,
            })}
          >
            {contactFormState === "success" ? (
              <Trans i18nKey={"home.contact.form.messages.success"} />
            ) : (
              <Trans i18nKey={"home.contact.form.messages.error"} />
            )}
          </p>
        </div>
      </div>
    </form>
  );
};

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <span className={"text-xs text-red-400"}>
          {field.state.meta.errors.join(", ")}
        </span>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
};
