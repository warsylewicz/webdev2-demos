import Dog from "./dog.js";

export default function DogList({ dogs, onDelete }) {
  // we cannot mutate the state directly. Dogs is a prop and we cannot change it.

  return (
    <div>
      <h2>Dog List</h2>

      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
