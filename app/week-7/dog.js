export default function Dog({ id, name, age, onDelete }) {
  return (
    <div>
      <h2>Dog</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
}
