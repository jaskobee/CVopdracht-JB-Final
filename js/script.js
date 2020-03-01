$(document).ready(function () {
  $('.compass').on('click', function () {
    $('.nav').toggleClass('nav-visable')
  })

  // code voor Rotatie
  $('.compass').on('click', function () {
    $(this)
      .addClass('imageRot')
      .one(
        'webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend',
        function () {
          $(this).removeClass('imageRot')
        }
      )
  })

  //einde van .Ready Document
})
