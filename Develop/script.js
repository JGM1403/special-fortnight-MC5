
// global variables
var hour9SaveButton = $('#hour-9').children().eq(2);
var hour10SaveButton = $('#hour-10').children().eq(2);
var hour11SaveButton = $('#hour-11').children().eq(2);
var hour12SaveButton = $('#hour-12').children().eq(2);
var hour13SaveButton = $('#hour-13').children().eq(2);
var hour14SaveButton = $('#hour-14').children().eq(2);
var hour15SaveButton = $('#hour-15').children().eq(2);
var hour16SaveButton = $('#hour-16').children().eq(2);
var hour17SaveButton = $('#hour-17').children().eq(2);

// cycles throught dates to display current date
$(function () {

  var today = dayjs();

  if (today.format('D') == 1 || today.format('D') == 21 || today.format('D') == 31)
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[st]'));
  }

  else if (today.format('D') == 2 || today.format('D') == 22)
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[nd]'));
  }

  else if (today.format('D') == 3 || today.format('D') == 23)
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[rd]'));
  }

  else
  {
    $('#currentDay').text(today.format('dddd, MMMM DD[th]'));
  }
  
  
// saves added event content to local storage form that time after clicking save
  hour9SaveButton.on('click', function () {
     var eventText = $('#hour-9').children().eq(1).val();
     localStorage.setItem("hour-9 Events", eventText);
  });

  hour10SaveButton.on('click', function () {
     var eventText = $('#hour-10').children().eq(1).val();
     localStorage.setItem("hour-10 Events", eventText);
  });

  hour11SaveButton.on('click', function () {
     var eventText = $('#hour-11').children().eq(1).val();
     localStorage.setItem("hour-11 Events", eventText);
  });

  hour12SaveButton.on('click', function () {
     var eventText = $('#hour-12').children().eq(1).val();
     localStorage.setItem("hour-12 Events", eventText);
  });

  hour13SaveButton.on('click', function () {
     var eventText = $('#hour-13').children().eq(1).val();
     localStorage.setItem("hour-13 Events", eventText);
  });

  hour14SaveButton.on('click', function () {
     var eventText = $('#hour-14').children().eq(1).val();
     localStorage.setItem("hour-14 Events", eventText);
  });

  hour15SaveButton.on('click', function () {
     var eventText = $('#hour-15').children().eq(1).val();
     localStorage.setItem("hour-15 Events", eventText);
  });

  hour16SaveButton.on('click', function () {
     var eventText = $('#hour-16').children().eq(1).val();
     localStorage.setItem("hour-16 Events", eventText);
  });

  hour17SaveButton.on('click', function () {
     var eventText = $('#hour-17').children().eq(1).val();
     localStorage.setItem("hour-17 Events", eventText);
  });

  var currentHour = today.format('H');

  // moves class to id if number matches current hour or if matches past or present hour depending if its less or more than the current hour
  for (var i = 9; i < 18; i++)
  {
    if (parseInt($('#hour-' + i).attr("id").replace(/hour-/, '')) == currentHour)
    {
      $('#hour-' + i).attr('class', 'row time-block present');
    }
    
    else if (parseInt($('#hour-' + i).attr("id").replace(/hour-/, '')) < currentHour)
    {
      $('#hour-' + i).attr('class', 'row time-block past');
    }

    else if (parseInt($('#hour-' + i).attr("id").replace(/hour-/, '')) > currentHour)
    {
      $('#hour-' + i).attr('class', 'row time-block future');
    }
  }

  // loops through the hours in a 24hour format to save and set content added to local storage
  for (var i = 9; i < 18; i++)
  {
    if (localStorage.getItem("hour-" + i + " Events") !== null)
    {
      $('#hour-' + i).children().eq(1).text(localStorage.getItem("hour-" + i + " Events"));
    }
  }
});


