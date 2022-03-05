const nav = document.getElementById('navbar');
window.onscroll = () => {
    if(window.scrollY > 300) {
        nav.style.backgroundColor = "black";
        nav.style.transition = "all 0.3s ease";
    }
    else {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "all 0.3s ease";
    }
}
