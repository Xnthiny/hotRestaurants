$(document).ready(function () {

        $(document).on("click", ".submit", function () {
            console.log('test')
            event.preventDefault();
            alert("Yay! You are officially booked!");
            // var cors = "https://whispering-chamber-52679.herokuapp.com/"
            var proxy = "https://cors-anywhere.herokuapp.com/"
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": proxy + "https://127.0.0.1:3000/api/reserve",
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json",
                  "cache-control": "no-cache",
                  "Postman-Token": "86e15849-9f31-487a-bd03-9b4f68837187"
                },
                "processData": false,
                "data": JSON.stringify({
                    "name": $("#reserve-name"),
                    "phoneNum": $("#reserve-phone"),
                    "email": $("#reserve-email"),
                    "uniqueID": $("#reserve-id")
                })
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);
                $("#reserve-name").empty();
                $("#reserve-phone").empty();
                $("#reserve-email").empty();
                $("#reserve-id").empty();
              });

        })

});