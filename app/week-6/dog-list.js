import Dog from "./dog.js";

export default function DogList({ dogs, onDelete }) {
  function handleDelete(name) {
    onDelete(name);
  }

  return (
    <div>
      <h1>Dogs</h1>
      {dogs.map((dog, index) => (
        <div key={index}>
          <Dog name={dog.name} age={dog.age} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}
