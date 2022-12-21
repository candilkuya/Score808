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


var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});
