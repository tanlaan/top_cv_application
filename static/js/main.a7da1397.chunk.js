(this.webpackJsonptop_cv_application=this.webpackJsonptop_cv_application||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),s=n.n(a),l=n(9),c=n.n(l),r=(n(15),n(3)),o=n(4),u=n(2),h=n(6),d=n(5),b=(n(16),n(7)),j=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={name:t.info?t.info.name:"",email:t.info?t.info.email:"",phone:t.info?t.info.phone:""},i.handleInputChange=i.handleInputChange.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"handleInputChange",value:function(t,e){this.setState((function(n){var i=Object(b.a)({},n);return i[e]=t.target.value,i}))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.submit(this.state)}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{id:"general-info",children:[Object(i.jsx)("h2",{children:"Personal Info"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("label",{htmlFor:"name",children:["Name:",Object(i.jsx)("input",{type:"text",id:"name",name:"name",value:this.state.name,onChange:function(e){return t.handleInputChange(e,"name")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{htmlFor:"email",children:["Email:",Object(i.jsx)("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:function(e){return t.handleInputChange(e,"email")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{htmlFor:"phone",children:["Phone #:",Object(i.jsx)("input",{type:"tel",id:"phone",name:"phone",value:this.state.phone,onChange:function(e){return t.handleInputChange(e,"phone")}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:this.handleSubmit,children:"Submit"})]})]})}}]),n}(a.Component),p=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:this.props.info.name}),Object(i.jsxs)("p",{children:["Email: ",this.props.info.email," -- Phone: ",this.props.info.phone]}),Object(i.jsx)("button",{onClick:this.props.submit,children:"Edit"})]})}}]),n}(a.Component),m=j,O=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={name:i.props.education?i.props.education.name:"",title:i.props.education?i.props.education.title:"",date:i.props.education?i.props.education.date:""},i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.submit(this.state)}},{key:"handleInputChange",value:function(t,e){this.setState((function(n){var i=Object(b.a)({},n);return i[e]=t.target.value,i}))}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{id:"education-info",children:[Object(i.jsx)("h2",{children:"Education"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("label",{children:["School:",Object(i.jsx)("input",{type:"text",id:"school-name",name:"school-name",value:this.state.name,onChange:function(e){return t.handleInputChange(e,"name")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Study:",Object(i.jsx)("input",{type:"text",id:"school-title",name:"school-title",value:this.state.title,onChange:function(e){return t.handleInputChange(e,"title")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Date:",Object(i.jsx)("input",{type:"text",id:"school-date",name:"school-date",value:this.state.date,onChange:function(e){return t.handleInputChange(e,"date")}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:this.handleSubmit,children:"Submit"})]})]})}}]),n}(a.Component),f=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Education"}),Object(i.jsx)("h3",{children:this.props.education.name}),Object(i.jsxs)("p",{children:["Study: ",this.props.education.title," -- Date: ",this.props.education.date]}),Object(i.jsx)("button",{onClick:this.props.submit,children:"Edit"})]})}}]),n}(a.Component),x=O,v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).state={name:i.props.skills?i.props.skills.name:"",title:i.props.skills?i.props.skills.title:"",skills:i.props.skills?i.props.skills.skills:"",start:i.props.skills?i.props.skills.start:"",leave:i.props.skills?i.props.skills.leave:""},i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.submit(this.state)}},{key:"handleInputChange",value:function(t,e){this.setState((function(){var n={};return n[e]=t.target.value,n}))}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{id:"skills-info",children:[Object(i.jsx)("h2",{children:"Skills"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("label",{children:["Company:",Object(i.jsx)("input",{type:"text",id:"company-name",name:"company-name",value:this.state.companyName,onChange:function(e){return t.handleInputChange(e,"name")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Position:",Object(i.jsx)("input",{type:"text",id:"position-title",name:"position-title",value:this.state.companyTitle,onChange:function(e){return t.handleInputChange(e,"title")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Tasks:",Object(i.jsx)("input",{type:"text",id:"company-skills",name:"company-skills",value:this.state.companySkills,onChange:function(e){return t.handleInputChange(e,"skills")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Start Date:",Object(i.jsx)("input",{type:"date",id:"start-date",name:"start-date",value:this.state.companyStart,onChange:function(e){return t.handleInputChange(e,"start")}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Leave Date:",Object(i.jsx)("input",{type:"date",id:"leave-date",name:"leave-date",value:this.state.companyLeave,onChange:function(e){return t.handleInputChange(e,"leave")}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:this.handleSubmit,children:"Submit"})]})]})}}]),n}(a.Component),k=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Work History"}),Object(i.jsx)("h3",{children:this.props.skills.name}),Object(i.jsxs)("p",{children:["Job Title: ",this.props.skills.title," -- Start Date: ",this.props.skills.start," - End Date: ",this.props.skills.leave]}),Object(i.jsxs)("p",{children:["Skills: ",this.props.skills.skills]}),Object(i.jsx)("button",{onClick:this.props.submit,children:"Edit"})]})}}]),n}(a.Component),S=v,g=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).state={isGeneralEdit:!0,isEducationEdit:!0,isSkillEdit:!0},t.handleGeneralSubmit=t.handleGeneralSubmit.bind(Object(u.a)(t)),t.handleEducationSubmit=t.handleEducationSubmit.bind(Object(u.a)(t)),t.handleSkillSubmit=t.handleSkillSubmit.bind(Object(u.a)(t)),t.toggleEdit=t.toggleEdit.bind(Object(u.a)(t)),t}return Object(o.a)(n,[{key:"handleGeneralSubmit",value:function(t){this.setState((function(e){return{info:{name:t.name,email:t.email,phone:t.phone},isGeneralEdit:!e.isGeneralEdit}}))}},{key:"handleEducationSubmit",value:function(t){this.setState((function(e){return{education:{name:t.name,title:t.title,date:t.date},isEducationEdit:!e.isEducationEdit}}))}},{key:"handleSkillSubmit",value:function(t){this.setState((function(e){return{skills:{name:t.name,title:t.title,tasks:t.tasks,start:t.start,leave:t.leave},isSkillEdit:!e.isSkillEdit}}))}},{key:"toggleEdit",value:function(t){this.setState((function(e){var n={};return n[t]=!e[t],n}))}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:"App",children:[this.state.isGeneralEdit?Object(i.jsx)(m,{submit:this.handleGeneralSubmit,info:this.state.info}):Object(i.jsx)(p,{submit:function(){return t.toggleEdit("isGeneralEdit")},info:this.state.info}),this.state.isEducationEdit?Object(i.jsx)(x,{submit:this.handleEducationSubmit,education:this.state.education}):Object(i.jsx)(f,{submit:function(){return t.toggleEdit("isEducationEdit")},education:this.state.education}),this.state.isSkillEdit?Object(i.jsx)(S,{submit:this.handleSkillSubmit,skills:this.state.skills}):Object(i.jsx)(k,{submit:function(){return t.toggleEdit("isSkillEdit")},skills:this.state.skills})]})}}]),n}(a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,l=e.getTTFB;n(t),i(t),a(t),s(t),l(t)}))};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.a7da1397.chunk.js.map