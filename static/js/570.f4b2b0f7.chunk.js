"use strict";(self.webpackChunkmovie=self.webpackChunkmovie||[]).push([[570],{570:function(e,s,l){l.r(s);l(791);var i=l(871),a=l(707),t=l(419),r=l(410),c=l(197),n=l(184);function d(e){var s=e.kind,l=e.type,d=void 0===l?"videos":l,o=(0,i.UO)().movieId;console.log(o);var m=(0,t.ZP)(c.Qo.getMovieCast(s,o,d),c._i),x=m.data;m.error;if(!x)return null;if("credits"===d){var u=x.cast;return(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsx)("h2",{className:"mb-10 text-3xl text-center",children:"Casts"}),(0,n.jsx)("div",{className:" cast-list",children:(0,n.jsx)(a.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:u.slice(0,10).map((function(e){return(0,n.jsx)(a.o5,{children:(0,n.jsxs)("div",{className:"cast-item",children:[(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.profile_path),className:"w-full h-[350px] object-cover rounded-lg mb-3 select-none",alt:""}),(0,n.jsx)("h3",{className:"text-xl",children:e.name})]})},e.id)}))})})]})}var p=x.results;return"videos"===d?(0,n.jsx)("div",{className:"py-10",children:(0,n.jsx)("div",{className:"flex flex-col gap-5",children:p.slice(0,2).map((function(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"inline-block p-3 mb-5 text-xl font-medium text-white bg-secondary",children:e.name}),(0,n.jsx)("div",{className:"w-full aspect-video",children:(0,n.jsx)("iframe",{width:"956",height:"538",src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,className:"object-fill w-full h-full"})})]},e.id)}))})}):"similar"===d?(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsx)("h2",{className:"mb-10 text-3xl font-medium",children:"Similar movies"}),(0,n.jsx)("div",{className:"movie-list",children:(0,n.jsx)(a.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:p&&p.length>0&&p.map((function(e){return(0,n.jsx)(a.o5,{children:(0,n.jsx)(r.Z,{item:e})},e.id)}))})})]}):null}s.default=function(e){var s=e.kind,l=void 0===s?"movie":s,a=(0,i.UO)().movieId;console.log(a);var r=(0,t.ZP)(c.Qo.getMovieDetail(l,a),c._i),o=r.data;r.error;if(!o)return null;var m=o.backdrop_path,x=o.poster_path,u=o.title,p=o.genres,h=o.overview;return(0,n.jsx)(n.Fragment,{children:o&&(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsxs)("div",{className:"w-full h-[600px] relative",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-60"}),(0,n.jsx)("div",{className:"w-full h-full bg-no-repeat bg-cover",style:{backgroundImage:"url(".concat(c.Qo.imageOriginal(m),")")}})]}),(0,n.jsx)("div",{className:"w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] z-10 relative pb-10",children:(0,n.jsx)("img",{src:c.Qo.imageOriginal(x),className:"object-cover w-full h-full rounded-xl",alt:""})}),(0,n.jsx)("h1",{className:"mb-10 text-3xl font-bold text-center text-white",children:u}),p.length>0&&(0,n.jsx)("div",{className:"flex items-center justify-center mb-10 gap-x-5",children:p.map((function(e){return(0,n.jsx)("span",{className:"px-4 py-2 border rounded border-primary text-primary",children:e.name},e.id)}))}),(0,n.jsx)("p",{className:"text-sm text-center leading-relaxed max-w-[600px] mx-auto mb-10",children:h}),(0,n.jsx)(d,{kind:l,type:"credits"}),(0,n.jsx)(d,{kind:l,type:"videos"}),(0,n.jsx)(d,{kind:l,type:"similar"})]})})}}}]);
//# sourceMappingURL=570.f4b2b0f7.chunk.js.map