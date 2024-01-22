export default function Dog({ name, description, imageURL }) {
  return (
    <div>
      <h2 className="text-xl text-blue-600">{name}</h2>
      <p className="ml-2">{description}</p>
      <img
        className="w-64 h-64 object-cover rounded-lg mt-2"
        src={imageURL}
        alt={name}
      ></img>
    </div>
  );
}
