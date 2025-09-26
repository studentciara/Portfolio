function openApp(appNumber) {
    const screen = document.querySelector('.screen');
    
    // Maak het scherm leeg bij het openen van een app
    screen.innerHTML = ''; 
  
    // Voeg dynamisch inhoud toe voor de geselecteerde app
    switch (appNumber) {
      case 1:
        screen.innerHTML = `<iframe src="https://www.instagram.com/its.ciarax01?igsh=c2piczVndXY0ZWQ0" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 2:
        screen.innerHTML = `<iframe src="https://www.whatsapp.com/?lang=nl_NL" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 3:
        screen.innerHTML = `<iframe src="https://www.linkedin.com" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 4:
        screen.innerHTML = `<iframe src="https://pin.it/6fCPU2MuS" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 5:
        screen.innerHTML = `<iframe src="https://www.facebook.com/JesusWorshipCenter/videos/993326284705823/" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 6:
        screen.innerHTML = `<iframe src="https://open.spotify.com/user/ciaramusic-nl?si=lPY0MbzTRSSdcLFFeLD5qg" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 7:
        screen.innerHTML = `<iframe src="https://x.com/itsciarax01?t=IDgIFQGzN6bfac1vmbvZlQ&s=09" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 8:
        screen.innerHTML = `<iframe src="https://workspace.google.com/intl/nl/gmail/" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 9:
        screen.innerHTML = `<iframe src="https://youtube.com/@ciara9024?feature=shared" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 10:
        screen.innerHTML = `<iframe src="https://www.duolingo.com/profile/itsciarax01?via=share_profile_link" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 11:
        screen.innerHTML = `<iframe src="https://outlook.office.com/mail/" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      case 12:
        screen.innerHTML = `<iframe src="https://www.netflix.com/nl/" width="100%" height="100%" frameborder="0"></iframe>`;
        break;
      default:
        screen.innerHTML = `<p>App niet gevonden!</p>`;
        break;
    }
  }
  
  // Klokfunctie
  let hrs = document.getElementById("hrs");
  let min = document.getElementById("min");
  
  setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  }, 1000);
  