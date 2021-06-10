import React, { useState } from "react";
import { Snackbar } from "../components/Snackbar/Snackbar";

export default function Home() {
  const snackBarRef = React.createRef<Snackbar>();
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const result = await fetch("/api/addEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    console.log(result.status);
    if (result.status !== 201) {
      if (result.status === 422) {
        snackBarRef?.current?.openSnackBar("Email is not valid !!!");
      }
      if (result.status === 409) {
        snackBarRef?.current?.openSnackBar("Email already added");
      }
    }
    else{
      snackBarRef?.current?.openSnackBar("Yayy !!! Email added. Now always stay up to date");
    }
  };
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="group max-w-md w-full  border-2 border-white rounded-lg space-y-8 p-11 transition duration-700 ease-in-out hover:bg-blue-800 hover:scale-15 0 cursor-pointer">
          <div>
            <img
              className="mx-auto h-24 w-auto"
              src="./Logotech.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Never Miss an Update
            </h2>
            <p className="mt-6 text-center text-xl font-extrabold text-white">
              Get exclusive early access to all our events and news
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <div>
                <p className="sr-only">Email</p>
                <input
                  id="reason"
                  name="reason"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group group-hover:bg-black relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Join Mailing List
              </button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar ref={snackBarRef} />
    </div>
  );
}
