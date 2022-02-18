$(function () {
    let catagory = $(".productcatagories span");
    catagory.click(function () {

        if($(this).next().hasClass("open")){
            $(this).next().removeClass("open");
        }else{
            $(this).next().addClass("open");
        }
        let ul = $(".productcatagories ul");
        for (const item of ul) {
            if(item.attr("class") != "open"){
                $(".productcatagories").css("overflow-y,hidden");
            }
        }
    })
    
})