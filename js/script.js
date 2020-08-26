let key = "4f0354a7"

$(".submit").click(() => {
    let userInput = $('.search').val();

    $.ajax({
        url:`http://www.omdbapi.com/?apikey=${key}&${userInput}`
    }).done((res) => {
        $(".display").empty();
        let movieData = res.data;
        debugger
        console.log(movieData);
    })

})