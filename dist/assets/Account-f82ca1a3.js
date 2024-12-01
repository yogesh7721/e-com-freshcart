import{e as x,c as h,d as j,r as n,B as d,t as g,v as b,j as s}from"./index-44156e21.js";const N=()=>{const o=x(),{user:c}=h(e=>e.auth),[i,{isSuccess:r,isLoading:p,error:m,isError:f}]=j();n.useEffect(()=>{r&&(d.success("User SuccessFully LogOut"),o("/"))},[r]);const{data:a}=g(c),[u,{isSuccess:l}]=b();return n.useEffect(()=>{l&&d.success("Order Cancel Success")},[l]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"bg-slate-500 p-3 flex gap-5 px-20 items-center text-black",children:[s.jsxs("strong",{className:"text-2xl",children:[c&&c.name,"'s Account"]}),s.jsx("button",{onClick:i,className:"btn btn-error",children:"Logout"})]}),s.jsx("div",{className:"mt-10",children:s.jsxs("table",{class:"table table-dark table-striped table-hover",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",children:"Order Id"}),s.jsx("th",{scope:"col",children:"Products"}),s.jsx("th",{scope:"col",children:"Status"}),s.jsx("th",{scope:"col",children:"Action"})]})}),s.jsx("tbody",{children:a&&a.map(e=>s.jsxs("tr",{className:`${e.status==="placed"&&"bg-orange-500 text-white"}
                             ${e.status==="delivred"&&"bg-green-400 text-white"} 
                            ${e.status==="cancel"&&"bg-red-400 text-white"}`,children:[s.jsxs("td",{children:[" ",e._id]}),s.jsx("td",{children:e.products.map(t=>s.jsxs("div",{className:"grid grid-cols-2 my-2",children:[s.jsxs("strong",{children:[t.name,":",t.price,", "]}),s.jsx("img",{className:"h-10",src:`https://e-com-freshcart.onrender.com/${t.image}`,alt:""})]}))}),s.jsx("td",{children:e.status}),s.jsxs("td",{children:[e.status==="placed"&&s.jsx("button",{onClick:t=>u(e),className:"btn btn-error btn-sm",children:"Cancel"}),e.status==="cancel"&&s.jsx("div",{className:"text-red-600 font-bold text-lg p-2",children:"Order Canceled"}),e.status==="delivred"&&s.jsx("div",{className:"text-green-600 font-bold text-lg p-2",children:"Order Delivered"})]})]},e.id))})]})})]})};export{N as default};