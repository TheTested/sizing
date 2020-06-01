
var prev;
var prev2;
var dis;
let pageHeight = 0;
$(document).ready(function() {
pageHeight = document.body.getBoundingClientRect().height;
    $(".emptyspace").css({'height':($(".centerbranch").height())});
    $(".branch").css({'height':($(".centerbranch").height())});
		
    $(".personone").css({'top':(0.75 * $(".centerbranch").height()),
    'left':($(".emptyspace").width() + $(".branchbend").width()/2 - $(".personone").width()/2)
    });
    $(".personetwo").css(
    {
    'top': (0.75 * $(".centerbranch").height()),
    'left':($(".emptyspace").width() + $(".branchbend").width() + $(".branch").width()+ $(".centerbranch").width()/2- $(".personone").width()/2)
    });
    
    $(".personthree").css(
    {
    'top': (0.75 * $(".centerbranch").height()),
    'left':($(".emptyspace").width() + $(".branchbend").width() + $(".branch").width()+ $(".centerbranch").width()+ $(".branchbend").width()/2 + $(".branch").width()- $(".personone").width()/2)
    });
    if(window.innerWidth > 767) {
    $(".peopleleft").css(
  {
  'top':(0.75 * $(".centerbranch").height()+ $("[id='imageleft']").height()/2-$(".peopleleft").height()/2),
  'left':($(".personone").offset().left + $(".personone").width()
  +($(".personetwo").offset().left-($(".personone").offset().left + $(".personone").width()))/2-$(".peopleleft").width()/2)
  });
  
  $(".peopleright").css(
  {
  'top':(0.75 * $(".centerbranch").height()+ $("[id='imageleft']").height()/2-$(".peopleleft").height()/2),
  'left':($(".personetwo").offset().left + $(".personetwo").width()
  +($(".personthree").offset().left-($(".personetwo").offset().left + $(".personetwo").width()))/2-$(".peopleright").width()/2)
  });
    } else {
	    $(".personone, .personetwo, .personthree").css(
    {
    'top': (0.6 * $(".centerbranch").height())
    });
	 $(".peopleleft").css(
  {
  'top':($("[id='imageleft']").offset().top + $("[id='imageleft']").height() - $(".peopleleft").height()  -$(".people").offset().top)
  });
  
   $(".peopleright").css(
  {
  'top':($("[id='imageleft']").offset().top + $("[id='imageleft']").height() - $(".peopleleft").height()  -$(".people").offset().top)
  });  
    }
    if(window.innerWidth > 767) {
    	var kamienaslength = window.innerHeight - $(".treeleaf").height();
	if(kamienaslength < 300) { kamienaslength = 300;
				 $(".kamienassticky").css({'top':(-400)});}
    	$(".kamienas").css({'height':(kamienaslength + 100)});
    }
        
     
  
   $(".middlevalue").css(
  {
  'top':(-$(".valuetext").height() + 0.05 * $(".treeleaf").height())
  });
    
    $(".values").css(
  {
  'height':(2 * $(".kamienas").height() + $(".treeleaf").height())
  });

  
  $(".people").css(
  {
  'top':(- $(".kamienas").height()),
  'margin-bottom':(- $(".kamienas").height())
  });
    
   
   
    $('.item').on('init', function(event, slick){
	    if (window.innerWidth > 768) {
		    dis =($(".div-block-54.processtriangle").offset().left+25- ($(".slick-center").offset().left+100));
		    $(".processtop").css({
			    'left':dis
		    });
   
	    }
   var line = $('.spaceline').first().offset().top-$('.process').offset().top;
   
   $(".linetop").css({
    'top': line
   });
   
   
	$($(slick.$slides.get("0")).find('.lineproces')).css({
  "border-color": "#84c450",
  "border-width": "3px"
    });
    $($(slick.$slides.get("0")).find('.circleprocess')).css({
  "border-color": "#84c450",
  "background-color": "#84c450"
    });
    
});

    
    $('.item').slick({
	    infinite: false,
	    centerMode: true,
	    draggable: true,
	    focusOnSelect: true,
	    variableWidth: true,
	    slidesToShow: 1,
	    asNavFor: '.description, #mobileslide',
	    arrows: false,
	    slidesToScroll: 1,
    	swipeToSlide: true
    });
	
	
$('.leftarrow').addClass('hidden');
$('.up').addClass('hidden');
$('.up2').addClass('hidden');
$('.description').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',	
  asNavFor: '.item, #mobileslide',
  prevArrow: $('.leftarrow'),
  nextArrow: $('.rightarrow'),
  draggable: false
});
	
	$('#mobileslide').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',	
	swipe: true,
	draggable: true,
  draggable: false
});
$('.description').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	if (currentSlide === 21 && nextSlide === 0) {
		$('.item').slick("slickGoTo", 0);
	}
    })
