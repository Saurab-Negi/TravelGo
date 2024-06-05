<!--Script For Scroll on Top btn-->
$(document).ready(function(){
    $(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
});

<!--Scripts For sliders-->
$(document).ready(function() {
  $('.blog-list-wrapper').slick({
    centerMode: false,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay:true,
  autoplaySpeed:3000,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
      {
          breakpoint: 550,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      }
    ]
  });});

$(document).ready(function() {
  $('.hp-slider-collection').slick({
    centerMode: false,
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.sl-arrow-left').click(function(){
    $(this).closest(".ct-slider").find('.hp-slider-collection').slick('slickPrev');
  })

  $('.sl-arrow-right').click(function(){
    $(this).closest(".ct-slider").find('.hp-slider-collection').slick('slickNext');
  })
});

$(document).ready(function() {
  $('.gc-slider').slick({
    centerMode: false,
      dots: true,
      infinite: true,
      arrows: false,
    touchThreshold: 100,
      speed: 500,
      slidesToShow: 1,
      autoplay:true,
  autoplaySpeed:3000,
      slidesToScroll: 1,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.fb-left-arrow').click(function(){
    $(this).closest(".gc-slider-wrapper").find('.gc-slider').slick('slickPrev');
  })

  $('.fb-right-arrow').click(function(){
    $(this).closest(".gc-slider-wrapper").find('.gc-slider').slick('slickNext');
  })
});

<!--Script Hubspot form submit redirect-->
  
  document.addEventListener("DOMContentLoaded", function(event) {
    let forms = document.querySelectorAll(".hsForm_89ee1a5a-add0-49a8-a34c-518d88e536ce");
    
    Array.from(forms).forEach((form)=>{
        Webflow.push(function() {
            $(form).submit(async function() {
            if(!form.checkValidity()){
                form.reportValidity();
                return false;
            }
            const _form = Array.from(form.querySelectorAll("input"));
            const _values = _form.map(d=>{
                return {value:d.value,key:d.name}
            });
            const values = {};
            _values.forEach(d=>{
                values[d.key] = d.value 
            });
            console.log(values);
            
            let submit_btn = $(this).find('#mainBtn');
              submit_btn.attr('disabled', 'disabled');
              submit_btn.attr('value', 'Submitting...');
              submit_btn.css('cursor', 'not-allowed');
            await fetch("https://app.getcrest.ai/api/ms_iam/user/signup/ad/",{method:"POST",body:JSON.stringify({first_name:values.firstname,email:values.email,last_name:values.lastname,phone:values.phone,origin_website:true, company_name: values.company, utm_source: values.utm_source, utm_medium: values.utm_medium, utm_campaign: values.utm_campaign, utm_term: values.utm_term, utm_content: values.utm_content}), headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },}) 
                     let firstname = document.getElementById("firstname-89ee1a5a-add0-49a8-a34c-518d88e536ce").value;
                     console.log("Firstname");
                     console.log("Firstname",form.dataset);
                     setTimeout(()=>{
                        window.location.href = "/thankyou";
                      },200)
                        return true;
            });
        });
    })
    
    })