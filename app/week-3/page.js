import Dog from "./dog";

export default function Page() {
  let dog1 = {
    name: "Fluffy",
    breed: "Poodle",
    age: 4,
    color: "white",
  };

  let dog2 = {
    name: "Spot",
    breed: "Dalmatian",
    age: 3,
    color: "black and white",
  };

  let dog3 = {
    name: "Rover",
    breed: "Golden Retriever",
    age: 2,
    color: "golden",
  };

  return (
    <main className="m-4 ml-6">
      <h1 className="text-4xl font-bold">Week 3</h1>
      <p>These are my favourite dogs.</p>
      <Dog
        name={dog1.name}
        breed={dog1.breed}
        age={dog1.age}
        color={dog1.color}
      />
      <Dog
        name={dog2.name}
        breed={dog2.breed}
        age={dog2.age}
        color={dog2.color}
      />
      <Dog
        name={dog3.name}
        breed={dog3.breed}
        age={dog3.age}
        color={dog3.color}
      />
    </main>
  );
}
