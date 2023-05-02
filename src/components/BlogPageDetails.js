import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogPageDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  //fetching.com?slug=${slug}

  return (
    <div>
      Blog Page Details
      <button
        onClick={() => navigate("/blog")}
        className="text-white bg-blue-500 rounded-sm p--3"
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
