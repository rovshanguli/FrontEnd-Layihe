$(function () {
    let catagory = $(".productcatagories span");
    catagory.click(function () {

        if ($(this).next().hasClass("open")) {
            $(this).next().removeClass("open");
        } else {
            $(this).next().addClass("open");
        }
        if($(".productcatagories").css("height")>"255px"){
            $("prductcatagories").css("overflow-y","scroll");
        }
    })
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }




    let li = $(".pagenation li");
    li.click(function () {
        let li_id = $(this).attr("data-id");
        
        let content_id = $(".activecontent");
        
        let activepage = $(".activepage");
        
        if (activepage.attr("data-id") != $(this).attr("data-id")) {
            let newactivepage = $('.activecontent[data-id = '+ $(this).attr("data-id") +']');
            console.log(newactivepage);
            activepage.removeClass("activepage");
            newactivepage.addClass("activepage");
        }
    })

})