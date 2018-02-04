function mouseInFunction(obj){
	obj.style.boxShadow='10px 10px 10px grey'
	
}
function mouseOutFunction(obj){
	obj.style.boxShadow='none'
	
}
 $(document).ready(function(){
    $(".first").hover(function(){
        $(this).css('font-weight','bold');
    },function(){
		$(this).css('font-weight','normal');
	});
});

$(document).ready(function(){
    $("#cafe").css('background-size','screen.width');
       
	});
	