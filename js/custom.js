$(document).ready(function(){
    $('#checkDatabase').on('click',function(){
        $.ajax({
            url: 'https://iutwb4kpy8.execute-api.ap-southeast-1.amazonaws.com/prod/getproduct',
            type: 'get',
            crossDomain: true,
            contentType : 'application/json',
            
            dataType : 'json',            
            success: function(data) {
                console.log(data);
            }
        }).done(function(data){
            $("#test").replaceWith("<p>ยำยำยยำยำยำยยำ</p>");
        }).fail(function(){
            alert( "error" );
        });
    })
});