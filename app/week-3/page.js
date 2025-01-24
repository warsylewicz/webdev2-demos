import Dog from "./dog";

export default function Page() {
  let dog1 = {
    name: "Fido",
    age: 3,
    breed: "Golden Retriever",
    color: "Golden",
  };

  let dog2 = {
    name: "Rex",
    age: 5,
    breed: "German Shepherd",
    color: "Black and Brown",
  };

  let dog3 = {
    name: "Lassie",
    age: 2,
    breed: "Collie",
    color: "White and Brown",
  };

  return (
    <main>
      <h1>Week 3 Demo</h1>
      <h2>Meet the Dogs</h2>
      <Dog
        name={dog1.name}
        age={dog1.age}
        breed={dog1.breed}
        color={dog1.color}
      />
      <Dog
        name={dog2.name}
        age={dog2.age}
        breed={dog2.breed}
        color={dog2.color}
      />
      <Dog
        name={dog3.name}
        age={dog3.age}
        breed={dog3.breed}
        color={dog3.color}
      />
    </main>
  );
}
