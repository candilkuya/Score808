var typed = new Typed(".auto-input",{
    strings:["Live Football", "Live Basketball", "Indonesia", "Sports News"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})


setTimeout(function(){
    if(!document.cookie.includes('open')){
        document.cookie = 'open=true;expires=' + new Date(Date.now() + 86400000).toUTCString();
        window.open('https://shope.ee/6ziWxVzJnl', '_blank');
    }
}, 10000);

( function() {

    var youtube = document.querySelectorAll( ".youtube" );
    
    for (var i = 0; i < youtube.length; i++) {
      
      var source = "https://images.vexels.com/media/users/3/135176/isolated/preview/a6508e565d25ab01f79a35c4319e0083-play-button-flat-icon.png";
      
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
var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});
