$(document).ready(function(){
    $('#mainInput').keypress(function(e){
        if(e.which == 13){
            var value = $('#mainInput').val()
            var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes()
            $('.w-message-list').append('<div class="w-message w-message-out "><div class="w-message-text"><p>' + value + '</p><div class="time">' + hours + ':' + minutes + '</div></div></div>')
            $('#mainInput').val('')
        }
    })
})

$('.avatar').click(function(){
    $('.w-message-list').empty()
})
