
    document.getElementById("box-1").addEventListener("click", function(){
        this.style.backgroundColor = "red";
        this.style.color = "white";
    });

        document.getElementById("box-2").addEventListener("click", function(){
        this.style.backgroundColor = "blue";
        this.style.color = "white";
    });
        document.getElementById("box-3").addEventListener("click", function(){
        this.style.backgroundColor = "green";
        this.style.color = "white";
    });
        document.getElementById("box-4").addEventListener("click", function(){
        this.style.backgroundColor = "yellow";
       
    });

    const input = document.getElementById("name");
    const greeting = document.getElementById("greeting");
    const button = document.getElementById("btn-button");



button.addEventListener("click", function () {
    greeting.textContent = "Hello, " + input.value;
});

