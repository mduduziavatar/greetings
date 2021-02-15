$(function () {
    var stored = localStorage['greetedUsers'] ? JSON.parse(localStorage['greetedUsers']) : {};

    var greetFactory = GreetFactory(stored);

    $("#greet").on("click", function () {
        $("#all").hide();
        $(".txtBox").show();
        let validate = $(".inputElements").val();
        var name = greetFactory.getNameFromInput(validate);
        greetFactory.addedUser(name);
        $(".form-check-input");
        let language = $("input:checked").val();
        let errors = greetFactory.errorMessages(name, language);
        $("#log").text(errors);
        if (!errors) {
            let message = greetFactory.greetUser(name, language);
            $(".txtBox").text(message);
            $("#counter").html(greetFactory.getGreetCounter());
            localStorage['greetedUsers'] = JSON.stringify(greetFactory.getAllUsers());
        }
        setTimeout(function () {
            $("#log").html("") = "";
        }, 3500);
    });

    $("#reset").on("click", function () {
        greetFactory.resetBtn();
        localStorage.clear("greetedUsers");
        location.reload();
    });

    $("#allNames").on("click", function () {
        $(".txtBox").hide();
        $("#all").show();
        $("#all").html("");
        let names = greetFactory.getAllUsers();
        for (let name in names) {
            let perPerson = name
            let perCount = names[perPerson]
            if (perPerson !== "") {
                $("#all").append("<div>" + perPerson + " has been greeted " + perCount + "x" + "</div>");
            }
        }
    });
});
