window.addEventListener("load", start);
function start() 
{
  const bike = document.getElementById("bikeBtn")

  bike.addEventListener("click", findbike);
}

function findbike()
{
  let request = new XMLHttpRequest();
  const color = document.getElementById("color").value;
  const range = document.getElementById("distance").value;
  let why = document.getElementById("steal").value;

  switch (why) {
    case "stolen":
      break;
    /*case "lost":
      why = "non";
      break;*/
    case "Could be either":
    why = "all";
    break;
  }
  const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&colors=${color}&location=IP&distance=${range}&stolenness=${why}`;
  console.log(url)
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      console.log(response);
    }
    else 
    {
      console.log()
    }
  });

  request.open("GET", url, true);
  request.send();
}

