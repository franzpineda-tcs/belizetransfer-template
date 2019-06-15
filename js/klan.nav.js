//--> toggle side nav functionality
$('.nav-toggle-view').click(function(){
    var $this = $(this),
    $nav = $this.parent().parent(),
    toggle = $this.attr('data-toggle')=='0'?true:false;
    $this.attr('data-toggle',toggle?'1':'0');
    $this.removeClass(toggle?'toggle--false':'toggle--true');
    $this.addClass(toggle?'toggle--true':'toggle--false');
    $nav.removeClass(toggle?'hide':'show');
    $nav.addClass(toggle?'show':'hide');
    console.log(1)
})