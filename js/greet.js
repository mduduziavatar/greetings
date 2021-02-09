function GreetFactory(stored) {

    var userMappedData = stored || {};

    function greetUser(name, language) {
        addedUser(name);
        switch (language) {
            case "english":
                return "Hello, " + name;
            case "zulu":
                return "Sawubona, " + name;
            case "sesotho":
                return "Dumela, " + name;
            default:
                return "Hello, " + name;
        }
    }

    function addedUser(userName) {
        if (userMappedData[userName] === undefined) {
            userMappedData[userName] = 0;
        }
    }

    function getGreetCounter() {
        return Object.keys(userMappedData).length;
    }

    function getNameFromInput(textBoxValue) {
        var regularExpression = /[^A-Za-z]/g;
        if (textBoxValue !== "") {
            var lettersOnly = textBoxValue.replace(regularExpression, "")
            var name = lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1).toLowerCase()
            return name;
        }
        return "";
    }

    function getAllUsers() {
        // this is for local storage
        return userMappedData;
    }

    function resetBtn() {
        userMappedData = {};
    }

    function clickCounter() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("txtBox").innerHTML = localStorage.clickcount;
        } else {
          document.getElementById("txtBox").innerHTML = "Sorry, your browser does not support web storage...";
        }
      }


    return {
        greetUser,
        getGreetCounter,
        getNameFromInput,
        getAllUsers,
        resetBtn,
        addedUser,
        clickCounter
    }
}