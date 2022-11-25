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
    y.style.display = 'flex'
    document.getElementById("among-friend").style.background = '#3F9BF0'
    document.getElementById("among-friend").style.color = '#FFFFFF'
    document.getElementById("among-friend").style.borderColor = '#3F9BF0'
    document.getElementById("in-Russia").style.background = '#FFFFFF'
    document.getElementById("in-Russia").style.color = '#000000'
    document.getElementById("in-Russia").style.borderColor = '#000000'
};
function RangInRussia() {
    var a = document.getElementById("rang-in-Russia")
    var y = document.getElementById("rang-among-friends")
    a.style.display ='flex'
    y.style.display = 'none'
    document.getElementById("in-Russia").style.background = '#3F9BF0'
    document.getElementById("in-Russia").style.color = '#FFFFFF'
    document.getElementById("in-Russia").style.borderColor = '#3F9BF0'
    document.getElementById("among-friend").style.background = '#FFFFFF'
    document.getElementById("among-friend").style.color = '#000000'
    document.getElementById("among-friend").style.borderColor = '#000000'
};


function new_new() {
    var a = document.getElementById("news-list")
    var y = document.getElementById("news-list-past")
    a.style.display ='block'
    y.style.display = 'none'
    document.getElementById("news-list-btn").classList.add("active")
    document.getElementById("past-list-btn").classList.remove("active")
};
function past_new() {
    var a = document.getElementById("news-list")
    var y = document.getElementById("news-list-past")
    a.style.display ='none'
    y.style.display = 'block'
    document.getElementById("news-list-btn").classList.remove("active")
    document.getElementById("past-list-btn").classList.add("active")
};


function my_crs() {
    document.getElementById("recommend").classList.remove("active")
    document.getElementById("my_crs").classList.add("active")
    document.getElementById("my_crs").style.paddingLeft='8px'
    document.getElementById("recommend").style.paddingLeft='10px'
};
function recommend() {
    document.getElementById("my_crs").classList.remove("active")
    document.getElementById("recommend").classList.add("active")
    document.getElementById("my_crs").style.paddingLeft='10px'
    document.getElementById("recommend").style.paddingLeft='8px'
};

//var timeVar='';
function openModal() {
    if (document.getElementById("modal").style.display == "block"){
        document.getElementById("modal").style.display = "none"
        document.getElementById("modal").style.top = "-400px"
        document.getElementById("chat_with").style.display ='none'
        document.getElementById("dialoges").style.display ='block'
        //timeVar = 1;
    }
    else {
        document.getElementById("modal").style.display = "block"
        document.getElementById("modal").style.top = "70px"}
}

/*document.getElementById('body').onclick = function()
{
    if(timeVar)
    {
        document.getElementById("modal").style = "display: none";
    }
    if(timeVar) { setTimeout(function(){ timeVar=''; }, 100);}
}*/


function all_friends() {
    document.getElementById("all_friends").classList.add("active1")
    document.getElementById("new_friends").classList.remove("active1")
    document.getElementById("best_friends").classList.remove("active1")
};
function new_friends() {
    document.getElementById("new_friends").classList.add("active1")
    document.getElementById("all_friends").classList.remove("active1")
    document.getElementById("best_friends").classList.remove("active1")
};
function best_friends() {
    document.getElementById("best_friends").classList.add("active1")
    document.getElementById("new_friends").classList.remove("active1")
    document.getElementById("all_friends").classList.remove("active1")
};

function friend1() {
    document.getElementById("dialoges").style.display ='none'
    document.getElementById("chat_with").style.display ='block'
};

function actions() {
    if (document.getElementById("window_act").style.display == 'flex'){
        document.getElementById("window_act").style.display ='none'
    }
    else {document.getElementById("window_act").style.display == 'flex'}
};