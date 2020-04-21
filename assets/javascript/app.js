
//IMPORTANT!
$(document).ready(function(){

    // INITIALIZING FIREBASE
    // ================
    
        var config = {
            apiKey: "AIzaSyDggj-SYgefvVB6Phr-KVbYuS7PGOL4HaM",
            authDomain: "trilogy-2aea5.firebaseapp.com",
            databaseURL: "https://trilogy-2aea5.firebaseio.com",
            projectId: "trilogy-2aea5",
            storageBucket: "trilogy-2aea5.appspot.com",
            messagingSenderId: "195299547581"
        };
    
        firebase.initializeApp(config);
    
    // GLOBAL VARIABLES
    // ================
    
        //Creating a variable to hold the firebase databaseURL
        var fireDatabase = firebase.database();
    
        //Global Vars
        var userInptTrainName;
        var userInptDestination;
        var userInptFirstTT;
        var userInptFreq;
        var userInptNOW;
    
        //Variables to be used later wit momentjs
        var nextArrival;
        var minutesAway;
    
    // FUNCTIONS
    // ============
    function calcMinutesElapsed() {
        var convertedFirstTrainTime = moment(userInptFirstTT, "HH:mm").subtract(1, "years");
        return moment().diff(moment(convertedFirstTrainTime), "minutes");
    }
    
    function calcMinutesAway(minutesElapsed, userInptFreq) {
        return parseInt(userInptFreq) - parseInt(minutesElapsed) % parseInt(userInptFreq);
    }
    
    function calcNextArrival(minutesAway) {
        return moment().add(minutesAway, "m").format("hh:mm A");
    }
    
});