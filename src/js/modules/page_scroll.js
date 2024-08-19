const page = document.querySelector('#fullpage');
const sections = page.querySelectorAll('.section');

setHeight(page);

function setHeight(target) {
  target.style.height = '100%';

  if (target.parentElement) {
    setHeight(target.parentElement);
  }
}

page.style.transition = 'transform 1s ease 0s';
page.style.transform = 'translateY(0%)';
let sectionActive = 0;
let scrolling = false;

function scrollHandle() {
  page.style.transform = `translateY(-${100 * sectionActive}%)`;

  setTimeout(() => {
    scrolling = false;
  }, 900);
}

document.body.addEventListener('wheel', scroll => {
  if (scrolling) {
    return;
  }

  scrolling = true;

  if (scroll.deltaY > 0 && sections.length - 1 > sectionActive) {
    sectionActive += 1;
  } else if (scroll.deltaY < 0 && sectionActive != 0) {
    sectionActive -= 1;
  }

  scrollHandle();
});

let y;
document.body.addEventListener('touchstart', touch => {
  y = touch.changedTouches[0].clientY;
});

document.body.addEventListener('touchend', touch => {
  if (scrolling) {
    return;
  }

  if (!(touch.changedTouches[0].clientY - 50 > y || touch.changedTouches[0].clientY + 50 < y)) {
    return;
  }

  scrolling = true;

  if (touch.changedTouches[0].clientY + 50 < y && sections.length - 1 > sectionActive) {
    sectionActive += 1;
  } else if (touch.changedTouches[0].clientY - 50 > y && sectionActive != 0) {
    sectionActive -= 1;
  }

  scrollHandle();
});
