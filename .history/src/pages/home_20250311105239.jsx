import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-center fw-bold fs-2 m-3 p-5 card bg-black rounded">
        <h1>Hello This Is Posts Page </h1>

        <button
          className="btn btn-primary float end m-2 p-1 btn-sm"
          onClick={() => navigate("/createPosts")}
        >
          {" "}
          Create Posts{" "}
        </button>
        <button
          className="btn btn-warning float end m-2 p-1 btn-sm"
          onClick={() => navigate("/getPosts")}
        >
          {" "}
          View Posts{" "}
        </button>
      </div>
    </div>
  );
}

export default Home;
