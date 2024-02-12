export default function DogList({ dogs, onDelete }) {
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.id}>
          {dog.name} is {dog.age} years old
          <button onClick={() => onDelete(dog.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
