$(document).ready(function(){
    var classcolor = {
        "JETBLACK" : "circleJetBlack",
        "ROSEGOLD" : "circleRoseGold",
        "GOLD" : "circleGold",
        "SILVER" : "circleSilver",
        "BLACK" : "circleBlack"
    }
    



        $.ajax({
            url: 'https://iutwb4kpy8.execute-api.ap-southeast-1.amazonaws.com/prod/getproduct',
            type: 'get',
            crossDomain: true,
            contentType : 'application/json',
            dataType : 'json',            
            // success: function(data) {
            //     console.log(data);
            // }
        }).done(function(data){
            // console.log(Object.keys(data.Product[String(element)]);)
            if(data.Product.length == 0){
                $("#checkdatabase").replaceWith("<div class = 'pure-button fuller-button red textcenter'>OUT OF STOCK !!!</div>");
            }
            else{
                $('#checkdatabase').on('click',function(){
                    // console.log(Object.keys(data.Product[String(element)]))
                    Object.keys(data.Product).forEach(function(element) {
                        console.log(Object.keys(data.Product[String(element)]))
                        var temp = Object.keys(data.Product[String(element)]);
                        var text1 = ((temp[0]) ? temp[0] : '');
                        var text2 = ((temp[1]) ? temp[1] : '');
                        // console.log(text1);
                        // console.log(text2);
                        // console.log(element);
                        $( "#checkdatabase").fadeOut( "fast" );
                        $("#colorrow").append( "<div class = \"col-xs-12\"><div class = \"col-xs-5 col-sm-6\"><div id = \""+classcolor[String(element)]+"\"  class = \"margingap1per "+ classcolor[String(element)] + "\" style = \"float:right;\" onclick = \"colorfunction('BLACK')\"></div></div><div class = \"col-xs-7 col-sm-6\"><div class = \"col-xs-12\" style = \"padding : 0;\"><div class = \"col-xs-12\" style = \"line-height : 30px; color : white; padding :0;\">"+element+"</div><div class = \"col-xs-12\"style = \"padding : 0; color : white;font-size : 5px;\">"+ text1 + " "+text2 +"</div></div></div></div>");
                        $('#colorrow').addClass('animated fadeIn')
                    });
                })
            }
            
            
        


        }).fail(function(){
            alert( "error" );
        });
        
        

        





});

function colorfunction(color){
    // $(document).ready(function(){
        // console.log(color);
        $('#colorrow').fadeOut( "fast" );
        $('#storerow').append("<div class = \"col-xs-6\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store64\"  min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div><div class = \"col-xs-6\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store128\" min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div>")
        $('#storerow').addClass('animated fadeIn')
        // $(this).after("<div class=\"quantity\"><input type=\"number\" min=\"1\" max=\"2\" step=\"1\" value=\"1\"></div>")

    //     console.log('asdfsdaf',color);
    //     $.ajax({
    //         url: 'https://iutwb4kpy8.execute-api.ap-southeast-1.amazonaws.com/prod/getproduct',
    //         type: 'get',
    //         crossDomain: true,
    //         contentType : 'application/json',
    //         dataType : 'json',
    //         data : {
    //             "color" : color
    //         }
    //     }).done(function(data){
            
    //     })
    // });
}

