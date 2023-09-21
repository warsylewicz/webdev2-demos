import Link from "next/link";
import Heading from "./heading";

export default function Weather() {
  return (
    <div>
      <Heading title="Weather" />

      <div className="ml-8 p-2">
        <p>Temperature: 15°C</p>
        <p>
          <Link
            href="https://www.theweathernetwork.com/ca/weather/alberta/calgary"
            className="underline text-sky-400"
            target="_blank"
          >
            Weather forecast
          </Link>
        </p>
      </div>
    </div>
  );
}
