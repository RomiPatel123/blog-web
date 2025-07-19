import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState(""); // <- NEW
  const [loading, setLoading] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false); // <- NEW

  const fetchBlogDetails = async () => {
    try {
      const res = await fetch(`http://localhost:3000/singleBlog/${postId}`);
      const data = await res.json();
      setTitle(data.title);
      setImageUrl(data.imageUrl);
      setContent(data.content || ""); // <- Store content in state
    } catch (err) {
      console.error("Failed to fetch blog details", err);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  useEffect(() => {
    if (editorLoaded && editorRef.current) {
      editorRef.current.setContent(content);
    }
  }, [editorLoaded, content]); // <- when editor is ready & content is fetched

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedContent = editorRef.current?.getContent();

    const blogData = {
      title,
      imageUrl,
      content: updatedContent,
    };

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/updateBlog/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (res.ok) {
        alert("Blog updated successfully!");
        navigate("/dashboard/Mypost");
      } else {
        alert("Error updating blog.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>Edit Blog</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Insert image URL for blog header"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          style={inputStyle}
        />

        <Editor
          apiKey="l6uehhcdr880cgv4cx7sqbzn1mwotm4fwwn8jbo67xjlq0qb"
          onInit={(evt, editor) => {
            editorRef.current = editor;
            setEditorLoaded(true); // <- indicate editor is ready
          }}
          initialValue=""
          init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic underline strikethrough | " +
              "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
              "link image media table | code fullscreen | help",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default EditBlog;
