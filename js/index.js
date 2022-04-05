const topmenu=$('nav ul.gnb>li');
//버튼클릭시 이동
topmenu.click(function(e){
    e.preventDefault();
    let target=$(this);
    let index=target.index();
    let section = $(".section").eq(index);
    let offset = section.offset().top;
    $("html,body").animate({ scrollTop: offset},1000, "easeOutCirc")
});

//스크롤이벤트
$(window).scroll(function(){
    let scrollTop=$(window).scrollTop();
    if(scrollTop>=$('#section1').offset().top -500){
        /* 다 지우고 너만 붙어 */
        /* 너만 붙고 니옆에 다 지워  */
        $('nav ul.gnb li').removeClass('active');
        $('nav ul.gnb li').eq(0).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#section2').offset().top -500){
        $('nav ul.gnb li').eq(1).addClass('active').siblings().removeClass('active');
    }
});