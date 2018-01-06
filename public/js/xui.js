$(window).load(function(){
     $("pre").addClass("prettyprint linenums");
     prettyPrint();


     $(".sidebar-toggle").click(function(){
       $("body").toggleClass("aside-toggled");
     });

    // navbar事件

     $("a[data-toggle='collapse']").click(function(){
       console.log("click");
       $(this).parent("li").addClass("active").siblings(".active").removeClass("active");
       var brother=$(this).next();
       if (!brother.hasClass("collapse")) {
          $(this).next().addClass("collapse");
       }else{
          $(this).next().removeClass("collapse");
       }
       
     });




 });