$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker({
      format: "dd mmmm, yyyy",
      maxDate: new Date(),
      yearRange: 91,
      showClearBtn: true,
      i18n: {
          done: "Select"
      }
    });
  });