export default function Dog({ name, breed, age, color }) {
  return (
    <div className="ml-4">
      <h2 className="text-green-500">{name}</h2>
      <p className="text-xs">
        {breed}, {age} years old, {color}
      </p>
    </div>
  );
}
