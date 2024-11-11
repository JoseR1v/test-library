(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{2520:(e,a,t)=>{Promise.resolve().then(t.bind(t,5326))},9987:(e,a,t)=>{"use strict";t.d(a,{A:()=>n});var s=t(5155);t(2115);var l=t(9757),i=t(3134);let n=e=>{let{variant:a="primary",disabled:t,children:n,className:c,icon:r,isLoading:o,iconSize:d,onClick:h,type:x}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{className:"\n                ".concat(c,"\n                ").concat({primary:"bg-primary",secondary:"bg-secondary text-white",outline:"bg-tranparent shadow-none border border-secondary"}[a],"\n                ").concat(t?"opacity-50 cursor-not-allowed":"hover:opacity-90","\n                ").concat(n?"rounded-md py-3 px-8":"rounded-full w-12 h-12"," \n                focus:outline-none shadow-md font-medium flex justify-center items-center\n            "),disabled:t,type:x,onClick:h,children:o?(0,s.jsx)(i.A,{}):(0,s.jsxs)(s.Fragment,{children:[n,r&&(0,s.jsx)(l.g,{className:"".concat(d||"w-6"," ").concat(n&&"ml-4"),icon:r})]})})})}},9097:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var s=t(5155);t(2115);let l=e=>{let{children:a,className:t,onClick:l}=e;return(0,s.jsx)("div",{className:"".concat(t," p-7 bg-white rounded-lg shadow-lg inline-block"),onClick:l,children:a})}},3134:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var s=t(5155);t(2115);let l=e=>{let{size:a=8}=e;return(0,s.jsxs)("div",{role:"status",className:"flex justify-center items-center",children:[(0,s.jsxs)("svg",{"aria-hidden":"true",className:"w-".concat(a," h-").concat(a," text-gray-light animate-spin fill-secondary"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,s.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},492:(e,a,t)=>{"use strict";t.d(a,{default:()=>n});var s=t(5155);t(2115);var l=t(6046),i=t(9987);let n=e=>{let{route:a,icon:t}=e,n=(0,l.useRouter)();return(0,s.jsx)(i.A,{icon:t,onClick:()=>{n.push("".concat(a))},variant:"outline",children:"Volver"})}},8861:(e,a,t)=>{"use strict";t.d(a,{BookProvider:()=>c,H:()=>n});var s=t(5155),l=t(2115),i=t(532);let n=(0,l.createContext)(),c=e=>{let{children:a}=e,[t,c]=(0,l.useState)([]),[r,o]=(0,l.useState)(null),[d,h]=(0,l.useState)(!1),x=async(e,a)=>{h(!0);try{let t=await (0,i.x)(e,a);c(t)}catch(e){console.error("Error fetching books:",e)}finally{h(!1)}};return(0,s.jsx)(n.Provider,{value:{books:t,setBooks:c,selectedBook:r,setSelectedBook:o,fetchBooks:x,loading:d},children:a})}},5326:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>f});var s=t(5155),l=t(2115),i=t(532),n=t(5565),c=t(8861),r=t(9097),o=t(9757),d=t(5055),h=t(9987),x=t(492);let u=e=>{let{relatedBySubject:a=[]}=e;return(0,s.jsx)("div",{className:"mt-20",children:a.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Libros relacionados"}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center gap-4",children:a.map(e=>(0,s.jsxs)(r.A,{className:"w-72 flex flex-col items-center justify-between gap-4 py-10",children:[e.coverId&&(0,s.jsx)(n.default,{className:"rounded-lg min-h-[200px]",src:"".concat("https://covers.openlibrary.org/b/id","/").concat(e.coverId,"-L.jpg"),alt:"Portada de ".concat(e.title),width:150,height:200,layout:"fixed",objectFit:"cover",placeholder:"blur",blurDataURL:"/placeholder.png"}),(0,s.jsx)("p",{className:"font-semibold text-center",children:e.title}),e.ia&&(0,s.jsx)(h.A,{className:"w-full",icon:d.LBj,iconSize:"h-5",onClick:()=>window.open("".concat("https://archive.org/details/").concat(e.ia),"_blank"),children:"Leer"})]},e.id))})]})})};var m=t(6046),p=t(3134);function f(e){let{params:a}=e,t=(0,m.useRouter)(),{id:f}=(0,l.use)(a),{books:j,selectedBook:g,setSelectedBook:b}=(0,l.useContext)(c.H),[v,y]=(0,l.useState)([]),[w,N]=(0,l.useState)(!0),C=g||j.find(e=>e.id===f);return((0,l.useEffect)(()=>{let e=async()=>{if(C){b(C);try{var e;if(null===(e=C.subject)||void 0===e?void 0:e[0]){let{relatedBySubject:e}=await (0,i.u)(C.subject[0]);y(e)}}catch(e){console.error("Error al obtener los detalles del libro:",e)}finally{N(!1)}}else t.push("/pages/search-book")};C?e():N(!1)},[f,C,b]),w)?(0,s.jsxs)("div",{className:"flex flex-col w-full items-center mt-32 justify-center gap-12 opacity-55",children:[(0,s.jsx)(p.A,{size:24}),(0,s.jsx)("p",{className:"font-semibold text-2xl text-center",children:"Cargando informaci\xf3n ..."})]}):(0,s.jsxs)("div",{className:"container mx-auto px-4 py-6",children:[(0,s.jsx)(x.default,{route:"/pages/search-book",icon:d.$UM}),C?(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.A,{className:"mt-20 px-20 py-16 flex gap-12 max-lg:flex-col max-lg:items-center",children:[C.image&&(0,s.jsx)(n.default,{className:"rounded-lg max-h-fit",src:C.image,alt:"Portada de ".concat(C.title),width:250,height:300,layout:"fixed",objectFit:"cover",placeholder:"blur",blurDataURL:"/placeholder.png"}),(0,s.jsxs)("div",{className:"flex flex-col justify-between w-full",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:C.title}),(0,s.jsx)("p",{className:"text-lg font-semibold",children:C.author}),(0,s.jsxs)("p",{className:"text-secondary font-light",children:["Publicado en ",C.publishYear]})]}),(0,s.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,s.jsx)(o.g,{className:"text-primary",icon:d.yy}),(0,s.jsx)("p",{children:C.rating?C.rating.toFixed(2):"No calificaci\xf3n"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold text-primary",children:"N\xfamero de P\xe1ginas"}),(0,s.jsx)("p",{children:C.numPage||"No definido."})]}),C.language&&(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold text-primary",children:"Idiomas"}),(0,s.jsx)("div",{className:"flex gap-2 flex-wrap",children:C.language.map((e,a)=>(0,s.jsx)("div",{className:"bg-secondary-100 py-1 px-2 rounded-md",children:(0,s.jsx)("p",{children:e})},a))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold text-primary",children:"Descripci\xf3n"}),(0,s.jsx)("p",{className:"text-justify",children:C.description||"No hay descripci\xf3n disponible."})]})]}),(0,s.jsxs)("div",{className:"flex justify-end gap-4 mt-4",children:[(0,s.jsx)(h.A,{variant:"secondary",icon:d.H37,conSize:"h-5",onClick:()=>window.open("".concat("https://www.amazon.com/dp","/").concat(C.amazonId),"_blank"),disabled:void 0===C.amazonId,children:"Amazon"}),(0,s.jsx)(h.A,{icon:d.LBj,conSize:"h-5",onClick:()=>window.open("".concat("https://archive.org/details/").concat(C.ia[0]),"_blank"),disabled:void 0===C.ia,children:"Leer"})]})]})]}),(0,s.jsx)(u,{relatedBySubject:v})]}):(0,s.jsxs)("div",{className:"flex flex-col w-full items-center mt-20 justify-center gap-12 opacity-55",children:[(0,s.jsx)(o.g,{className:"h-24",icon:d._bB}),(0,s.jsx)("p",{className:"font-semibold text-2xl text-center",children:"404 | Informaci\xf3n no encontrada"})]})]})}},532:(e,a,t)=>{"use strict";t.d(a,{u:()=>l,x:()=>s});let s=async(e,a)=>{if(!e)return[];try{let t="".concat("https://openlibrary.org/search.json?").concat("T\xedtulo"===a?"title":"author","=").concat(e),s=await fetch(t);return(await s.json()).docs.map(e=>({id:e.key,title:e.title,author:e.author_name?e.author_name[0]:"Autor desconocido",authorKey:e.author_key,subject:e.subject_key,publishYear:e.first_publish_year||"A\xf1o desconocido",image:e.cover_i?"".concat("https://covers.openlibrary.org/b/id","/").concat(e.cover_i,"-L.jpg"):"/placeholder.png",description:e.first_sentence?e.first_sentence[0]:"Sin descripci\xf3n disponible",amazonId:e.id_amazon?e.id_amazon[0]:void 0,rating:e.ratings_average?e.ratings_average:0,ia:e.ia,language:e.language,numPage:e.number_of_pages_median}))}catch(e){return console.error("Error fetching books:",e),[]}},l=async e=>{let a=[];if(null==e?void 0:e.length){let t=await fetch("".concat("https://openlibrary.org/subjects","/").concat(e.toLowerCase(),".json?limit=5"));a=(await t.json()).works.map(e=>({id:e.key,title:e.title,coverId:e.cover_id,ia:e.ia}))}return{relatedBySubject:a}}}},e=>{var a=a=>e(e.s=a);e.O(0,[266,306,565,441,517,358],()=>a(2520)),_N_E=e.O()}]);