// import { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";

// function GetPosts({ newPosts }) {
//   const [data, setData] = useState([]);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     let result = await fetch('https://jsonplaceholder.typicode.com/posts');
//     result = await result.json();
//     setData(result);
//     // setLoading(false);
//   }

//   const combinedPosts = [...newPosts, ...data];

//   // if (loading) {
//   //   return <div className="m-5"><h5 className="text-bold p-4">Loading...</h5></div>;
//   // }

//   return (
//     <>
//         <div className="justify-content-center m-4">
//         <h5 className="m-2 text-center">List Of Posts</h5></div>
//         <div className="d-flex m-2 float-end">
//         <NavLink
//           to={"/createPosts"}
//           className="btn btn-secondary btn-sm m-2"
//         >
//           Create new post
//         </NavLink>
//       </div>
//       <div className="d-flex justify-content-center mt-1 text-dark">
//       <table className="table table-hover border text-dark w-100 m-5 fs-6">
//         <thead>
//           <tr>
//            <th>No</th>
//             <th>Title</th>
//             <th>User</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {combinedPosts.map((posts) => (
//             <tr key={posts.id}>
//               <td>{posts.id}</td>
//               <td>{posts.title}</td>
//               <td>{posts.userId}</td>
//               <td>
//                 <Link to={`/postDetail/${posts.id}`}>
//                   <button className="btn btn-outline-info btn-sm">
//                     Detail
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </>
//   );
// }

// export default GetPosts;

import { NavLink, Link } from "react-router-dom";

function GetPosts({ posts }) {
  return (
    <>
      <div className="justify-content-center m-2">
        <h4 className="m-2 text-center">This is List Of All Posts</h4>
      </div>
      <div className="d-flex m-2 float-end">
        <NavLink to={"/createPosts"} className="btn btn-secondary btn-sm m-2">
          Create new post
        </NavLink>
        <NavLink to={"/"} className="btn btn-primary btn-sm m-2">
          Back
        </NavLink>
      </div>
      <div className="d-flex justify-content-center mt-1 text-dark">
        <table className="table table-hover border text-dark w-100 m-5 fs-6">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.userId}</td>
                <td>
                  <Link to={`/postDetail/${post.id}`}>
                    <button className="btn btn-outline-info btn-sm">
                      Detail
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GetPosts;
