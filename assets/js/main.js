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

( function() {

    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
      
      var source = "https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-6.png";
      
      var image = new Image();
          image.src = source;
          image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
          }( i ) );
      
          youtube[i].addEventListener( "click", function() {
  
            var iframe = document.createElement( "iframe" );
  
                iframe.setAttribute( "frameborder", "0" );
                iframe.setAttribute( "allowfullscreen", "" );
                iframe.setAttribute( "src", "https://www.score808.eu.org/p/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
  
                this.innerHTML = "";
                this.appendChild( iframe );
          } );  
    };
    
  } )();
