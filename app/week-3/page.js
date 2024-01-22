import Dog from "./dog";

export default function Page() {
  let dog1 = {
    name: "German Shepherd",
    description:
      "German Shepherds are very intelligent dogs. They are also very protective.",
    imageURL:
      "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg", // This is a sample link.
  };

  let dog2 = {
    name: "Beagle",
    description: "Beagles are very energetic dogs. They are also very playful.",
    imageURL:
      "https://cdn.pixabay.com/photo/2016/02/19/10/16/beagle-1209841_960_720.jpg", // This is a sample link.
  };

  let dog3 = {
    name: "Labrador",
    description: "Labradors are very friendly dogs. They are also very loyal.",
    imageURL:
      "https://cdn.pixabay.com/photo/2016/02/19/11/23/dog-1209934_960_720.jpg", // This is a sample link.
  };

  return (
    <main className="m-4">
      <h1 className="text-6xl font-bold text-red-500 mb-8">
        My Favourite Dog Breeds
      </h1>
      <p className="mb-2">Here are my favourite dog breeds:</p>
      <div className="ml-3">
        <Dog {...dog1} />
        <Dog {...dog2} />
        <Dog {...dog3} />
      </div>
    </main>
  );
}
