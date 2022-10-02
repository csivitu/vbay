function darkModeFunction() {
    var element = document.body;
    var listElement = document.getElementById('element');
    var darkmode_class_name = "darkMode";
    listElement.classList.toggle(darkmode_class_name);
    element.classList.toggle("darkMode");
 }