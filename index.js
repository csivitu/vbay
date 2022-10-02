function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
 }

 function onMenuClick() {
    var navbar = document.getElementById('navigation-bar');
    var responsive_class_name = 'responsive'
    navbar.classList.toggle(responsive_class_name)
}