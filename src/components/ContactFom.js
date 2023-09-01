import React from "react";

import { navigate } from "gatsby"
import { useFormik } from 'formik';
import * as Yup from "yup";

import {
  StyledInlineErrorMessage,
  Button,
} from "./contactFormStyles";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Your name is too short")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  message: Yup.string()
    .min(10, "Your text is too short")
    .required("Please enter your text"),
});

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      // console.log(values)
      // console.log(JSON.stringify(values, null, 2))
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "contact-ms-webdev", 
          ...values 
        }),
      })
        .then(() => {
          navigate("/thanks")
        })
        .catch(() => error => alert(error))
        .finally(() => actions.setSubmitting(false))
    },
  })
  return (
    <form
      name="contact-ms-webdev"
      method="post"
      onSubmit={formik.handleSubmit}
      data-netlify={true}
      data-netlify-honeypot="bot-field"
    >
      
      <input type="hidden" name="form-name" value="contact-ms-webdev" />
      <div hidden>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </div>

      <label htmlFor="fullName">Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        autoCorrect="off"
        autoComplete="fullname"
        className={formik.errors.fullName && formik.touched.fullName ? 
          "form-input error" : "form-input"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fullName}
      />
      {formik.touched.fullName && formik.errors.fullName ? (
        <StyledInlineErrorMessage>
          {formik.errors.fullName}
        </StyledInlineErrorMessage>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="email"
        className={formik.errors.email && formik.touched.email ? 
          "form-input error" : "form-input"}
        valid={formik.touched.message && !formik.errors.message}
        error={formik.touched.message && formik.errors.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <StyledInlineErrorMessage>
          {formik.errors.email}
        </StyledInlineErrorMessage>
      ) : null}

      <label htmlFor="message">Nachricht</label>
      <textarea
        id="message"
        name="message"
        type="message"
        rows="4"
        className={formik.errors.message && formik.touched.message ? 
          "form-input error" : "form-input"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <StyledInlineErrorMessage>
          {formik.errors.message}
        </StyledInlineErrorMessage>
      ) : null}

      <Button type="submit" disabled={!formik.isValid || formik.isSubmitting}>{formik.isSubmitting ? `Submiting...` : `Get in touch`}</Button>
    </form>
  )
}

export default ContactForm;