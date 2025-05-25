import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function MyForm({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const descriptionInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
    descriptionInputRef.current.focus();
  }

  return (
    <Form className="add-form p-3 border rounded" onSubmit={handleSubmit}>
      <h3 className="mb-3">What do you need for your trip?</h3>
      {/* <Form.Group className="mb-3" controlId="formBasicQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          aria-label="Select quantity"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") descriptionInputRef.current.focus();
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </Form.Select>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Item Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ref={descriptionInputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit(e);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Add Item
      </Button>
    </Form>
  );
}
