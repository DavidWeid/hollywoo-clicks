(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Bojack and Diane on a balcony",image:"./images/bojack-diane-balcony.jpg"},{id:2,name:"Bojack, Diane, and Tod in a car",image:"./images/bojack-diane-tod-car.jpg"},{id:3,name:"Bojack holding a lightbulb",image:"./images/bojack-lightbulb.jpg"},{id:4,name:"Bojack and Princess Carolyn cooking",image:"./images/bojack-pc-cooking.jpg"},{id:5,name:"Bojack and Princess Carolyn onset",image:"./images/bojack-pc-onset.jpg"},{id:6,name:"Bojack sneezing",image:"./images/bojack-sneezing.jpg"},{id:7,name:"Diane and Mr. Peanutbutter in a car",image:"./images/diane-mrpb-car.jpg"},{id:8,name:"Diane and Mr. Peanutbutter excited",image:"./images/diane-mrpb-excited.jpg"},{id:9,name:"Diane writing",image:"./images/diane-writing.jpg"},{id:10,name:"Princess Carolyn is serene",image:"./images/pc-serene.jpg"},{id:11,name:"Princess Carolyn working",image:"./images/pc-working.jpg"},{id:12,name:"Tod at work with clocks",image:"./images/todd-clocks.jpg"}]},,,,function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(2),r=t.n(i),o=(t(16),t(7)),s=t(3),l=t(4),m=t(8),d=t(5),u=t(9);t(17),t(18);var g=function(e){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top"},c.a.createElement("div",{className:"text-light text-center mx-auto nav-text"},e.children))};t(19);var p=function(e){return c.a.createElement("header",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"HOLLYWOO Clicks"),c.a.createElement("p",{className:"lead"},"Can you click each photo just ONCE?")))};t(20);var k=function(e){return c.a.createElement("main",{className:"container"},e.children)};t(21);var f=function(e){return c.a.createElement("img",{key:e.id,src:e.image,alt:e.name,className:"img-thumbnail click-item mx-auto",onClick:function(){return e.checkClicked(e.id)}})},j=t(6);t(22);var h=function(e){return c.a.createElement("div",null,c.a.createElement("span",{className:"current-score"},"Score: ",e.score)," |"," ",c.a.createElement("span",{className:"top-score"},"Top Score: ",e.topScore))};t(23);var b=function(e){return 12===e.score?alert("You Won"):c.a.createElement("div",null)},v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).addToClicked=function(e){t.setState(function(a){return{clicked:[].concat(Object(o.a)(a.clicked),[e])}})},t.updateScore=function(){t.setState(function(e){return{score:e.score+1}})},t.updateTopScore=function(e){e>=t.state.topScore&&t.setState(function(e){return{topScore:e.topScore+1}})},t.checkClicked=function(e){var a=e;t.addToClicked(a),-1===t.state.clicked.indexOf(a)?(console.log("Image "+a+" is not in the state.clicked array"),t.updateScore(),t.updateTopScore(t.state.score)):(console.log("Image "+a+" is already in the state.clicked array"),t.setState({clicked:[],score:0})),t.state.score+1===12&&t.setState({clicked:[],score:0})},t.shuffle=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.state={clicked:[],score:0,topScore:0},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=j.map(function(a){return c.a.createElement("div",{className:"col-3",position:a.id},c.a.createElement(f,{checkClicked:e.checkClicked,id:a.id,key:a.id,name:a.name,image:a.image}))});return this.shuffle(a),c.a.createElement("div",null,c.a.createElement(g,null,c.a.createElement(h,{score:this.state.score,topScore:this.state.topScore})),c.a.createElement(p,null),c.a.createElement(k,null,c.a.createElement(b,{score:this.state.score}),c.a.createElement("div",{className:"row game-row"},a[0],a[1],a[2],a[3]),c.a.createElement("div",{className:"row game-row"},a[4],a[5],a[6],a[7]),c.a.createElement("div",{className:"row game-row"},a[8],a[9],a[10],a[11])))}}]),a}(c.a.Component);r.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7548cee6.chunk.js.map