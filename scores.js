var picker;
var scores = [];
const images = {
  "Venom" : "https://iili.io/wOGK79.png",
  "Summits" : "https://iili.io/wOGCzb.png",
  "Reapers" : "https://iili.io/wOGqmu.png",
  "Pandas" : "https://iili.io/wOGfee.png",
  "Nobunaga" : "https://iili.io/wOGnXj.png",
  "Monarchs" : "https://iili.io/wOGoLx.png",
  "Missions" : "https://iili.io/wOGzqQ.png",
  "Grizzlies" : "https://iili.io/wOGTrB.png",
  "K9s" : "https://iili.io/wOGI1V.png",
  "Fineapples" : "https://iili.io/weLFwX.png",
  "Emeralds" : "https://iili.io/wOGR71.png",
  "Elks" : "https://iili.io/wOG5kF.png",
  "Dimes" : "https://iili.io/wOG7mg.png",
  "Devils" : "https://iili.io/wOGaIa.png",
  "Cobras" : "https://iili.io/wOGchJ.png",
  "Blacktips" : "https://iili.io/wOG1BR.png",
  "Blizzards" : "https://iili.io/wOGlLv.png"
}

$('document').ready(function(){
  picker = $('#teams');
  picker.prop('disabled', true);
  $('#template').hide();
  getScores("https://sheets.googleapis.com/v4/spreadsheets/1Al-vbjGQwuTQ2Cu2L_scv-Xw7NmOtIhTeI7YYKRfsyU/values/Schedule!A2:G110?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg");

  picker.on('change', function(){
    // alert(picker.find(":selected").index());
    loadTeam(picker.find(":selected").val());
  });

  $('#history').on('mousedown', function(){
    alert('The History page is not ready yet!');
  });
});

function getScores(url) {
  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      // console.log(response.values);
      let data = response.values;
      // alert(data);
      scores = data;
      loadTeam("All");
      picker.prop('disabled', false);
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function loadTeam(team) {
  var template = $('#template').clone();
  $('#games').empty();
  $('#games').append(template);
  // $('#roster').slice(1).remove();
  for (const game of scores) {
    if (game[1] == "null") {
      break;
    }
    if (game[0] == team || game[3] == team || team == "All") {
      let newGame = $('#template').clone();
      newGame.children().eq(0).text(game[3]);
      newGame.children().eq(1).attr("src", images[game[3]]);
      newGame.children().eq(2).text(game[5]);
      newGame.children().eq(3).text("Week " + (parseInt(game[2].split('-')[0]) + parseInt(game[2].split('-')[1])));
      newGame.children().eq(4).text(game[4] + "-" + game[1]);
      newGame.children().eq(5).text(game[6]);
      newGame.children().eq(6).text(game[0]);
      newGame.children().eq(7).attr("src", images[game[0]]);
      newGame.children().eq(8).text(game[2]);
      newGame.removeAttr('id');
      newGame.show();
      $('#games').prepend(newGame);
    }
    // let newPlayer = $('#template').clone();
    // newPlayer.children().eq(0).text(player[0] + " " + player[1]);
    // newPlayer.children().eq(1).text(player[6] + " " + player[2]);
    // newPlayer.children().eq(2).text(player[4]);
    // newPlayer.children().eq(3).text("Age: " + player[3]);
    // newPlayer.children().eq(4).text("$" + player[8] + "M");
    // newPlayer.children().eq(5).text("Years: " + player[7]);
    // newPlayer.removeAttr('id');
    // newPlayer.show();
    // $('#roster').append(newPlayer);
  }
}