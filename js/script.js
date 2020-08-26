let key = "4f0354a7"

$(function () => {
    let userInput = $('.search').val();

    $.ajax({
        url:`http://www.omdbapi.com/?apikey=${key}&`
    })

})