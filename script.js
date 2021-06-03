function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    function launchTime(){
      paragraph.innerHTML = "Houston, we have liftoff!";
    }

    button.addEventListener("click", launchTime);

    function abortTime(){
      let response = window.confirm("Do you wish to abort launch?");
      if(response == true) {
        paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
      };
    };
    
    missionAbort.addEventListener("mouseover", function(event){
      let element = event.target;
      element.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseleave", function(event){
      let element = event.target;
      element.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", abortTime);
    
};

window.addEventListener("load", init);