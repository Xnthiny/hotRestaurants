$(document).ready(function(){


    $(document).on("click", ".submit", function () {

        event.preventDefault();
        alert("Yay! You are officially booked!");

        var queryURL = "https://localhost:3000/api/reserve"

    $.ajax({
        url: queryURL,
        method: "POST",
        headers: {
            "x-app-id": "0acfbe2a",
            "x-app-key": "5ac36eed774455cd4bb1259966818fce",
            "Content-Type": "application/json"
        },
        data: JSON({
            "name": $('#reserve-name'),
            "phoneNum": $('#reserve-phone'),
            "email": $('#reserve-email'),
            "uniqueID": $('#reserve-id')
        })

    })
        .then(function (response) {
        });
        //blank out the reserve form
      
        $('#reserve-name').empty();
        $('#reserve-number').empty();
        $('#reserve-email').empty();
        $('#reserve-id').empty();
      
      });


});