var picker;
var scores = [];
var images = {
    "Astronauts" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qGNn_ruk2jpMn0wZ-pnDYjtAqVCjzNJi81cPTIrwSZlXOuovq4cus7NIrAawhT0UXym8vy1cMOkULrEOSUhFZcFOUC=s2560",
    "Reapers" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rC8y0Lcbaj521VMNIwRJrlfjCKJus6MjJd7ukSWylSWwM7fE9zcWJANvy7pq7RGOYmtFGq2WfD6lOBMZMVlpBBP3a8=s2560",
    "Bats" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pgYnBBYFr6xfkLnWHu2rQJrGiiWtICB7yWqzinbk-hT5KGkHjGcEBdRr7dZDlNCxggeD57A9uVnm2zTJunJMJDoaO9=s1600",
    "Warriors" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81q2667MynGx8xSLsKjc4WwfQl7oVmGueMxt8-C6xKU-8JGvDcGB_DKH7eTQ46SoXfchrK7Qgd5cIaJqXbQ-GDrtiYZP=s2560",
    "Pistons" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pDeVmsVfTzL32ddfeAaxjjWHnvEDuM87eeHX_sqxNcK5K8zBkT1cPnOiYGIo8zZxt78flYehUVfN5BWI1hKTs73KhfDg=s1600",
    "K9s" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81oHsGhNqq9PzA5GoRQD4arXNkqtzDu-5rO7Vo9Fw-66tXG1Og7G6s3FBL2ZyPvl70iLFT3Yd8QakxKB9kJ98641fLUlaQ=s2560",
    "Crusaders" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81oHsGhNqq9PzA5GoRQD4arXNkqtzDu-5rO7Vo9Fw-66tXG1Og7G6s3FBL2ZyPvl70iLFT3Yd8QakxKB9kJ98641fLUlaQ=s2560",
    "Dawgs" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81orMzuFpL1xqL_YIuSPvTaR951EeC0mjrzHOtBjdGBa5jUV0_CWjejDAiypL1qrxgGw4LIC9JQChfXdXJA76hkUjCWpWQ=s1600",
    "Celtics" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pbbnomdnsCs4L43M5e_G86L6uCAa1gIlKGiALq_XHj9LSpH5dQAOfTxF35V3GTVUj2YtAWAn8Uefq5ktjkxNPTZecxWg=s1600",
    "Summits" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rOD2ME5K0YW5OqqBiHnDTgFoFHj16rpKxTR9CQyVRUQ_D0ZzO0im0JghqeDNXWnbV5Cos4SM1Eht8zGPwXqE39XVxj8Q=s1600",
    "Brigade" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qycxxPujjqFEhBLIN90q2jaANU5K8wuA4XfZ6H8FuTtNEkQbuDRVc5r10IHHha9FNbVH61iQmo9xJFfdwfCO2xmNIJ=s2560",
    "Blacktips" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rlG34mYNcGZ8EXdBsGliuKZeL58VfXeGC2_6RYaDu_Q175ADNWAoHWJ4FyPMsAFI5-eoPAs-nJ6wwMtZMs_VxoAYlzjQ=s1600",
    "Nobunaga" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qbfYa9YnOTiJvKX2d1nm1sIb-V47wowAZpR3BJNDyzIF9F41UEZ387IRO9mdol3rDQzcNI5odS18XBaLpodS_wzing=s2560",
    "Rebels" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81q1bdXHD4j9jofmYylzIuHT1lvVbjmv1LPhKxauVrklYzltt9B_aPctfS8VHIeeX_54J3HtH7nSjrymI3f_NAnu98U0tg=s2560",
    "Pirates" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81peLECu3PRHgBrlPdMiu2aZK4nU-As9qXrXE-0fP0drrlN1hxp-Npz1And0vRSMQYRjLlBo0jYSjGRQIO6mHNvXbz_F4Q=s2560",
    "Monarchs" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81oIjp_89YEACqrCe7tzKRzwS0Eor95BAEgAOgRLF7FUuSBIlUYFuQZxeF1rdgJQfgQdOWijdDPHHpnAcTrJ5ARy0PTQAg=s2560",
    "Starz" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81oZy-f5q4CDxnbnIgc4rACRDOcKlL9SyPPnNck2bvRyd-qlENrKzm3VeMcDWSc634j3F2UjTOJVHjHsUaMO76gG4UMRwg=s1600",
    "Pandas" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81p3pEmjEgb2dcnsLc-Ym1jsaNPlGOeVqb6Fv_4h9U6foFkog8B7Ytl2FtngiVSEKAt0wBNMp7BMUQS2Upc4fO6A8a_M0A=s1600",
    "Gyrfalcons" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qLFz7Tu3Ea1aPoaYDgVFRZ9GYcoce4GRKU_5c_BQE2xshm5KWDiEieU6VobA7bmc2ABYoyADT-PMEyIxXeZShgu9rbew=s1600",
    "Elks" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81o-2Up3aXHQfUv2-7X2HN6vo-mZSwdvbzEeNrd7yLHciuSUfpj2WdKZUeufy47jYfRtPlBJzNm3EkNREja0lLvWcPGlFw=s2560",
    "Venom" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rPCfLNMGTDpHQpo-7eSCjwV4PkA_9PNiBpgHRq3T4KnJu3k4d1WUeGO5wQG0QOzy2rCIsRqAvhCSaplU2psWVLr-kJuw=s2560",
    "Tridents" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81ra_ypmpQEOJHTFxQmQ5t1etTGVx-mGWeXASc_pcdFIvPoW41lmXD2UpnCrEp9jdn4UEdgWmR0jVX1oJvo2QZGWnekhlg=s2560",
    "Wolves" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81o8R-Z4GY4aBUgpHDRarACm0Tk-fypmHuLwUbiqmzyA9LVyp3hdj7qj9UkNh7J3OWL_GgR8agKawiu7dc1WTuODKSEz7A=s2560",
    "Warthogs" : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81o8R-Z4GY4aBUgpHDRarACm0Tk-fypmHuLwUbiqmzyA9LVyp3hdj7qj9UkNh7J3OWL_GgR8agKawiu7dc1WTuODKSEz7A=s2560"
}
var scriptTemplate;
const scripts = [];

