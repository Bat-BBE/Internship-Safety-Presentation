function getCurrentPageNumber() {
  const pages = [
    'index.html',
    'aguulga.html',
    'orshil.html',
    'company-intro.html',
    'system.html',
    'learning.html',
    'my-work.html',
    'conclusion.html',
    'demo.html'
  ];
  
  const currentPage = window.location.pathname.split('/').pop();
  return pages.indexOf(currentPage);
}

// Slide number update
const currentPageIndex = getCurrentPageNumber();
const slideNumber = document.getElementById('slideNumber');
if (slideNumber) {
  slideNumber.textContent = `${currentPageIndex + 1} / 9`;
}

// Dots update
const dots = document.querySelectorAll('.nav-dot');
if (dots.length > 0) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentPageIndex);
  });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  const pages = [
    'index.html',
    'aguulga.html',
    'orshil.html',
    'company-intro.html',
    'system.html',
    'learning.html',
    'my-work.html',
    'conclusion.html',
    'demo.html'
  ];
  
  const currentIndex = getCurrentPageNumber();
  
  if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const nextIndex = (currentIndex + 1) % pages.length;
    window.location.href = pages[nextIndex];
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
    window.location.href = pages[prevIndex];
  }
});
