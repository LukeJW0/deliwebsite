var picker;
var rosters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var index = 0;
var loadedTeams = [];
// var storage = window.localStorage;

$('document').ready(function(){
  picker = $('#teams');
  // picker.prop('disabled', true);
  $('#template').hide();
  // let teams = [];
  // if (storage.getItem("season"))
  $.ajax({
    url: "https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Team%20Stuff!E1:F?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
    type: 'GET',
    success: function(response) {
      // console.log(response.values);
      let data = response.values;
      for (let team of data) {
        picker.append($('<option value="">' + team[0] + " " + team[1] + '</option>'));
      }
      getTeam("https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/" + picker.children().eq(0).text().replace(/\ /g, "%20") + "!A2:I50?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg");
    },
    error: function(error) {
      console.log(error);
    }
  });
  // alert('wtf');
  // let team = picker.children().eq(0).text().replace(" ", "%20");
  // alert(team);
  // alert("https://sheets.googleapis.com/v4/spreadsheets/1Al-vbjGQwuTQ2Cu2L_scv-Xw7NmOtIhTeI7YYKRfsyU/values/" + team + "!A2:I50?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg");

  picker.on('change', function(){
    // alert(picker.find(":selected").index());
    // loadTeam(picker.find(":selected").index());
    index = picker.find(":selected").index();
    if (loadedTeams.includes(picker.children().eq(index).text())) {
      loadTeam(index);
    } else {
      getTeam("https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/" + picker.children().eq(index).text().replace(/\ /g, "%20") + "!A2:I50?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg");
    }
  });

  $('#history').on('mousedown', function(){
    alert('The History page is not ready yet!');
  });
});

function getTeam(url) {
  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      // console.log(response.values);
      let data = response.values;
      // alert(data);
      rosters[index] = data;
      loadedTeams.push(picker.children().eq(index).text());
      loadTeam(index);
      picker.prop('disabled', false);
      // if (index < picker.children().length) {
      //   // alert(picker.children().eq(index).text().replace(/\ /g, "%20"));
      //   getTeam("https://sheets.googleapis.com/v4/spreadsheets/1Al-vbjGQwuTQ2Cu2L_scv-Xw7NmOtIhTeI7YYKRfsyU/values/" + picker.children().eq(index).text().replace(/\ /g, "%20") + "!A2:I50?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg")
      // } else {
      //   picker.prop('disabled', false);
      // }
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function loadTeam(i) {
  // alert(rosters);
  // alert(i);
  var template = $('#template').clone();
  $('#roster').empty();
  $('#roster').append(template);
  // $('#roster').slice(1).remove();
  for (const player of rosters[i]) {
    if (player.length < 2) {
      continue;
    }
    if (player[4] == "Coach") {
      continue;
    }
    let newPlayer = $('#template').clone();
    newPlayer.children().eq(0).text(player[0] + " " + player[1]);
    newPlayer.children().eq(1).text(player[6] + " " + player[2]);
    newPlayer.children().eq(2).text(player[4]);
    newPlayer.children().eq(3).text("Age: " + player[3]);
    newPlayer.children().eq(4).text("$" + player[8] + "M");
    newPlayer.children().eq(5).text("Years: " + player[7]);
    let n = player[2].indexOf(' ');
    let s = player[2].substring(0, n != -1 ? n : player[2].length);
    newPlayer.children().eq(6).text(s);
    newPlayer.removeAttr('id');
    newPlayer.show();
    $('#roster').append(newPlayer);
  }
}