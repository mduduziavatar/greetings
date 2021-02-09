$(function () {
    var stored = localStorage['greetedUsers'] ? JSON.parse(localStorage['greetedUsers']) : {};

    var greetFactory = GreetFactory(stored);

    $("#greet").on("click", function () {
        // alert("You clicked me!")
        let validate = $(".inputElements").val();
        var name = greetFactory.getNameFromInput(validate);
        greetFactory.clickCounter(name);
        let store = greetFactory.addedUser(name);
        $(".form-check-input")
        let selected = $("input:checked").val()
        if (selected !== undefined || name !== "") {
            let message = $(".txtBox").text(selected + name);
            $("#counter").html(greetFactory.getGreetCounter());
            localStorage['greetedUsers'] = JSON.stringify(greetFactory.getAllUsers());


        } else if (selected == undefined || name !== "") {
            $("#log").html("please enter a name and select a language.");
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
        greetFactory.clickCounter();
        $("#all").html(localStorage.greetedUsers.split());
    });
});
