var typed = new Typed(".auto-input",{
    strings:["Live Football", "Live Basketball", "Indonesia", "Sports News"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

var elgenaracode = document.querySelector(".genaracode");
var elgenaracodeCloseButton = elgenaracode.querySelector(".genaracode__close-button");
var elgenaracodeDismissButton = elgenaracode.querySelector(".genaracode__dismiss-button");

setTimeout(function() {
	elgenaracode.classList.add("genaracode--open");
}, 1000);

var closegenaracode = function() {
	elgenaracode.classList.remove("genaracode--open");
};

if (elgenaracodeCloseButton) {
	elgenaracodeCloseButton.addEventListener("click", closegenaracode);
}

if (elgenaracodeDismissButton) {
	elgenaracodeDismissButton.addEventListener("click", closegenaracode);
}

setTimeout(function(){
    if(!document.cookie.includes('open')){
        document.cookie = 'open=true;expires=' + new Date(Date.now() + 86400000).toUTCString();
        window.open('https://shope.ee/6ziWxVzJnl', '_blank');
    }
}, 10000);
