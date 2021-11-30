window.onload = function(){
    //hide the preloader
    document.querySelector(".se-pre-con").style.display = "none";
}
$(document).ready(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})  
var
  words = ['<p>Passionate about web development and new technologies, ','I am particularly interested in modern frameworks highlighting good code practices.','I find this domain to be full of innovation and creativity!</p>'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 4,
  speed = 70;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});

var win = $(window);
var a = $('.card-img-top');

win.on('scroll', function() {
    a.fadeIn();
    win.off('scroll');
});


//
$( ".flex-item2" ).switchClass( "oldClass", "newClass", 1000, "easeInOutQuad" );
$(".flex-item2").appendTo(".types");


window.onload = function() {
                //run js code here
}
//send message 
$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

  $('#reused_form').submit(function(e)
      {
        e.preventDefault();
        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });


                    $.ajax({
                type: "POST",
                url: '..handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});


