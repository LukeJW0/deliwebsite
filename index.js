$('document').ready(function(){
    $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Standings!A3:E22?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
        type: 'GET',
        success: function(response) {
            console.log(response.values);
            var data = response.values;
            var afc = "";
            var gfc = "";
            var afcSouth = "";
            var gfcSouth = "";
            for (const team of data) {
                console.log(team)
                if (team[2] == "") {
                    continue;
                }
                if (team[0] == "AFC") {
                    if (team[1] == "North") {
                        afc += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    } else {
                        afcSouth += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    }
                } else {
                    if (team[1] == "North") {
                        gfc += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    } else {
                        gfcSouth += team[2] + " (" + team[3] + "-" + team[4] + ")" + "<br>";
                    }
                }
            }
            
            console.log('tes');
            $('#afcnorth').html(afc.substring(0, afc.length - 4));
            $('#gfcnorth').html(gfc.substring(0, gfc.length - 4));
            $('#afcsouth').html(afcSouth.substring(0, afcSouth.length - 4));
            $('#gfcsouth').html(gfcSouth.substring(0, gfcSouth.length - 4));
        },
        error: function(error) {
            console.log(error);
        }
    });

  $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Standings!H9:H15?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
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