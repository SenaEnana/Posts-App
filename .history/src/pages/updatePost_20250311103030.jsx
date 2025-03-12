import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Formik } from "formik";
import TextInput from "../components/textInput";

function UpdatePost() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function editPost(values) {
        setLoading(true);
        try {
            let result = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            const response = await result.json();
            console.log(response);

            if (result.ok) {
                setLoading(false);
                alert("Post updated successfully");
                navigate("/getPosts");
            } else {
                console.log("Failed to delete post");
            }
        } catch (error) {
            console.error("Error updated post:", error.message);
        }
    }



    useEffect(() => {
        const asyncFn = async () => {
            let result = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
            result = await result.json();
            setData(result);
        };
        asyncFn();
    }, [id]);
    return (
        <div className="row justify-content-center ">
            {data.title && !loading && (
                <Formik
                    initialValues={{
                        title: data.title,
                        body: data.body,
                        userId: data.userId,
                    }}
                    onSubmit={(values) => {
                        editPost(values);
                    }}
                >
                    {(formikValues) => (
                        <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
                            <h4 className="text-center">Edit Post</h4>
                            <TextInput
                                type="text"
                                name="title"
                                label="Title"
                                value={formikValues.values.title}
                                error={formikValues.errors.title}
                                onChange={formikValues.handleChange}
                            />
                            <TextInput
                                type="text"
                                name="body"
                                label="Body"
                                value={formikValues.values.body}
                                error={formikValues.errors.body}
                                onChange={formikValues.handleChange}
                            />
                            <TextInput
                                type="number"
                                name="userId"
                                label="User"
                                value={formikValues.values.userId}
                                error={formikValues.errors.userId}
                                onChange={formikValues.handleChange}
                            />

                            <div className="m-3">
                                <input
                                    className="btn btn-success"
                                    type="button"
                                    value="Edit"
                                    onClick={formikValues.handleSubmit}
                                />
                                <button className="btn btn-info">
                                    Back
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            )}
        </div>
    );
}

export default UpdatePost;