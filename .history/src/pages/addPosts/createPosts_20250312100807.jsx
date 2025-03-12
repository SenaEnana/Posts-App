import { postsValidation } from "./schema";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextInput from "../../components/textInput";

function CreatePosts({ addNewPost }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  async function createNewPosts(values) {
    const newPost = {
      id: Date.now(),
      ...values,
    };
    addNewPost(newPost);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        alert("Post created successfully");
        navigate("/getPosts");
      } else {
        console.log("Failed to create new post");
      }
    } catch (error) {
      console.error("Error creating new post:", error.message);
    }
  }

  return (
    <>
                    <button
                  className="btn btn-primary m-2"
                  onClick={() => navigate("/getPosts")}
                >
                  View Posts
                </button>
      <div className="row justify-content-center m-5">
        <Formik
          initialValues={{
            title: "",
            body: "",
            userId: "",
          }}
          validationSchema={postsValidation}
          onSubmit={(values) => {
            createNewPosts(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-6 ms-4 shadow-sm bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Create new posts</p>
              </div>
              <TextInput
                type="text"
                name="title"
                label="Post Name"
                placeholder="Enter post title"
                value={formikValues.values.title}
                error={formikValues.errors.title}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="body"
                label="Post Description"
                placeholder="Enter post description"
                value={formikValues.values.body}
                error={formikValues.errors.body}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="number"
                name="userId"
                label="User Id"
                placeholder="Enter user Id"
                value={formikValues.values.userId}
                error={formikValues.errors.userId}
                onChange={formikValues.handleChange}
              />
              <div className="m-3 text-center">
                <input
                  className="btn btn-success m-2"
                  type="button"
                  value="create"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default CreatePosts;
