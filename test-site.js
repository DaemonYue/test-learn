$('#submit').on('click', function(){
    $.ajax({
        url: '/loginInterface',
        data: {
            "first": $('#first').val(),
            "last" : $('#last').val()
        }
    }).then(function(data){
        alert('yeah');
        console.log(data);
    })
})