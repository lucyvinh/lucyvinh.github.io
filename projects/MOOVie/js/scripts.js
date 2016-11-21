let $happyContainer = $('#first-genre-modal');
let $sadContainer = $(`#second-genre-modal`);
let $angryContainer = $(`#third-genre-modal`);
let $romanceContainer = $(`#fourth-genre-modal`);

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

$('#emoji-happy').on('click', displayResults);

let url = 'https://api.themoviedb.org/3/genre/35/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

function displayResults(movie) {
  $.getJSON(url, function(data) {

    let movies = data.results;
    console.log(movies);

    $happyContainer.empty();
    $sadContainer.empty();
    $angryContainer.empty();
    $romanceContainer.empty();

    for (i = 0; i < movies.length; i++) {

      let movie = movies[i];
      let movieID = movie.id;
      let movieTitle = movie.title;
      let movieImage = movie.poster_path;
      let movieSummary = movie.overview ? movie.overview : '<p>Summary not available.</p>';
      let movieRelease = movie.release_date;

      $happyContainer.append(`

        <h3>Movie Title: ${movieTitle}</h3>
        <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
        <p><strong>Summary:</strong> ${movieSummary}</p>
        <p><strong>Release Date:</strong> ${movieRelease}</p>
        `);

      }
    })
  }

  $('#emoji-sad').on('click', displaySecondResults);
  let secondUrl = 'https://api.themoviedb.org/3/genre/18/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

  function displaySecondResults(movie) {
    $.getJSON(secondUrl, function(data) {

      let movies = data.results;
      console.log(movies);

      $happyContainer.empty();
      $sadContainer.empty();
      $angryContainer.empty();
      $romanceContainer.empty();

      for (i = 0; i < movies.length; i++) {

        let movie = movies[i];
        let movieID = movie.id;
        let movieTitle = movie.title;
        let movieImage = movie.poster_path;
        let movieSummary = movie.overview ? movie.overview : '<p>Summary not available.</p>';
        let movieRelease = movie.release_date;

        $sadContainer.append(`

          <h3>Movie Title: ${movieTitle}</h3>
          <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
          <p><strong>Summary:</strong> ${movieSummary}</p>
          <p><strong>Release Date:</strong> ${movieRelease}</p>
          `);

        }
      })
    }

    $('#emoji-angry').on('click', displayThirdResults);
    let thirdUrl = 'https://api.themoviedb.org/3/genre/28/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

    function displayThirdResults(movie) {
      $.getJSON(thirdUrl, function(data) {

        let movies = data.results;
        console.log(movies);

        $happyContainer.empty();
        $sadContainer.empty();
        $angryContainer.empty();
        $romanceContainer.empty();

        for (i = 0; i < movies.length; i++) {

          let movie = movies[i];
          let movieID = movie.id;
          let movieTitle = movie.title;
          let movieImage = movie.poster_path;
          let movieSummary = movie.overview ? movie.overview : '<p>Summary not available.</p>';
          let movieRelease = movie.release_date;

          $angryContainer.append(`

            <h3>Movie Title: ${movieTitle}</h3>
            <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
            <p><strong>Summary:</strong> ${movieSummary}</p>
            <p><strong>Release Date:</strong> ${movieRelease}</p>
            `);

          }
        })
      }

      $('#emoji-romantic').on('click', displayFourthResults);
      let fourthUrl = 'https://api.themoviedb.org/3/genre/10749/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

      function displayFourthResults(movie) {
        $.getJSON(fourthUrl, function(data) {

          let movies = data.results;
          console.log(movies);

          $happyContainer.empty();
          $sadContainer.empty();
          $angryContainer.empty();
          $romanceContainer.empty();

          for (i = 0; i < movies.length; i++) {

            let movie = movies[i];
            let movieID = movie.id;
            let movieTitle = movie.title;
            let movieImage = movie.poster_path;
            let movieSummary = movie.overview ? movie.overview : '<p>Summary not available.</p>';
            let movieRelease = movie.release_date;

            $romanceContainer.append(`

              <h3>Movie Title: ${movieTitle}</h3>
              <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
              <p><strong>Summary:</strong> ${movieSummary}</p>
              <p><strong>Release Date:</strong> ${movieRelease}</p>
              `);

            }
          })
        }
