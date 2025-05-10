function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('EN-EN');
    const date = now.toLocaleDateString('EN-EN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  