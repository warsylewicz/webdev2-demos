export default function Dog({ name, breed, age }) {
  return (
    <section className="border-rose-500 border-2 p-2 mb-1">
      <h2 className="text-xl">{name}</h2>
      <p className="text-slate-200">Breed: {breed}</p>
      <p className="text-slate-400">Age: {age}</p>
    </section>
  );
}
