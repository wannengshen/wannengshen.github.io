/**
 * Created by rui on 2017/3/10.
 */
$(document).ready(function(){
    $('.section1').find('h1').delay(800).animate({
        opacity:1
    },3000).end().find('.borderP').animate({
        width:'300px'
    },1500,'linear');
    $('.nav').animate({top:0},500,'easeOutExpo');
    $('.section4').find('span.s_left').mouseover(function(){
      $('span').css('display','none');
      $(this).css({
        'color':'red',
        'display':'block'
    });
      $('.skill .text').addClass('right').find('p').text('学习过Java,也学习过C#,Java中的swing和AWT做出的东西，不敢苟同,在挣扎许久后,接触到JS,一见钟情;都说Java为高并发而生,可是学习过NodeJS才知道,它也可以解决高并发问题;没有什么特别擅长的，或许或多都知道一点,想找一个自己喜欢的工作,想在前端学习并且深刻。。。');
    }).mouseout(function(){
      $(this).css('color','#787978');
      $('span').css('display','block');
      $('.skill .text').removeClass('right');
    });
    $('.section4').find('span.s_right').mouseover(function(){
      $('span').css('display','none');
      $(this).css({
        'color':'red',
        'display':'block'
    });
      $('.skill .text').addClass('left').find('p').text('学习过Java,也学习过C#,Java中的swing和AWT做出的东西，不敢苟同,在挣扎许久后,接触到JS,一见钟情;都说Java为高并发而生,可是学习过NodeJS才知道,它也可以解决高并发问题;没有什么特别擅长的，或许或多都知道一点,想找一个自己喜欢的工作,想在前端学习并且深刻。。。');
    }).mouseout(function(){
      $(this).css('color','#787978');
      $('span').css('display','block');
      $('.skill .text').removeClass('left');
    });
    $('.main').fullpage({
        anchors:['page1','page2','page3','page4','page5'],
        verticalCentered:true,
        resize:true,
        loopBottom:true,
        'navigation': true,
        css3:'ture',
        afterLoad:function(anchorLink,index){
            if(index == 1){
                $('.section1').find('h1').animate({
                    opacity:1,
                    scale:1.5
                }, 500, 'easeOutExpo').end().find('.borderP').animate({
                    width:'300px'
                },1500,'linear')
            }
            if(index == 2){
              $('.section2 #aboutMe_info').animate({
                width:'500px'
              },2000,'easeOutExpo').end()
            }
            if(index == 3){
                $('.section3').find('p').delay(500).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('h1').fadeIn(2000).end();
            }
        },
        onLeave:function(anchorLink,index){
            if(index == 1){
                $('.section1').find('h1').animate({
                    opacity:0,
                    scale:1
                }, 0, 'easeOutExpo').end().find('.borderP').animate({
                    width:0
                },0,'linear').end();
            }
            if(index == '2'){
                $('.section2').find('p').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo').end().find('#aboutMe_info').css('width',0);

            }
            if(index == '3'){
                $('.section3').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '4'){
                $('.section4').find('h1').fadeOut(0).end();
            }
        }
    })
});
