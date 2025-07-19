import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const AddBlog = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = editorRef.current?.getContent();


    const blogData = {
      title,
      imageUrl,
      content,
      userId,
    };

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/addBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Blog added successfully!");
        console.log(result);
        setTitle("");
        setImageUrl("");
        editorRef.current.setContent(""); // reset editor
      } else {
        alert("Error saving blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* Image URL Input */}
        <input
          type="text"
          placeholder="Insert image URL for blog header"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        {/* Rich Text Editor */}
        <Editor
          apiKey="l6uehhcdr880cgv4cx7sqbzn1mwotm4fwwn8jbo67xjlq0qb"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Start writing your blog here...</p>"
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;