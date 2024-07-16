const url = "https://api.themoviedb.org/3/movie/top_rated"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWI1MDRiY2JhN2IwOTgwMWIwNWIyMzRkYWQyOTMwYSIsIm5iZiI6MTcyMDU0NTQyNC4yMTc5NTEsInN1YiI6IjY2ODQ0ZTJjYTFmZDA2YmQ5NzAyM2U2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HhAwlXi8V2MiggYmTmvvrvR2s1B2hemiOeZDIqlQN6c"

fetch(url, { method: "GET", headers: { Authorization: `bearer ${token}` } })
  .then((response) => response.json())
  .then((data) => {

    data.results.forEach((movie) => {
      document.querySelector('#libreria').innerHTML +=

        `
        
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="rounded-xl duration-300 hover:border-2 hover:border-orange-500 hover:opacity-50">
            `

    });

  });


