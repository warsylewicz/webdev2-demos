import Link from "next/link";

export default function Weather() {
  return (
    <>
      <div className="w-48 ml-8 p-2">
        <p>Temperature: 15°C</p>
        <p>
          <Link
            href="https://www.theweathernetwork.com/ca/weather/alberta/calgary"
            className="underline text-sky-400"
          >
            Weather forecast
          </Link>
        </p>
      </div>
    </>
  );
}
