function initModalGalleryImages() {
    const modal = document.getElementById("imagePopover");

    const popoverImages = document.getElementsByClassName("popover-img");
    const modalImg = document.getElementById("imagePopoverImg");

    Array.from(popoverImages).forEach(el => {
        el.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = el.src;
        });
    });

    const close = document.getElementsByClassName("close")[0];
    close.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

initModalGalleryImages();
