$(document).ready(function () {
  Projects();
  CardClick();
});

const CardClick = () => {
    $(document.body).on("click",".card", function(){
    Open($(this).children('#link').attr("href"), "Link", true);
  });
  
  $(document.body).on("click","#link", function(e){
    e.preventDefault();
    e.stopPropagation();
    Open($(this).attr("href"), "Link", true);
  });
} 
  
const Projects = () => {
  FetchLocalRepos();
  FetchtWebRepos();
};

const FetchtWebRepos = () => {
  $.getJSON("https://api.github.com/users/Hiper1125/repos?client_id=ba7bfd173af56966fcbc&client_secret=e28d20154b4542d396c89066c2635d7c2c617457", function (repos) {
    for (var k in repos) {
      let name = repos[k].name.capitalize();
      let description = repos[k].description.capitalize();
      let url = repos[k].html_url;

      let logo = "https://raw.githubusercontent.com/Hiper1125/" + repos[k].name + "/main/logo.png";

      InjectProject(name, description, url, logo, "fab fa-github");
    }
  });
};

const FetchLocalRepos = () => {
  fetch("https://raw.githubusercontent.com/Hiper1125/portfolio/main/projects/index.json")
    .then((res) => res.json())
    .then((repos) => {
      for (var i = 0; i < Object.keys(repos).length; i++) {
        $.getJSON(repos[i].json(), function (project) {
          InjectProject(project.name, project.description, project.url, project.image, project.icon);
        });
      }
    });
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.json = function () {
  return "https://raw.githubusercontent.com/Hiper1125/portfolio/main/projects/" + this.toLowerCase() + ".json";
};

const InjectProject = (name, description, url, logo, icon) => {
  $("#projects-grid").append(
    `<div class='card transition duration-250 ease-in-out transform hover:-translate-y-1'><img src='${logo}'><div><h1 class='text-xl md:text-2xl font-bold'>${name}</h1><h2 style="width:calc(100% - 40px)" class='text-xs md:text-base'>${description}</h2></div><a id='link' href='${url}' class='icon realtive' target="_blank"><i class='${icon} mr-1'></i><i class='fas fa-xs fa-external-link-alt' style="font-size: 0.75rem;"></i></a></div>`
  );
};
