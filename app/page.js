import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res)
  return (
    <main>
      <main>
        <div className="grid gap-15 grid-cols-fluid">
          {res.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              poster_path={movie.poster_path}
              release_date= {movie.release_date}
              rate={movie.vote_count}
            />
          ))}
        </div>
      </main>
    </main>
  );
}

//in Next.js all components are 'server-side' component by default.
// this means all hooks like useState, useEffect,... also events like
// onClick,... don't work. You need to make a 'client-side' component
// to use hooks and events.
//I made Movie.jsx as a client-side component and imported here.