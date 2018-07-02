$(document).ready(function() {
    $("body").prepend("<button >Button</button>")
    $("button:first").attr("id", "b1")
    $("#b1").on("click", function() {
        alert("Hello There")
    })
    $("#b2").on("click",function() {
        alert($("#t1").val())
    })
    $("#d1").on({
        mouseenter: function(){
            $(this).css("background-color", "lightblue");
        },  
        mouseleave: function(){
            $(this).css("background-color", "");
        }, 
    });
    $("body").append("<p>Some Text</p>")
    $("p").on("click", function() {
        $(this).css("color", rcolor())
    })
    function rcolor() {
        let rc='#'+Math.floor(Math.random()*16777215).toString(16)
        return rc
    }
    $('#b3').on("click", function() {
        $("#d2").append("<span>Ben Easterwood</span>")
    })
    $("#b4").on("click", function() {
        let fri=["Colin","James","Jessica","Lisa","Rebecca","Peyton","Noah","John","Jennifer","Brittany"]
        for (let index = 0; index < fri.length; index++) {
            const el = fri[index];
            $("ul").append("<li>"+el+"</li>")
        }
    })
})