export default function Dog({ id, name, age, onDeleteDog }) {
  return (
    <div>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={() => onDeleteDog(id)}>Delete</button>
    </div>
  );
}
