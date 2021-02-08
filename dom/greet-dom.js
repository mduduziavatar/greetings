$(function () {
    var stored = localStorage['greetedUsers'] ? JSON.parse(localStorage['greetedUsers']) : {};

    var greetFactory = GreetFactory(stored);

    $(".btn").on("click", function () {
        // alert("You clicked me!")
        let validate = $(".inputElements").val();
        var name = greetFactory.getNameFromInput(validate)
        let store = greetFactory.addedUser(name)
        $(".form-check-input")
        let selected = $("input:checked").val()
        if (store !== "") {
            $(".txtBox").text(selected + name);
             $("#counter").html(greetFactory.getGreetCounter())
            localStorage['greetedUsers'] = JSON.stringify(greetFactory.getAllUsers());
        }
        // $(".textBox").text(name);
    })
})