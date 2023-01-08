var search;
var stats = [];
var autoStats = [];

$('document').ready(function(){
  $('#searchstats').hide();
  search = $('#search');
  getStats("https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Stats!A1:A1?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg");
  
  
  search.on('input', function(){
    $('#statstext').text("");
    searchStats($(this).val());
  });

  $('#history').on('mousedown', function(){
    alert('The History page is not ready yet!');
  });

  $('#allstats').on('click', '.showall', function() {
    if ($(this).text() === "Hide All") {
      $(this).text('Show All');
      $(this).parent().children().not('.original').remove();
      return;
    }
    // $('.showscript').text('Show Script');
    // $('.script').remove();
    let stat = $(this).parent();
    let statIndex = parseInt($(this).parent().attr('id'));

    let button = $(this).clone();
    $(this).remove();
    
    for (let i = 5; i < stats[statIndex].length; i++) {
      let newPlayer = $('#playertemplate').clone();
      // alert(newPlayer.attr('id'))
      newPlayer.removeAttr('id');
      newPlayer.removeClass('original');
      newPlayer.children().eq(0).text(stats[statIndex][i]);
      newPlayer.children().eq(1).text(stats[statIndex + 1][i]);
      stat.append(newPlayer);
    }
    stat.append(button);
    button.text('Hide All');
  });
});

function getStats(url) {
  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      // console.log(response.values);
      let data = response.values;
      stats = JSON.parse(data[0][0])[0];
      autoStats = JSON.parse(data[0][0])[1];
      loadStats();
    },
    error: function(error) {
      console.log(error);
    }
  });
}

function loadStats() {
  var statIndex = [16, 18, 10, 14, 4, 6, 8, 12, 20, 22, 24, 28, 0, 30, 32, 26, 2]
  for (const index of statIndex) {
    for (let i = 0; i < 5; i++) {
      $('#' + index).children().eq(i + 1).children().eq(0).text(stats[index][i]);
      $('#' + index).children().eq(i + 1).children().eq(1).text(stats[index + 1][i]);
    }
  }
}

function searchStats(name) {
  console.log(stats);
  var statNames = ["Sacks", "Sacks", "INTs", "INTs", "INTs Thrown", "INTs Thrown", "Carries", "Carries", "Rush Yards", "Rush Yards", "Pass Yards", "Pass Yards", "Rush TDs", "Rush TDs", "Pass TDs", "Pass TDs", "Attempts", "Attempts", "Completions", "Completions", "Receptions", "Receptions", "Rec Yards", "Rec Yards", "Rec TDs", "Rec TDs", "Pass Defs", "Pass Defs", "TFLs", "TFLs", "FFs", "FFs", "FRs", "FRs"];

  for (let i = 0; i < stats.length; i+=2) {
    for (let j = 0; j < stats[i].length; j++) {
      if (stats[i][j] === name) {
        $('#statstext').text($('#statstext').text() + stats[i + 1][j] + " " + statNames[i + 1] + ", ");
        $('#searchstats').show();
      }
    }
  }
  if ($('#statstext').text().length > 0) {
    $('#statstext').text($('#statstext').text().substring(0, $('#statstext').text().length - 2));
  } else {
    $('#searchstats').hide();
  }
}

// function loadTeam(team) {
//   var template = $('#template').clone();
//   $('#games').empty();
//   $('#games').append(template);
//   // $('#roster').slice(1).remove();
//   for (const game of scores) {
//     if (game[1] == "null") {
//       break;
//     }
//     if (game[0] == team || game[3] == team || team == "All") {
//       let newGame = $('#template').clone();
//       newGame.children().eq(0).text(game[3]);
//       newGame.children().eq(1).attr("src", "logos/" + game[3].toLowerCase() + ".png");
//       newGame.children().eq(2).text(game[5]);
//       newGame.children().eq(3).text("Week " + (parseInt(game[2].split('-')[0]) + parseInt(game[2].split('-')[1])));
//       newGame.children().eq(4).text(game[4] + "-" + game[1]);
//       newGame.children().eq(5).text(game[6]);
//       newGame.children().eq(6).text(game[0]);
//       newGame.children().eq(7).attr("src", "logos/" + game[0].toLowerCase() + ".png");
//       newGame.children().eq(8).text(game[2]);
//       newGame.removeAttr('id');
//       newGame.show();
//       $('#games').prepend(newGame);
//     }
//     // let newPlayer = $('#template').clone();
//     // newPlayer.children().eq(0).text(player[0] + " " + player[1]);
//     // newPlayer.children().eq(1).text(player[6] + " " + player[2]);
//     // newPlayer.children().eq(2).text(player[4]);
//     // newPlayer.children().eq(3).text("Age: " + player[3]);
//     // newPlayer.children().eq(4).text("$" + player[8] + "M");
//     // newPlayer.children().eq(5).text("Years: " + player[7]);
//     // newPlayer.removeAttr('id');
//     // newPlayer.show();
//     // $('#roster').append(newPlayer);
//   }
// }