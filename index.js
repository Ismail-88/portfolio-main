// var typed = new typed(".text", {
// strings:["Frontend Developer", "Web Developer"],
// typeSpeed: 100,
// backSpeed: 100,
// backDelay: 1000,
// loop:true
// })
// toggle icon navbar//
let menuIcon = document.querySelector('#menu-icon1')
let navbar1 = document.querySelector('.navbar1')
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar1.classList.toggle('active1')
}

// scroll Selection//
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
// let navLink = document.querySelectorAll('header nav a i');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            });
            sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate')
        }
    })
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // console.log(sticky)
    menuIcon.classList.remove('bx-x')
    navbar1.classList.remove('active1')
}

// // jsonlink///
// // fetch("main.json")
// // .then(response => response.json()) 
// // .then(data => {
// //     console.log(data)
// //     data.project.forEach(box=>{

// //         let projectSection = document.getElementById('project')
// //         let container1 = document.querySelector('.container1') 
// //         let container = document.createElement('div')
// //         container.classList.add('container')
// //         container1.appendChild(container)
// //         let imageDiv = document.createElement('div')
// //         imageDiv.classList.add('image')
// //         container.appendChild(imageDiv)
// //         let img = document.createElement('img')
// //         img.src = box.src
// //         imageDiv.appendChild(img)
// //         let para = document.createElement('p')
// //         para.textContent = box.description
// //         container.appendChild(para)
// //          let cont = document.createElement('div')
// //          cont.classList.add('cont')
// //         container.appendChild(cont)
// //         let ancher = document.createElement('a')
// //         ancher.setAttribute('href', box.gitLink)
// //         ancher.target = "blank"
// //         ancher.gitLink = box.gitLink
// //        cont.appendChild(ancher)
// //        let button = document.createElement('button')
// //        button.classList.add('btn2')
// //        button.textContent = "GitHub"       
// //        ancher.appendChild(button)
// //        let ancher1 = document.createElement('a')
// //        ancher1.setAttribute('href', box.netLink)
// //        ancher1.target = "blank"
// //        ancher1.netLink = box.netLink
// //        ancher1.netLink = box.netLink
// //        cont.appendChild(ancher1)
// //        let button1 = document.createElement('button')
// //        button1.classList.add('btn2')
// //        button1.textContent = "Live Demo"       
// //        ancher1.appendChild(button1)

       


//     })
// })
fetch("projects.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    data.project.forEach(pro =>{
        let rowGrid = document.querySelector(".row-grid")
        let li = document.createElement("li")
        rowGrid.appendChild(li)

        let Imgg = document.createElement("div")
        Imgg.classList.add("IMGG")
        li.appendChild(Imgg)

        let Img = document.createElement("img")
        Img.src = pro.img
        Imgg.appendChild(Img)

        let pn = document.createElement("div")
        pn.classList.add("project-name")
        Imgg.appendChild(pn)

        let pt = document.createElement("h6")
        pt.classList.add("project-text")
        pn.appendChild(pt)
        pt.textContent = pro.project_name

        let links = document.createElement("div")
        links.classList.add("links")
        Imgg.appendChild(links)

        let btn = document.createElement("button")
        btn.classList.add("Btn")
    links.appendChild(btn)

        let spn = document.createElement("span")
        spn.classList.add("svgContainer")
        btn.appendChild(spn)
        let anchor = document.createElement("a")
        anchor.setAttribute("href", pro.git_link)
        anchor.target = "blank"
        spn.appendChild(anchor)
        let icon1 = document.createElement("img")
        icon1.src=pro.git_img
        anchor.appendChild(icon1)
        let spn1 = document.createElement("span")
        spn1.classList.add("BG")
        btn.appendChild(spn1)


        let btn2 = document.createElement("button")
        btn2.classList.add("Btn")
        links.appendChild(btn2)

        let spns = document.createElement("span")
        spns.classList.add("svgContainer")
        btn2.appendChild(spns)
        let anchors = document.createElement("a")
        anchors.setAttribute("href", pro.netli_link)
        anchors.target = "blank"
        spns.appendChild(anchors)
        let icon2 = document.createElement("img")
        icon2.src=pro.netli_img
        anchors.appendChild(icon2)
        let spnss = document.createElement("span")
        spnss.classList.add("BG")
        btn2.appendChild(spnss)

    })
})