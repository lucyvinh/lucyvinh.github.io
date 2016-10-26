
$(document).ready(function() {});

function emoji(feeling) {
       if (feeling == 1){
       $('#genre-question .col-md-12').html("You're happy. What do you feel like watching?");
        // $('.hawt').show();
     }
       if (feeling == 2){
       $('#genre-question .col-md-12').html("You're sad. What do you feel like watching?");}
       if (feeling == 3){
       $('#genre-question .col-md-12').html("You're angry. What do you feel like watching?");}
       if (feeling == 4){
       $('#genre-question .col-md-12').html("You're infatuated. What do you feel like watching?");
       }
}
