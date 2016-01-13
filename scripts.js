$(function(){
  $("input#giraffe").click(function(event){
    if ($(this).is(':checked')) {
      $(".giraffe-info").toggle();
    }

    event.preventDefault();
  })

  $("input#zebra").click(function(event){
    if ($(this).is(':checked')) {
      $(".zebra-info").toggle();
    }

    event.preventDefault();
  })

  $("input#lion").click(function(event){
    if ($(this).is(':checked')) {
      $(".lion-info").toggle();
    }

    event.preventDefault();
  })
});
