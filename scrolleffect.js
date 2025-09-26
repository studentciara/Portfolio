// JavaScript for changing backgrounds on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    
    // Loop through each section to check its position
    sections.forEach(section => {
      const top = section.offsetTop;
      const scrollPos = window.scrollY;
      
      if (scrollPos >= top && scrollPos < top + section.offsetHeight) {
        // Remove all background classes
        sections.forEach(s => s.classList.remove('bg1', 'bg2', 'bg3'));
        
        // Check the ID of the current section and add the appropriate background
        if (section.id === 'section1') section.classList.add('bg1');
        if (section.id === 'section2') section.classList.add('bg2');
        if (section.id === 'section3') section.classList.add('bg3');
      }
    });
  });
  
  