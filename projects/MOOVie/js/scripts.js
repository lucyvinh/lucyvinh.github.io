let $happyContainer = $('#first-genre-modal');

// let $paginationContainer = $('#pagination-container');
// let $prevBtn = $('#prev-btn');
// let $nextBtn = $('#next-btn');
//
// const MAX_RESULTS = 10;
// let matches;
// let currentIndex;
//
// $nextBtn.click(() => {
//
//   // check if user goes too far to the right
//   if (matches.length % MAX_RESULTS !== 0
//   && currentIndex + MAX_RESULTS > matches.length - MAX_RESULTS) {
//       currentIndex += matches.length % MAX_RESULTS;
//
//   } else {
//     currentIndex += MAX_RESULTS;
//   }
//
//   displayResults();
//
// });
//
// $prevBtn.click(() => {
//
//   if (currentIndex === matches.length - MAX_RESULTS) {
//     currentIndex -= matches.length % MAX_RESULTS;
//   } else {
//     currentIndex -= MAX_RESULTS;
//   }
//
//   displayResults();
//
// });


$('#emoji-happy').on('click', displayResults);

let url = 'https://api.themoviedb.org/3/genre/35/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

function displayResults(movie) {
  $.getJSON(url, function(data) {

    let movies = data.results;
    console.log(movies);

    $happyContainer.empty();

    for (i = 0; i < movies.length; i++) {

      let movie = movies[i];
      let movieID = movie.id;
      let movieTitle = movie.title;
      let movieImage = movie.poster_path;
      let movieSummary = movie.overview ? movie.overview : '<p>Summary not available.</p>';
      let movieRelease = movie.release_date;
      // TODO: get API from another source for the following:
      // movie similar API request
      let similarMovieUrl = 'https://api.themoviedb.org/3/movie/movieID/similar?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US'
      // let movieRating = movie.;
      // http://www.omdbapi.com/ will give you rotten tomato rating and imdb rating if it's available

      $happyContainer.append(`
        <h2>Movie Title: ${movieTitle}</h2>
        <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
        <p>Summary: ${movieSummary}</p>
        <p>Release Date: ${movieRelease}</p>
        <p>Similar Movies:
        `);
      }

    });
      // displayPaginationButtons();
  }

  // function displayPaginationButtons() {
  //   console.log('displayPaginationButtons');
  //   console.log('currentIndex: ', currentIndex);
  //   console.log('matches.length: ', matches.length);
  //   console.log('MAX_RESULTS: ', MAX_RESULTS);
  //   console.log('matches.length - MAX_RESULTS: ' + (matches.length - MAX_RESULTS));
  //
  //   // $nextBtn
  //   if (matches.length > MAX_RESULTS) {
  //     $nextBtn.removeClass('invisible');
  //   }
  //   // makes nextBtn invisible if user goes too far to the right
  //   if (currentIndex >= (matches.length - MAX_RESULTS)) {
  //     $nextBtn.addClass('invisible');
  //   }
  //
  //   // $prevBtn
  //   if (currentIndex <= MAX_RESULTS) {
  //     $prevBtn.removeClass('invisible');
  //   }
  //   if (currentIndex === 0) {
  //     $prevBtn.addClass('invisible');
  //   }
  //
  //
  // }

  $(document).ready(function() {});

  function emoji(feeling) {
    if (feeling == 1){
      $('#genre-question .col-md-12').html("You're happy. What do you feel like watching?");
      if (feeling == 2){
        $('#genre-question .col-md-12').html("You're sad. What do you feel like watching?");}
        if (feeling == 3){
          $('#genre-question .col-md-12').html("You're angry. What do you feel like watching?");}
          if (feeling == 4){
            $('#genre-question .col-md-12').html("You're infatuated. What do you feel like watching?");
          }
        }
      }
