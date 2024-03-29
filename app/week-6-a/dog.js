export default function Dog({ id, name, age, onDeleteDog }) {
  return (
    <div>
      <h2>Dog</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => onDeleteDog(id)}>Delete</button>
    </div>
  );
}
