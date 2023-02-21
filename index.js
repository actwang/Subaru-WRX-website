console.log("hello!");
const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile  = document.querySelector('.menu-btn-mobile');
const sidebar=document.querySelector('.sidebar');
const closeBtn=document.querySelector('.close-btn');
const backdrop=document.querySelector('.sidebar-backdrop');
const navbarmenu= document.querySelector('.navbar-menu');

AOS.init()

// menubtn events
menuBtn.addEventListener('click',sidebarOpen);
menuBtnMobile.addEventListener('click',sidebarOpen);

function sidebarOpen(){
    //change sidebar position
    sidebar.style.right = "0";
    //show backdrop
    backdrop.style.display="block";
    //show backdrop through a smooth transition
    setTimeout(()=>{
        backdrop.style.opacity="1";
    },50);
    // Disable scroll on body
    document.body.classList.add('sidebar-open-body');
}

closeBtn.addEventListener('click',() =>{
    //change sidebar position
    sidebar.style.right = "-20em";
    // Hide backdrop with a smooth transition
    backdrop.opacity="0";
    // Hide backdrop after transition is done
    setTimeout(() => {
        backdrop.style.display="none";
    }, 300);
    document.body.classList.remove('sidebar-open-body');
})