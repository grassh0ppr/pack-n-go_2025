import { useState } from "react";

export default function Logo() {
  const [title, setTitle] = useState("pack-n-go");
  const [isEditing, setIsEditing] = useState(false);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleBlur() {
    setIsEditing(false);
  }

  return (
    <div className="mx-auto text-center mb-4">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          autoFocus
          className="editable-title"
        />
      ) : (
        <h1 onClick={() => setIsEditing(true)} title="Click to edit">
          {title}
        </h1>
      )}
    </div>
  );
}
