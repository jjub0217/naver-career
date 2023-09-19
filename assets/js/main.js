$(function () {
  
  // $('.lang-list .lang-item a').click(function(e){
  //   e.preventDefault()
  //   if($(this).hasClass('on')){
  //     $(this).removeClass('on')
  //   }else{
  //     $(this).addClass('on')
  //     $(this).parent().siblings().children().removeClass('on')
  //   }
  // })
  $('.header .lang-area').click(function(){
    console.log('누름');
    $(this).toggleClass('on')
  }) 
  


  // $('.gnb .nav-list .nav').mouseover(function(e){
  //   // let windowWidth = $(window).width();
  //   // if(windowWidth >= 768) {
  //     // $(this).siblings().addClass('on');
  //     // $(this).siblings().mouseleave(function(){
  //     //   $(this).removeClass('on');
  //     // })
  //     // }
  //     // return
  //     console.log(
  //     $(this).siblings('.sub-list').length)
  //     // 이벤트의 타켓인 this의 형제에 sub-list 가 있다면 length 는 1 이 나오고, 없다면 0 이 나온다.
  //     if($(this).siblings('.sub-list').length){
  //       $(this).siblings().addClass('on');
  //     $('.gnb').addClass('on')
  //     }
  // })
  $('.gnb .nav-item').hover(function(e){
      console.log(
      $(this).find('.sub-list').length)
      // 이벤트의 타켓인 this의 자식들에 sub-list 가 있다면 length 는 1 이 나오고, 없다면 0 이 나온다.
      if($(this).find('.sub-list').length){
        // 이벤트 타겟인 this의 자식들에 sub-list 에 클래스 on 붙힘
        $(this).find('.sub-list').addClass('on');
        $('.gnb').addClass('on')
      }
  },function(){
      $(this).find('.sub-list').removeClass('on');
      $('.gnb').removeClass('on')
  })

  $('.mo_gnb_inner .nav-item').click(function(){
    // 이벤트의 타켓인 this의 자식들에 sub-list 가 있다면 length 는 1 이 나오고, 없다면 0 이 나온다.
    if($(this).find('.sub-list').length){
      // 이벤트 타겟인 this의 자식들에 sub-list 에 클래스 on 붙힘
      $(this).find('.sub-list').toggleClass('on');
    }
  })

  $('.buttonBugger').click(function(){
    console.log($(this));
    $('.mo_gnb_inner').toggleClass('isAct')
    $(this).toggleClass('isAct')
  })


  $('.section-search .btn-search.mo').click(function(){
    $('.section-search-modal').addClass('on')
  })

  $('.section-search-modal .filter-item button').click(function(){
    $(this).toggleClass('on')
    $(this).siblings('.sub-list').toggleClass('on')
  })

  $('.section-search-modal .filter-item .sub-list .sub-item').click(function(){
    if($(this).find('.item-list').length){
      $(this).toggleClass('on')
      $(this).find('.item-list').toggleClass('on')
    }
    
  })

  $('.section-search-modal .modal-close').click(function(){
     $('.section-search-modal').removeClass('on')
  })


  // pc 에서는 손가락으로 슬라이드가 움직여지면 안된다. 그렇기 때문에 옵션을 줘야한다. ===> touchRatio
  const visualSlide = new Swiper('.section-visual .swiper',{
    loop: true,
    autoplay:{
      delay: 5000,  
    },
    touchRatio: 0
  } )

  $('select').change(function(){
    $(this).css('color', "#000")
  })


  const peopleSlide = new Swiper('.section-people .swiper',{
    spaceBetween: 40,
    slidesPerView: 1,
     breakpoints: {
      // 320 이상에만 적용
      // 320: {
      //   spaceBetween: 40
      // },

      // 768 이상에만 적용
      // 태블릿 
      768: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      // 1025 이상에만 적용
      // pc
      1025: {
        slidesPerView: 1.09,
        spaceBetween: 30
      },
    },
    navigation : {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    },
  } )

  const benefitsSlide = new Swiper('.section-benefits .swiper',{
    // 어떤 값의 이상, 이상 이렇게 적용한다는건 기본값이 모바일 이라는 뜻이다. 아래처럼 세팅하면 아래는 모바일이 기본으로 된다.
    breakpoints: {
      // 320 이상에만 적용
      // 320: {
      //   spaceBetween: 40
      // },

      // 768 이상에만 적용
      // 태블릿 
      768: {
        slidesPerView: 1,
        // spaceBetween: 15
      },
      // 1025 이상에만 적용
      // pc
      1025: {
        slidesPerView: 3,
        // spaceBetween: 30
      },
    },
    slidesPerView: 1,
    spaceBetween: 40,

    navigation : {
      nextEl: ".section-benefits .btn-next",
      prevEl: ".section-benefits .btn-prev"
    },

  } )


  $('.footer .related').click(function (e){
    e.preventDefault()
    console.log(this);
    $(this).toggleClass('on')
  })


})




