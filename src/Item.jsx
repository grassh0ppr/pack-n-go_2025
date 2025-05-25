export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <div className="d-flex gap-3">
        <input
          type="checkbox"
          checked={item.packed} // Ensure the checkbox reflects the packed state
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description}
        </span>
      </div>
      <button
        className="delete"
        title="Delete this item"
        onClick={() => onDeleteItem(item.id)}
      >
        <span className="visually-hidden">Delete {item.description}</span>
        <img src="./close.svg" alt="close" />
      </button>
    </li>
  );
}
