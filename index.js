

let nav = document.querySelector('.nav');
let features = document.querySelector('.features');
let hide = document.querySelector('.hide');

let pro = document.querySelector('#pro');
let edu = document.querySelector('#edu');



let project = document.querySelector('#project');
let education = document.querySelector('#education');
let repo = document.querySelector('#repo');


let cer = document.querySelector('#cer');
let ce = document.querySelector('#ce');



let sk = document.querySelector('#sk');
let re = document.querySelector('#re');
let skills = document.querySelector('.skills');


let all = document.querySelector('.all');
let co = document.querySelector('#co');



let mybutton = document.querySelector('#mybtn');
let last = document.querySelector('footer');
let profile = document.querySelector('.profile');

co.addEventListener('click',()=>{
    all.style.display = 'flex';
    last.scrollIntoView();
    features.style.display = "none";
    last.style.height = "390px";
    mybutton.style.display = "none";
    profile.style.display = "block";
})

let close = document.querySelector('.close');
close.addEventListener('click',()=>{
    profile.style.display = "none";
    last.style.height = "78px";
})


nav.addEventListener('click',()=>{
features.style.display = "block";
})


ce.addEventListener('click',()=>{
    cer.scrollIntoView();
    features.style.display = "none";
})

hide.addEventListener('click',()=>{
features.style.display = "none";
})


pro.addEventListener('click',()=>{
project.scrollIntoView();
features.style.display = "none";
})



edu.addEventListener('click',()=>{
education.scrollIntoView();
features.style.display = "none";
})



re.addEventListener('click',()=>{
    repo.scrollIntoView();
    features.style.display ="none";
})


sk.addEventListener('click',()=>{
skills.scrollIntoView();
features.style.display = "none";
})


let pp = document.querySelector('.pp');
let show = document.querySelector('.show');

show.addEventListener('click',()=>{
    pp.style.display= "block";
    show.style.display= "none";
})



let qq = document.querySelector('.qq');
let show2 = document.querySelector('.show2');

show2.addEventListener('click',()=>{
    qq.style.display= "block";
    show2.style.display= "none";
})

let rr = document.querySelector('.rr');
let show3 = document.querySelector('.show3');

show3.addEventListener('click',()=>{
    rr.style.display= "block";
    show3.style.display= "none";
})




window.onscroll = function () {
    scroll();
}

let scroll = ()=>{

    if ( document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}





mybutton.addEventListener('click',()=>{
    
  document.documentElement.scrollTop = 0;

})



let imj = document.querySelector('.imj');
let cut = document.querySelector('.cut');
let eye = document.querySelector('.eye');

eye.addEventListener('click',()=>{
imj.style.display = "block";
cut.style.display = "block";
eye.style.display = "none";
})


cut.addEventListener('click',()=>{
    imj.style.display = "none";
cut.style.display = "none";
eye.style.display = "block"; 
})






