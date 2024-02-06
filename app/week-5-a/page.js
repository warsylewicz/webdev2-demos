"use client";

export default function Page() {
  const dogs = [
    {
      id: 1,
      name: "Winky",
      description: "A winky dog",
      imageUrl:
        "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Precious",
      description: "A precious dog. So precious.",
      imageUrl:
        "https://images.pexels.com/photos/3067503/pexels-photo-3067503.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Grumpy",
      description: "A grumpy dog. So grumpy. Very grumpy.",
      imageUrl:
        "https://images.pexels.com/photos/3715583/pexels-photo-3715583.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2",
    },
  ];

  dogs.sort((a, b) => a.name.localeCompare(b.name));

  const filteredDogs = dogs.filter((dog) => dog.id !== 2);
  console.log(filteredDogs);

  const handleClick = (id) => {
    alert(id);
  };

  return (
    <main className="bg-slate-700 sm:bg-slate-500 md:bg-slate-300">
      <h1 className="text-4xl">Week 5 A</h1>
      <h2 className="text-lg">My Favourite Dogs</h2>
      {dogs.map((dog) => (
        <div
          key={dog.id}
          onClick={() => handleClick(dog.id)}
          className="bg-white text-black p-4 m-4 rounded-lg"
        >
          <h3 className="text-2xl">{dog.name}</h3>
          <p>{dog.description}</p>
          <img src={dog.imageUrl} alt={dog.name} />
        </div>
      ))}
    </main>
  );
}
