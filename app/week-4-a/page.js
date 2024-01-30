import Counter from "./counter.js";
import DogForm from "./dog-form.js";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold">Week 4 Interactivity</h1>
      <Counter />
      <DogForm />
    </main>
  );
}
