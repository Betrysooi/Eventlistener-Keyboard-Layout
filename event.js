document.addEventListener('keydown', myFunk);

        function myFunk(){
            document.getElementById(event.code).style.backgroundColor = "green";
        }

        document.addEventListener('keyup', myFunkUp);

        function myFunkUp(){
            document.getElementById(event.code).style.backgroundColor = "";
        }