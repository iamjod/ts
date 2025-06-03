const pages = document.querySelectorAll('.page');
let currentIndex = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active');
    if (i === index) {
      page.classList.add('active');
    }
  });
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < pages.length - 1) {
    currentIndex++;
    showPage(currentIndex);
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPage(currentIndex);
  }
});

// Initial display
showPage(currentIndex);