$('.description').on('afterChange', function (event, slick, currentSlide) {

        if(currentSlide >= 21) {
		$('.rightarrow').addClass('hidden');
            $('.rightarrow').attr("src","https://uploads-ssl.webflow.com/5ea2c6f295e67d090a35c87f/5ed5571578b23647ab940451_rewind.png");
		$('.rightarrow').removeClass('hidden');
        }
        else {
            $('.rightarrow').attr("src","https://uploads-ssl.webflow.com/5ea2c6f295e67d090a35c87f/5eb571e95c02e67840e6ab9f_rodykle_zalia.png");
        }

        if(currentSlide === 0) {
            $('.leftarrow').addClass('hidden');
        }
        else {
            $('.leftarrow').removeClass('hidden');
        }  
    })

$('.anounce').on('init', function(event, slick){
	prev = $($(slick.$slides.get("0")));
	$($(slick.$slides.get("0"))).css({
  "color": "#84c450"
    });
});

$('.anounce').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  vertical:true,
  prevArrow: $('.up'),
  nextArrow: $('.down'),
  draggable: false
});
$('.anounce').on('afterChange', function (event, slick, currentSlide) {
        if(currentSlide >= (slick.slideCount-5)) {
            $('.down').addClass('hidden');
        }
        else {
            $('.down').removeClass('hidden');
        }

        if(currentSlide === 0) {
            $('.up').addClass('hidden');
        }
        else {
            $('.up').removeClass('hidden');
        }  
    })
$('.announcelist').slick({
  infinite: true,
  draggable: false,
  arrows: false,
  fade: true,
  speed: 500,
  cssEase: 'linear'
});

$('.callist').on('init', function(event, slick){
	prev2 = $($(slick.$slides.get("0")));
	$($(slick.$slides.get("0"))).css({
  "color": "#84c450"
    });
});

$('.caldetails').slick({
  infinite: true,
  draggable: false,
  arrows: false,
  fade: true,
  speed: 500,
  cssEase: 'linear'
});
$('.persononecar.personemobile').slick({
  infinite: true,
  draggable: false,
  arrows: true,
  fade: true,
  prevArrow: $('.peopleleft.mobile'),
  nextArrow: $('.peopleright.mobile'),
  speed: 500,
  cssEase: 'linear'
});
$('.persononecar.personedesktop').slick({
  infinite: true,
  draggable: false,
  arrows: true,
	asNavFor: '.persononecar.personedesktop',
  initialSlide : 2,
  fade: true,
  prevArrow: $('.peopleleft.desktop'),
  nextArrow: $('.peopleright.desktop'),
  speed: 500,
  cssEase: 'linear'
});
	
	

$('.callist').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  vertical:true,
  prevArrow: $('.up2'),
  nextArrow: $('.down2'),
  draggable: false
});

$('.callist').on('afterChange', function (event, slick, currentSlide) {

        if(currentSlide >= slick.slideCount-5) {
            $('.down2').addClass('hidden');
        }
        else {
            $('.down2').removeClass('hidden');
        }

        if(currentSlide === 0) {
            $('.up2').addClass('hidden');
        }
        else {
            $('.up2').removeClass('hidden');
        }  
    })



$('.anounce .slick-slide').on('click', function (event) {
    prev.css({
  "color": "#aab6a3"
    });
    prev=$(this);

		$(this).css({
  "color": "#84c450"
    });

    $('.announcelist').slick('slickGoTo', $(this).data('slickIndex'));
    
	});
  
  $('.callist .slick-slide').on('click', function (event) {
  prev2.css({
  "color": "#aab6a3"
    });
    prev2=$(this);

		$(this).css({
  "color": "#84c450"
    });
    
    $('.caldetails').slick('slickGoTo', $(this).data('slickIndex'));
	});

