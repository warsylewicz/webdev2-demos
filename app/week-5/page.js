"use client";

export default function Page() {
  const dogs = [
    {
      id: 1,
      name: "Corgnelius",
      breed: "Corgi",
      imageUrl:
        "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Sleepy",
      breed: "Brittany",
      imageUrl:
        "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Smiley",
      breed: "Cute",
      imageUrl:
        "https://images.pexels.com/photos/247937/pexels-photo-247937.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=2",
    },
  ];

  // sort the dogs by name
  dogs.sort((a, b) => a.name.localeCompare(b.name));
  dogs.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  // do not show dog with id == 2
  const filteredDogs = dogs.filter((dog) => dog.id !== 2);
  console.log(filteredDogs);

  const handleClick = (id) => {
    alert(id);
  };

  return (
    <div className="sm:bg-slate-500 md:bg-slate-200 bg-slate-600">
      <h1>Week 5 Dog Demo</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id} onClick={() => handleClick(dog.id)}>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <img src={dog.imageUrl} alt={dog.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
