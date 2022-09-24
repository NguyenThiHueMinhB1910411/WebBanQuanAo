
let moreBtn = document.getElementsByClassName("article-containter__more-btn");

for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener('click', (evt) => {
        let btn = evt.target;
        let dot = btn.previousElementSibling.firstElementChild;
        let moreText = btn.previousElementSibling.children[1];

        if (dot.style.display === "none") {
            dot.style.display = "inline-block";
            btn.textContent = 'Read more';
            moreText.style.display = "none";
        } else {
            dot.style.display = "none";
            btn.textContent = 'Read less';
            moreText.style.display = "inline-block";
        }
    });
};