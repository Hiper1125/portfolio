let currentPage = "#main";

const App = () => {
  Links();
  Image3D();
};

const Image3D = () => {
  $("#logo").tilt({
    speed: 500,
    perspective: 1000,
    glare: true,
    maxGlare: 0.1,
    reset: false,
  });
};

const ScrollTo = (element) => {
  element = document.querySelector(element);
  element.scrollIntoView({ behavior: "smooth", block: "end" });
};

$(document).ready(function () {
  App();
});

const Links = () => {
  $("a").click(function (e) {
    e.preventDefault();
    e.stopPropagation();

    let name = $(this).attr("id");

    if(name == "discord")
    {
      let msg = "Copied discord username";

      navigator.clipboard.writeText($(this).attr("href"));

      $.notify(msg, {
        className: "success",
        globalPosition: "bottom right",
        arrowShow: false,
        autoHideDelay: 3000,
      });
    }
    else
    {
      let msg = "Opening " + name;
      let url = $(this).attr("href");
  
      setTimeout(function () {
        Open(url, name);
      }, 500);
  
      $.notify(msg, {
        className: "success",
        globalPosition: "bottom right",
        arrowShow: false,
        autoHideDelay: 2000,
      });
    }
  });
};

const Open = (url, name) => {
  let params = `scrollbars=1,resizable=0,status=0,location=1,toolbar=0,menubar=0,
    width=400,height=400,left=100,top=300`;

  window.open(url, name, params);

  return false;
};
