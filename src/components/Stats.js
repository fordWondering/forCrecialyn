export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Mag isip na tayo babe ng dadalin 😎</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `Kumpleto na ang lahat, Maari na kayong maglakbay hehe 🛩️`
          : `💼 You have ${numItems} items in your list, and you already packed 
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
