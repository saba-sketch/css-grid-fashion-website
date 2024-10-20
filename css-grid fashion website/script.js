document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#left-top-right h6");
    const closeIcon = document.querySelector("#close");
    const menuItems = document.querySelectorAll("#left-top-right h5");

    menuIcon.addEventListener("click", () => {
        menuItems.forEach(item => {
            item.style.display = "block";
        });
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
        menuItems.forEach(item => {
            item.style.display = "none";
        });
        closeIcon.style.display = "none";
    });
});
