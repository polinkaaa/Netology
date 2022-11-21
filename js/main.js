$('.slider-one').slick({
    prevArrow: ".arrow_up",
    nextArrow: ".arrow_down",
    vertical: true,
    verticalSwiping: true
});




function RangAmongFriends() {
    var a = document.getElementById("rang-in-Russia")
    var y = document.getElementById("rang-among-friends")
    a.style.display ='none'
    y.style.display = 'block'
};
function RangInRussia() {
    var a = document.getElementById("rang-in-Russia")
    var y = document.getElementById("rang-among-friends")
    a.style.display ='flex'
    y.style.display = 'block'
};


function openModal() {
    if (document.getElementById("modal").style.display == "block"){
        document.getElementById("modal").style.display = "none"
        document.getElementById("modal").style.top = "-400px"}
    else {
        document.getElementById("modal").style.display = "block"
        document.getElementById("modal").style.top = "70px"}
}
