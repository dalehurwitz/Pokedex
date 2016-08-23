class AnimatedThumbnail {
    constructor() {
        this.thumbnailContainer = document.createElement("div");
        this.thumbnailContainer.id = "animatedThumbnail"
        this.thumbnailImg = document.createElement("img");
        this.thumbnailContainer.appendChild(this.thumbnailImg);
        document.body.appendChild(this.thumbnailContainer);
    }

    setSource(sourceImg) {
        this.setImg(sourceImg);
        this.setPos(sourceImg);
    }

    setTarget(sourceImg) {
        this.toggleThumbnailActive(true);
        this.setPos(sourceImg);
    }

    setPos(sourceImg) {
        const imgPos = sourceImg.getBoundingClientRect();
        this.thumbnailContainer.style.left = `${imgPos.left}px`;
        this.thumbnailContainer.style.top = `${imgPos.top}px`;
        this.thumbnailContainer.style.width = `${imgPos.width}px`;
    }

    setImg(sourceImg) {
        this.thumbnailImg.src = sourceImg.src;
    }

    toggleThumbnailActive(active) {
        this.thumbnailContainer.classList.toggle("active", active);
    }
}

export default new AnimatedThumbnail();
