export default function Dog({ name, breed, age, colour }) {
  return (
    <section className="m-2 bg-neutral-100">
      <h3 className="text-xl font-bold text-violet-900 ">{name}</h3>
      <p>
        <span className="font-bold">Breed:</span> {breed}
      </p>
      <p>Age: {age}</p>
      <p>Colour: {colour}</p>
    </section>
  );
}
