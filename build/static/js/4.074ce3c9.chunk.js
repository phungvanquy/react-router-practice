(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={comments:"Comments_comments__1PsoZ"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__AeTgW",loading:"NewCommentForm_loading__bjkSI",control:"NewCommentForm_control__EGzKP",actions:"NewCommentForm_actions__1-Ids"}},49:function(e,t,c){e.exports={item:"CommentItem_item__NgJyX"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__1tFMf"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2frQh"}},53:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(9),o=c(0),a=c.n(o),r=c(37),m=c(47),j=c.n(m),d=c(36),i=c(35),u=c(15),l=c(48),b=c.n(l),x=c(1),O=function(e){var t=Object(o.useRef)(),c=Object(d.a)(i.a),n=c.sendRequest,s=c.status,a=c.error,r=e.onAddedComment;Object(o.useEffect)((function(){"completed"!==s||a||r()}),[s,a,r]);var m=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(x.jsxs)("form",{className:b.a.form,onSubmit:m,children:["pending"===s&&Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(u.a,{})}),Object(x.jsxs)("div",{className:b.a.control,onSubmit:m,children:[Object(x.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(x.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(x.jsx)("div",{className:b.a.actions,children:Object(x.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=c(49),f=c.n(h),p=function(e){return Object(x.jsx)("li",{className:f.a.item,children:Object(x.jsx)("p",{children:e.text})})},_=c(50),N=c.n(_),g=function(e){return Object(x.jsx)("ul",{className:N.a.comments,children:e.comments.map((function(e){return Object(x.jsx)(p,{text:e.text},e.id)}))})},v=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.j)(),m=a.quoteId,l=Object(d.a)(i.c),b=l.sendRequest,h=l.status,f=l.data;Object(o.useEffect)((function(){b(m)}),[m,b]);var p,_=Object(o.useCallback)((function(){b(m)}),[b,m]);return"pending"===h&&(p=Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(u.a,{})})),"completed"===h&&f&&f.length>0&&(p=Object(x.jsx)(g,{comments:f})),"completed"!==h||f&&0!==f.length||(p=Object(x.jsx)("p",{className:"centered",children:"No comments were added yet"})),Object(x.jsxs)("section",{className:j.a.comments,children:[Object(x.jsx)("h2",{children:"User Comments"}),!c&&Object(x.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(x.jsx)(O,{quoteId:a.quoteId,onAddedComment:_}),p]})},C=c(51),q=c.n(C),I=function(e){return Object(x.jsxs)("figure",{className:q.a.quote,children:[Object(x.jsx)("p",{children:e.text}),Object(x.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.j)(),t=Object(n.k)(),c=e.quoteId,r=Object(d.a)(i.e,!0),m=r.sendRequest,j=r.status,l=r.data,b=r.error;return Object(o.useEffect)((function(){m(c)}),[m,c]),"pending"===j?Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(u.a,{})}):b?Object(x.jsx)("p",{className:"centered",children:b}):l?Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)(I,{text:l.text,author:l.author}),Object(x.jsx)(n.c,{exact:!0,path:"/quotes/".concat(e.quoteId),children:Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load comments"})})}),Object(x.jsx)(n.c,{path:"".concat(t.path,"/comments"),children:Object(x.jsx)(v,{})})]}):Object(x.jsx)("p",{children:"Quote not found"})}}}]);
//# sourceMappingURL=4.074ce3c9.chunk.js.map