YUI.add("value-change",function(E){function L(O){return((J.isString(O)||J.isArray(O))?E.all(O):(O instanceof E.Node)?E.all([O._node]):(O instanceof E.NodeList)?O:E.all([O]));}function H(Q,O){var P=E.on("available",function(){P.handle=E.on.apply(E,O);},Q);return P;}function B(Q,P){P[0]=C(Q);P.splice(2,1);Q.publish(P[0],{broadcast:true,emitFacade:true});var O=N(Q),R=Q.on.apply(Q,P);return R;}function C(O){return E.stamp(O)+"-"+I;}function G(O,R){var Q={};for(var P in O){Q[P]=K(P,O[P],R);}return Q;}function N(Q){var O=C(Q);var P=A[O]=A[O]||{count:0,handles:G(M,Q)};P.count++;return P;}function K(Q,O,P){var R=E.on(Q,O,P);E.after(E.bind(F,null,P,true),R,"detach");return R;}function F(Q,R){var P=A[C(Q)];if(!P){return;}P.count--;if(R){P.count=0;}if(P.count<=0){delete A[C(Q)];for(var O in P.handles){P.handles[O].detach();}}}var A={},J=E.Lang,D={on:function(T,S,R,U){var P=E.Array(arguments,0,true),O=L(R);if(O.size()===0){return H(R,P);}P[3]=U=U||((O.size()===1)?O.item(0):O);var Q=[];O.each(function(V){var W=B(V,P);Q.push(W);E.after(E.bind(F,null,V),W,"detach");});return{evt:Q,sub:O,detach:function(){E.Array.each(Q,function(V){V.detach();});}};}},I="valueChange",M=(function(){var Q={},T={},O={};function V(Y,Z){var X=C(Y);U(Y);T[X]=setInterval(E.bind(W,null,Y,Z),50);O[X]=setTimeout(E.bind(U,null,Y),10000);}function U(Y){var X=C(Y);clearTimeout(O[X]);clearInterval(T[X]);}function W(Y,a){var X=C(Y);var Z=Y.get("value");if(Z===Q[X]){return;}Y.fire(X,{type:I,value:Z,oldValue:Q[X],_event:a,target:Y,currentTarget:Y});Q[X]=Y.get("value");V(Y,a);}function R(X){if(X.charCode===229||X.charCode===197){V(X.currentTarget,X);}}function S(X){U(X.currentTarget);}function P(X){V(X.currentTarget,X);}return{keyup:R,blur:S,keydown:P};})();E.Env.evt.plugins[I]=D;if(E.Node){E.Node.DOM_EVENTS[I]=D;}},"@VERSION@",{optional:["event-custom"],requires:["node-base","event-focus"]});