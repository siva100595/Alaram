
document.getElementById('set-alarm-btn').addEventListener('click', function() {
    var alarmTimeInput = document.getElementById('alarm-time');
    var alarmTime = alarmTimeInput.value;
    var currentTime = new Date();
    var alarmDateTime = new Date();
    
    var alarmTimeParts = alarmTime.split(':');
    var alarmHour = parseInt(alarmTimeParts[0], 10);
    var alarmMinute = parseInt(alarmTimeParts[1], 10);
    
    alarmDateTime.setHours(alarmHour);
    alarmDateTime.setMinutes(alarmMinute);
    alarmDateTime.setSeconds(0);
    
    if (alarmDateTime > currentTime) {
      var timeDifference = alarmDateTime - currentTime;
      
      setTimeout(function() {
        document.getElementById('status').textContent = "Alarm activated!";
        playAlarmSound();
      }, timeDifference);
      
      alarmTimeInput.disabled = true;
      document.getElementById('set-alarm-btn').disabled = true;
      document.getElementById('status').textContent = "Alarm set for " + alarmTime;
    } else {
      document.getElementById('status').textContent = "Alarm not set or incorrect time.";
    }
  });

  function playAlarmSound() {
    var audio = new Audio('C:/Users/siva/Desktop/Alaram/audio/alarm1.mp3'); 
    audio.play();
  }