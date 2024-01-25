

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


let e1 = document.querySelector('.e1');  // Eye
let c1 = document.querySelector('.c1');  // Image
let b1 = document.querySelector('.b1');  // close 

e1.addEventListener('click',()=>{
    c1.style.display='block';    
    b1.style.display = 'block';
    e1.style.display='none';
    
});

b1.addEventListener('click',()=>{
    c1.style.display='none';
    e1.style.display='block';
    b1.style.display = 'none';
})


// For Second Certificate

let e2 = document.querySelector('.e2');  // Eye
let c2 = document.querySelector('.c2');  // Image
let b2 = document.querySelector('.b2');  // close 

e2.addEventListener('click',()=>{
    c2.style.display='block';    
    b2.style.display = 'block';
    e2.style.display='none';
    
});

b2.addEventListener('click',()=>{
    c2.style.display='none';
    e2.style.display='block';
    b2.style.display = 'none';
})


// For Third Certificate

let e3 = document.querySelector('.e3');  // Eye
let c3 = document.querySelector('.c3');  // Image
let b3 = document.querySelector('.b3');  // close 

e3.addEventListener('click',()=>{
    c3.style.display='block';    
    b3.style.display = 'block';
    e3.style.display='none';
    
});

b3.addEventListener('click',()=>{
    c3.style.display='none';
    e3.style.display='block';
    b3.style.display = 'none';
})


// for Forth certificate


let e4 = document.querySelector('.e4');  // Eye
let c4 = document.querySelector('.c4');  // Image
let b4 = document.querySelector('.b4');  // close 

e4.addEventListener('click',()=>{
    c4.style.display='block';    
    b4.style.display = 'block';
    e4.style.display='none';
    
});

b4.addEventListener('click',()=>{
    c4.style.display='none';
    e4.style.display='block';
    b4.style.display = 'none';
})


// for fifth certificate

let e5 = document.querySelector('.e5');  // Eye
let c5 = document.querySelector('.c5');  // Image
let b5 = document.querySelector('.b5');  // close 

e5.addEventListener('click',()=>{
    c5.style.display='block';    
    b5.style.display = 'block';
    e5.style.display='none';
    
});

b5.addEventListener('click',()=>{
    c5.style.display='none';
    e5.style.display='block';
    b5.style.display = 'none';
})

// for sixth certificate


let e6 = document.querySelector('.e6');  // Eye
let c6 = document.querySelector('.c6');  // Image
let b6 = document.querySelector('.b6');  // close 

e6.addEventListener('click',()=>{
    c6.style.display='block';    
    b6.style.display = 'block';
    e6.style.display='none';
    
});

b6.addEventListener('click',()=>{
    c6.style.display='none';
    e6.style.display='block';
    b6.style.display = 'none';
})











