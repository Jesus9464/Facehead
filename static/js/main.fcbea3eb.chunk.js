(this["webpackJsonpfacecall-app"]=this["webpackJsonpfacecall-app"]||[]).push([[0],{27:function(e,c,s){},29:function(e,c,s){},30:function(e,c,s){},31:function(e,c,s){},33:function(e,c,s){},34:function(e,c,s){},40:function(e,c,s){},41:function(e,c,s){},42:function(e,c,s){},43:function(e,c,s){},44:function(e,c,s){},45:function(e,c,s){},46:function(e,c,s){},52:function(e,c,s){},53:function(e,c,s){},54:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),i=s(21),n=s.n(i),r=s(15),o=s(4),l=(s(27),s(5)),j=s.n(l),d=s(9),A=s(2),m=(s(29),s(30),s(11)),h=s(12),u=(s(31),s.p+"static/media/user.81d7b418.svg"),b=s.p+"static/media/quitar.17a94979.svg",O=s(0);var g=function(e){var c=e.search,s=Object(a.useState)([]),t=Object(A.a)(s,2),i=t[0],n=t[1];Object(a.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]);var r=i.filter((function(e){var s;return null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.first.toLowerCase().includes(c.toLowerCase())}));function o(){return(o=Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=100",e.next=3,fetch("https://randomuser.me/api/?results=100");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,n(s.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"contenedor",children:[Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h2",{children:"B\xfasqueda recientes"}),Object(O.jsx)("h3",{children:"Editar"})]}),r.map((function(e,c){return Object(O.jsxs)("div",{className:"contenedor_principal",children:[Object(O.jsxs)("div",{className:"contendor_usuario",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:e.picture.large,alt:"usuario"})}),Object(O.jsxs)("h3",{children:[e.name.first," ",e.name.last]})]}),Object(O.jsx)("div",{className:"contenedor__imagen",children:Object(O.jsx)("img",{src:b,alt:""})})]},c)}))]})},x=(s(33),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEklEQVRoge2ZW2gcVRjH/2c22SQ1aZLNRXNraFATvKFs0QdfTPTFiKCIQUwFwZQYkqIY8cELrKLFF2+0G4yVgpBgm4q0oO2DJvpgVUICKohtUFuSzcZoLrK7uezOzPn7kLRddmZ2ZjJJfGg+WHZ2zjnf/P7nfOc7c84CO7Zj17aJTfEyRF/TSvxuAM0SCIJsAlFFsJAECCQoGQVwgeQ4wZFL04FRhIT0+mhPAm77dLlO12Q3yf0kawCAJEgAWPte+xAmZRFKDug5Ijx9oCyyrQJuHIpX+JN4k8DTJPwWgNng0+4jBfKY7lNfi3ZWz225gFsHEk9KicMQDGQHdASfXmeeFD3RnorjWyIg2M/c1cJEn5SiwwjiGf5qHaB/JrfyIDqFumkCgv3ctXLd0mckHtxS+Kvtz/jy5ePRzuplOzbFAXzuNsMDQKu2itMI/er3LGC1MNG3zfBrZVI8UF5S+oEdX9YQumUw0U6JAS/wCoiWej/urc5FfbGCkjwFKZ1QdSKWIn6MpvDxTyuW7SX5xEJvzQnXApo+iZUJRTkPsHyj8HdW+vBecyH2FvssO+lcJIXHPl+08E0AWEhRNMZfNE+xliGkKOKQF/i7Kn0Yenh3Vvh0yxJ2gRzK1y05zW7eMbBcu75IbQjeJ4jD9xfB73OWpR3MmY7St6N7HAtQKXvoYYVtbchDbZFtfkgTkBUeJP1S0bvM2uYY7oSokIl2L9mmuS7XFHQypqN3OI5f/lavkKuSdvBrzyCfwhBfRZvQswpo2hu/h0TtRuFJ4PYKY78AwAvDcXw3lbRtb7FC1+y+GAnGgNF0n2bj3OwFniTKC4xu/1qSOLdReF7+LVsy/ZoJ2Od1kSryGyfvZEwHPcADACWCtgIkebMXeJJQTJJPPCm9wRMgZGOmX0OwkqjyAr9+aTBJR9kmax1SVGX6NQmh9W3ghuEtFMArPACwKNOj2Qi4cvzD/oAh5s1C6L76PEw8e73h/snfVvDS14tO4E1H15jviATJgBN4ACjOE6aTNtNyFaAk3zjg0bjmGJ5kPLO92SSecQpPsy5xaRPzmlN4CGDGVgCICa8T1o39vqA6ggcACVywFUBwzFW28ACvSeDPRc0R/Pr1WKYP4yQGR4zA1pP6ua9iyLncDetlRx8qMWw0fp5V8f5o/EodAFjViKQmncKDCkZsBVyaDozuqVqYAllnB08CZ/9YNZR9xBKIDAWzSzpOnV92M2EzO29SlQ3jmbzGORASEpKDTuCtyqzMAzwADJodRZq+tOs5Ikwi5eWVejPhCSZTqhY282sqYPpAWQTksc2CB4x1HMOTkMRRvNU47VgAANDvf4XknFv47CHkHp7EvC50d3tiAIh0FC+Q4qBbeLvFzSU8CHYh1Gh56Jt14xrtqThOoP9/hA/rb9x0MptP2533TGVlN8FTTuEtRbiEB/ClrkSet+OzPzpoE7ovT7aDPOPi4Wb8zuHJLzRlVxtCzZp3AQCindXLswU3PELBD+3h3Wei9PYEw5ov8ihC9ifTgNnrtJV1CnUO6Aq8M/2tAhyRRPlGFrIs8P8Q7LaL+Uxzfvq0bgu9NSeSSTaR7AOQdLMWWC1SEjiiKckmt/CAmxFIs/jLtfMAusvenTqkaegB2E6iziX8FIABVdXDVouUE9ucv1lDVHYXRPaRsoUSwe+fqWoN5Iv80gKfIgTw74qUwxeXFztOz31DcowCI6psGN+Mv1l3bMeudfsPP8EkRZOLDr8AAAAASUVORK5CYII="),_=s.p+"static/media/buscar.5a0cb893.svg",v=s.p+"static/media/atras.2d863411.svg";var f=function(){var e=Object(a.useState)(!1),c=Object(A.a)(e,2),s=c[0],t=c[1],i=Object(a.useState)({busqueda:""}),n=Object(A.a)(i,2),r=n[0],o=n[1];return Object(O.jsxs)(a.Fragment,{children:[Object(O.jsxs)("div",{className:s?"header__conatiner_search2":"header__conatiner_search",children:[Object(O.jsx)("img",{src:s?v:x,alt:"logo-facebook"}),Object(O.jsxs)("div",{className:"header__conatiner_search-conatiner",children:[Object(O.jsx)("img",{className:s?"header__conatiner_search-img2":"header__conatiner_search-img",src:_,alt:"buscar"}),Object(O.jsx)("input",{name:"busqueda",onFocus:function(){return t(!0)},onBlur:function(){return t(!1)},className:s?"header__conatiner_search-input2":"header__conatiner_search-input",type:"text",placeholder:"Buscar en Facecall",onChange:function(e){o(Object(h.a)(Object(h.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))}})]})]}),Object(O.jsx)("div",{className:s?"modal__search2":"modal__search",children:Object(O.jsx)(g,{search:r.busqueda})})]})},p=(s(34),s.p+"static/media/home.b0189fdb.svg"),N=s.p+"static/media/watch.dc196e23.svg",B=s.p+"static/media/store.26c7c733.svg",Q=s.p+"static/media/group.1e9c04d6.svg",C=s.p+"static/media/games.d800b502.svg";var E=function(){var e=Object(a.useState)(!0),c=Object(A.a)(e,2),s=c[0],t=c[1],i=Object(a.useState)(!0),n=Object(A.a)(i,2),o=n[0],l=n[1],j=Object(a.useState)(!0),d=Object(A.a)(j,2),m=d[0],h=d[1],u=Object(a.useState)(!0),b=Object(A.a)(u,2),g=b[0],x=b[1],_=Object(a.useState)(!0),v=Object(A.a)(_,2),f=v[0],E=v[1];return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"header__conatiner_home",children:[Object(O.jsxs)(r.b,{to:"/",onFocus:function(){return t(!1)},onBlur:function(){return t(!0)},className:s?"home__conatiner":"home__conatiner2",children:[Object(O.jsx)("img",{className:s?"home__conatiner_img":"home__conatiner_img2",src:p,alt:"home"}),Object(O.jsx)("div",{className:"home__conatiner_title",children:Object(O.jsx)("h3",{children:"Inicio"})})]}),Object(O.jsxs)(r.b,{to:"/watch",onFocus:function(){return l(!1)},onBlur:function(){return l(!0)},className:o?"home__conatiner":"home__conatiner2",children:[Object(O.jsx)("img",{className:o?"home__conatiner_img":"home__conatiner_img2",src:N,alt:"home"}),Object(O.jsx)("div",{className:"home__conatiner_title",children:Object(O.jsx)("h3",{children:"Watch"})})]}),Object(O.jsxs)("button",{onFocus:function(){return h(!1)},onBlur:function(){return h(!0)},className:m?"home__conatiner":"home__conatiner2",children:[Object(O.jsx)("img",{className:m?"home__conatiner_img":"home__conatiner_img2",src:B,alt:"home"}),Object(O.jsx)("div",{className:"home__conatiner_title2",children:Object(O.jsx)("h3",{children:"Marketplace"})})]}),Object(O.jsxs)("button",{onFocus:function(){return x(!1)},onBlur:function(){return x(!0)},className:g?"home__conatiner":"home__conatiner2",children:[Object(O.jsx)("img",{className:g?"home__conatiner_img":"home__conatiner_img2",src:Q,alt:"home"}),Object(O.jsx)("div",{className:"home__conatiner_title",children:Object(O.jsx)("h3",{children:"Grupos"})})]}),Object(O.jsxs)("button",{onFocus:function(){return E(!1)},onBlur:function(){return E(!0)},className:f?"home__conatiner":"home__conatiner2",children:[Object(O.jsx)("img",{className:f?"home__conatiner_img":"home__conatiner_img2",src:C,alt:"home"}),Object(O.jsx)("div",{className:"home__conatiner_title2",children:Object(O.jsx)("h3",{children:"VideoJuegos"})})]})]})})},w=(s(40),s.p+"static/media/mas.19250efd.svg"),I=s.p+"static/media/messenger.b9ee067f.svg",F=s.p+"static/media/notificaciones.e19367c3.svg",D=s.p+"static/media/ordenar-abajo.bfd98d54.svg";s(41);var k=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"list_container",children:[Object(O.jsxs)("li",{className:"list_items",children:[Object(O.jsx)("a",{href:"/",children:"Privacidad"})," "]}),Object(O.jsxs)("li",{className:"list_items",children:[Object(O.jsx)("a",{href:"/",children:"Condiciones"})," "]}),Object(O.jsxs)("li",{className:"list_items",children:[Object(O.jsx)("a",{href:"/",children:"Publicidad"})," "]}),Object(O.jsxs)("li",{className:"list_items",children:[Object(O.jsx)("a",{href:"/",children:"Opciones de anuncios"})," "]}),Object(O.jsxs)("li",{className:"list_items",children:[Object(O.jsx)("a",{href:"/",children:"Cookies"})," "]}),Object(O.jsxs)("li",{className:"list_items2",children:[Object(O.jsx)("a",{href:"/",children:"M\xe1s"})," "]}),Object(O.jsxs)("li",{className:"list_items2",children:[Object(O.jsx)("a",{href:"/",children:"Facecall 2021"})," "]})]})})},y=(s(42),s.p+"static/media/configuracion.9ac858e0.svg"),S=s.p+"static/media/derecha.b7f95d22.svg",M=s.p+"static/media/informacion.9caa5b96.svg",J=s.p+"static/media/luna.51569faa.svg",K=s.p+"static/media/cerrar.e5ef9f23.svg";var z=function(e){var c=e.imagenUsuario,s=void 0===c?u:c,a=e.nombreUsuario;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"contenedor__principal",children:[Object(O.jsxs)("div",{className:"contenedor__social",children:[Object(O.jsx)("img",{src:s,alt:"usuario"}),Object(O.jsxs)("div",{className:"contenedor__social-title",children:[Object(O.jsx)("h4",{children:a}),Object(O.jsx)("h5",{children:"Ver tu perfil"})]})]}),Object(O.jsxs)("div",{className:"contenedor__comentarios",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:"data:image/gif;base64,R0lGODlhYABgAPcBAAAAAAD/ABAQECAgIDAwMFBQUGBgYHd3d7CwsMDAwODg4O/v7/Dw8P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAABACwAAAAAYABgAIcAAAAA/wAQEBAgICAwMDBQUFBgYGB3d3ewsLDAwMDg4ODv7+/w8PD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/wAbCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlyAByJxJs6bNmzhz6tzJUybEnkCDCh1a8yfRo0iTAjCqtKnTnEyfSpUadarVpFWvahWadavXnV2/irUZdqzZpQ/Pqi2adq3bsmBPIoWrE+XctkTtHqULVe5evEP15gXM1e9gh3dNJm64mGTjhW7fEo4sli9lqpMvb7WsuSnnzlgzg576efRhxn8Vp0Z92vFqho9Fxk44O+ZryLdl56a9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",alt:"comentarios"})}),Object(O.jsxs)("div",{className:"contenedor__comentarios-title",children:[Object(O.jsx)("h4",{children:"Enviar comentarios"}),Object(O.jsx)("h5",{children:" Ayudanos a mejorar la nueva version de Facebook"})]})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"contenedor__configuraciones",children:[Object(O.jsxs)("div",{className:"contenedor__configuraciones-principal",children:[Object(O.jsxs)("div",{className:"contenedor__configuraciones-hero",children:[Object(O.jsxs)("div",{className:"contenido__imagen",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:y,alt:"configuracion"})}),Object(O.jsx)("h4",{children:"Configuracion de privacidad"})]}),Object(O.jsx)("img",{className:"contenedor__configuraciones-imagen",src:S,alt:"flecha"})]}),Object(O.jsxs)("div",{className:"contenedor__configuraciones-hero",children:[Object(O.jsxs)("div",{className:"contenido__imagen",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:M,alt:"configuracion"})}),Object(O.jsx)("h4",{children:"Ayuda y soporte t\xe9cnico"})]}),Object(O.jsx)("img",{className:"contenedor__configuraciones-imagen",src:S,alt:"flecha"})]}),Object(O.jsxs)("div",{className:"contenedor__configuraciones-hero",children:[Object(O.jsxs)("div",{className:"contenido__imagen",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:J,alt:"configuracion"})}),Object(O.jsx)("h4",{children:"Pantalla y accesibilidad"})]}),Object(O.jsx)("img",{className:"contenedor__configuraciones-imagen",src:S,alt:"flecha"})]}),Object(O.jsx)("div",{className:"contenedor__configuraciones-hero",children:Object(O.jsxs)("div",{className:"contenido__imagen",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{src:K,alt:"configuracion"})}),Object(O.jsx)("h4",{children:"Cerrar sesi\xf3n"})]})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(k,{})})]})})]})})};var q=function(e){var c=e.name,s=e.picture,t=void 0===s?u:s,i=Object(a.useState)(!1),n=Object(A.a)(i,2),r=n[0],o=n[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"header__conatiner_social",children:[Object(O.jsx)("div",{className:"header__conatiner_social-container1",children:Object(O.jsxs)("button",{className:"header__conatiner_social_perfil",children:[Object(O.jsx)("img",{className:"header__conatiner_social_perfil-img",src:t,alt:"usuario"}),Object(O.jsx)("h2",{className:"header__conatiner_social_perfil-title",children:c})]})}),Object(O.jsxs)("div",{className:"header__conatiner_soacial-container2",children:[Object(O.jsxs)("button",{className:"container__social-imagen",children:[Object(O.jsx)("div",{className:"container__img_social",children:Object(O.jsx)("img",{src:w,alt:"home"})}),Object(O.jsx)("div",{className:"social__conatiner_title",children:Object(O.jsx)("h3",{children:"Crear"})})]}),Object(O.jsxs)("button",{className:"container__social-imagen",children:[Object(O.jsx)("div",{className:"container__img_social",children:Object(O.jsx)("img",{src:I,alt:"home"})}),Object(O.jsx)("div",{className:"social__conatiner_title2",children:Object(O.jsx)("h3",{children:"Messenger"})})]}),Object(O.jsxs)("button",{className:"container__social-imagen",children:[Object(O.jsx)("div",{className:"container__img_social",children:Object(O.jsx)("img",{src:F,alt:"home"})}),Object(O.jsx)("div",{className:"social__conatiner_title2",children:Object(O.jsx)("h3",{children:"Notificaciones"})})]}),Object(O.jsxs)("button",{onFocus:function(){return o(!0)},onBlur:function(){return o(!1)},className:r?"container__social-imagen2":"container__social-imagen",children:[Object(O.jsx)("div",{className:"container__img_social",children:Object(O.jsx)("img",{src:D,alt:"home"})}),Object(O.jsx)("div",{className:"social__conatiner_title",children:Object(O.jsx)("h3",{children:"cuenta"})})]})]})]}),Object(O.jsx)("div",{className:r?"container__modal2":"container__modal",children:Object(O.jsx)(z,{imagenUsuario:t,nombreUsuario:c})})]})};var H=function(e){var c,s,a,t;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"header__container",children:[Object(O.jsx)("div",{children:Object(O.jsx)(f,{})}),Object(O.jsx)("div",{children:Object(O.jsx)(E,{})}),Object(O.jsx)("div",{children:Object(O.jsx)(q,{name:null===(c=e.userData)||void 0===c||null===(s=c.name)||void 0===s?void 0:s.first,picture:null===(a=e.userData)||void 0===a||null===(t=a.picture)||void 0===t?void 0:t.thumbnail})})]})})},T=(s(43),s.p+"static/media/me-gusta.fb824694.svg"),G=s.p+"static/media/arriba.b7926f82.svg",P=s.p+"static/media/bandera.17ef55e1.svg",R=s.p+"static/media/juventud.3a6db3c0.svg",V=s.p+"static/media/eventos.0d27522d.svg",U=s.p+"static/media/recientes.fa846ae5.svg",L=s.p+"static/media/marcador.7d311cd3.svg",Y=s.p+"static/media/administrador.ce6434da.svg",Z=s.p+"static/media/comunicacion.48978e50.svg",X=s.p+"static/media/grafico-de-barras.932abb1a.svg",W=s.p+"static/media/clima.da4137e6.svg",$=s.p+"static/media/empleo.f68b706c.svg",ee=s.p+"static/media/favoritos.a379846e.svg",ce=s.p+"static/media/juego.8e472b38.svg",se=s.p+"static/media/lista.2a995856.svg",ae=s.p+"static/media/messenger3.d4b4e283.svg",te=s.p+"static/media/messenger2.27d6278e.svg",ie=s.p+"static/media/oferta.8a3cc447.svg",ne=s.p+"static/media/recaudacion.8134b531.svg",re=s.p+"static/media/saludemocional.1e29fdd7.svg",oe=s.p+"static/media/videojuego.7a5fd945.svg",le=s.p+"static/media/live.bb2d4ed8.svg",je=s.p+"static/media/ayuda.eff86fb3.svg",de=s.p+"static/media/televisor.e178c8c3.svg",Ae=s.p+"static/media/tarjeta.0a7fe15e.svg",me=[{title:"Usuario",imagen:u},{title:"COVID: Centro de informacion",imagen:T},{title:"P\xe1ginas",imagen:P},{title:"Grupos",imagen:R},{title:"Marketplace",imagen:B},{title:"Watch",imagen:N},{title:"Eventos",imagen:V},{title:"Reacuerdos",imagen:U},{title:"Guardado",imagen:L},{title:"Actividad publicitaria reciente",imagen:Y},{title:"Administrador de anuncios",imagen:X},{title:"Ayuda comunitaria",imagen:je},{title:"Centro de anuncios",imagen:Z},{title:"Clima",imagen:W},{title:"Empleos",imagen:$},{title:"Facebook Pay",imagen:Ae},{title:"Favoritos",imagen:ee},{title:"Jugar",imagen:ce},{title:"Lista de amigos",imagen:se},{title:"M\xe1s recientes",imagen:U},{title:"Messenger",imagen:ae},{title:"Messenger Kids",imagen:te},{title:"Ofertas",imagen:ie},{title:"Recaudaciones de fondos",imagen:ne},{title:"Salud mental",imagen:re},{title:"Videos de juegos",imagen:oe},{title:"Videos en vivo",imagen:le}];var he=function(){var e=Object(a.useState)(9),c=Object(A.a)(e,2),s=c[0],t=c[1],i=Object(a.useState)(!0),n=Object(A.a)(i,2),r=n[0],o=n[1];return Object(O.jsxs)("div",{className:"container__principal",children:[Object(O.jsxs)("div",{className:"container__hero",children:[me.slice(0,s).map((function(e,c){var s=e.imagen,a=e.title;return Object(O.jsxs)("div",{className:"container__hero_imagen",children:[Object(O.jsx)("img",{className:"imagen",src:s,alt:"user"}),Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h3",{className:"titulo_principal",children:a})})]},c)})),Object(O.jsxs)("div",{className:"container__hero_imagen",onClick:function(){o((function(e){return!0!==e})),t((function(e){return e>9?9:me.length}))},children:[Object(O.jsx)("button",{className:"boton",children:Object(O.jsx)("img",{className:"imagen__boton",src:r?D:G,alt:"user"})}),Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h3",{className:"titulo_principal",children:r?"Ver m\xe1s":"ver menos"})})]})]}),Object(O.jsxs)("div",{className:"footer__asideleft",children:[Object(O.jsx)("h1",{className:"footer_title",children:"Tus accesos directos"}),Object(O.jsxs)("div",{className:"container__hero_imagen",children:[Object(O.jsx)("img",{className:"imagen",src:de,alt:"user"}),Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h3",{className:"titulo_principal",children:"Memes de Programaci\xf3n"})})]})]}),Object(O.jsx)(k,{})]})};s(44),s(45);var ue=function(e){var c=e.imagenUser,s=Object(a.useState)([]),t=Object(A.a)(s,2),i=t[0],n=t[1];function r(){return(r=Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=4",e.next=3,fetch("https://randomuser.me/api/?results=4");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,n(s.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"container__historia",children:[Object(O.jsxs)("div",{className:"container__historia-imagen",children:[Object(O.jsx)("img",{className:"container__historia-imagen-img",src:c,alt:"foto"}),Object(O.jsx)("figure",{children:Object(O.jsx)("img",{className:"imagen__mas_historias",src:w,alt:"foto"})}),Object(O.jsxs)("h1",{children:["Crea una ",Object(O.jsx)("br",{})," historia"]})]}),i.map((function(e,c){return Object(O.jsxs)("div",{className:"container__historia-imagen-user",children:[Object(O.jsx)("img",{className:"container__historia-imagen-img-user",src:e.picture.large,alt:"foto"}),Object(O.jsx)("figure",{children:Object(O.jsx)("img",{className:"imagen__mas_historias-user",src:e.picture.large,alt:"foto"})}),Object(O.jsxs)("h1",{children:[e.name.first," ",e.name.last]})]},c)})),Object(O.jsx)("figurec",{className:"mas_historias",children:Object(O.jsx)("img",{src:S,alt:"mas"})}),Object(O.jsx)("h1",{className:"titulo_historias",children:"Ver todas las historias"})]})},be=s.p+"static/media/foto.dcaafe54.svg",Oe=s.p+"static/media/transmision.79187b76.svg",ge=s.p+"static/media/video-sala.ad208898.png";var xe=function(e){var c,s,t,i,n,r,o=Object(a.useState)([]),l=Object(A.a)(o,2),m=l[0],h=l[1],u="\xbfQu\xe9 est\xe1s pensando, ".concat(null===(c=e.userUsuario)||void 0===c||null===(s=c.name)||void 0===s?void 0:s.first,"?");function b(){return(b=Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=8",e.next=3,fetch("https://randomuser.me/api/?results=8");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,h(s.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"container__historias_principal",children:Object(O.jsx)(ue,{imagenUser:null===(t=e.userUsuario)||void 0===t||null===(i=t.picture)||void 0===i?void 0:i.large})}),Object(O.jsxs)("div",{className:"container__home_inicio",children:[Object(O.jsxs)("div",{className:"conatianer_header_principal",children:[Object(O.jsxs)("div",{className:"conatianer_header_principal-pregunta",children:[Object(O.jsx)("img",{src:null===(n=e.userUsuario)||void 0===n||null===(r=n.picture)||void 0===r?void 0:r.thumbnail,alt:"user"}),Object(O.jsx)("input",{type:"text",placeholder:u})]}),Object(O.jsxs)("div",{className:"conatianer_header_principal-live",children:[Object(O.jsxs)("div",{className:"contenedor__imagnes-live",children:[Object(O.jsx)("img",{src:Oe,alt:"live"}),Object(O.jsx)("h2",{children:"Video en vivo"})]}),Object(O.jsxs)("div",{className:"contenedor__imagnes-live",children:[Object(O.jsx)("img",{src:be,alt:"fotos"}),Object(O.jsx)("h2",{children:"Foto/video"})]})]})]}),Object(O.jsxs)("div",{className:"container__user-activos",children:[Object(O.jsxs)("div",{className:"usuarios__activos",children:[Object(O.jsx)("img",{src:ge,alt:"sala"}),Object(O.jsx)("h4",{children:"Crear sala"})]}),m.map((function(e,c){return Object(O.jsx)("img",{className:"imagen_activos",src:e.picture.large,alt:"usuario"},c)}))]}),Object(O.jsx)("figure",{className:"derecha_live_user",children:Object(O.jsx)("img",{src:S,alt:"derecha"})})]})]})},_e=(s(46),s.p+"static/media/regalo.9448d1fa.svg"),ve=s.p+"static/media/puntos.e1e2c114.svg",fe=s.p+"static/media/activo.a246edf3.svg";var pe=function(){var e,c,s,t,i=Object(a.useState)([]),n=Object(A.a)(i,2),r=n[0],o=n[1];function l(){return(l=Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=50",e.next=3,fetch("https://randomuser.me/api/?results=50");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,o(s.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),Object(O.jsxs)("div",{className:"conatainer__rigth_principal",children:[Object(O.jsx)("div",{className:"publicidad_contenido",children:Object(O.jsx)("h1",{children:"Publicidad"})}),Object(O.jsxs)("div",{className:"cumplea\xf1os_contenido",children:[Object(O.jsx)("h1",{children:"Cumplea\xf1os"}),Object(O.jsxs)("div",{className:"cumplea\xf1os__imagen",children:[Object(O.jsx)("img",{src:_e,alt:"cumplea\xf1os"}),Object(O.jsxs)("h3",{children:["Hoy es el cumplea\xf1os de ",Object(O.jsx)("br",{}),"".concat(null===(e=r[0])||void 0===e||null===(c=e.name)||void 0===c?void 0:c.first," ").concat(null===(s=r[0])||void 0===s||null===(t=s.name)||void 0===t?void 0:t.last)]})]})]}),Object(O.jsxs)("div",{className:"conatctos_container",children:[Object(O.jsx)("h3",{children:"Contactos"}),Object(O.jsxs)("div",{className:"conatactos_imagenes",children:[Object(O.jsx)("img",{src:ge,alt:""}),Object(O.jsx)("img",{src:_,alt:""}),Object(O.jsx)("img",{src:ve,alt:""})]})]}),Object(O.jsx)("div",{className:"chat__container",children:r.map((function(e){return Object(O.jsxs)("div",{className:"chat__activos",children:[Object(O.jsx)("img",{src:e.picture.large,alt:"usuario"}),Object(O.jsx)("img",{className:"activo",src:fe,alt:""}),Object(O.jsxs)("h3",{children:[e.name.first," ",e.name.last]})]})}))}),Object(O.jsxs)("div",{className:"grupos__container",children:[Object(O.jsx)("h1",{children:"Conversaciones en grupo"}),Object(O.jsxs)("div",{className:"grupos__imagenes_container",children:[Object(O.jsx)("figure",{children:Object(O.jsx)("img",{className:"imagen__mas",src:w,alt:"mas"})}),Object(O.jsx)("h3",{children:"Crear nuevo grupo"})]})]})]})},Ne=s(22),Be=s.n(Ne);var Qe=function(){var e=Object(a.useState)([]),c=Object(A.a)(e,2),s=c[0],t=c[1],i=Object(a.useState)(!1),n=Object(A.a)(i,2),r=n[0],o=n[1];function l(){return(l=Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://randomuser.me/api/?results=1",e.next=3,fetch("https://randomuser.me/api/?results=1");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,t(s.results[0]),o(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){o(!0),function(){l.apply(this,arguments)}()}),[]),Object(O.jsx)("div",{className:"app__contenido_inicio",children:Object(O.jsx)("div",{children:r?Object(O.jsx)(Be.a,{color:"#2139B1",loading:r,size:20}):Object(O.jsxs)("div",{children:[Object(O.jsx)(H,{userData:s}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"aside__left",children:Object(O.jsx)("div",{className:"aside__left_contenedor",children:Object(O.jsx)(he,{})})}),Object(O.jsx)("div",{className:"container__historias",children:Object(O.jsx)(xe,{userUsuario:s})}),Object(O.jsx)("div",{className:"asiderigth",children:Object(O.jsx)(pe,{})})]})]})})})};s(52),s(53);var Ce=function(){var e=Object(a.useRef)();console.log(e);var c=Object(a.useState)(!1),s=Object(A.a)(c,2),t=s[0],i=s[1],n=Object(a.useState)({busqueda:""}),r=Object(A.a)(n,2),o=r[0],l=r[1];return Object(O.jsxs)(a.Fragment,{children:[Object(O.jsxs)("div",{className:t?"header__conatiner_search2":"header__conatiner_search_social2",children:[Object(O.jsx)("img",{src:t?v:x,alt:"logo-facebook"}),Object(O.jsxs)("div",{className:"header__conatiner_search-conatiner",children:[Object(O.jsx)("img",{onClick:function(){return e.current.focus()},className:t?"header__conatiner_search-img2":"header__conatiner_search-img_social2",src:_,alt:"buscar"}),Object(O.jsx)("input",{ref:e,name:"busqueda",onFocus:function(){return i(!0)},onBlur:function(){return i(!1)},className:t?"header__conatiner_search-input2":"header__conatiner_search-input_social2",type:"text",onChange:function(e){l(Object(h.a)(Object(h.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))}})]})]}),Object(O.jsx)("div",{className:t?"modal__search2":"modal__search",children:Object(O.jsx)(g,{search:o.busqueda})})]})};var Ee=function(e){var c,s,a,t;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"header__container",children:[Object(O.jsx)("div",{children:Object(O.jsx)(Ce,{})}),Object(O.jsx)("div",{children:Object(O.jsx)(E,{})}),Object(O.jsx)("div",{children:Object(O.jsx)(q,{name:null===(c=e.userData)||void 0===c||null===(s=c.name)||void 0===s?void 0:s.first,picture:null===(a=e.userData)||void 0===a||null===(t=a.picture)||void 0===t?void 0:t.thumbnail})})]})})};var we=function(){return Object(O.jsx)(t.a.Fragment,{children:Object(O.jsx)(Ee,{})})};var Ie=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)(t.a.Fragment,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:Qe}),Object(O.jsx)(o.a,{exact:!0,path:"/watch",component:we})]})})})},Fe=document.getElementById("root");n.a.render(Object(O.jsx)(Ie,{}),Fe)}},[[54,1,2]]]);
//# sourceMappingURL=main.fcbea3eb.chunk.js.map