$('document').ready(function(){
  picker = $('#teams');
  picker.prop('disabled', true);
  scriptTemplate = $('#scripttemplate');
  $('#template').hide();
  $('#scripttemplate').hide();

  $.ajax({
    url: "https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Team%20Data!E1:G?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg",
    type: 'GET',
    success: function(response) {
      // console.log(response.values);
      let data = response.values;
      for (let team of data) {
        picker.append($('<option value="' + team[1] + '">' + team[0] + " " + team[1] + '</option>'));
        // images[team[1]] = 
      }
      getScores("https://sheets.googleapis.com/v4/spreadsheets/1EjPw3JVbIueGp84ePMQxd2bUrsIxFFKFAEB_MvxxfCQ/values/Schedule!A2:H?key=AIzaSyCyE0J97OKvHRbhWatfQQ9YI6HlR-Z8qDg");
    },
    error: function(error) {
      console.log(error);
    }
  });

  picker.on('change', function(){
    // alert(picker.find(":selected").index());
    loadTeam(picker.find(":selected").val());
  });

  $('#history').on('mousedown', function(){
    alert('The History page is not ready yet!');
  });

  $('#games').on('click', '.showscript', function() {
    if ($(this).text() === "Hide Script") {
      $(this).text('Show Script');
      $('.script').remove();
      return;
    }
    $('.showscript').text('Show Script');
    $('.script').remove();
    
    let thisScore = $(this).parent();
    let newScript = scriptTemplate.clone();
    newScript.removeAttr('id');
    newScript.children().eq(0).html(thisScore.attr('data-script').replace(/\n/g,"<br>"));
    newScript.show();
    thisScore.after(newScript);
    $(this).text('Hide Script');
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
      newGame.attr('data-script', game[7]);
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
