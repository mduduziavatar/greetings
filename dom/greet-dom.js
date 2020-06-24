window.addEventListener("DOMContentLoaded", function() {

    var inputBox = document.getElementById("inputElements")
    var greetBtn = document.getElementById("greetButton")
    var message = document.getElementById("txtBox")
    var total = document.getElementById("counter")
    var resetBtn = document.getElementById("resetButton")

    var stored = localStorage['greetedUsers'] ? JSON.parse(localStorage['greetedUsers']) : {};

    var GreetFactory = greetFactory(stored);

    window.addEventListener("load", function() {
        total.innerHTML = GreetFactory.getGreetCount();
    });

    //greet buttons event listener 
    greetBtn.addEventListener("click", function() {
        var input = inputBox.value;
        var radioBtn = document.querySelector("input[name='selector']:checked");
        if (radioBtn) {
            var language = radioBtn.value;
            var name = GreetFactory.getNameFromInput(input)
            if (name !== "") {
                message.innerHTML = GreetFactory.greetUser(name, language)
                total.innerHTML = GreetFactory.getGreetCounter();
                localStorage['greetedUsers'] = JSON.stringify(GreetFactory.getAllUsers());

            } else {
                message.innerHTML = "no name entered."
            }
        } else {
            message.innerHTML = "please select language."
        }
        setTimeout(function(){
            message.innerHTML = ""
        }, 3500)
    });

    // this is the reset buttons event listener
    resetBtn.addEventListener("click", function() {
        GreetFactory.resetBtn();
        GreetFactory.resetBtn();
        location.reload();
    });
});
