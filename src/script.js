const btn = document.getElementById("themeToggle");
        const icon = document.getElementById("themeIcon");
        const html = document.documentElement;
        const mobileMenu = document.getElementById("mobileMenu");
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");

        function setTheme(dark) {
            if (dark) {
                html.classList.add("dark");
                html.classList.remove("light");
                document.body.className =
                    " text-white transition-colors duration-300";
                icon.src = "./img/sun.png";
                document.body.style.backgroundColor = "#101828";
                mobileMenu.classList.add("dark");
                mobileMenu.classList.remove("light");
                mobileMenu.style.backgroundColor = "#101828";
                mobileMenu.style.color = "white";
                localStorage.setItem("theme", "dark");
            } else {
                html.classList.remove("dark");
                html.classList.add("light");
                document.body.className =
                    "text-black transition-colors duration-300";
                icon.src = "./img/moon.png";
                document.body.style.backgroundColor = "white"; 
                mobileMenu.classList.remove("dark");
                mobileMenu.classList.add("light");
                mobileMenu.style.backgroundColor = "white";
                mobileMenu.style.color = "black";
                localStorage.setItem("theme", "light");
            }
        }

        const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark");


        mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

        btn.addEventListener("click", () => {
            setTheme(!html.classList.contains("dark"));
        });