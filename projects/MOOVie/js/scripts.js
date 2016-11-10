let $happyContainer = $('#first-genre-modal');
let $secondHappyContainer = $(`#second-genre-modal`);

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

      $happyContainer.append(`
        <h3>Movie Title: ${movieTitle}</h3>
        <img src="http://image.tmdb.org/t/p/w185/${movieImage}" alt="${movieTitle}" />
        <p><strong>Summary:</strong> ${movieSummary}</p>
        <p><strong>Release Date:</strong> ${movieRelease}</p>

        `);
      }
    })
  }

  function displayRating(rating) {

    let movieRatingUrl = 'http://www.omdbapi.com/?&tomatoes=true&t=' + movieID;
    $.getJSON(movieRatingUrl, function(data) {

      let rating = data.results;

      $happyContainer.empty();

      for (i = 0; i < rating.length; i++) {

        let rating = ratings[i];
        let ratingMeter = ratings.tomatoMeter;
        let ratingRating = ratings.tomatoRating;

        $happyContainer.append(`
          <p><strong>Rotten Tomato Meter:</strong> ${ratingMeter}</p>
          <p><strong>Rotten Tomato Rating:</strong> ${ratingRating}</p>
          `);
        };
      })
    }
    
    function displaySimilarMovie(movieID) {
      //alert(movieID);

      let similarMovieUrl = 'https://api.themoviedb.org/3/movie/' + movieID +'/similar?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US';

      alert(similarMovieUrl);

      $.getJSON(similarMovieUrl, function(data) {

        let movies = data.results;
        console.log(movies);

        //do the loop and container thing again
        for (i = 0; i < results.length; i++) {

          let movie = movies[i];
          let similarMovieTitle = results.title
          let similarMovieImage = results.poster_path

          $happyContainer.append(`
            <p><strong>Similar Movie Title:</strong> ${similarMovieTitle}</p>
            <p><img src="http://image.tmdb.org/t/p/w185/${similarMovieImage}" alt="${similarMovieTitle}" /></p>

            `);

          }
        })


        // second Happy genre function
        $('#emoji-happy').on('click', displaySecondResults);

        let secondUrl = 'https://api.themoviedb.org/3/genre/878/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

        function displaySecondResults(movie) {
          $.getJSON(secondUrl, function(data) {

            let movies = data.results;
            console.log(movies);

            $secondHappyContainer.empty();

            for (i = 0; i < movies.length; i++) {

              let movie = movies[i];
              let movieID = movie.id;
              let movieTitle = movie.title;
              let movieImage = movie.poster_path;
              let movieSummary = movie.overview ? movie.overview : '<p>Summary not available.</p>';
              let movieRelease = movie.release_date;
              // TODO: get API from another source for the following:
              // movie similar API request
              let similarMovieUrl = 'https://api.themoviedb.org/3/movie/movieID/similar?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US';
              let movieRating = 'https://api.themoviedb.org/3/review/movie.id?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b';

              // http://www.omdbapi.com/ will give you rotten tomato rating and imdb rating if it's available

              $secondHappyContainer.append(`
                <div class="btn btn-sm btn-success" data-toggle="modal" onclick="displaySimilarMovie('${movieID}');"  data-target="${similarMovieUrl}">Similar Movies</div><br>

                `);
              }

            });

          }


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
