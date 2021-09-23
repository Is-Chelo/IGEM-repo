
window.addEventListener('scroll', (e)=>{
    let y = window.scrollY;
    if(y >= 500){
        document.getElementById('nav').classList.add('my-nav')
    }else{
        document.getElementById('nav').classList.remove('my-nav')
    } 
})

function navBarColor(){
    document.getElementById('nav').classList.add('my-nav')
}