import React, { useState } from "react";

export default function HealthcareDashboard() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (name && age && file) {
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f4f8, #e0e7ff)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          padding: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
            color: "#333",
          }}
        >
          Healthcare Dashboard
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#666",
            fontSize: "0.9rem",
          }}
        >
          Enter patient details and upload a file.
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#444",
              }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter patient name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="age"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#444",
              }}
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="Enter patient age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="file"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "500",
                color: "#444",
              }}
            >
              Upload File
            </label>
            <input
              id="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
              style={{
                display: "block",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              backgroundColor: isSubmitting ? "#ccc" : "#007BFF",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {submitStatus === "success" && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              color: "#155724",
              fontSize: "0.9rem",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Patient information submitted successfully.
          </div>
        )}
        {submitStatus === "error" && (
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#f8d7da",
              borderRadius: "8px",
              color: "#721c24",
              fontSize: "0.9rem",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Please fill in all required fields.
          </div>
        )}
      </div>
    </div>
  );
}
