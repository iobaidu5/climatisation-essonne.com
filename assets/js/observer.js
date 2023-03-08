let options = {
    root : null,
    rootMargin : "0px",
    threshold: "0.2",
}

const entries = document.querySelectorAll(".observe");

const loadingAnim = (entries) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry = entry.target;
                entry.classList.add("show")
                observer.disconnect();
            }
        })
    }, options )

    io.observe(entries);
}

entries.forEach(loadingAnim);