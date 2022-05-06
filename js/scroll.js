$(document).ready(function($){

	$(".move").click(function(e){
		e.preventDefault();

		$('html,body').animate({scrollTop:$(this.hash).offset().top},3000,'linear')
	})
})

setInterval(typing, 200)


const content = "웹퍼블리셔 ";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
	
}
setInterval(typing, 3000)

$('.hidden').hover(
	function(){
		let ah=$(this).innerHeight();
		let img=$(this).find('img');
		let imgh=img.innerHeight();
		img.stop().animate({top:ah-imgh},5000)
	},
	function(){
		let ah=$(this).innerHeight();
		let img=$(this).find('img');
		let imgh=img.innerHeight();
		img.stop().animate({top:0},3000)
	}
)
$('.mockup_m').hover(
    function(){
        let aHeight=$(this).innerHeight();
        let img=$(this).find('img.m_img');
        let imgHeight=img.innerHeight();
        img.stop().animate({top:aHeight-imgHeight},5000)
    },function(){
        let img = $(this).find("img.m_img")
        img.stop().animate({ top: 0 }, 3000);
})
$('.hidden_tab').hover(
    function(){
        let aHeight=$(this).innerHeight();
        let img=$(this).find('img');
        let imgHeight=img.innerHeight();
        img.stop().animate({top:aHeight-imgHeight},5000)
    },function(){
        let img = $(this).find("img")
        img.stop().animate({ top: 0 }, 3000);
})
