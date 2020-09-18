$(function () {
  $(".sidenav").sidenav();
  $(".tooltipped").tooltip();

  // on scroll navbar li change
  $("#nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  // on click navbar li change
  // $(document).on("click", "ul li", function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  // });

  // skill bar color set
  $(window).on("load", function () {
    $(".progress").hide();
    $("#main-content").fadeIn();
    $(".skill_row_percent_view").each(function () {
      thisVal = $(this).text();
      $(this).parent(".skill_row_percent").animate({ width: thisVal }, 200);
    });
  });

  // Contact form functionality

  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $("#submit-btn").prop("value", "Submitting...");
    $("#submit-btn").attr("disabled", true);
    let url = "https://cuntato.herokuapp.com/api/project-data";
    let data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };
    data = JSON.stringify(data);
    let projectID = "p3y5ybl349";
    let currentURL = window.location.href;
    $.post(url, { data, projectID: projectID, currentURL: currentURL }, function () {})
      .done(() => {
        $("#submit-btn").attr("disabled", false);
        $("#submit-btn").prop("value", "Submit");
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        M.toast({ html: "Message sent 🤗" });
      })
      .fail(() => {
        M.toast({ html: "Something went wrong 😟" });
      });
  });
});
