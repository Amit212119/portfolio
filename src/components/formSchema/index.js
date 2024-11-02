import * as Yup from 'yup';

export const contactForm = Yup.object({
    name: Yup.string().min(2).max(20).required("Please enter Your Name"),
    email: Yup.string().email().required('Email is Required '),
    message: Yup.string().min(10).max(200).required("Message is Required")
})