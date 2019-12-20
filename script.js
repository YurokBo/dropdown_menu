document.addEventListener('click', e => {
    const menu = e.target.closest('.dropdown'),
        dropdownList = menu.querySelector('.dropdown__list'),
        dropdownValue = menu.querySelector('.dropdown__value');

    dropdownList.classList.add('dropdown__list_active');
    const htmlLink = e.target.closest('.dropdown__link').innerHTML;
    dropdownList.classList.remove('dropdown__list_active');
    dropdownValue.innerHTML = htmlLink;
    e.preventDefault();
})