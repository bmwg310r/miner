// @ts-check

function setup() {
    var config = {
        apiKey: "AIzaSyDLZfjdoJR6Trgh66PQ10EBEjUTcaiUnAI",
        authDomain: "mining-ca8e7.firebaseapp.com",
        databaseURL: "https://mining-ca8e7.firebaseio.com",
        projectId: "mining-ca8e7",
        storageBucket: "mining-ca8e7.appspot.com",
        messagingSenderId: "318157957135"
    };
    firebase.initializeApp(config);

    let database = firebase.database();

    let inpantall = document.getElementById("antall");
    let inpadresse = document.getElementById("adresse");

    let btnLagreLand = document.getElementById("lagreantall");
    btnLagreLand.addEventListener("click",lagreantall);


    function lagreantall(e) {
        let antall = inpantall.value;
        let adresse = inpadresse.value;
        let ref = database.ref("antall/" + antall);
        ref.set({ antall,adresse });
    }


}