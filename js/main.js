$(document).ready(function(){
    $('#mainInput').keypress(function(e){
        if(e.which == 13){
            var value = $('#mainInput').val()
            var time = new Date()
            $('.w-message-list').append('<div class="w-message w-message-out "><div class="w-message-text"><p>' + value + '</p><div>' + time + '</div></div></div>')
            $('#mainInput').val('')
        }
    })
})
