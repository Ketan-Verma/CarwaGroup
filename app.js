function changeNavbarBg() {
    const navbar = document.querySelector('.nav');
    const scrollPosition = window.scrollY;
    const oneVh = window.innerHeight ;
    if (scrollPosition > oneVh*9 ) {
      navbar.style.color = '#fff'; // Change this to the desired background color
  }
    else if (scrollPosition > oneVh*4 ) {
        navbar.style.color = '#fff'; // Change this to the desired background color
    }
    else if (scrollPosition > oneVh*3 ) {
      navbar.style.color = '#fff'; // Change this to the desired background color
    } 
    else if(scrollPosition > oneVh*2){
        navbar.style.color = '#fff';
    }
    else {
        navbar.style.color="#000"
      navbar.style.backgroundColor = 'transparent'; // Change this to the original background color of your navbar
    }
  }
  
  window.addEventListener('scroll', changeNavbarBg);
  