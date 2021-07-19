import React from "react";
import s from "./../content.style/Content.module.css"
import {Formik, Form, Field} from "formik"
import socket from "../../socket";

const AddNewsItem = () => {
    return (
        <Formik initialValues={{
            title: "",
            description: "",
            photo: "",
            category: ""
        }}
                validateOnBlur
                onSubmit={values => values.category === "UkraineNews" ? socket.emit("addUkraineNewsItem", values) : socket.emit("addWorldNewsItem", values)}>
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <Form className={s.content_wrapper} onSubmit={handleSubmit}>
                    <label htmlFor={"title"}>Заголовок новини:</label>
                    <Field type="text" name={"title"} onChange={handleChange} onBlur={handleBlur} value={values.title}/>
                    <label htmlFor={"description"}>Опис новини:</label>
                    <Field type="text" name={"description"} onChange={handleChange} onBlur={handleBlur}
                           value={values.description}/>
                    <label htmlFor={"photo"}>Фотографія для новини:</label>
                    <Field type="file" name={"photo"} onChange={handleChange} onBlur={handleBlur} value={values.photo}/>
                    <label htmlFor={"category"}>Категорія новин:</label>
                    <label><Field type="radio" name={"category"} onChange={handleChange} onBlur={handleBlur}
                                  value={"UkraineNews"}/>Новини України</label>
                    <label><Field type="radio" name={"category"} onChange={handleChange}
                                  onBlur={handleBlur} value={"worldNews"}/>Новини світу</label>
                    <Field disabled={!isValid && !dirty} type="submit" value="Відправити"/>
                </Form>
            )}

        </Formik>

    )
}

export default AddNewsItem