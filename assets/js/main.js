$(function () {

  /** 
   *  @헤더안에있는언어선택
   * 
  */
  $('.header .group-flex .lang-area').click(function(e){
    e.preventDefault()
    $(this).toggleClass('on')
  }) 


  /**
   * @헤더서브메뉴열기
   * 
   */

  $('.gnb .nav-item').hover(function(e){
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


  /**
   * @태블릿과모바일버전의햄버거버튼열어서gnb열기
   * 
   */

  $('.buttonBugger').click(function(){
    $('.mo_gnb_inner').toggleClass('isAct')
    $(this).toggleClass('isAct')
  })


  /**
   * @태블릿과모바일버전의gnb내부에서언어선택
   * 
   */
  $('.mo_gnb_inner .lang-area').click(function(e){
    if($(this).find(".text").length){
      $(this).find('.text').toggleClass("on")
      $(this).siblings().find('.text').removeClass('on')
    }
  })


  /**
   * @태블릿과모바일버전의gnb내부의서브메뉴열기
   * 
   */
  $('.mo_gnb_inner .nav-item').click(function(){
    // 이벤트의 타켓인 this의 자식들에 sub-list 가 있다면 length 는 1 이 나오고, 없다면 0 이 나온다.
    if($(this).find('.sub-list').length){
      // 이벤트 타겟인 this의 자식들에 sub-list 에 클래스 on 붙힘
      $(this).find('.sub-list').toggleClass('on');
    }
  })


  /**
   * @pc버전의직군검색select디자인변경
   * 
   */
  $('select').change(function(){
    $(this).css('color', "#000")
  })


  /**
   * @테블릿과모바일버전의직군검색모달열기와모달내용fetch해서불러오는함수실행
   * 
  */
  $('.section-search .btn-search.mo button').click(function(){
    $('.section-search-modal').addClass('on')
    list()
  })


  /**
   * @태블릿과모바일버전의모달내용불러오는fetch함수
   * 
   */
  function list() {

    fetch('./data.json')
    .then(res => res.json())
    .then(json => {
      data = json.items

      let html1 = ``
      data.forEach(element => {
        html1 += 
        `<li class="filter-item">
          <button class="filter-item-title">${element.filterItemTitle}</button>
          <ul class="depth1-sub-list">
            <li class="depth1-sub-item">
              <input type="hidden" value="all" name="all" />
              <button class="depth1-sub-item-all">전체</button>
            </li>`
            element.depth1SubList.forEach(el => {
            html1 += 
            `<li class="depth1-sub-item">
                <button class="depth1-sub-item-title">
                  ${el.depth1SubItemTitle}
                </button>
                <ul class="depth2-sub-list">`
                  el.depth2SubItemTitles.forEach(title =>{
                  html1 += 
                  `<li class="depth2-sub-item">
                    <input type="hidden" value="${title}" name="${title}" />
                    <button class="depth2-sub-item-title">${title}</button>
                  </li>`
                  })
                  html1 += 
                `</ul>
              </li>`
            }) 
          html1 += 
          `</ul>
        </li>`
      })
      $(".filter-list1").html(html1);
    })
  }


  /**
   * @태블릿과모바일버전의모달에서대메뉴에on붙이고형제요소인리스트에on붙이는이벤트
   * 
   */
  $(document).on("click",'.filter-item-title', (function () {
    $(this).toggleClass('on');
    $(this).siblings('.depth1-sub-list').toggleClass('on');
  }))


  /**
   * @태블릿과모바일버전의모달에서depth1메뉴에on붙이고형제요소인리스트에on붙이는이벤트
   * 
   */
  $(document).on("click",'.depth1-sub-item-title',function(){
      $(this).toggleClass('on')
      $(this).siblings('.depth2-sub-list').toggleClass('on')
  });


  /**
   * @태블릿과모바일버전의모달에서depth1의전체버튼에on붙이고depth2버튼에전부on붙이는이벤트
   * 
   */
  $(document).on("click",'.depth1-sub-item-all',function(e){
      $(this).toggleClass('on')
      if($(this).hasClass("on")){
        $(this).parent().siblings().find(".depth2-sub-item-title").addClass("on")
      }else{
        $(this).parent().siblings().find(".depth2-sub-item-title").removeClass("on")
      }
  })


  /**
   * @태블릿과모바일버전의모달에서depth2메뉴에on붙이는이벤트
   * 
   */
  $(document).on("click",'.depth2-sub-item-title',function(e){
    $(this).toggleClass('on')
  });



  /**
   * @태블릿과모바일버전의모달내용중서브메뉴없는버튼체크
   * 
   */
  $(".category").click(function(){
    $(this).toggleClass("on")
  })
  

  /**
   * @테블릿과모바일버전의모달의체크되어있는부분들모두해제하기
   * 
   */
  $(".clear-filters").click(function(){
    $(".depth1-sub-item-all").removeClass("on")
    $(".depth2-sub-item-title").removeClass("on")
    $(".category").removeClass("on")
  })


  /**
   * @태블릿과모바일버전의모달끄기
   * 
   */
  $('.section-search-modal .modal-close').click(function(){
    $('.section-search-modal').removeClass('on')
  })


  /**
   * @swiper기능
   * 
   */
  const visualSlide = new Swiper('.section-visual .swiper',{
    loop: true,
    autoplay:{
      delay: 5000,  
    },
    touchRatio: 0
  } )


  /**
   * @swiper기능
   * 
   */
  const peopleSlide = new Swiper('.section-people .swiper',{
    spaceBetween: 40,
    slidesPerView: 1,
    breakpoints: {
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


  /**
   * @swiper기능
   * 
   */
  const benefitsSlide = new Swiper('.section-benefits .swiper',{
    // 어떤 값의 이상, 이상 이렇게 적용한다는건 기본값이 모바일 이라는 뜻이다. 아래처럼 세팅하면 아래는 모바일이 기본으로 된다.
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      // 768 이상에만 적용
      // 태블릿 
      768: {
        slidesPerView: 1,
      },
      // 1025 이상에만 적용
      // pc
      1025: {
        slidesPerView: 3,
      },
    },
    navigation : {
      nextEl: ".section-benefits .btn-next",
      prevEl: ".section-benefits .btn-prev"
    },
  })


  /**
   * @푸터내부의관련사이트내용보이기
   * 
   */
  $('.footer .related').click(function (e){
    e.preventDefault()
    $(this).toggleClass('on')
  })

})




