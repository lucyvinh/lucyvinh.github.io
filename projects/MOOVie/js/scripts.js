let $happyContainer = $('#first-genre-modal');

$('#emoji-happy').on('click', displayResults);

let url = 'https://api.themoviedb.org/3/genre/35/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

function displayResults(movie) {
  $.getJSON(url, function(data) {

    let movies = data.results;
    console.log(movies);

    $happyContainer.empty();

    for (i = 0; i < movies.length; i++) {

      let movie = movies[i];

      let movieTitle = movie.title;
      let movieImage = movie.poster_path;
      let movieSummary = movie.overview;
      let movieRelease = movie.release_date;
      // TODO: get API from another source for the following:
      // let movieRating = movie.;
      // let movieSimilar = movie.;
      // http://www.omdbapi.com/ will give you rotten tomato rating and imdb rating if it's available

      $happyContainer.append(`
        <h2>Movie Title: ${movieTitle}</h2>
        <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
        <p>Summary: ${movieSummary}</p>
        <p>Release Date: ${movieRelease}</p>
      `);
    }

  });
}
//$('#firstGenreModal').append(movieTitle + movieImage + movieSummary + movieRelease);

// $(document).ready(function() {});
//
// function emoji(feeling) {
//        if (feeling == 1){
//        $('#genre-question .col-md-12').html("You're happy. What do you feel like watching?");
//        if (feeling == 2){
//        $('#genre-question .col-md-12').html("You're sad. What do you feel like watching?");}
//        if (feeling == 3){
//        $('#genre-question .col-md-12').html("You're angry. What do you feel like watching?");}
//        if (feeling == 4){
//        $('#genre-question .col-md-12').html("You're infatuated. What do you feel like watching?");
//        }
// }
// });
