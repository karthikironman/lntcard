(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d8003"],{"78e1":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("floater",{attrs:{type:"completed",text:"DROPPED SUCCESSFULLY",redirect:"mainPage"},on:{loader:function(e){return t.setNextStatus(e)}}})],1)},a=[],c=n("4c51"),r=n("bc68"),l=new r["a"],u={components:{floater:c["a"]},data:function(){return{}},methods:{setNextStatus:function(){var t=localStorage.getItem("pickupid");l.dropPickup(t).then((function(){console.log("dropped")})),localStorage.clear(),localStorage.setItem("status","pickup")}}},s=u,i=n("2877"),p=Object(i["a"])(s,o,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d8003.ac83479e.js.map