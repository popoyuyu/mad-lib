$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();

    madLibArray = [$("input#person1").val(), $("input#person2").val(), $("input#animal").val(), $("input#exclamation").val(), $("input#verb").val(), $("input#noun").val()];
    // storySelctor = [$(".person1"), $(".person2"), $(".animal"), $(".exclamation"), $(".verb"), $(".noun"),];

    // for (let i = 0; i > madLibArray.length; i++) {
    //   storySelctor[i].text(madLibArray[i]);
    // }
    // madLibArray.foreach(function () {
    // })

    $(".person1").text(madLibArray[0]);
    $(".person2").text(madLibArray[1]);
    $(".animal").text(madLibArray[2]);
    $(".exclamation").text(madLibArray[3]);
    $(".verb").text(madLibArray[4]);
    $(".noun").text(madLibArray[5]);

    $("#story").show();

    madLibArray.forEach(function (element) {
      $("ul#answers").append("<li>" + element + "</li>");
    });
  });
});