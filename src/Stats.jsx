export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats text-center">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Off you go. ✈"
          : `You have ${numItems} item${
              numItems === 1 ? "" : "s"
            } on your list, and you already packed ${numPacked} (${
              percentage ? percentage : "0"
            }%)`}
      </em>
    </footer>
  );
}
