$(document).ready(function () {
  var $contactForm = $("#contact");
  $contactForm.submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: "https://form.matthammond.com/api/v1/form/3DCipNRqa6Wyxrq9wdVUcIckFzo9B0J0",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
      beforeSend: function () {
        $contactForm
          .find(".overlay div")
          .html(
            '<div class="alert alert--loading"><i class="fa fa-circle-o-notch fa-spin"></i> &nbsp; Sending message...</div>',
          );
        $contactForm.find(".overlay").fadeIn();
      },
      success: function (data) {
        $contactForm.find(".alert--loading").hide();
        $contactForm
          .find(".overlay div")
          .html(
            '<div class="alert alert--success"><i class="fa fa-check"></i> &nbsp; Your message was sent successfully! Redirecting...</div>',
          );
        $contactForm.find(".overlay").fadeIn();
        setTimeout(function () {
          window.location.href = "https://contact.matthammond.com";
        }, 3000);
      },
      error: function (err) {
        $contactForm.find(".alert--loading").hide();
        $contactForm
          .find(".overlay div")
          .html(
            '<div class="alert alert--error"><i class="fa fa-warning"></i> &nbsp; Ooops, something went wrong.</div>',
          );
        $contactForm.find(".overlay").fadeIn();
      },
    });
  });
  $contactForm.find(".overlay").click(function (e) {
    $(this).fadeOut();
  });
});
