document.addEventListener('DOMContentLoaded', function () {
   
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');
    }); 
    

  /*   const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-toggle svg');

  
    menuToggle.addEventListener('click', function () {
    
        menu.classList.toggle('active');
     
        if (menu.classList.contains('active')) {
            menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
        } else {
            menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>`;
        }
    });  */
    document.getElementById("DownloadCV").addEventListener("click", function() {
    
        var link = document.createElement("a");
      
        link.href = "/AshrafCV3.pdf";
      
        link.download = "AshrafCV.pdf";
      
        link.click();
    });
    
   
    document.getElementById("liveProjectBtn").addEventListener("click", function () {
        window.open("https://mohdashraf1234.github.io/FlipKartCloneByAshraf/", "_blank");
    });

    
    document.getElementById("githubLinkBtn").addEventListener("click", function () {
        window.open("https://github.com/mohdashraf1234/FlipKartCloneByAshraf", "_blank");
    });
     /*Project 2 */
     document.getElementById("liveProjectBtn1").addEventListener("click", function () {
        window.open("https://mohdashraf1234.github.io/MusicSystemByAshraf/", "_blank");
    });

    
    document.getElementById("githubLinkBtn1").addEventListener("click", function () {
        window.open("https://github.com/mohdashraf1234/MusicSystemByAshraf", "_blank");
    });

    /*Project 3 */
    document.getElementById("liveProjectBtn2").addEventListener("click", function () {
        window.open("https://mohdashraf1234.github.io/SnakeG/", "_blank");
    });

    
    document.getElementById("githubLinkBtn2").addEventListener("click", function () {
        window.open("https://github.com/mohdashraf1234/SnakeG", "_blank");
    });

    /*Project 4 */
    document.getElementById("liveProjectBtn3").addEventListener("click", function () {
        window.open("https://mohdashraf1234.github.io/Calculator/", "_blank");
    });

    
    document.getElementById("githubLinkBtn3").addEventListener("click", function () {
        window.open("https://github.com/mohdashraf1234/Calculator", "_blank");
    });

   /*Project 5*/
    document.getElementById("liveProjectBtn4").addEventListener("click", function () {
        window.open(" ", "_blank");
    });

    
    document.getElementById("githubLinkBtn4").addEventListener("click", function () {
        window.open(" ", "_blank");
    });

    /*Project 6 */
    document.getElementById("liveProjectBtn5").addEventListener("click", function () {
        window.open(" ", "_blank");
    });

    
    document.getElementById("githubLinkBtn5").addEventListener("click", function () {
        window.open(" ", "_blank");
    });

/*  menu close and toggle **/
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-toggle svg');

function closeMenu() {
    menu.classList.remove('active');
    menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>`;
}


menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
    } else {
        closeMenu();
    }
});


document.querySelector('a[href="#closeBar"]').addEventListener('click', function(event) {
    event.preventDefault(); 
    closeMenu();
});



    




});
