(function() {
  var alarmForm = document.getElementById('alarm-form');
  var secondsElm = document.getElementsByName('seconds')[0];

  alarmForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    
    setTimeout(function() {
      showNotif('Alarmeetup', 'Ya paso el tiempo');
    }, secondsElm.value * 1000);
  }, false);
  
  function showNotif(title, body) {
    if (typeof window.Notification === 'function') {
      new window.Notification(title, {
        icon: 'icons/icon60x60.png',
        body: body
      });
    } else {
      alert(body);
    }
  }

})();

