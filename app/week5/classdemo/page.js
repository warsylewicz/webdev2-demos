"use client";

export default function Page() {
  let dogList = [
    {
      id: 1,
      name: "Sad dog",
      description: "This dog is sad",
      imageUrl:
        "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Happy dog",
      description: "This happy dog is fluffy.",
      imageUrl:
        "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Toque dog",
      description: "This dog is wearing a toque.",
      imageUrl:
        "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  dogList.sort((a, b) => a.name.localeCompare(b.name));

  // filter list of dogs so that we don't have dog with id == 2
  dogList = dogList.filter((dog) => dog.id !== 2);

  console.log("Where is this?");

  function handleClick(e) {
    alert(e.target.innerText);
  }

  return (
    <main>
      <h1>My Dog List</h1>
      <ul>
        {dogList.map((dog) => (
          <li key={dog.id} onClick={handleClick}>
            <h2>{dog.name}</h2>
            <p>{dog.description}</p>
            <img src={dog.imageUrl} alt={dog.name} />
          </li>
        ))}
      </ul>
    </main>
  );
}
