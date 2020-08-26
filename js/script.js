let key = "4f0354a7";

$(".submit").click(() => {
  let userInput = $(".search").val();

  $.ajax({
    url: `http://www.omdbapi.com/?apikey=${key}&s=${userInput}`,
  }).done((res) => {
      // let moviePlot = res.plot;
      // let movieRatings = res.ratings;
      let movieRes = res.search;
      debugger;
      $.each(movieRes, (i, e) => {
          let moviePoster = e.poster;
      $(".displayPoster").append(`<img src="${moviePoster}"/>`);
    });
    // $(".displayPoster").
    // $(".display").empty();
    // let movieData = res.data;
    // console.log(movieData);
  });
});
