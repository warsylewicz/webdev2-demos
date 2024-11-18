"use client";

import { useState } from "react";

export default function Page() {
  const [part2action, setPart2Action] = useState("");

  // /week-12/part-2/api/dogs
  // GET
  async function fetchDogs() {
    const response = await fetch(
      "http://localhost:3000/week-12/part-2/api/dogs"
    );
    const dogs = await response.json();

    // normally we would return dogs, but for this example let's see the result in the UI
    setPart2Action(
      `Status code: ${response.status}. Response: ${JSON.stringify(dogs)}`
    );
  }

  // POST
  async function createDog() {
    const dog = {
      name: "Jake",
      age: 8,
    };

    const response = await fetch(
      "http://localhost:3000/week-12/part-2/api/dogs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      }
    );
    const newDog = await response.json();
    setPart2Action(
      `Status code: ${response.status}. Response: ${JSON.stringify(newDog)}`
    );
  }

  // /week-12/part-2/api/dogs/:id
  // GET
  async function fetchDog() {
    const response = await fetch(
      "http://localhost:3000/week-12/part-2/api/dogs/1"
    );
    const dog = await response.json();

    // normally we would return dog, but for this example let's see the result in the UI
    setPart2Action(
      `Status code: ${response.status}. Response: ${JSON.stringify(dog)}`
    );
  }

  // PUT
  async function updateDog() {
    const dog = {
      name: "Luna the Dog",
      age: 5,
    };

    const response = await fetch(
      "http://localhost:3000/week-12/part-2/api/dogs/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      }
    );

    setPart2Action(
      `Status code: ${response.status}. Response: no response body`
    );
  }

  // PATCH
  async function patchDog() {
    const dog = {
      name: "Just Luna",
    };

    const response = await fetch(
      "http://localhost:3000/week-12/part-2/api/dogs/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      }
    );

    setPart2Action(
      `Status code: ${response.status}. Response: no response body`
    );
  }

  // DELETE
  async function deleteDog() {
    const response = await fetch(
      "http://localhost:3000/week-12/part-2/api/dogs/1",
      {
        method: "DELETE",
      }
    );

    setPart2Action(
      `Status code: ${response.status}. Response: no response body`
    );
  }

  return (
    <main>
      <h1 className="text=4xl">Week 12</h1>
      <section className="m-4">
        <h2 className="text-2xl">Part 1</h2>
        <div>
          <p>
            Simple example of an API. This API returns a URL of a random dog
            image.{" "}
            <a
              href="/week-12/part-1/api"
              className="text-blue-500 hover:underline"
            >
              /api
            </a>
          </p>
        </div>
      </section>
      <section className="m-4">
        <h2 className="text-2xl">Part 2</h2>
        <div>
          <p>
            This API has two routes: /api/dogs and /api/dogs/:id. The first API
            implements GET and POST methods. The second API implements GET, PUT,
            PATCH, and DELETE methods.
          </p>
          <table className="table-auto border-collapse border border-gray-800">
            <tbody>
              <tr>
                <th className="border border-gray-800">Method</th>
                <th className="border border-gray-800">Route</th>
                <th className="border border-gray-800">Request body</th>
                <th className="border border-gray-800">Description</th>
                <th className="border border-gray-800">Action</th>
              </tr>
              <tr>
                <td className="border border-gray-800">GET</td>
                <td className="border border-gray-800">/api/dogs</td>
                <td className="border border-gray-800">-</td>
                <td className="border border-gray-800">Get all dogs</td>
                <td className="border border-gray-800">
                  <button
                    onClick={fetchDogs}
                    className="rounded hover:bg-purple-300"
                  >
                    Fetch Dogs
                  </button>
                </td>
              </tr>
              <tr>
                <td className=" border-gray-800">POST</td>
                <td className="border border-gray-800">/api/dogs</td>
                <td className="border border-gray-800">
                  {`{ "name": "Jake", "age": 8 }`}
                </td>
                <td className="border border-gray-800">Create a new dog</td>
                <td className="border border-gray-800">
                  <button
                    onClick={createDog}
                    className="rounded hover:bg-purple-300"
                  >
                    Create Dog
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800">GET</td>
                <td className="border border-gray-800">/api/dogs/1</td>
                <td className="border border-gray-800">-</td>
                <td className="border border-gray-800">
                  Get the dog with id 1
                </td>
                <td className="border border-gray-800">
                  <button
                    onClick={fetchDog}
                    className="rounded hover:bg-purple-300"
                  >
                    Fetch Dog
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800">PUT</td>
                <td className="border border-gray-800">/api/dogs/1</td>
                <td className="border border-gray-800">
                  {`{ "name": "Luna the Dog", "age": 5 }`}
                </td>
                <td className="border border-gray-800">
                  Update the dog with id 1
                </td>
                <td className="border border-gray-800">
                  <button
                    onClick={updateDog}
                    className="rounded hover:bg-purple-300"
                  >
                    Update Dog
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800">PATCH</td>
                <td className="border border-gray-800">/api/dogs/1</td>
                <td className="border border-gray-800">{`{ "name": "Just Luna" }`}</td>
                <td className="border border-gray-800">
                  Update the dog with id 1
                </td>
                <td className="border border-gray-800">
                  <button
                    onClick={patchDog}
                    className="rounded hover:bg-purple-300"
                  >
                    Patch Dog
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-800">DELETE</td>
                <td className="border border-gray-800">/api/dogs/1</td>
                <td className="border border-gray-800">-</td>
                <td className="border border-gray-800">
                  Delete the dog with id 1
                </td>
                <td className="border border-gray-800">
                  <button
                    onClick={deleteDog}
                    className="rounded hover:bg-purple-300"
                  >
                    Delete Dog
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Action result:{" "}
            <span className="ring-purple-600">{part2action}</span>
          </p>
        </div>
      </section>
      <section className="m-4">
        <h2 className="text-2xl">Part 3</h2>
        <p>Validating the body of the request. See test.http</p>
      </section>
    </main>
  );
}
