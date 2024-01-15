"use client"

export default function Error({ error, reset }) {
  return (
    <div>
      <h3>This is not loading up: {error.message}</h3>
      <button onClick={() => reset()}></button>
    </div>
  );
}