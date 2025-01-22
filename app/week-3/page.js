import Dog from "./dog";

export default function Page() {
  const dog1 = {
    name: "Lloyd",
    age: 3,
    breed: "Dalmation",
    color: "white/black",
  };

  const dog2 = {
    name: "Rex",
    age: 2,
    breed: "German Shepherd",
    color: "black/brown",
  };

  const dog3 = {
    name: "Bella",
    age: 4,
    breed: "Poodle",
    color: "white",
  };

  return (
    <main>
      <h1 className="text-3xl font-bold">Meet the Dogs</h1>
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
