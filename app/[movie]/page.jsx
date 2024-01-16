import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2 className="text-sm">Rating: {res.vote_count}</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 text-sm rounded">
          {res.status}
        </h2>
        <Image
          src={imagePath + res.backdrop_path}
          className="my-12 w-full rounded"
          width={1000}
          height={1000}
          alt={res.title}
          priority
        />
        {res.overview}
      </div>
    </div>
  );
}



// const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}});
// to render the data we fetch from server, can add {next: {revalidate: 60}} which refresh the data every 60 seconds (we choose the time)
// or
// can use 'generateStaticParams' function which is mor beneficial