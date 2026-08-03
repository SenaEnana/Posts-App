import { postsValidation } from "./schema";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/textInput";
import NavbarLayout from "../components/NavbarLayout";

function CreatePosts({ addNewPost }) {
  const navigate = useNavigate();

  async function createNewPosts(values) {
    const newPost = {
      id: Date.now(),
      ...values,
    };
    
    // Optimistically update local PWA state so it works fast / offline
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
        // A modern approach could replace alert() with a toast, but keeping the navigation flow intact
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
    <NavbarLayout>
      <div className="max-w-xl mx-auto mt-4">
        {/* Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header Banner */}
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 text-center">
            <h2 className="text-xl font-bold text-slate-900">Create New Post</h2>
            <p className="text-xs text-slate-500 mt-0.5">Share your thoughts with the community</p>
          </div>

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
              <form 
                onSubmit={formikValues.handleSubmit}
                className="p-6 space-y-5"
              >
                {/* Note: Ensure TextInput accepts Tailwind classes or uses native styling inside */}
                <div className="space-y-1">
                  <TextInput
                    type="text"
                    name="title"
                    label="Post Name"
                    placeholder="Enter post title"
                    value={formikValues.values.title}
                    error={formikValues.errors.title}
                    onChange={formikValues.handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <TextInput
                    type="text"
                    name="body"
                    label="Post Description"
                    placeholder="Enter post description"
                    value={formikValues.values.body}
                    error={formikValues.errors.body}
                    onChange={formikValues.handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <TextInput
                    type="number"
                    name="userId"
                    label="User ID"
                    placeholder="Enter user Id"
                    value={formikValues.values.userId}
                    error={formikValues.errors.userId}
                    onChange={formikValues.handleChange}
                  />
                </div>

                {/* Form Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    onClick={() => navigate("/getPosts")}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all active:scale-98"
                  >
                    Publish Post
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </NavbarLayout>
  );
}

export default CreatePosts;