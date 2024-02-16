
        function openpopup() {
            var popup = document.getElementById("popup");
            popup.classList.add("open-popup");
        }
        
        function openpopup2() {
            var blur = document.getElementById("blur");
            blur.classList.add("active");
        }
        
        function closepopup() {
            var popup = document.getElementById("popup");
            popup.classList.remove("open-popup");
            var blur = document.getElementById("blur");
            blur.classList.remove("active");
        }
        
