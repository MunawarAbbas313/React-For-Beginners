// main Container
const mainContainer = document.getElementById('root');



// Creating Element 

const ReactElement = {
    type : 'a',
    //properties 
    props: {
        href: 'https://www.google.com',
        target: '_blank'        
    },
    childern : 'Click me to vist Google '

}


// creating a Render function as in React 
function RendroFun(element , container)
{
    const domElemnt = document.createElement(element.type)
    domElemnt.innerHTML = element.childern;
    for (const prop in element.props) {
        if(prop === 'childern') continue;
        domElemnt.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElemnt);
    
}
RendroFun(ReactElement, mainContainer);
// 2nd Element 
const ReactElement2 = {
    type: 'button',
    // properties
    props: {
             href : "https://munawarabbas.com",
             target : "_blank",
    },
    childern : 'Click ME'
}
// 2nd Render function
function RendroFun2(el , con){
    const domElemnt2 = document.createElement(el.type);
    domElemnt2.innerHTML = el.childern;
    for (const p in el.props) {
         if(p === 'childern') continue;
         domElemnt2.setAttribute(p, el.props[p]);

    }
    con.appendChild(domElemnt2)

}

RendroFun2(ReactElement2,mainContainer);



