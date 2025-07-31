// Smooth scroll to top
document.querySelector('.scroll-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide scroll button
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
    }
});




//**************************Audio play*************************

document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('audio.sermon-audio');

  // Ensure no autoplay and reset on load
  audios.forEach(audio => {
    audio.autoplay = false;
    audio.currentTime = 0;
    audio.pause();
    audio.preload = 'none';
  });

  // Play one at a time
  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
        }
      });
    });
  });

  // Pause all on tab minimize or switch
  window.addEventListener('blur', () => {
    audios.forEach(audio => {
      if (!audio.paused) {
        audio.pause();
      }
    });
  });

  // Reset audios on page unload (refresh)
  window.addEventListener('beforeunload', () => {
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});

