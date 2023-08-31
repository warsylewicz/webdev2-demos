import Link from "next/link";

export default function Home() {
  const weekDemos = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];
  const doneUpTo = 2;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-5">Web Development 2 Demos</h1>
        <div>
          <ul>
            {weekDemos.map((week) =>
              week <= doneUpTo ? (
                <li key={week} className="hover:text-green-300 list-disc">
                  <Link href={`/week${week}`}>Week {week} Demo</Link>
                </li>
              ) : (
                <li key={week} className="list-disc">
                  🚧 Week {week} Demo
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
