(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){},28:function(e,t,a){e.exports=a(51)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(25),s=a.n(i),o=a(17),l=a(2),c=(a(33),function(){return r.a.createElement("div",{className:"header-bar solid-border"},r.a.createElement("img",{className:"profil-img",alt:"avatarnp",src:"./img/miniaturka.jpg"}))}),u=a(14),m=(a(34),function(){return r.a.createElement("div",{className:"footer-bar solid-border"},r.a.createElement("p",{className:"footer-text"},"Copyright \xa9 Magdalena Szade"),r.a.createElement("a",{className:"github",href:"https://github.com/MagdaSzade",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,null)),r.a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/magdalena-szade/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.b,null)))}),h=a(4),p=a(5),d=a(7),g=a(6),b=a(18),v=a(16),k=(a(35),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={width:0,buttonsFront:[],buttonsSide:[],isSideBar:!1},n.navbarRef=r.a.createRef(),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentDidUpdate",value:function(){var e=0;if(this.props.buttons.length<=this.state.width/110)this.state.buttonsFront.length!==this.props.buttons.length&&this.setState({buttonsFront:this.props.buttons,buttonsSide:[]});else if(e=Math.floor((this.state.width-32)/110),this.state.buttonsFront.length!==e){for(var t=[],a=[],n=0;n<e;n++)t.push(Object(b.a)({},this.props.buttons[n]));for(var r=e;r<this.props.buttons.length;r++)a.push(Object(b.a)(Object(b.a)({},this.props.buttons[r]),{},{index:r}));this.setState({buttonsFront:t,buttonsSide:a})}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"updateDimensions",value:function(){try{(this.navbarRef.current.clientWidth>this.state.width+10||this.navbarRef.current.clientWidth<this.state.width-10)&&this.setState({width:this.navbarRef.current.clientWidth})}catch(e){console.log("DUPA!")}}},{key:"createButtonsFront",value:function(){var e=this;return this.state.buttonsFront.map((function(t,a){return r.a.createElement("div",{className:"button",key:t.text,type:"button",id:a,onClick:function(){e.props.onButtonClick(a)}},t.text)}))}},{key:"createButtonsSide",value:function(){var e=this;return this.state.buttonsSide.map((function(t){return console.log(t),r.a.createElement("div",{className:"button",key:t.text,type:"button",id:t.index,onClick:function(){e.props.onButtonClick(t.index)}},t.text)}))}},{key:"determineStyle",value:function(){return this.state.buttonsSide.length>0?"".concat(110*this.state.buttonsFront.length,"px 2.1rem"):"1fr"}},{key:"createHamburgerMenu",value:function(){var e=this;return this.state.buttonsSide.length>0&&!this.state.isSideBar?r.a.createElement("div",{className:"hamburger-menu",onClick:function(){return e.setState({isSideBar:!0})}},r.a.createElement(v.a,null)):this.state.buttonsSide.length>0?r.a.createElement("div",{className:"hamburger-menu",onClick:function(){return e.setState({isSideBar:!e.state.isSideBar})}},r.a.createElement("div",{className:"svg-center"},r.a.createElement(v.a,null)),r.a.createElement("div",{className:"buttons-side"},this.createButtonsSide())):void 0}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-bar-conteiner",ref:this.navbarRef},r.a.createElement("div",{className:"nav-bar",style:{gridTemplateColumns:this.determineStyle()}},r.a.createElement("div",{className:"buttons-front",style:{gridTemplateColumns:"repeat(".concat(this.state.buttonsFront.length,", 110px)")}},this.createButtonsFront()),this.createHamburgerMenu()))}}]),a}(r.a.Component)),f=a(10);var E=function(e){var t=e.skill;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"text center"},t.name)),r.a.createElement("td",null,r.a.createElement("div",{className:"stars center"},function(e){var t=e;return[null,null,null,null,null].map((function(e,a){return t>=1?(t-=1,r.a.createElement(f.c,{key:a})):.5===t?(t=0,r.a.createElement(f.d,{key:a})):r.a.createElement(f.b,{key:a})}))}(t.stars))),r.a.createElement("td",null,r.a.createElement("div",{className:"link center"},r.a.createElement("a",{href:t.github},t.gittext))))},y=function(e){return r.a.createElement("div",{className:"about table-conteiner"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nazwa"),r.a.createElement("th",null,"Stars"),r.a.createElement("th",null,"Github"))),r.a.createElement("tbody",null,e.items.map((function(e){return r.a.createElement(E,{key:e.name,skill:e})})))))},w=(a(36),function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,r.a.createElement("div",{className:"text center"},e.name),r.a.createElement("div",{className:"heart-icon"},e.addIcon?e.addIcon:null)),r.a.createElement("td",null,r.a.createElement("div",{className:"stars center"},function(e){var t=e;return[null,null,null,null,null].map((function(e,a){return t>=1?(t-=1,r.a.createElement(f.c,{key:a})):.5===t?(t=0,r.a.createElement(f.d,{key:a})):r.a.createElement(f.b,{key:a})}))}(e.stars))))});var x=function(e){return r.a.createElement("div",{className:"other-skills table-conteiner"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Nazwa"),r.a.createElement("th",null,"Stars"))),r.a.createElement("tbody",null,e.skills.map((function(e){return w(e)})))))},z=a(12),j=[{text:"PixelArt",id:0,stack:"React.js Express.js MongoDB",summary:"Aplikacja s\u0142u\u017cy do rysowania pikselart\xf3w",responsibility:"ca\u0142o\u015b\u0107.",http:"pixelartagainstsma.herokuapp.com",github:"github.com/MagdaSzade/pixelart"},{text:"Kino",id:1,stack:"React.js Express.js MongoDB",cooperators:[{name:"narghar",git:"github.com/narghar"},{name:"marek0209",git:"github.com/marek0209"},{name:"Pesidonvera",git:"github.com/Pesidonvera"}],summary:"Aplikacja s\u0142u\u017c\u0105ca do zamawiania bilet\xf3w w wymy\u015blonym kinie",responsibility:"cz\u0119\u015b\u0107 React.js oraz obs\u0142uga bazy danych",remark:"chwilowo strona nie dzia\u0142a poprawnie z powodu aktualizacji pakietu odpowiedzialnego za komunikacj\u0119 z MongoDB",http:null,github:"github.com/MagdaSzade/booking-tickets"},{text:"Pogodynka",id:2,stack:"VanillaJS Express.js",cooperators:[{name:"narghar",git:"github.com/narghar"},{name:"marek0209",git:"github.com/marek0209"},{name:"Pesidonvera",git:"github.com/Pesidonvera"}],summary:"Prosta aplikacja do sprawdzania aktualnej pogody w wybranym miejscu Polski",responsibility:"markup (HTML i CSS) oraz synchronizacja aplikacji z GoogleMapApi w zakresie autopodpowiedzi przy wpisywaniu lokalizacji.",http:"pogodynka-100.herokuapp.com/",github:"github.com/MagdaSzade/simply-weather-app"},{text:"Tablica",id:3,stack:"Express.js MongoDB",cooperators:[{name:"narghar",git:"github.com/narghar"},{name:"marek0209",git:"github.com/marek0209"},{name:"Pesidonvera",git:"github.com/Pesidonvera"}],summary:"Najprostsza aplikacja to-do list",responsibility:"komunikacja z MongoDB.",remark:"chwilowo strona nie dzia\u0142a poprawnie z powodu aktualizacji pakietu odpowiedzialnego za komunikacj\u0119 z MongoDB",http:"",github:"github.com/narghar/todo-app"},{text:"Statki",id:4,stack:"VanillaJS",cooperators:[{name:"narghar",git:"github.com/narghar"},{name:"marek0209",git:"github.com/marek0209"},{name:"Pesidonvera",git:"github.com/Pesidonvera"}],summary:"Przegl\u0105darkowa gra w statki",responsibility:"ca\u0142a mechanika gry oraz automatyczny przeciwnik.",remark:"nie zrobiono wersji mobile frendly.",http:"simply-ships.000webhostapp.com/",github:"github.com/MagdaSzade/ships"}];a(37);var S=function(){var e,t=Object(n.useState)(j[0]),a=Object(z.a)(t,2),i=a[0],s=a[1];return r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"nav-bar-cont"},r.a.createElement(k,{buttons:j,onButtonClick:function(e){s(j[e])}})),r.a.createElement("div",{className:"description"},r.a.createElement("h1",null,i.text),r.a.createElement("h2",null,"Technologie: ",i.stack),r.a.createElement("h2",null,i.summary),r.a.createElement("div",{className:"cooperators"},i.cooperators?r.a.createElement("div",{className:"center"},r.a.createElement("p",null,"Razem z:")):null,void 0===(e=i.cooperators)?null:e.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("a",{href:"https://".concat(e.git)},e.name))}))),r.a.createElement("div",{className:"desc"},r.a.createElement("p",null,"Wykona\u0142am: ",i.responsibility),i.remark?r.a.createElement("p",{className:"bold"},"Uwaga! ",i.remark):null,r.a.createElement("a",{href:"https://".concat(i.http)},i.http),r.a.createElement("a",{href:"https://".concat(i.github)},i.github))))},C=[{name:"j\u0119zyk angielski",stars:4},{name:"przyswajanie nowej wiedzy",stars:4.5,addIcon:r.a.createElement(f.a,null)},{name:"debugging",stars:5,addIcon:r.a.createElement(f.a,null)},{name:"rozwi\u0105zywanie problem\xf3w",stars:4.5,addIcon:r.a.createElement(f.a,null)},{name:"ch\u0119\u0107 do nauki",stars:5},{name:"samodzielno\u015b\u0107",stars:5},{name:"praca zespo\u0142owa",stars:4},{name:"zarz\u0105dzanie czasem",stars:4},{name:"praca z dokumentacj\u0105",stars:4}],N=[{name:"Github",stars:2},{name:"Webpack",stars:2},{name:"Babel",stars:2}],O=[{text:"JavaScript",content:r.a.createElement(y,{items:[{name:"Vanilla JavaScript",stars:3.5,github:"https://github.com/MagdaSzade/ships",gittext:"ships"},{name:"React.js",stars:3,github:"https://github.com/MagdaSzade/pixelart/tree/master/client",gittext:"pixelart"},{name:"Express.js",stars:3.5,github:"https://github.com/MagdaSzade/pixelart/tree/master/server",gittext:"pixelart"},{name:"jest.js, enzyme.js",stars:1,github:"https://github.com/MagdaSzade/pixelart/tree/master/server",gittext:"pixelart"}]})},{text:"Projekty",content:r.a.createElement(S,null)},{text:"Inne",content:r.a.createElement(y,{items:[{name:"API",stars:4.5,github:"https://github.com/MagdaSzade/simply-weather-app/blob/master/js/modules/prompt.js",gittext:"weather-app"},{name:"HTML5",stars:2.5,github:"https://github.com/MagdaSzade/simply-weather-app/tree/master/public",gittext:"weather-app"},{name:"CSS",stars:2,github:"https://github.com/MagdaSzade/playground/tree/master/client/src/styles",gittext:"playground"}]})},{text:"Narz\u0119dzia",content:r.a.createElement(x,{skills:N})},{text:"Java",content:r.a.createElement(y,{items:[{name:"Java",stars:2.5,github:"https://github.com/MagdaSzade/magdalena-szade-kodilla-java",gittext:"kodilla-java"},{name:"Spring",stars:2,github:"https://github.com/MagdaSzade/CrudTasks",gittext:"CrudTasks"},{name:"JUnit, Mockito",stars:2,github:"https://github.com/MagdaSzade/CrudTasks/tree/master/src/test/java/com/crud/tasks",gittext:"CrudTasks"}]})},{text:"Umiej\u0119tno\u015bci",content:r.a.createElement(x,{skills:C})}],M=(a(23),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={currentView:0,prevView:0,count:0},e.onButtonClick=function(t){t!==e.state.currentView&&e.setState({currentView:t})},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content solid-border"},r.a.createElement("div",{className:"hello"},r.a.createElement("h1",null,"Cze\u015b\u0107 jestem Magda!"),r.a.createElement("p",null,"Zapraszam do zapoznania si\u0119 z moimi projektami.")),r.a.createElement("div",{className:"nav-bar-cont"},r.a.createElement(k,{buttons:O,onButtonClick:this.onButtonClick})),r.a.createElement("div",{className:"box"},O[this.state.currentView].content))}}]),a}(r.a.Component)),P=function(e,t){for(var a=[],n=0;n<e*t;n++){var r={color:"white",key:B(n,t)};a.push(r)}return a},B=function(e,t){var a=e%t,n=Math.floor(e/t);return D(n,a)},D=function(e,t){var a="";return a+=e<10?"0"+e:e,a+=t<10?"0"+t:t},T=function(e,t){return parseInt(e.substring(0,2))*t+parseInt(e.substring(2))},R=(a(38),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onClick=function(){n.props.onPixelClick(n.pixelRef)},n.pixelRef=r.a.createRef(),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.pixelRef.current.addEventListener("click",this.onClick)}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.pixelRef,className:"pixel thin-border",id:this.props.id,style:this.props.style})}}]),a}(r.a.Component)),I=(a(39),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).colorsToSelect=["red","green","yellow","black","blue","purple","orange","white"],e.onSelectColor=function(t){e.props.selectColor(t.current.style.backgroundColor)},e}return Object(p.a)(a,[{key:"allColorToSelect",value:function(){var e=this;return this.colorsToSelect.map((function(t){return r.a.createElement(R,{style:{backgroundColor:t},key:t,onPixelClick:e.onSelectColor})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"select-color grid"},r.a.createElement("div",{className:"selected-color flex"},r.a.createElement("div",{className:"selected-color-text"},"Wybrany kolor"),r.a.createElement(R,{style:{backgroundColor:this.props.selectedColor}})),r.a.createElement("div",{className:"colors-to-select flex"},this.allColorToSelect()))}}]),a}(r.a.Component)),F=(a(40),function(e){var t=e.onButtonClick,a=e.text;return r.a.createElement("button",{className:"button thin-border",onClick:t},a)}),A=(a(41),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={height:e.props.height,width:e.props.width},e.onHeightChange=function(t){if(t.target.value&&!t.target.value.includes("e"))try{e.setState({height:parseInt(t.target.value)})}catch(a){}else e.setState({height:""})},e.onWidthChange=function(t){if(t.target.value&&!t.target.value.includes("e"))try{e.setState({width:parseInt(t.target.value)})}catch(a){}else e.setState({width:""})},e.onSizeChange=function(t){t.preventDefault(),e.state.width<=20&&e.state.width>0&&e.state.height<=20&&e.state.height>0&&e.props.selectSize({width:e.state.width,height:e.state.height})},e.onClear=function(){var t=P(e.state.width,e.state.height);e.props.clearCanva(t)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"select-size"},r.a.createElement("form",{onSubmit:this.onSizeChange},r.a.createElement("div",{className:"grid inputs"},r.a.createElement("label",{htmlFor:"height"},"Wysoko\u015b\u0107"),r.a.createElement("input",{type:"number",id:"height",name:"height",min:"1",max:"20",value:this.state.height,onChange:this.onHeightChange}),r.a.createElement(F,{onButtonClick:this.onSizeChange,text:"zmie\u0144"}),r.a.createElement("label",{htmlFor:"width"},"Szeroko\u015b\u0107"),r.a.createElement("input",{type:"number",id:"width",name:"width",min:"1",max:"20",value:this.state.width,onChange:this.onWidthChange}),r.a.createElement(F,{onButtonClick:this.onClear,text:"wyczy\u015b\u0107"}))),r.a.createElement("div",{className:"info"},"wysoko\u015b\u0107 i szeroko\u015b\u0107 musz\u0105 mie\u015bci\u0107 si\u0119 w zakresie 1-20"))}}]),a}(r.a.Component)),W=(a(42),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={width:0,height:0,isClicked:!1},n.createCanva=function(){return n.props.pixels.map((function(e){return r.a.createElement(R,{key:e.key,id:e.key,style:{backgroundColor:e.color},onPixelClick:n.onChangeColor})}))},n.onChangeColor=function(e){var t=T(e.current.id,n.props.width),a=n.props.pixels.map((function(e,a){return a===t?{color:n.props.color,key:e.key}:e}));n.props.setPixels(a)},n.onPainting=function(e){if(n.state.isClicked&&e.target.id){var t=T(e.target.id,n.props.width);e.target.style.backgroundColor=n.props.color,n.tempPixels.push(t)}},n.startPainting=function(){n.setState({isClicked:!0})},n.stopPainting=function(){if(n.setState({isClicked:!1}),0!==n.tempPixels.length){var e=n.props.pixels.map((function(e,t){return n.tempPixels.includes(t)?{color:n.props.color,key:e.key}:e}));n.tempPixels=[],n.props.setPixels(e)}},n.tempPixels=[],n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props),this.setState({width:this.props.width,height:this.props.height})}},{key:"componentDidUpdate",value:function(){var e=this;if(this.props.clear){var t=P(this.props.height,this.props.width);this.props.setPixels(t),this.setState({width:this.props.width,height:this.props.height}),this.props.clearCanva(!1)}if(this.props.width!==this.state.width||this.props.height!==this.state.height){var a=P(this.props.height,this.props.width);a.forEach((function(t){var a=e.props.pixels.findIndex((function(e){return e.key===t.key}));-1!==a&&(t.color=e.props.pixels[a].color)})),this.props.setPixels(a),this.setState({width:this.props.width,height:this.props.height})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"canva-conteiner",onMouseOver:this.onPainting,onMouseDown:this.startPainting,onMouseUp:this.stopPainting,onMouseLeave:this.stopPainting},r.a.createElement("div",{className:"canva",id:"canva",style:{gridTemplateColumns:"repeat(".concat(this.props.width,", 20px)")}},this.createCanva()))}}]),a}(r.a.Component)),J=(a(43),function(){var e=Object(n.useState)("red"),t=Object(z.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)({width:10,height:10}),o=Object(z.a)(s,2),l=o[0],c=o[1],u=Object(n.useState)((function(){return P(l.width,l.height)})),m=Object(z.a)(u,2),h=m[0],p=m[1];return r.a.createElement("div",{className:"pixelart"},r.a.createElement("p",null,"Zapraszam pod: ",r.a.createElement("a",{href:"https://pixelartagainstsma.herokuapp.com/"},"pixelartagainstsma.herokuapp.com")),r.a.createElement(A,{selectSize:c,width:l.width,height:l.width,clearCanva:p}),r.a.createElement(I,{selectColor:i,selectedColor:a}),r.a.createElement(W,{width:l.width,height:l.height,color:a,pixels:h,setPixels:p}))}),U=function(){return r.a.createElement("div",null,"inProgress...")},V=[{name:"pixelart",component:r.a.createElement(J,null)},{name:"statki",component:r.a.createElement(U,null)}],H=function(){var e=Object(n.useState)(0),t=Object(z.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"select-project",style:{display:"none"},onClick:function(e){return i(e.target.id)}},V.map((function(e,t){return r.a.createElement("button",{id:t,key:t},e.name)}))),r.a.createElement("div",{className:"game-conteiner"},V[a].component))},L=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"inProgress..."))},G=a(26),Z=(a(44),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={firstTime:!0,isMenuOpen:!1},e.items=[{href:"/",icon:r.a.createElement(u.c,null)},{href:"/games",icon:r.a.createElement(G.a,null)},{href:"/contact",icon:r.a.createElement(u.d,null)}],e.onOpenMenu=function(){e.state.firstTime&&e.setState({firstTime:!1}),e.setState({isMenuOpen:!e.state.isMenuOpen})},e}return Object(p.a)(a,[{key:"createMenu",value:function(){return this.items.map((function(e,t){return r.a.createElement("li",{key:t,className:"item".concat(t)},r.a.createElement(o.b,{to:e.href},e.icon))}))}},{key:"wrapperClassNames",value:function(){return this.state.firstTime?"cn-wrapper":this.state.isMenuOpen?"cn-wrapper animation-open":"cn-wrapper animation-close"}},{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("button",{className:"cn-button",onClick:this.onOpenMenu},r.a.createElement(v.a,null)),r.a.createElement("div",{className:this.wrapperClassNames()},r.a.createElement("ul",null,this.createMenu())))}}]),a}(r.a.Component)),_=(a(50),function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app-conteiner"},r.a.createElement("div",{className:"app-content"},r.a.createElement(Z,null),r.a.createElement("div",{className:"content-conteiner"},r.a.createElement(c,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/games"},r.a.createElement(H,null)),r.a.createElement(o.a,{path:"/contact"},r.a.createElement(L,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(M,null))),r.a.createElement(m,null)))))});s.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.622a58aa.chunk.js.map