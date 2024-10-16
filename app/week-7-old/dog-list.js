import Dog from "./dog.js";

export default function DogList({ dogs, onDelete }) {
  return (
    <div>
      <h2>Dog List</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Dog
              id={dog.id}
              name={dog.name}
              age={dog.age}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
