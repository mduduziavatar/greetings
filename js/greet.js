function GreetFactory(stored) {

    var userMappedData = stored || {};

    function greetUser(name, language) {
        switch (language) {
            case "english":
                return "Hello, " + name;
            case "zulu":
                return "Sawubona, " + name;
            case "afrikaans":
                return "Hallo, " + name;
            case "mandarin":
                return "您好 Nín hǎo, " + name;
            default:
                return "Hello, " + name;
        }
    }

    function errorMessages(name, language) {
        if (!name && !language) {
            return "Please enter a name and select a language";
        }
        else if (!name) {
            return "Please enter a name";
        }
        else if (!language) {
            return "Please select a language";
        }
        return "";
    }

    function addedUser(userName) {
        if (userMappedData[userName] === undefined) {
            userMappedData[userName] = 1;
        } else {
            userMappedData[userName] += 1;
        }
    }

    function getGreetCounter() {
        return Object.keys(userMappedData).length;
    }

    function getNameFromInput(textBoxValue) {
        var regularExpression = /[^A-Za-z]/g;
        if (textBoxValue !== "") {
            var lettersOnly = textBoxValue.replace(regularExpression, "");
            var name = lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1).toLowerCase();
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

    return {
        greetUser,
        getGreetCounter,
        getNameFromInput,
        getAllUsers,
        resetBtn,
        addedUser,
        errorMessages
    }
}