"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[30954],{979331:function(x,i,n){n.d(i,{Z:function(){return q}});var g=n(97857),l=n.n(g),s=n(9783),a=n.n(s),t=n(805574),r=n.n(t),u=n(513769),_=n.n(u),h=n(667294),T=n(100628),v=n.n(T),P=n(693967),R=n.n(P),O=n(33413),W=n(189265),f=n(73287),K=n(147315),U=n(947170),A=n(900210),L=n(510274),z=n(548073),G=n(286665),Q=n(986943),p=function(e){var c=e.componentCls,D=e.trackHeightSM,M=e.trackPadding,S=e.trackMinWidthSM,m=e.innerMinMarginSM,j=e.innerMaxMarginSM,E=e.handleSizeSM,o=e.calc,C="".concat(c,"-inner"),I=(0,A.unit)(o(E).add(o(M).mul(2)).equal()),V=(0,A.unit)(o(j).mul(2).equal());return a()({},c,a()({},"&".concat(c,"-small"),a()(a()(a()(a()(a()({minWidth:S,height:D,lineHeight:(0,A.unit)(D)},"".concat(c,"-inner"),a()(a()({paddingInlineStart:j,paddingInlineEnd:m},"".concat(C,"-checked"),{marginInlineStart:"calc(-100% + ".concat(I," - ").concat(V,")"),marginInlineEnd:"calc(100% - ".concat(I," + ").concat(V,")")}),"".concat(C,"-unchecked"),{marginTop:o(D).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"".concat(c,"-handle"),{width:E,height:E}),"".concat(c,"-loading-icon"),{top:o(o(E).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize}),"&".concat(c,"-checked"),a()(a()({},"".concat(c,"-inner"),a()(a()({paddingInlineStart:m,paddingInlineEnd:j},"".concat(C,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(C,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(I," + ").concat(V,")"),marginInlineEnd:"calc(-100% + ".concat(I," - ").concat(V,")")})),"".concat(c,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,A.unit)(o(E).add(M).equal()),")")})),"&:not(".concat(c,"-disabled):active"),a()(a()({},"&:not(".concat(c,"-checked) ").concat(C),a()({},"".concat(C,"-unchecked"),{marginInlineStart:o(e.marginXXS).div(2).equal(),marginInlineEnd:o(e.marginXXS).mul(-1).div(2).equal()})),"&".concat(c,"-checked ").concat(C),a()({},"".concat(C,"-checked"),{marginInlineStart:o(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:o(e.marginXXS).div(2).equal()})))))},y=function(e){var c=e.componentCls,D=e.handleSize,M=e.calc;return a()({},c,a()(a()({},"".concat(c,"-loading-icon").concat(e.iconCls),{position:"relative",top:M(M(D).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"}),"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:e.switchColor}))},H=function(e){var c=e.componentCls,D=e.trackPadding,M=e.handleBg,S=e.handleShadow,m=e.handleSize,j=e.calc,E="".concat(c,"-handle");return a()({},c,a()(a()(a()({},E,{position:"absolute",top:D,insetInlineStart:D,width:m,height:m,transition:"all ".concat(e.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:M,borderRadius:j(m).div(2).equal(),boxShadow:S,transition:"all ".concat(e.switchDuration," ease-in-out"),content:'""'}}),"&".concat(c,"-checked ").concat(E),{insetInlineStart:"calc(100% - ".concat((0,A.unit)(j(m).add(D).equal()),")")}),"&:not(".concat(c,"-disabled):active"),a()(a()({},"".concat(E,"::before"),{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0}),"&".concat(c,"-checked ").concat(E,"::before"),{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset})))},N=function(e){var c=e.componentCls,D=e.trackHeight,M=e.trackPadding,S=e.innerMinMargin,m=e.innerMaxMargin,j=e.handleSize,E=e.calc,o="".concat(c,"-inner"),C=(0,A.unit)(E(j).add(E(M).mul(2)).equal()),I=(0,A.unit)(E(m).mul(2).equal());return a()({},c,a()(a()(a()({},o,a()(a()(a()({display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:m,paddingInlineEnd:S,transition:"padding-inline-start ".concat(e.switchDuration," ease-in-out, padding-inline-end ").concat(e.switchDuration," ease-in-out")},"".concat(o,"-checked, ").concat(o,"-unchecked"),{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:"margin-inline-start ".concat(e.switchDuration," ease-in-out, margin-inline-end ").concat(e.switchDuration," ease-in-out"),pointerEvents:"none"}),"".concat(o,"-checked"),{marginInlineStart:"calc(-100% + ".concat(C," - ").concat(I,")"),marginInlineEnd:"calc(100% - ".concat(C," + ").concat(I,")")}),"".concat(o,"-unchecked"),{marginTop:E(D).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"&".concat(c,"-checked ").concat(o),a()(a()({paddingInlineStart:S,paddingInlineEnd:m},"".concat(o,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(o,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(C," + ").concat(I,")"),marginInlineEnd:"calc(-100% + ".concat(C," - ").concat(I,")")})),"&:not(".concat(c,"-disabled):active"),a()(a()({},"&:not(".concat(c,"-checked) ").concat(o),a()({},"".concat(o,"-unchecked"),{marginInlineStart:E(M).mul(2).equal(),marginInlineEnd:E(M).mul(-1).mul(2).equal()})),"&".concat(c,"-checked ").concat(o),a()({},"".concat(o,"-checked"),{marginInlineStart:E(M).mul(-1).mul(2).equal(),marginInlineEnd:E(M).mul(2).equal()}))))},Z=function(e){var c=e.componentCls,D=e.trackHeight,M=e.trackMinWidth;return a()({},c,l()(l()(l()({},(0,z.Wf)(e)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:M,height:D,lineHeight:"".concat((0,A.unit)(D)),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:e.colorTextTertiary}),(0,z.Qy)(e)),{},a()(a()(a()({},"&".concat(c,"-checked"),a()({background:e.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:e.colorPrimaryHover})),"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),"&".concat(c,"-rtl"),{direction:"rtl"})))},$=function(e){var c=e.fontSize,D=e.lineHeight,M=e.controlHeight,S=e.colorWhite,m=c*D,j=M/2,E=2,o=m-E*2,C=j-E*2;return{trackHeight:m,trackHeightSM:j,trackMinWidth:o*2+E*4,trackMinWidthSM:C*2+E*2,trackPadding:E,handleBg:S,handleSize:o,handleSizeSM:C,handleShadow:"0 2px 4px 0 ".concat(new L.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:o/2,innerMaxMargin:o+E+E*2,innerMinMarginSM:C/2,innerMaxMarginSM:C+E+E*2}},X=(0,G.I$)("Switch",function(d){var e=(0,Q.TS)(d,{switchDuration:d.motionDurationMid,switchColor:d.colorPrimary,switchDisabledOpacity:d.opacityLoading,switchLoadingIconSize:d.calc(d.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(d.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[Z(e),N(e),H(e),y(e),p(e)]},$),Y=n(260869),B=n(785893),k=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],w=h.forwardRef(function(d,e){var c=d.prefixCls,D=d.size,M=d.disabled,S=d.loading,m=d.className,j=d.rootClassName,E=d.style,o=d.checked,C=d.value,I=d.defaultChecked,V=d.defaultValue,nn=d.onChange,cn=_()(d,k),rn=(0,Y.default)(!1,{value:o!=null?o:C,defaultValue:I!=null?I:V}),sn=r()(rn,2),dn=sn[0],on=sn[1],an=h.useContext(f.E_),un=an.getPrefixCls,hn=an.direction,b=an.switch,En=h.useContext(K.Z),_n=(M!=null?M:En)||S,F=un("switch",c),gn=(0,B.jsx)("div",{className:"".concat(F,"-handle"),children:S&&(0,B.jsx)(v(),{className:"".concat(F,"-loading-icon")})}),vn=X(F),tn=r()(vn,3),Mn=tn[0],Cn=tn[1],Pn=tn[2],Dn=(0,U.Z)(D),xn=R()(b==null?void 0:b.className,a()(a()(a()({},"".concat(F,"-small"),Dn==="small"),"".concat(F,"-loading"),S),"".concat(F,"-rtl"),hn==="rtl"),m,j,Cn,Pn),mn=l()(l()({},b==null?void 0:b.style),E),On=function(){for(var ln=arguments.length,en=new Array(ln),J=0;J<ln;J++)en[J]=arguments[J];on(en[0]),nn==null||nn.apply(void 0,en)};return Mn((0,B.jsx)(W.Z,{component:"Switch",children:(0,B.jsx)(O.Z,l()(l()({},cn),{},{checked:dn,onChange:On,prefixCls:F,className:xn,style:mn,disabled:_n,ref:e,loadingIcon:gn}))}))});w.__ANT_SWITCH=!0;var q=w},429026:function(x,i,n){n.r(i);var g=n(667294),l=n(639389),s=n.n(l),a=n(945016),t=n(707898),r=n(796586),u=n(785893),_=function(){return(0,u.jsxs)(a.Z,{size:"middle",children:[(0,u.jsx)(t.Z,{count:5,children:(0,u.jsx)(r.C,{shape:"square",size:"large"})}),(0,u.jsx)(t.Z,{count:0,showZero:!0,children:(0,u.jsx)(r.C,{shape:"square",size:"large"})}),(0,u.jsx)(t.Z,{count:(0,u.jsx)(l.ClockCircleOutlined,{style:{color:"#f5222d"}}),children:(0,u.jsx)(r.C,{shape:"square",size:"large"})})]})};i.default=_},279788:function(x,i,n){n.r(i);var g=n(805574),l=n.n(g),s=n(667294),a=n(639389),t=n.n(a),r=n(988872),u=n(945016),_=n(707898),h=n(796586),T=n(979331),v=n(785893),P=r.ZP.Group,R=function(){var W=(0,s.useState)(5),f=l()(W,2),K=f[0],U=f[1],A=(0,s.useState)(!0),L=l()(A,2),z=L[0],G=L[1],Q=function(){U(K+1)},p=function(){var Z=K-1;Z<0&&(Z=0),U(Z)},y=function(){var Z=Math.floor(Math.random()*100);U(Z)},H=function(Z){G(Z)};return(0,v.jsxs)(u.Z,{direction:"vertical",children:[(0,v.jsxs)(u.Z,{size:"large",children:[(0,v.jsx)(_.Z,{count:K,children:(0,v.jsx)(h.C,{shape:"square",size:"large"})}),(0,v.jsxs)(P,{children:[(0,v.jsx)(r.ZP,{onClick:p,icon:(0,v.jsx)(a.MinusOutlined,{})}),(0,v.jsx)(r.ZP,{onClick:Q,icon:(0,v.jsx)(a.PlusOutlined,{})}),(0,v.jsx)(r.ZP,{onClick:y,icon:(0,v.jsx)(a.QuestionOutlined,{})})]})]}),(0,v.jsxs)(u.Z,{size:"large",children:[(0,v.jsx)(_.Z,{dot:z,children:(0,v.jsx)(h.C,{shape:"square",size:"large"})}),(0,v.jsx)(T.Z,{onChange:H,checked:z})]})]})};i.default=R},932211:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(785893),t=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],r=function(h){var T=h.color;return(0,a.jsx)("div",{style:{width:90,height:90,lineHeight:"90px",background:"#ccc",textAlign:"center"},children:T})},u=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{wrap:!0,size:["large","middle"],children:t.map(function(h){return(0,a.jsx)(s.Z,{color:h,count:44,children:(0,a.jsx)(r,{color:h})},h)})}),(0,a.jsx)(l.Z,{wrap:!0,size:["large","middle"],children:t.map(function(h){return(0,a.jsx)(s.Z,{status:"processing",color:h,text:"loading"},h)})})]})};i.default=u},565905:function(x,i,n){n.r(i);var g=n(667294),l=n(315816),s=n(945016),a=n(707898),t=n(785893),r=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],u=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{orientation:"left",children:"Presets"}),(0,t.jsx)(s.Z,{direction:"vertical",children:r.map(function(h){return(0,t.jsx)(a.Z,{color:h,text:h},h)})}),(0,t.jsx)(l.Z,{orientation:"left",children:"Custom"}),(0,t.jsxs)(s.Z,{direction:"vertical",children:[(0,t.jsx)(a.Z,{color:"#f50",text:"#f50"}),(0,t.jsx)(a.Z,{color:"rgb(45, 183, 245)",text:"rgb(45, 183, 245)"}),(0,t.jsx)(a.Z,{color:"hsl(102, 53%, 61%)",text:"hsl(102, 53%, 61%)"}),(0,t.jsx)(a.Z,{color:"hwb(205 6% 9%)",text:"hwb(205 6% 9%)"})]})]})};i.default=u},795276:function(x,i,n){n.r(i);var g=n(639389),l=n.n(g),s=n(667294),a=n(75529),t=n(945016),r=n(707898),u=n(796586),_=n(785893);i.default=function(){return(0,_.jsx)(a.ZP,{theme:{components:{Badge:{indicatorHeight:24,indicatorHeightSM:18,dotSize:4,textFontWeight:"bold",statusSize:8}}},children:(0,_.jsxs)(t.Z,{direction:"vertical",children:[(0,_.jsx)(r.Z,{count:5,children:(0,_.jsx)(u.C,{shape:"square",size:"large"})}),(0,_.jsx)(r.Z,{count:26}),(0,_.jsx)(r.Z,{dot:!0,children:(0,_.jsx)(g.NotificationOutlined,{})}),(0,_.jsx)(r.Z,{status:"success",text:"Success"}),(0,_.jsx)(r.Z,{size:"small",count:0,showZero:!0})]})})}},543713:function(x,i,n){n.r(i);var g=n(667294),l=n(639389),s=n.n(l),a=n(945016),t=n(707898),r=n(785893),u=function(){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(t.Z,{dot:!0,children:(0,r.jsx)(l.NotificationOutlined,{style:{fontSize:16}})}),(0,r.jsx)(t.Z,{dot:!0,children:(0,r.jsx)("a",{href:"#",children:"Link something"})})]})};i.default=u},322094:function(x,i,n){n.r(i);var g=n(667294),l=n(707898),s=n(796586),a=n(785893),t=function(){return(0,a.jsx)("a",{href:"#",children:(0,a.jsx)(l.Z,{count:5,children:(0,a.jsx)(s.C,{shape:"square",size:"large"})})})};i.default=t},70034:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(796586),t=n(785893),r=function(){return(0,t.jsxs)(l.Z,{size:"middle",wrap:!0,children:[(0,t.jsxs)(l.Z,{size:"middle",wrap:!0,children:[(0,t.jsx)(s.Z,{count:5,status:"success",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:5,status:"warning",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:5,color:"blue",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:5,color:"#fa541c",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,status:"success",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,status:"warning",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,status:"processing",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,color:"blue",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,color:"#fa541c",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]}),(0,t.jsxs)(l.Z,{size:"middle",wrap:!0,children:[(0,t.jsx)(s.Z,{count:0,showZero:!0}),(0,t.jsx)(s.Z,{count:0,showZero:!0,color:"blue"}),(0,t.jsx)(s.Z,{count:0,showZero:!0,color:"#f0f"}),(0,t.jsx)(s.Z,{count:0,showZero:!0,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:0,showZero:!0,color:"blue",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})]})};i.default=r},528199:function(x,i,n){n.r(i);var g=n(805574),l=n.n(g),s=n(667294),a=n(639389),t=n.n(a),r=n(945016),u=n(979331),_=n(707898),h=n(785893),T=function(){var P=(0,s.useState)(!0),R=l()(P,2),O=R[0],W=R[1];return(0,h.jsxs)(r.Z,{children:[(0,h.jsx)(u.Z,{checked:O,onChange:function(){return W(!O)}}),(0,h.jsx)(_.Z,{count:O?11:0,showZero:!0,color:"#faad14"}),(0,h.jsx)(_.Z,{count:O?25:0}),(0,h.jsx)(_.Z,{count:O?(0,h.jsx)(a.ClockCircleOutlined,{style:{color:"#f5222d"}}):0}),(0,h.jsx)(_.Z,{className:"site-badge-count-109",count:O?109:0,style:{backgroundColor:"#52c41a"}})]})};i.default=T},279305:function(x,i,n){n.r(i);var g=n(667294),l=n(707898),s=n(796586),a=n(785893),t=function(){return(0,a.jsx)(l.Z,{count:5,offset:[10,10],children:(0,a.jsx)(s.C,{shape:"square",size:"large"})})};i.default=t},959241:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(796586),t=n(785893),r=function(){return(0,t.jsxs)(l.Z,{size:"large",children:[(0,t.jsx)(s.Z,{count:99,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:100,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:99,overflowCount:10,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:1e3,overflowCount:999,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})};i.default=r},7650:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(294047),t=n(785893),r=function(){return(0,t.jsxs)(l.Z,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"purple",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"#2db7f5",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"#2db7f5",placement:"start",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"#2db7f5",placement:"end",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})})]})};i.default=r},147071:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(294047),t=n(785893),r=function(){return(0,t.jsxs)(l.Z,{direction:"vertical",size:"middle",style:{width:"100%"},children:[(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"pink",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"red",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"cyan",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"green",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"purple",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"volcano",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"magenta",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})})]})};i.default=r},890592:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(796586),t=n(785893),r=function(){return(0,t.jsxs)(l.Z,{size:"middle",children:[(0,t.jsx)(s.Z,{size:"default",count:5,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{size:"small",count:5,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})};i.default=r},615578:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(785893),t=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(s.Z,{status:"success"}),(0,a.jsx)(s.Z,{status:"error"}),(0,a.jsx)(s.Z,{status:"default"}),(0,a.jsx)(s.Z,{status:"processing"}),(0,a.jsx)(s.Z,{status:"warning"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{direction:"vertical",children:[(0,a.jsx)(s.Z,{status:"success",text:"Success"}),(0,a.jsx)(s.Z,{status:"error",text:"Error"}),(0,a.jsx)(s.Z,{status:"default",text:"Default"}),(0,a.jsx)(s.Z,{status:"processing",text:"Processing"}),(0,a.jsx)(s.Z,{status:"warning",text:"Warning"})]})]})};i.default=t},988745:function(x,i,n){n.r(i);var g=n(667294),l=n(945016),s=n(707898),a=n(796586),t=n(785893),r=function(){return(0,t.jsxs)(l.Z,{size:"large",children:[(0,t.jsx)(s.Z,{count:5,title:"Custom hover text",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:-5,title:"Negative",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})};i.default=r},33413:function(x,i,n){var g=n(487462),l=n(204942),s=n(297685),a=n(700091),t=n(667294),r=n(693967),u=n.n(r),_=n(821770),h=n(915105),T=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=t.forwardRef(function(P,R){var O,W=P.prefixCls,f=W===void 0?"rc-switch":W,K=P.className,U=P.checked,A=P.defaultChecked,L=P.disabled,z=P.loadingIcon,G=P.checkedChildren,Q=P.unCheckedChildren,p=P.onClick,y=P.onChange,H=P.onKeyDown,N=(0,a.Z)(P,T),Z=(0,_.default)(!1,{value:U,defaultValue:A}),$=(0,s.Z)(Z,2),X=$[0],Y=$[1];function B(d,e){var c=X;return L||(c=d,Y(c),y==null||y(c,e)),c}function k(d){d.which===h.Z.LEFT?B(!1,d):d.which===h.Z.RIGHT&&B(!0,d),H==null||H(d)}function w(d){var e=B(!X,d);p==null||p(e,d)}var q=u()(f,K,(O={},(0,l.Z)(O,"".concat(f,"-checked"),X),(0,l.Z)(O,"".concat(f,"-disabled"),L),O));return t.createElement("button",(0,g.Z)({},N,{type:"button",role:"switch","aria-checked":X,disabled:L,className:q,ref:R,onKeyDown:k,onClick:w}),z,t.createElement("span",{className:"".concat(f,"-inner")},t.createElement("span",{className:"".concat(f,"-inner-checked")},G),t.createElement("span",{className:"".concat(f,"-inner-unchecked")},Q)))});v.displayName="Switch",i.Z=v}}]);
