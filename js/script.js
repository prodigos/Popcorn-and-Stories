let key = "4f0354a7";

$(".submit").click(() => {
  let userInput = $(".search").val();

  $.ajax({
    url: `http://www.omdbapi.com/?apikey=${key}&s=${userInput}`,
  }).done((res) => {
    $(".displayPoster").empty();
    let movieRes = res.Search;
    $.each(movieRes, (i, e) => {
      let moviePoster = e.Poster;
      let movieYear = e.Year;
      let movieTitle = e.Title;
      $(".displayPoster").append(
        `<img src="${moviePoster}" class="img-fluid rounded-lg img-responsive" alt="Responsive image"/>
        <figcaption class="figure-caption">Title: ${movieTitle}<br>Release Year: ${movieYear}</figcaption>`
      );
    });
  });
});
