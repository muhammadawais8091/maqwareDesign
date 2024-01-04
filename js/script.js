
$(document).ready(function(){
 
    $(".pol-section").hover(function(){
      $("#epl_btn").addClass("add-shadow");
      }, function(){
        $("#epl_btn").removeClass("add-shadow");
    });

    $(".por-section").hover(function(){
        $("#epl_btn").addClass("add-shadow");
        }, function(){
          $("#epl_btn").removeClass("add-shadow");
      });

      AOS.init();

      $("#scrollTop").on('click', function(e) {
	    scrollToTop();
      });
      $("#top_navbar li").click(function(){
        $("#top_navbar li").removeClass("active");
        $(this).addClass("active");
        console.log("AS");
      });

      $("#scrolldata a").on('click', function(event) {
        
        if (this.hash !== "") {
          
          event.preventDefault();   
      
          var hash = this.hash;
     
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 600, function(){      
            window.location.hash = hash;
          });
        } 

      });

let currentIndex = 0;
    setInterval(() => {
        const p = $(`.animate-text p:eq(${currentIndex})`);
        $(".animate-text p").removeClass("active");

        $(p).addClass("active");
        $(p).textillate({
            in: { effect: "fadeInLeftBig" },
            out: { effect: "fadeInRightBig" }
        });
        ++currentIndex;
        if ($(p).next().length === 0) {
            currentIndex = 0;
        }
    }, 3000);

    $("[data-js=toggle-job]").click(function(e) {
        e.preventDefault();
        const target = $(this).attr("data-target");
        $(".jpd-section").removeClass("active");
        $(target).addClass("active");
    });

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        $(".alert-custom").addClass("active");
    });


  })
  function scrollToTop(){ 
    $(window).scrollTop(0); 

  }