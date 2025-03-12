import * as Yup from "yup";

export const postsValidation = Yup.object().shape({
    title:Yup.string().required("this field is required"),
    body: Yup.string().required("this field is required"),
    userId: Yup.number().required("this field is required"),

});