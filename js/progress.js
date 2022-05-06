const animationOst = $('.animation').offset().top-600;
const progressWarp=$('.progress-bar');
let isAni = false;

$(window).scroll(function () {
    if($(window).scrollTop() >= animationOst && !isAni) {
        progressAnimation();
    }
})

function progressAnimation(){
    progressWarp.each(function () {
        let $this=$(this),
            progressBar = $this.find('.bar'), 
            progressText = $this.find('.rate'), 
            progressRate = progressText.attr('data-rate');
            
            progressBar.stop().animate({width:progressRate+'%'}, 2500);

            let text=function(){
                $({rate:0}).animate({rate:progressRate},{
                    duration:2000,
                    progress:function(){
                        let now=this.rate;
                        progressText.text(Math.ceil(now)+'%')
                    },
                    complete: function(){isAni=true}
                })
            }
            text()
    })

}