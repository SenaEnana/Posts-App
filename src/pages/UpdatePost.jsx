import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import TextInput from "../components/TextInput";
import Navbar from "../components/Navbar";

function UpdatePost() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        let result = await fetch(
          "https://jsonplaceholder.typicode.com/posts/" + id
        );
        let json = await result.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };
    fetchPostData();
  }, [id]);

  async function editPost(values) {
    setLoading(true);
    try {
      let result = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + id,
        {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const response = await result.json();
      console.log(response);

      if (result.ok) {
        setLoading(false);
        alert("Post updated successfully");
        navigate("/getPosts");
      } else {
        console.log("Failed to update post");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error updating post:", error.message);
      setLoading(false);
    }
  }

  return (
    <Navbar>
      <div className="max-w-xl mx-auto mt-4">
        
        {/* Loading State Skeleton */}
        {(!data || loading) && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5 animate-pulse">
            <div className="h-6 bg-slate-200 rounded w-1/3 mx-auto"></div>
            <div className="h-10 bg-slate-200 rounded w-full"></div>
            <div className="h-10 bg-slate-200 rounded w-full"></div>
            <div className="h-10 bg-slate-200 rounded w-1/4"></div>
          </div>
        )}

        {/* Form Container */}
        {data && !loading && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Cyan/Indigo Header Block */}
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 text-center">
              <h2 className="text-xl font-bold text-slate-900">Edit Post Details</h2>
              <p className="text-xs text-slate-500 mt-0.5">Modifying Entry Record #{id}</p>
            </div>

            <Formik
              initialValues={{
                title: data.title || "",
                body: data.body || "",
                userId: data.userId || "",
              }}
              onSubmit={(values) => {
                editPost(values);
              }}
            >
              {(formikValues) => (
                <form 
                  onSubmit={formikValues.handleSubmit}
                  className="p-6 space-y-5"
                >
                  <TextInput
                    type="text"
                    name="title"
                    label="Post Title"
                    value={formikValues.values.title}
                    error={formikValues.errors.title}
                    onChange={formikValues.handleChange}
                  />

                  <TextInput
                    type="text"
                    name="body"
                    label="Post Body Description"
                    value={formikValues.values.body}
                    error={formikValues.errors.body}
                    onChange={formikValues.handleChange}
                  />

                  <TextInput
                    type="number"
                    name="userId"
                    label="Assigned User ID"
                    value={formikValues.values.userId}
                    error={formikValues.errors.userId}
                    onChange={formikValues.handleChange}
                  />

                  {/* Form Action Section Buttons */}
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
                      className="px-5 py-2.5 rounded-xl bg-cyan-600 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 transition-all active:scale-98"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        )}

      </div>
    </Navbar>
  );
}

export default UpdatePost;