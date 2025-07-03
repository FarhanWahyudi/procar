const menu = document.getElementById('menu');
const unorderedListMobile = document.getElementById('unordered-list-mobile')
const links = document.querySelectorAll(".nav-link");
const burger = document.getElementById('burger');
const closse = document.getElementById('close');

menu.addEventListener('click', () => {
  if (unorderedListMobile.classList.contains('hidden')) {
    unorderedListMobile.classList.remove('hidden');
    unorderedListMobile.classList.add('flex');
    burger.classList.add('hidden');
    closse.classList.remove('hidden');
    setTimeout(() => {
      unorderedListMobile.classList.remove('-translate-y-full');
      unorderedListMobile.classList.add('translate-y-0');
    }, 10);
  } else {
    unorderedListMobile.classList.remove('translate-y-0');
    unorderedListMobile.classList.add('-translate-y-full');
    burger.classList.remove('hidden')
    closse.classList.add('hidden');
    setTimeout(() => {
      unorderedListMobile.classList.add('hidden');
      unorderedListMobile.classList.remove('flex');
    }, 300);
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    unorderedListMobile.classList.remove('translate-y-0');
    unorderedListMobile.classList.add('-translate-y-full');
    burger.classList.remove('hidden');
    closse.classList.add('hidden');
    setTimeout(() => {
      unorderedListMobile.classList.add('hidden');
    }, 300);
  });
});