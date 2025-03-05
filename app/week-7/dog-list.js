import Dog from "./dog";

export default function DogList({ dogs, onDeleteDog }) {
  return (
    <div>
      <h2>Dogs</h2>
      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={onDeleteDog}
        />
      ))}
    </div>
  );
}
