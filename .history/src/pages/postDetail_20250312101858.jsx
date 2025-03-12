import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post details:", error));
  }, [id]);

  async function deleteOperation(Id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${Id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Post deleted successfully");
        navigate("/getPosts");
      } else {
        console.log("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  }

  if (!post) {
    return (
      <div>
        <h4 className="fw-bold p-2 m-3">Loading...</h4>
      </div>
    );
  }
  return (
    <>
      <div className="card m-3 w-50 shadow-lg">
      <p className="text-dark m-3 fs-5 fw-bold">Post Detail</p>
        <div className="card-header">
          <h5 className="text-center uppercase">{post.title}</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>Post Id :</strong> {post.id}
              </p>
              <p>
                <strong>User :</strong> {post.userId}
              </p>
              <p>
                <strong>Body :</strong> {post.body}
              </p>
            </div>
          </div>
          <div className="float-end">
            <button
              onClick={() => deleteOperation(post.id)}
              className="btn btn-outline-danger float end m-2 p-1 btn-sm"
              type="button"
            >
              Delete
            </button>
            <Link to={`/updatePost/${post.id}`}>
              <button className="btn btn-outline-info btn-sm">Edit</button>
            </Link>
            <button
              className="btn btn-primary m-1 p-1 btn-sm"
              onClick={() => navigate("/getPosts")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetail;
