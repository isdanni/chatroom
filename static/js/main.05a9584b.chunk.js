(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),o=n.n(s),i=(n(15),n(8)),l=n(1),c=n(2),u=n(4),m=n(3),d=n(5),h=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement("ul",{className:"Messages-list"},t.map(function(t){return e.renderMessage(t)}))}},{key:"renderMessage",value:function(e){var t=e.member,n=e.text,a=this.props.currentMember,s=t.id===a.id?"Messages-message currentMember":"Messages-message";return r.a.createElement("li",{className:s},r.a.createElement("span",{className:"avatar",style:{backgroundColor:t.clientData.color}}),r.a.createElement("div",{className:"Message-content"},r.a.createElement("div",{className:"username"},t.clientData.username),r.a.createElement("div",{className:"text"},n)))}}]),t}(a.Component)),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({text:""}),this.props.onSendMessage(this.state.text)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Input"},r.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{onChange:function(t){return e.onChange(t)},value:this.state.text,type:"text",placeholder:"Enter your message and press ENTER",autofocus:"true"}),r.a.createElement("button",null,"Send")))}}]),t}(a.Component);function b(){var e=["autumn","hidden","bitter","misty","silent","empty","dry","dark","summer","icy","delicate","quiet","white","cool","spring","winter","patient","twilight","dawn","crimson","wispy","weathered","blue","billowing","broken","cold","damp","falling","frosty","green","long","late","lingering","bold","little","morning","muddy","old","red","rough","still","small","sparkling","throbbing","shy","wandering","withered","wild","black","young","holy","solitary","fragrant","aged","snowy","proud","floral","restless","divine","polished","ancient","purple","lively","nameless"],t=["waterfall","river","breeze","moon","rain","wind","sea","morning","snow","lake","sunset","pine","shadow","leaf","dawn","glitter","forest","hill","cloud","meadow","sun","glade","bird","brook","butterfly","bush","dew","dust","field","fire","flower","firefly","feather","grass","haze","mountain","night","pond","darkness","snowflake","silence","sound","sky","shape","surf","thunder","violet","water","wildflower","wave","water","resonance","sun","wood","dream","cherry","tree","fog","frost","voice","paper","frog","smoke","star"];return e[Math.floor(Math.random()*e.length)]+t[Math.floor(Math.random()*t.length)]}var f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={messages:[],member:{username:b(),color:"#"+Math.floor(16777215*Math.random()).toString(16)}},e.onSendMessage=function(t){e.drone.publish({room:"observable-room",message:t})},e.drone=new window.Scaledrone("bsJYrY0WLqveIkGN",{data:e.state.member}),e.drone.on("open",function(t){if(t)return console.error(t);var n=Object(i.a)({},e.state.member);n.id=e.drone.clientId,e.setState({member:n})}),e.drone.subscribe("observable-room").on("data",function(t,n){var a=e.state.messages;a.push({member:n,text:t}),e.setState({messages:a})}),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,"Chatroom 1.0")),r.a.createElement(h,{messages:this.state.messages,currentMember:this.state.member}),r.a.createElement(g,{onSendMessage:this.onSendMessage}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.05a9584b.chunk.js.map