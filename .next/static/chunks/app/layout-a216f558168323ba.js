(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2659:(e,s,t)=>{Promise.resolve().then(t.bind(t,8418)),Promise.resolve().then(t.bind(t,8861)),Promise.resolve().then(t.t.bind(t,9324,23))},9987:(e,s,t)=>{"use strict";t.d(s,{A:()=>n});var a=t(5155);t(2115);var l=t(9757),r=t(3134);let n=e=>{let{variant:s="primary",disabled:t,children:n,className:c,icon:i,isLoading:o,iconSize:d,onClick:x,type:m}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{className:"\n                ".concat(c,"\n                ").concat({primary:"bg-primary",secondary:"bg-secondary text-white",outline:"bg-tranparent shadow-none border border-secondary"}[s],"\n                ").concat(t?"opacity-50 cursor-not-allowed":"hover:opacity-90","\n                ").concat(n?"rounded-md py-3 px-8":"rounded-full w-12 h-12"," \n                focus:outline-none shadow-md font-medium flex justify-center items-center\n            "),disabled:t,type:m,onClick:x,children:o?(0,a.jsx)(r.A,{}):(0,a.jsxs)(a.Fragment,{children:[n,i&&(0,a.jsx)(l.g,{className:"".concat(d||"w-6"," ").concat(n&&"ml-4"),icon:i})]})})})}},14:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(5155);t(2115);var l=t(9987);let r=e=>{let{children:s,buttonLabel:t,onButtonClick:r}=e;return(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-12 w-1/2 max-lg:w-5/6 flex flex-col items-center justify-center ",children:[(0,a.jsx)("div",{className:"flex flex-col items-center gap-6",children:s}),(0,a.jsx)("div",{className:"mt-12",children:(0,a.jsx)(l.A,{variant:"secondary",onClick:r,children:t})})]})})}},3134:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(5155);t(2115);let l=e=>{let{size:s=8}=e;return(0,a.jsxs)("div",{role:"status",className:"flex justify-center items-center",children:[(0,a.jsxs)("svg",{"aria-hidden":"true",className:"w-".concat(s," h-").concat(s," text-gray-light animate-spin fill-secondary"),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,a.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},8418:(e,s,t)=>{"use strict";t.d(s,{default:()=>x});var a=t(5155),l=t(2115),r=t(9987),n=t(14);t(3134);var c=t(5055),i=t(9757),o=t(6046),d=t(7396);let x=()=>{let e=(0,o.useRouter)(),s=(0,o.usePathname)(),[t,x]=(0,l.useState)(null),[m,h]=(0,l.useState)(!1),[u,f]=(0,l.useState)(!1),p="/"===s,g=()=>{let e=localStorage.getItem("userData");e?x(JSON.parse(e)):x(null)};(0,l.useEffect)(()=>{g()},[s]);let j=()=>f(!0);return(0,a.jsxs)("div",{className:"w-full flex justify-between items-center mb-16 pr-8",children:[(0,a.jsx)(d.default,{href:"/",children:(0,a.jsxs)("div",{className:"flex gap-6 items-center cursor-pointer",children:[(0,a.jsxs)("h1",{className:"text-4xl font-bold max-lg:text-2xl",children:["Book ",(0,a.jsx)("span",{className:"text-primary",children:"Search"})]}),(0,a.jsx)(i.g,{className:"h-10 max-lg:h-7",icon:c.FgS})]})}),t?(0,a.jsxs)("div",{className:"flex gap-6 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-end max-lg:hidden",children:[(0,a.jsxs)("p",{className:"".concat(p&&"text-primary"," font-semibold"),children:[t.nombres," ",t.apellidos]}),(0,a.jsx)("p",{className:p?"text-white":"",children:t.email})]}),(0,a.jsx)(i.g,{className:"".concat(p?"text-white":""," max-lg:text-secondary h-7"),icon:c.Jt$,onClick:()=>h(!m)}),m&&(0,a.jsxs)("div",{className:"absolute right-28 top-12 mt-12 bg-white shadow-lg rounded-lg p-2 w-48",children:[(0,a.jsx)(r.A,{className:"border-none hover:bg-secondary-100",variant:"outline",icon:c.X46,onClick:()=>{h(!1),j()},children:"Ver Perfil"}),(0,a.jsx)(r.A,{className:"text-red border-none hover:bg-red-100 w-full",variant:"outline",icon:c.PIP,onClick:()=>{h(!1),localStorage.removeItem("userData"),x(null),e.push("/")},children:"Salir"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{className:"bg-[#425f55] max-lg:hidden",variant:"secondary",icon:c.ZBn,onClick:()=>e.push("/pages/register"),children:"Registrarse"}),(0,a.jsx)(r.A,{className:"lg:hidden",variant:"secondary",icon:c.LFz,onClick:()=>e.push("/pages/register")})]}),u&&(0,a.jsx)(n.A,{buttonLabel:"Cerrar",onButtonClick:()=>f(!1),children:t&&(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-8",children:"Informaci\xf3n del Usuario"}),(0,a.jsxs)("div",{className:"flex flex-col items-start w-[420px] max-lg:w-full space-y-6",children:[(0,a.jsxs)("div",{className:"flex max-lg:flex-col gap-12",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"font-semibold text-md text-primary",children:"Nombres:"}),(0,a.jsx)("p",{className:"text-xl",children:t.nombres})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"font-semibold text-md text-primary",children:"Apellidos:"}),(0,a.jsx)("p",{className:"text-xl",children:t.apellidos})]})]}),(0,a.jsxs)("div",{className:"flex gap-12 max-lg:flex-col",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"font-semibold text-md text-primary",children:"Tel\xe9fono:"}),(0,a.jsx)("p",{className:"text-xl",children:t.telefono})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"font-semibold text-md text-primary",children:"Fecha de Nacimiento:"}),(0,a.jsx)("p",{className:"text-xl",children:t.fechaNacimiento})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"font-semibold text-md text-primary",children:"G\xe9nero:"}),(0,a.jsx)("p",{className:"text-xl",children:t.genero})]})]}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"font-semibold text-md text-primary",children:"Email:"}),(0,a.jsx)("p",{className:"text-xl",children:t.email})]})]})]})})]})}},8861:(e,s,t)=>{"use strict";t.d(s,{BookProvider:()=>c,H:()=>n});var a=t(5155),l=t(2115),r=t(532);let n=(0,l.createContext)(),c=e=>{let{children:s}=e,[t,c]=(0,l.useState)([]),[i,o]=(0,l.useState)(null),[d,x]=(0,l.useState)(!1),m=async(e,s)=>{x(!0);try{let t=await (0,r.x)(e,s);c(t)}catch(e){console.error("Error fetching books:",e)}finally{x(!1)}};return(0,a.jsx)(n.Provider,{value:{books:t,setBooks:c,selectedBook:i,setSelectedBook:o,fetchBooks:m,loading:d},children:s})}},532:(e,s,t)=>{"use strict";t.d(s,{u:()=>l,x:()=>a});let a=async(e,s)=>{if(!e)return[];try{let t="".concat("https://openlibrary.org/search.json?").concat("T\xedtulo"===s?"title":"author","=").concat(e),a=await fetch(t);return(await a.json()).docs.map(e=>({id:e.key,title:e.title,author:e.author_name?e.author_name[0]:"Autor desconocido",authorKey:e.author_key,subject:e.subject_key,publishYear:e.first_publish_year||"A\xf1o desconocido",image:e.cover_i?"".concat("https://covers.openlibrary.org/b/id","/").concat(e.cover_i,"-L.jpg"):"/placeholder.png",description:e.first_sentence?e.first_sentence[0]:"Sin descripci\xf3n disponible",amazonId:e.id_amazon?e.id_amazon[0]:void 0,rating:e.ratings_average?e.ratings_average:0,ia:e.ia,language:e.language,numPage:e.number_of_pages_median}))}catch(e){return console.error("Error fetching books:",e),[]}},l=async e=>{let s=[];if(null==e?void 0:e.length){let t=await fetch("".concat("https://openlibrary.org/subjects","/").concat(e.toLowerCase(),".json?limit=5"));s=(await t.json()).works.map(e=>({id:e.key,title:e.title,coverId:e.cover_id,ia:e.ia}))}return{relatedBySubject:s}}},9324:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[533,266,306,396,441,517,358],()=>s(2659)),_N_E=e.O()}]);