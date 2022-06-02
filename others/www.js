const listItems = document.querySelectorAll("td a");

listItems.forEach((item, i) => {
    item.innerHTML = `${i + 1}. ${item.innerHTML}`;
});