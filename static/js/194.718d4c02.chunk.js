"use strict";(self.webpackChunkreact_kabzda=self.webpackChunkreact_kabzda||[]).push([[194],{7194:function(t,e,s){s.r(e),s.d(e,{default:function(){return A}});var i=s(1413),a=s(5987),n=s(2791),o=s(364),r=s(6070),u="Post_item__KhjiJ",c=s(184),l=function(t){var e=t.amount,s=t.message;return(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("img",{src:"http://img2.joyreactor.cc/pics/post/full/%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-art-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-5007944.jpeg",alt:"#"}),(0,c.jsx)("span",{children:s}),(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"like "}),e]})]})},d="MyPost_postsBlock__gFeXC",f="MyPost_posts__LIaO3",x="MyPost_error__aSQaR",h=s(5290),p=function(t){var e,s=t.onSubmit,a=(0,h.cI)({mode:"all"}),o=a.register,r=a.reset,u=a.handleSubmit,l=a.formState.errors;return(0,n.useEffect)((function(){r()}),[s]),(0,c.jsxs)("form",{onSubmit:u(s),children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("textarea",(0,i.Z)({placeholder:"Write a post",className:l.newPostText&&x},o("newPostText",{required:"Your textarea is required",maxLength:{value:20,message:"Your textarea exceed maxLength 20!"}}))),(null===l||void 0===l?void 0:l.newPostText)&&(0,c.jsx)("div",{style:{color:"red"},children:null===l||void 0===l||null===(e=l.newPostText)||void 0===e?void 0:e.message})]}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"add post"})})]})},j=function(t){var e=t.posts,s=t.addPost,i=e.map((function(t){return(0,c.jsx)(l,{message:t.message,amount:t.likesCount},t.id)}));return(0,c.jsxs)("div",{className:d,children:[(0,c.jsx)("h3",{children:"My post"}),(0,c.jsx)(p,{onSubmit:function(t){s(t.newPostText)}}),(0,c.jsx)("div",{className:f,children:i})]})},v=(0,o.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){return t((0,r.HM)(e))}}}))(j),m=s(5489),D={image:"ProfileInfo_image__zk6zW",discriptionBlock:"ProfileInfo_discriptionBlock__ADdBk",infoAboutMe:"ProfileInfo_infoAboutMe__G-ziR",avatar:"ProfileInfo_avatar__TLE9f",status:"ProfileInfo_status__gu9Ni"},g=s(8137),_=s(885),B=function(t){var e=t.status,s=t.updateStatus,i=(0,n.useState)(!1),a=(0,_.Z)(i,2),o=a[0],r=a[1],u=(0,n.useState)(e),l=(0,_.Z)(u,2),d=l[0],f=l[1];(0,n.useEffect)((function(){f(e)}),[e]);return(0,c.jsx)("div",{className:D.status,children:o?(0,c.jsx)("div",{children:(0,c.jsx)("input",{autoFocus:!0,onChange:function(t){f(t.target.value)},onBlur:function(){r(!1),s(d)},value:d})}):(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:function(){r(!0)},children:e||"___"})})})},P=function(t){var e=t.profile,s=t.status,i=t.updateStatus;return e?(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:D.discriptionBlock,children:[(0,c.jsx)("div",{className:D.avatar,children:(0,c.jsx)("img",{src:null!=e.photos.large?e.photos.large:g})}),(0,c.jsxs)("div",{className:D.infoAboutMe,children:[(0,c.jsx)("h1",{children:e.fullName}),(0,c.jsx)(B,{status:s,updateStatus:i}),(0,c.jsxs)("div",{className:D.about,children:["aboutMe: ",e.aboutMe]}),(0,c.jsxs)("div",{className:D.job,children:["lookingForAJobDescription: ",e.lookingForAJobDescription]}),(0,c.jsxs)("div",{className:D.contacts,children:[(0,c.jsx)("h3",{children:"Contacts:"}),(0,c.jsx)("div",{children:e.contacts.facebook}),(0,c.jsx)("div",{children:e.contacts.website}),(0,c.jsx)("div",{children:e.contacts.vk}),(0,c.jsx)("div",{children:e.contacts.twitter}),(0,c.jsx)("div",{children:e.contacts.instagram}),(0,c.jsx)("div",{children:e.contacts.youtube}),(0,c.jsx)("div",{children:e.contacts.github}),(0,c.jsx)("div",{children:e.contacts.mainLink})]})]})]})}):(0,c.jsx)(m.Z,{})},b=function(t){var e=t.profile,s=t.status,i=t.updateStatus;return(0,c.jsxs)("div",{children:[(0,c.jsx)(P,{profile:e,status:s,updateStatus:i}),(0,c.jsx)(v,{})]})},k=s(6871),S=s(7781),N=["getUserProfile","getStatus","profile","status","updateStatus"],A=(0,S.qC)((0,o.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText,profile:t.profilePage.profile,status:t.profilePage.status,isAuth:t.auth.isAuth,authorizedUserId:t.auth.userId}}),{getUserProfile:r.et,getStatus:r.lR,updateStatus:r.Nf}))((function(t){var e=t.getUserProfile,s=t.getStatus,o=t.profile,r=t.status,u=t.updateStatus,l=(0,a.Z)(t,N),d=(0,k.UO)().userId;return(0,n.useEffect)((function(){e(d),s(d)}),[]),(0,c.jsx)(b,(0,i.Z)((0,i.Z)({},l),{},{profile:o,status:r,updateStatus:u}))}))}}]);
//# sourceMappingURL=194.718d4c02.chunk.js.map