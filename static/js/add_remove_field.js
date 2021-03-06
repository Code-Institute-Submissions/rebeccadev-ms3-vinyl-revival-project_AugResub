//<script type="text/javascript">
$(document).ready(function(){
    var maxField = 15; //Input fields increment limitation
    var addButton = $('.add_button'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            
            
    // get all tracklistings on the page - increase the id for each tracklisting

    const tl = document.querySelectorAll('[name="tracklisting"]').length
    var fieldHTML = `<div><input type="text" id="tracklisting-${tl+1}" name="tracklisting"/><a href="javascript:void(0);" class="remove_button right"><img src="static/images/remove-button.png"/></a></div>;` //New input field html 

            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parent('div').remove(); //Remove field html
        x--; //Decrement field counter
    });
});
//</script>