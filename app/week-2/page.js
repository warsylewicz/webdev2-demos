import Heading from "./heading.js";

export default function Page() {
  let a = 5;
  let b = 10;

  return (
    <main>
      <Heading />
      <p>This sum of a and b is {a + b}.</p>
    </main>
  );
}
