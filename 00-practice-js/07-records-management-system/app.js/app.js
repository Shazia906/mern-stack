
const studendform = document.forms["studend-datail-form"];

studendform.addEventListener("submit" , function (event) {
    event.preventDefault();
    const userName = event.target.name.value;
    const userAge = event.target.age.value;
    const userdob = event.target.dob.value;
    const gender = event.target.gender.value;

    // console.table([userName ,userAge ,userdob ,gender]);
    const student = {userName , userAge ,userdob ,gender};
            const previousRecordsArray = window.localStorage.getItem("records") ?? JSON.stringify([]);
            const previousRecordsArrayParsed = JSON.parse(previousRecordsArray);
            
            console.log("previousRecordsArray", previousRecordsArrayParsed);
            previousRecordsArrayParsed.push(student);
            window.localStorage.setItem(
              "records",
              JSON.stringify(previousRecordsArrayParsed)
            );
            event.target.reset();
          }
        );
    

      console.log(undefined || "Raheel");
      console.log(null || "Raheel");
      console.log(undefined && "Raheel");
      console.log(null && "Raheel");
      console.log(null ?? "Raheel");
      console.log(undefined ?? "Raheel");
      console.log("" ?? "Raheel");
      console.log(NaN ?? "Raheel");
      console.log(false ?? "Raheel");
      console.log(true ?? "Raheel"); console.log(undefined || "Raheel");
      console.log(null || "Raheel");
      console.log(undefined && "Raheel");
      console.log(null && "Raheel");
      console.log(null ?? "Raheel");
      console.log(undefined ?? "Raheel");
      console.log("" ?? "Raheel");
      console.log(NaN ?? "Raheel");
      console.log(false ?? "Raheel");
      console.log(true ?? "Raheel");

      // console.log(null.length);
      // console.log(undefined.length);

       const data = null ?? [] ;
        console.log(data.length);


      document.addEventListener("DOMContentLoaded" , function () {
        console.log("Document cpntent loaded....");
      });

      document.addEventListener("visibilitychange"  , function (event) {
        console.log("visibilit change" , document.visibilityState);
        // console.log(event);  
      }) ;

