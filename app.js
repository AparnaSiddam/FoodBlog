const link = document.querySelector('.links');
const btns = link.getElementsByClassName('btn');


for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";    
    })
    
}

const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const side = document.querySelector('.sideNav');

bar.addEventListener('click', function(){
    side.style.width = '250px';

});

close.addEventListener('click', function(){
    side.style.width = '0px';
})