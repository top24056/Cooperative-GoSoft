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
                        var sizeS = ((text1) ? true : false);
                        var sizeM = ((text2) ? true : false);
                        
                        $( "#checkdatabase").fadeOut( "fast" );
                        $("#colorrow").append( "<div class = \"col-xs-12\" id = \"row"+String(element)+"\"><div class = \"col-xs-5 col-sm-6\"><div id = \""+classcolor[String(element)]+"\"  class = \"margingap1per "+ classcolor[String(element)] + "\" style = \"float:right;\" onclick = \"colorfunction('"+String(element)+"',"+sizeS+","+sizeM+",this)\"></div></div><div class = \"col-xs-7 col-sm-6\"><div class = \"col-xs-12\" style = \"padding : 0;\"><div class = \"col-xs-12\" style = \"line-height : 30px; color : white; padding :0;\">"+element+"</div><div class = \"col-xs-12\"style = \"padding : 0; color : white;font-size : 5px;\">"+ text1 + " "+text2 +"</div></div></div></div>");
                        $('#colorrow').addClass('animated fadeIn');
                    });
                })
            }
            
            
        


        }).fail(function(){
            alert( "error" );
        });

});

function colorfunction(color,sizeS,sizeM,thisfromcolor){
        console.log(thisfromcolor)
        $('#'+thisfromcolor.id).css('margin-bottom','55px');
        $('#'+thisfromcolor.id).append("<div class = \"col-xs-12\" style = \"text-align : right\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store64\"  min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div>")
        
        
        
        
        
        // if(sizeS == true && sizeM == true){
        //     $('#storerow').append("<div class = \"col-xs-6\" style = \"text-align : right\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store64\"  min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div>")
        //     $('#storerow').append("<div class = \"col-xs-6\" style = \"text-align : right\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store64\"  min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div>")
        // }
        // else{
        //     if(sizeS == true){
        //         $('#storerow').append("<div class = \"col-xs-12\" style = \"text-align : center\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store64\"  min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div>")
        //     }
        //     if(sizeM == true){
        //         $('#storerow').append("<div class = \"col-xs-12\" style = \"text-align : center\"><div class=\"number-input\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" ></button><input class=\"quantity\" id=\"store64\"  min=\"0\" max=\"2\" name=\"quantity\" value=\"0\" type=\"number\" style = \"background-color : transparent;\"><button onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button></div></div>")
        //     }
        // }
        
        // $('#storerow').addClass('animated fadeIn');

}

