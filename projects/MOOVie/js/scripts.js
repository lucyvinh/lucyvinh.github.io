
$('#emoji-happy').on('click', () => {
// alert('hi');
displayModal();
});
//
// function displayModal() {
// let query = $('#query').val();
// $('#query').val('');
// }

// TODO need to clear out results
//
let url = 'https://api.themoviedb.org/3/genre/35/movies?api_key=9bd1f25c3d0ac4ea5f8d7e4ff01ee51b&language=en-US&sort_by=created_at.asc';

 $.getJSON(url, function(data) {

   // get the array of people
   movie = data.results;

   data.forEach(movie => {

    console.log(movie);

    movie = movie.movie

     let movieTitle = movie.title;
     let movieImage = movie.poster_path;
     let movieSummary = movie.overview;
     let movieRelease = movie.release_date;
    //  let movieRating = movie.rating;
    // let movieSimilar = movie.similar;

     $firstGenreModal.append(`
       <h2>Movie Title: ${movieTitle}</h2>
       <img src="" alt="${movieTitle}" />
       <p>Summary: <${movieSummary}</p>
       <p>Release Date: ${movieRelease}</p>
       `)}};

 $('#firstGenreModal').append(movieTitle + movieImage + movieSummary + movieRelease);
//
// $(document).ready(function() {});
//
// function emoji(feeling) {
//        if (feeling == 1){
//        $('#genre-question .col-md-12').html("You're happy. What do you feel like watching?");
//         // $('.hawt').show();
//      }
//        if (feeling == 2){
//        $('#genre-question .col-md-12').html("You're sad. What do you feel like watching?");}
//        if (feeling == 3){
//        $('#genre-question .col-md-12').html("You're angry. What do you feel like watching?");}
//        if (feeling == 4){
//        $('#genre-question .col-md-12').html("You're infatuated. What do you feel like watching?");
//        }
// }
