"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[18301],{518301:function(en,y,t){t.r(y),t.d(y,{scopes:function(){return W}});var u=t(639389),f=t.n(u),s=t(667294),a=t(988872),M=t(315816),I=t(945016),g=t(95976),T=t(469922),P=t(979331),W={"notification-demo-hooks":{RadiusBottomleftOutlined:u.RadiusBottomleftOutlined,RadiusBottomrightOutlined:u.RadiusBottomrightOutlined,RadiusUpleftOutlined:u.RadiusUpleftOutlined,RadiusUprightOutlined:u.RadiusUprightOutlined,React:s,useMemo:s.useMemo,Button:a.ZP,Divider:M.Z,Space:I.Z,notification:g.Z},"notification-demo-duration":{React:s,Button:a.ZP,notification:g.Z},"notification-demo-with-icon":{React:s,Button:a.ZP,notification:g.Z,Space:I.Z},"notification-demo-with-btn":{React:s,Button:a.ZP,notification:g.Z,Space:I.Z},"notification-demo-custom-icon":{React:s,SmileOutlined:u.SmileOutlined,Button:a.ZP,notification:g.Z},"notification-demo-placement":{React:s,BorderBottomOutlined:u.BorderBottomOutlined,BorderTopOutlined:u.BorderTopOutlined,RadiusBottomleftOutlined:u.RadiusBottomleftOutlined,RadiusBottomrightOutlined:u.RadiusBottomrightOutlined,RadiusUpleftOutlined:u.RadiusUpleftOutlined,RadiusUprightOutlined:u.RadiusUprightOutlined,Button:a.ZP,Divider:M.Z,notification:g.Z,Space:I.Z},"notification-demo-custom-style":{React:s,Button:a.ZP,notification:g.Z},"notification-demo-update":{React:s,Button:a.ZP,notification:g.Z},"notification-demo-stack":{React:s,useMemo:s.useMemo,Button:a.ZP,Divider:M.Z,InputNumber:T.Z,notification:g.Z,Space:I.Z,Switch:P.Z},"notification-demo-basic":{React:s,Button:a.ZP,notification:g.Z},"notification-demo-render-panel":{React:s,Button:a.ZP,notification:g.Z}}},979331:function(en,y,t){t.d(y,{Z:function(){return q}});var u=t(97857),f=t.n(u),s=t(9783),a=t.n(s),M=t(805574),I=t.n(M),g=t(513769),T=t.n(g),P=t(667294),W=t(100628),b=t.n(W),m=t(693967),X=t.n(m),B=t(33413),H=t(189265),O=t(73287),V=t(147315),$=t(947170),E=t(900210),w=t(510274),U=t(548073),Q=t(286665),F=t(986943),L=function(n){var i=n.componentCls,r=n.trackHeightSM,l=n.trackPadding,C=n.trackMinWidthSM,h=n.innerMinMarginSM,v=n.innerMaxMarginSM,o=n.handleSizeSM,c=n.calc,d="".concat(i,"-inner"),S=(0,E.unit)(c(o).add(c(l).mul(2)).equal()),p=(0,E.unit)(c(v).mul(2).equal());return a()({},i,a()({},"&".concat(i,"-small"),a()(a()(a()(a()(a()({minWidth:C,height:r,lineHeight:(0,E.unit)(r)},"".concat(i,"-inner"),a()(a()({paddingInlineStart:v,paddingInlineEnd:h},"".concat(d,"-checked"),{marginInlineStart:"calc(-100% + ".concat(S," - ").concat(p,")"),marginInlineEnd:"calc(100% - ".concat(S," + ").concat(p,")")}),"".concat(d,"-unchecked"),{marginTop:c(r).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"".concat(i,"-handle"),{width:o,height:o}),"".concat(i,"-loading-icon"),{top:c(c(o).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize}),"&".concat(i,"-checked"),a()(a()({},"".concat(i,"-inner"),a()(a()({paddingInlineStart:h,paddingInlineEnd:v},"".concat(d,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(d,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(S," + ").concat(p,")"),marginInlineEnd:"calc(-100% + ".concat(S," - ").concat(p,")")})),"".concat(i,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,E.unit)(c(o).add(l).equal()),")")})),"&:not(".concat(i,"-disabled):active"),a()(a()({},"&:not(".concat(i,"-checked) ").concat(d),a()({},"".concat(d,"-unchecked"),{marginInlineStart:c(n.marginXXS).div(2).equal(),marginInlineEnd:c(n.marginXXS).mul(-1).div(2).equal()})),"&".concat(i,"-checked ").concat(d),a()({},"".concat(d,"-checked"),{marginInlineStart:c(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:c(n.marginXXS).div(2).equal()})))))},z=function(n){var i=n.componentCls,r=n.handleSize,l=n.calc;return a()({},i,a()(a()({},"".concat(i,"-loading-icon").concat(n.iconCls),{position:"relative",top:l(l(r).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"}),"&".concat(i,"-checked ").concat(i,"-loading-icon"),{color:n.switchColor}))},A=function(n){var i=n.componentCls,r=n.trackPadding,l=n.handleBg,C=n.handleShadow,h=n.handleSize,v=n.calc,o="".concat(i,"-handle");return a()({},i,a()(a()(a()({},o,{position:"absolute",top:r,insetInlineStart:r,width:h,height:h,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:l,borderRadius:v(h).div(2).equal(),boxShadow:C,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),"&".concat(i,"-checked ").concat(o),{insetInlineStart:"calc(100% - ".concat((0,E.unit)(v(h).add(r).equal()),")")}),"&:not(".concat(i,"-disabled):active"),a()(a()({},"".concat(o,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),"&".concat(i,"-checked ").concat(o,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset})))},G=function(n){var i=n.componentCls,r=n.trackHeight,l=n.trackPadding,C=n.innerMinMargin,h=n.innerMaxMargin,v=n.handleSize,o=n.calc,c="".concat(i,"-inner"),d=(0,E.unit)(o(v).add(o(l).mul(2)).equal()),S=(0,E.unit)(o(h).mul(2).equal());return a()({},i,a()(a()(a()({},c,a()(a()(a()({display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:h,paddingInlineEnd:C,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},"".concat(c,"-checked, ").concat(c,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),"".concat(c,"-checked"),{marginInlineStart:"calc(-100% + ".concat(d," - ").concat(S,")"),marginInlineEnd:"calc(100% - ".concat(d," + ").concat(S,")")}),"".concat(c,"-unchecked"),{marginTop:o(r).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0})),"&".concat(i,"-checked ").concat(c),a()(a()({paddingInlineStart:C,paddingInlineEnd:h},"".concat(c,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),"".concat(c,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(d," + ").concat(S,")"),marginInlineEnd:"calc(-100% + ".concat(d," - ").concat(S,")")})),"&:not(".concat(i,"-disabled):active"),a()(a()({},"&:not(".concat(i,"-checked) ").concat(c),a()({},"".concat(c,"-unchecked"),{marginInlineStart:o(l).mul(2).equal(),marginInlineEnd:o(l).mul(-1).mul(2).equal()})),"&".concat(i,"-checked ").concat(c),a()({},"".concat(c,"-checked"),{marginInlineStart:o(l).mul(-1).mul(2).equal(),marginInlineEnd:o(l).mul(2).equal()}))))},J=function(n){var i=n.componentCls,r=n.trackHeight,l=n.trackMinWidth;return a()({},i,f()(f()(f()({},(0,U.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:l,height:r,lineHeight:"".concat((0,E.unit)(r)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(i,"-disabled)"),{background:n.colorTextTertiary}),(0,U.Qy)(n)),{},a()(a()(a()({},"&".concat(i,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(i,"-disabled)"),{background:n.colorPrimaryHover})),"&".concat(i,"-loading, &").concat(i,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),"&".concat(i,"-rtl"),{direction:"rtl"})))},K=function(n){var i=n.fontSize,r=n.lineHeight,l=n.controlHeight,C=n.colorWhite,h=i*r,v=l/2,o=2,c=h-o*2,d=v-o*2;return{trackHeight:h,trackHeightSM:v,trackMinWidth:c*2+o*4,trackMinWidthSM:d*2+o*2,trackPadding:o,handleBg:C,handleSize:c,handleSizeSM:d,handleShadow:"0 2px 4px 0 ".concat(new w.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:c/2,innerMaxMargin:c+o+o*2,innerMinMarginSM:d/2,innerMaxMarginSM:d+o+o*2}},Z=(0,Q.I$)("Switch",function(e){var n=(0,F.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(e.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[J(n),G(n),A(n),z(n),L(n)]},K),Y=t(260869),D=t(785893),k=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],N=P.forwardRef(function(e,n){var i=e.prefixCls,r=e.size,l=e.disabled,C=e.loading,h=e.className,v=e.rootClassName,o=e.style,c=e.checked,d=e.value,S=e.defaultChecked,p=e.defaultValue,_=e.onChange,ln=T()(e,k),dn=(0,Y.default)(!1,{value:c!=null?c:d,defaultValue:S!=null?S:p}),cn=I()(dn,2),rn=cn[0],sn=cn[1],nn=P.useContext(O.E_),un=nn.getPrefixCls,hn=nn.direction,x=nn.switch,gn=P.useContext(V.Z),mn=(l!=null?l:gn)||C,R=un("switch",i),vn=(0,D.jsx)("div",{className:"".concat(R,"-handle"),children:C&&(0,D.jsx)(b(),{className:"".concat(R,"-loading-icon")})}),Sn=Z(R),an=I()(Sn,3),Cn=an[0],fn=an[1],Mn=an[2],In=(0,$.Z)(r),En=X()(x==null?void 0:x.className,a()(a()(a()({},"".concat(R,"-small"),In==="small"),"".concat(R,"-loading"),C),"".concat(R,"-rtl"),hn==="rtl"),h,v,fn,Mn),Pn=f()(f()({},x==null?void 0:x.style),o),On=function(){for(var on=arguments.length,tn=new Array(on),j=0;j<on;j++)tn[j]=arguments[j];sn(tn[0]),_==null||_.apply(void 0,tn)};return Cn((0,D.jsx)(H.Z,{component:"Switch",children:(0,D.jsx)(B.Z,f()(f()({},ln),{},{checked:rn,onChange:On,prefixCls:R,className:En,style:Pn,disabled:mn,ref:n,loadingIcon:vn}))}))});N.__ANT_SWITCH=!0;var q=N},33413:function(en,y,t){var u=t(487462),f=t(204942),s=t(297685),a=t(700091),M=t(667294),I=t(693967),g=t.n(I),T=t(821770),P=t(915105),W=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],b=M.forwardRef(function(m,X){var B,H=m.prefixCls,O=H===void 0?"rc-switch":H,V=m.className,$=m.checked,E=m.defaultChecked,w=m.disabled,U=m.loadingIcon,Q=m.checkedChildren,F=m.unCheckedChildren,L=m.onClick,z=m.onChange,A=m.onKeyDown,G=(0,a.Z)(m,W),J=(0,T.default)(!1,{value:$,defaultValue:E}),K=(0,s.Z)(J,2),Z=K[0],Y=K[1];function D(e,n){var i=Z;return w||(i=e,Y(i),z==null||z(i,n)),i}function k(e){e.which===P.Z.LEFT?D(!1,e):e.which===P.Z.RIGHT&&D(!0,e),A==null||A(e)}function N(e){var n=D(!Z,e);L==null||L(n,e)}var q=g()(O,V,(B={},(0,f.Z)(B,"".concat(O,"-checked"),Z),(0,f.Z)(B,"".concat(O,"-disabled"),w),B));return M.createElement("button",(0,u.Z)({},G,{type:"button",role:"switch","aria-checked":Z,disabled:w,className:q,ref:X,onKeyDown:k,onClick:N}),U,M.createElement("span",{className:"".concat(O,"-inner")},M.createElement("span",{className:"".concat(O,"-inner-checked")},Q),M.createElement("span",{className:"".concat(O,"-inner-unchecked")},F)))});b.displayName="Switch",y.Z=b}}]);
