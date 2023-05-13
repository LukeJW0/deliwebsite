$('document').ready(function(){
    $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Standings!A3:E32?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
        type: 'GET',
        success: function(response) {
            var data = response.values;
            var afcEast = "";
            var afcCentral = "";
            var afcWest = "";
            var gfcEurope = "";
            var gfcWorld = "";
            var gfcAmerica = "";
            for (const team of data) {
                if (team[2] == "" || team[2] == null) { //
                    continue;
                }
                if (team[0] == "AFC") {
                    if (team[1] == "East") {
                        afcEast += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    } else if (team[1] == "Central") {
                        afcCentral += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    } else {
                        afcWest += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    }
                } else {
                    if (team[1] == "Europe") {
                        gfcEurope += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    } else if (team[1] == "World") {
                        gfcWorld += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    } else {
                        gfcAmerica += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    }
                }
            }
            
            $('#afceast').html(afcEast.substring(0, afcEast.length - 4));
            $('#afccentral').html(afcCentral.substring(0, afcCentral.length - 4));
            $('#afcwest').html(afcWest.substring(0, afcWest.length - 4));
            $('#gfceurope').html(gfcEurope.substring(0, gfcEurope.length - 4));
            $('#gfcworld').html(gfcWorld.substring(0, gfcWorld.length - 4));
            $('#gfcamerica').html(gfcAmerica.substring(0, gfcAmerica.length - 4));
        },
        error: function(error) {
            console.log(error);
        }
    });

  $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Standings!I9:I19?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
        type: 'GET',
        success: function(response) {
            var data = response.values;
            $('#afcplayoffs').html(data[0][0] + "<br>" + data[1][0] + "<br>" + data[2][0] + "<br>" + data[3][0] + "<br>" + data[4][0]);
            $('#gfcplayoffs').html(data[6][0] + "<br>" + data[7][0] + "<br>" + data[8][0] + "<br>" + data[9][0] + "<br>" + data[10][0]);
        },
        error: function(error) {
            console.log(error);
        }
    })

    $('#igimg').on('mousedown', function(){
        var win = window.open('http://www.instagram.com/deli.league', '_blank');
        if (win) {
            win.focus();
        } else {
            alert('Please allow popups for this website');
        }

    });

    $('#history').on('mousedown', function(){
      alert('The History page is not ready yet!');
    });
})
