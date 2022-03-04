const nav = document.getElementById('navbar');
window.onscroll = () => {
    if(window.scrollY > 300) {
        nav.style.backgroundColor = "black";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }
}
