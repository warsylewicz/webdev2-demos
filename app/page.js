import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-5">Web Development 2 Demos</h1>
        <div>
          <Link className="hover:text-green-300" href="/week1">
            Week 1 Demo
          </Link>
        </div>
      </div>
    </main>
  );
}
