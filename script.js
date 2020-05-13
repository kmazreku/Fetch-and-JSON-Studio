// TODO: add code here
window.addEventListener("load", function () {
  this.fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      console.log(json);
      let container = document.getElementById("container");
      let astronautInfo = [];
      let hoursInSpaceArr = [];
      for (let k = 0; k < json.length; k++) {
        hoursInSpaceArr.push(json[k].hoursInSpace);
      }
      let sortHours = hoursInSpaceArr.sort().join(",").split(",");

      for (let p = sortHours.length - 1; p > -1; p--) {
        for (let j = 0; j < json.length; j++) {
          if (
            Number(sortHours[p]) === Number(json[j].hoursInSpace) &&
            json[j].active === true
          ) {
            container.innerHTML = `<div class="astronaut">
                <div class="bio">
                   <h3>${json[j].firstName} ${json[j].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${json[j].hoursInSpace}</li>
                      <li class="green">Active: ${json[j].active}</li>
                      <li>Skills: ${json[j].skills}</li>
                   </ul>
                </div>
                <img class="avatar" src="${json[j].picture}">
             </div>

             `;
            astronautInfo.push(container.innerHTML);
          } else if (
            Number(sortHours[p]) === Number(json[j].hoursInSpace) &&
            json[j].active === false
          ) {
            container.innerHTML = `<div class="astronaut">
                <div class="bio">
                   <h3>${json[j].firstName} ${json[j].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${json[j].hoursInSpace}</li>
                      <li>Active: ${json[j].active}</li>
                      <li>Skills: ${json[j].skills}</li>
                   </ul>
                </div>
                <img class="avatar" src="${json[j].picture}">
             </div>

             `;
            astronautInfo.push(container.innerHTML);
          }
        }
      }

      container.innerHTML = `${astronautInfo.join(" ")}<br />
        <p><strong>Count of astronauts:</strong> ${json.length}</p>`;
    });
  });
});
