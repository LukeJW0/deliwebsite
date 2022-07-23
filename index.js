$('document').ready(function(){
    $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1Al-vbjGQwuTQ2Cu2L_scv-Xw7NmOtIhTeI7YYKRfsyU/values/Standings!A3:E22?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
        type: 'GET',
        success: function(response) {
            console.log(response.values);
            var data = response.values;
            var afc = "";
            var gfc = "";
            var afcWest = "";
            var gfcWest = "";
            for (const team of data) {
                console.log(team)
                if (team[2] == "") {
                    continue;
                }
                if (team[0] == "AFC") {
                    if (team[1] == "East") {
                        afc += team[2] + " - " + team[3] + "-" + team[4] + "<br>";
                    } else {
                        afcWest += team[2] + " - " + team[3] + "-" + team[4] + "<br>";
                    }
                } else {
                    if (team[1] == "East") {
                        gfc += team[2] + " - " + team[3] + "-" + team[4] + "<br>";
                    } else {
                        gfcWest += team[2] + " - " + team[3] + "-" + team[4] + "<br>";
                    }
                }
            }
            
            console.log('tes');
            $('#afceast').html(afc.substring(0, afc.length - 4));
            $('#gfceast').html(gfc.substring(0, gfc.length - 4));
            $('#afcwest').html(afcWest.substring(0, afcWest.length - 4));
            $('#gfcwest').html(gfcWest.substring(0, gfcWest.length - 4));
        },
        error: function(error) {
            console.log(error);
        }
    });

  $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1Al-vbjGQwuTQ2Cu2L_scv-Xw7NmOtIhTeI7YYKRfsyU/values/Standings!H9:H15?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
        type: 'GET',
        success: function(response) {
            console.log(response.values);
            var data = response.values;
          
            $('#afcplayoffs').html(data[0][0] + "<br>" + data[1][0] + "<br>" + data[2][0]);
            $('#gfcplayoffs').html(data[4][0] + "<br>" + data[5][0] + "<br>" + data[6][0]);
        },
        error: function(error) {
            console.log(error);
        }
    })

    $('#igimg').on('mousedown', function(){
        var win = window.open('http://www.instagram.com/deli.league', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }

    });

    $('#history').on('mousedown', function(){
      alert('The History page is not ready yet!');
    });
})