$('.item').on('beforeChange', function(event, slick, currentSlide, nextSlide){
$($(slick.$slides.get(currentSlide)).find('.lineproces')).css({
  "border-color": "#aab6a3",
  "border-width": "1px"
    });
    $($(slick.$slides.get(currentSlide)).find('.circleprocess')).css({
  "border-color": "#aab6a3",
  "background-color": "white"
    });
    
    
	$($(slick.$slides.get(nextSlide)).find('.lineproces')).css({
  "border-color": "#84c450",
  "border-width": "3px"
    });
    $($(slick.$slides.get(nextSlide)).find('.circleprocess')).css({
  "border-color": "#84c450",
  "background-color": "#84c450"
    });
});
});



$(window).on('resize', function(){

	const currentOffset = window.scrollY
  const newPageHeight = document.body.getBoundingClientRect().height
  const dHeight = newPageHeight / pageHeight
  window.scrollTo(0, currentOffset * dHeight)
  pageHeight = newPageHeight
  if(window.innerWidth > 767) {
  $(".kamienas").css({
  				'height':(window.innerHeight - $(".treeleaf").height() + 100)
 				});
  }
  
  $(".middlevalue").css(
    {
    'top':(-$(".valuetext").height() + 0.05 * $(".treeleaf").height())
    });
  
  
    $(".values").css(
  {
  'height':(2 * $(".kamienas").height() + $(".treeleaf").height())
  });

  
  $(".people").css(
  {
  'top':(- $(".kamienas").height()),
  'margin-bottom':(- $(".kamienas").height())
  });

	var line = $('.spaceline').first().offset().top-$('.process').offset().top;
   
   $(".linetop").css({
    'top': line
   });
	if (window.innerWidth > 768) {
		var dis2 =(parseInt($('.processtop').css('left')) + (75+$(".processname").offset().left) - ($(".slick-center").offset().left+100));
    console.log(parseInt($('.processtop').css('left')));
    $(".processtop").css({'left':(dis2)});
	}
    $(".emptyspace").css({'height':($(".centerbranch").height())});
    $(".branch").css({'height':($(".centerbranch").height())});
    $(".personone").css({'top':(0.75 * $(".centerbranch").height()),
    'left':($(".emptyspace").width() + $(".branchbend").width()/2 - $(".personone").width()/2)
    });
    $(".personetwo").css(
    {
    'top': (0.75 * $(".centerbranch").height()),
    'left':($(".emptyspace").width() + $(".branchbend").width() + $(".branch").width()+ $(".centerbranch").width()/2- $(".personone").width()/2)
    });
    
    $(".personthree").css(
    {
    'top': (0.75 * $(".centerbranch").height()),
    'left':($(".emptyspace").width() + $(".branchbend").width() + $(".branch").width()+ $(".centerbranch").width()+ $(".branchbend").width()/2 + $(".branch").width()- $(".personone").width()/2)
    });
    if(window.innerWidth > 767) {
    $(".peopleleft").css(
  {
  'top':(0.75 * $(".centerbranch").height()+ $("[id='imageleft']").height()/2-$(".peopleleft").height()/2),
  'left':($(".personone").offset().left + $(".personone").width()
  +($(".personetwo").offset().left-($(".personone").offset().left + $(".personone").width()))/2-$(".peopleleft").width()/2)
  });
  
  $(".peopleright").css(
  {
  'top':(0.75 * $(".centerbranch").height()+ $("[id='imageleft']").height()/2-$(".peopleleft").height()/2),
  'left':($(".personetwo").offset().left + $(".personetwo").width()
  +($(".personthree").offset().left-($(".personetwo").offset().left + $(".personetwo").width()))/2-$(".peopleright").width()/2)
  });
    } else {
	    $(".personone, .personetwo, .personthree").css(
    {
    'top': (0.6 * $(".centerbranch").height())
    });
	 $(".peopleleft").css(
  {
  'top':($("[id='imageleft']").offset().top + $("[id='imageleft']").height() - $(".peopleleft").height()  -$(".people").offset().top)
  });
  
   $(".peopleright").css(
  {
  'top':($("[id='imageleft']").offset().top + $("[id='imageleft']").height() - $(".peopleleft").height()  -$(".people").offset().top)
  });  
    }
    });

  
