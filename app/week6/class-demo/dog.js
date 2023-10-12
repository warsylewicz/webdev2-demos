export default function Dog({ name, age, onDelete }) {
  return (
    <div className="border m-1 p-2 max-w-sm">
      <h3 className="text-xl">{name}</h3>
      <p className="text-blue-200 text-sm ml-2">Age: {age}</p>
      <p>
        <button onClick={() => onDelete(name)}>Delete</button>
      </p>
    </div>
  );
}
