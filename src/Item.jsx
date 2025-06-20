import { useState, useRef } from "react";

export default function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.description);
  const editButtonRef = useRef(null);

  function handleEdit() {
    if (editText.trim() && editText !== item.description) {
      onEditItem(item.id, editText.trim());
    }
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(item.description);
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  }

  function handleBlur(e) {
    // Check if the related target is the edit button to prevent conflicts
    if (
      editButtonRef.current &&
      editButtonRef.current.contains(e.relatedTarget)
    ) {
      return;
    }
    handleEdit();
  }

  function handleEditClick() {
    if (isEditing) {
      handleEdit();
    } else {
      setIsEditing(true);
    }
  }

  return (
    <li>
      <div className="d-flex gap-3 align-items-center flex-grow-1">
        <input
          type="checkbox"
          checked={item.packed} // Ensure the checkbox reflects the packed state
          onChange={() => onToggleItem(item.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="edit-input"
            autoFocus
          />
        ) : (
          <span
            style={item.packed ? { textDecoration: "line-through" } : {}}
            className="item-text"
          >
            {item.description}
          </span>
        )}
      </div>
      <div className="d-flex gap-2">
        <button
          ref={editButtonRef}
          className="edit"
          title={isEditing ? "Confirm changes" : "Edit this item"}
          onClick={handleEditClick}
        >
          <span className="visually-hidden">
            {isEditing ? "Confirm changes" : `Edit ${item.description}`}
          </span>
          {isEditing ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20,6 9,17 4,12" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          )}
        </button>
        <button
          className="delete"
          title="Delete this item"
          onClick={() => onDeleteItem(item.id)}
        >
          <span className="visually-hidden">Delete {item.description}</span>
          <img src="./close.svg" alt="close" />
        </button>
      </div>
    </li>
  );
}
