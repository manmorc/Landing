function accordion() {
    var acc = document.getElementsByClassName("accordion-button");
    var i;

    for (i = 0; i < acc.length; i++) {
        console.log(acc[i]);
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.children[0];
            if (panel.style.height === 'auto') {
                panel.style.height = '0';
                panel.style.color = 'transparent';
            } else {
                panel.style.height = 'auto';
                panel.style.color = 'white';
            }
        });
    }
}