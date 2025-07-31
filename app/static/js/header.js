function toggleMenu(button) {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('open');
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

function toggleDropdown(e, el) {
    e.preventDefault();
    const parent = el.parentElement;
    parent.classList.toggle('open');
}