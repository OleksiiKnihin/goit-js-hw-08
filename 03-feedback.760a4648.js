const e=document.querySelector(".feedback-form");!function(){try{const t=localStorage.getItem("feedback-form-state");if(!t)return;const a=JSON.parse(t);Object.entries(a).forEach((([t,a])=>{e.elements[t].value=a}))}catch(e){console.log(e.message)}}(),e.addEventListener("input",(function(e){const{name:t,value:a}=e.target;try{let e=localStorage.getItem("feedback-form-state");e=e?JSON.parse(e):{},e[t]=a;const o=JSON.stringify(e);localStorage.setItem("feedback-form-state",o)}catch(e){console.log(e.message)}})),e.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:a}}=e.currentTarget;console.log({email:t.value,message:a.value}),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.760a4648.js.map
