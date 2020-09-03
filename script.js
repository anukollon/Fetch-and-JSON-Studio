window.addEventListener("load", function () {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
       response.json().then(function (json) {
           const containerDiv = document.getElementById("container");
           let idHoursInSpace = {};
           for(let index =0; index <json.length; index++){
               idHoursInSpace[json[index].id] = json[index].hoursInSpace;
           }
           let keysSorted = [];
           keysSorted = Object.keys(idHoursInSpace).sort(function(a,b){return keysSorted[a]-keysSorted[b]})
           for(let index =0; index <json.length; index++){
                containerDiv.innerHTML += `
                <div class="astronaut">
                        <div class="bio">
                            <h3> ${json[index].firstName} ${json[index].lastName}</h3>
                            <ul class="list">
                                <li>Hours in space: ${json[index].hoursInSpace} </li>
                               <li class="${json[index].active}">Active: ${json[index].active}</li>
                                <li>Skills: ${json[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=""/>
                </div>`
           }

           containerDiv.innerHTML +=`<div><h4>Number of Astronauts: ${json.length} </h4></div>`
       })
    });
});