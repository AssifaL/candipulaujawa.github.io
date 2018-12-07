// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/_filter/AdvancedListValueProvider.html":'\x3cdiv tabindex\x3d"0"\x3e\r\n   \x3cdiv class\x3d"checkBtn" data-dojo-attach-point\x3d"checkedBtn" style\x3d"display:none;"data-dojo-attach-event\x3d"click:_checkedBtnEvent"\x3e\r\n       \x3cdiv data-dojo-attach-point\x3d"checkedNumDiv" class\x3d"checkedNumDiv"\x3e\x3cspan class\x3d"checkedNum" data-dojo-attach-point\x3d"checkedNum"\x3e\x3c/span\x3e${CommonNls.selected}\x3c/div\x3e\r\n       \x3cdiv data-dojo-attach-point\x3d"checkedNameDiv" class\x3d"checkedNum checkedNameDiv jimu-ellipsis-Blanks"\x3e\x3c/div\x3e\r\n       \x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 checkBtnDownIcon"\x3e\x3c/div\x3e\r\n   \x3c/div\x3e\r\n   \x3cdiv data-dojo-attach-point\x3d"listContent"\x3e\x3c/div\x3e\r\n   \x3cdiv class\x3d"value-multiple-popup" data-dojo-attach-point\x3d"listContentPopup"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"listContent"\x3e\x3c/div\x3e\r\n   \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Deferred dojo/_base/lang dojo/on dojo/keys dojo/Evented dojo/_base/html dojo/_base/array dojo/_base/declare dojo/query ./ValueProvider ./AdvancedListValueSelect dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./AdvancedListValueProvider.html jimu/utils jimu/dijit/_filter/pageControlForQuery jimu/dijit/Popup".split(" "),function(l,e,m,n,p,d,g,q,h,r,t,u,v,w,k,x,y){return q([r,u,v,p],{templateString:w,codedValues:null,staticValues:null,showNullValues:!1,cbxPopup:null,pageSize:1E3,
pageIndex:1,emptyStr:"",postMixInProperties:function(){this.inherited(arguments);this.CommonNls=window.jimuNls.common;this.emptyStr=window.apiNls.widgets.FeatureTable.empty},postCreate:function(){this.inherited(arguments);this.noDataTips='\x3cdiv class\x3d"error-tip-section" style\x3d"display: block;"\x3e\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\x3cspan class\x3d"jimu-state-error-text"\x3e'+this.nls.noFilterValueTip+"\x3c/span\x3e\x3c/div\x3e";d.addClass(this.domNode,"jimu-filter-mutcheck-list-value-provider");
"ADVANCED_LIST_VALUE_PROVIDER"===this.providerType?(this.controlType="multipleDynamic",this.checkedNumDiv.style.display="block"):"LIST_VALUE_PROVIDER"===this.providerType?(this.controlType="uniqueDynamic",this.checkedNameDiv.style.display="block"):(this.runtime&&"dropdown"===this.selectUI&&("UNIQUE_PREDEFINED_VALUE_PROVIDER"===this.providerType?this.checkedNameDiv.style.display="block":this.checkedNumDiv.style.display="block"),this.controlType="MULTIPLE_PREDEFINED_VALUE_PROVIDER"===this.providerType?
"multiplePredefined":"uniquePredefined");this.selectType="MULTIPLE_PREDEFINED_VALUE_PROVIDER"===this.providerType?"multiple":"UNIQUE_PREDEFINED_VALUE_PROVIDER"===this.providerType?"unique":"LIST_VALUE_PROVIDER"===this.providerType?"unique":"multiple";this.disPlayLabel="value";!this.runtime||"multiplePredefined"!==this.controlType&&"uniquePredefined"!==this.controlType||(this.disPlayLabel="alias");!this.runtime||"multipleDynamic"!==this.controlType&&"uniqueDynamic"!==this.controlType||(this.isLoadDataAdvanced=
!0);this.isNumberField=k.isNumberField(this.fieldInfo.type);this.pageControlForQuery||(this.pageControlForQuery=new x({pageSize:this.pageSize,pageIndex:1,layerUrl:this.url,fieldInfo:this.fieldInfo,queryWhere:"1\x3d1",layerDefinition:this.layerDefinition,fieldPopupInfo:this.fieldPopupInfo,isNumberField:this.isNumberField}),this.pageControlForQuery.on("query_getNewExpr",e.hitch(this,this._resetPageControlNewExpr)));this.listSelect||(this.listSelectDataList=this.partObj&&this.partObj.valueObj&&this.partObj.valueObj.value?
this.partObj.valueObj.value:[],this.listSelect=new t({emptyStr:this.emptyStr,runtime:this.runtime,pageSize:this.pageSize,selectUI:this.selectUI,controlType:this.controlType,selectType:this.selectType,dataList:this.listSelectDataList,selectedDataList:[],isNumberField:this.isNumberField}),e.isArray(this.listSelectDataList)?this.getCheckedList(this.listSelectDataList):(this.listSelect.checkedList=[this.listSelectDataList],this.listSelect._updateCheckedLabelListFromCheckedList()),this.listSelect.on("advancedListValueSelect_itemChecked",
e.hitch(this,this._createTarget)),this.listSelect.on("advancedListValueSelect_itemUnChecked",e.hitch(this,this._destoryTarget)),this.listSelect.on("advancedListValueSelect_addNextPage",e.hitch(this,this._addNextPage)),this.listSelect.on("advancedListValueSelect_searchKey",e.hitch(this,this._searchKey)),this.listSelect.on("advancedListValueSelect_searchKeyLocal",e.hitch(this,this._searchKeyLocal)),this.listSelect.on("advancedListValueSelect_itemsConfirmed",e.hitch(this,function(){"block"===d.getStyle(this.cbxPopup.domNode,
"display")&&(this._resetListSelectState(this),this.cbxPopup.hide());this.domNode.focus()})),d.setAttr(this.domNode,"role","application"),this.own(m(this.domNode,"keydown",e.hitch(this,function(a){d.hasClass(a.target||a.srcElement,"jimu-filter-mutcheck-list-value-provider")&&a.keyCode===n.ENTER&&this._checkedBtnEvent()}))),this.staticValues||"function"!==typeof this._checkedBtnEvent||(!this.codedValues||this.codedValues&&this.filterCodedValue)&&this.layerInfo&&this.layerInfo.getLayerObject().then(e.hitch(this,
function(a){a.on("edits-complete",e.hitch(this,function(){this.layerDataChanged=!0}))})));"dropdown"===this.selectUI?(d.setStyle(this.checkedBtn,"display","block"),this._multipleSelectProviderEventHandler=e.hitch(this,this._multipleSelectProviderEvent),document.addEventListener("click",this._multipleSelectProviderEventHandler,{capture:!0})):this.listSelect.placeAt(this.listContent)},filterExpr:null,_resetPageControlNewExpr:function(){var a=this.getDropdownFilterExpr();return this.filterExpr!==a?(this.pageControlForQuery.reset(),
this.filterExpr=this.pageControlForQuery.cascadeFilterExprs=a,!0):!1},_multipleSelectProviderEvent:function(a){a=a.target||a.srcElement;if(this.cbxPopup&&this.cbxPopup.domNode){if(d.isDescendant(a,this.cbxPopup.domNode)||d.isDescendant(a,this.checkedBtn))return;"block"===d.getStyle(this.cbxPopup.domNode,"display")&&(this._resetListSelectState(this),this.cbxPopup.hide())}else!d.isDescendant(a,this.checkedBtn)&&this.isPopupLoading&&(this.isLoadDataAdvanced=!0);this.msgDiv&&d.setStyle(this.msgDiv,"display",
"none")},_checkedBtnEvent:function(){this._showPopup()},_onBeforeDropDownMouseDown:function(){this._tryUpdatingUniqueValues(void 0,!0);return arguments},_isRestSelectList:!1,_resetListSelectState:function(a){"block"===d.getStyle(a.listSelect.searchKeyInput,"display")&&("multipleDynamic"===this.controlType&&this.listSelect.showAllList(),a.listSelect.listContainer.scrollTop=0,a.listSelect.queryState=!0,a.listSelect.valueInput.set("value",""),this._isRestSelectList=!0)},_createTarget:function(a){this._checkedChanged(1,
a);this.cbxPopup&&("uniqueDynamic"===this.controlType||"uniquePredefined"===this.controlType)&&this.cbxPopup.domNode&&(this._resetListSelectState(this),this.cbxPopup.close())},_destoryTarget:function(a){this._checkedChanged(-1,a)},_checkedChanged:function(a,c){if("multipleDynamic"===this.controlType||"multiplePredefined"===this.controlType&&this.runtime&&"dropdown"===this.selectUI)c&&(a=parseInt(this.checkedNum.innerText,10)+a,this.checkedNum.innerText=0<a?a:0);else if("uniqueDynamic"===this.controlType||
"uniquePredefined"===this.controlType&&this.runtime&&"dropdown"===this.selectUI)"uniqueDynamic"===this.controlType&&(c===this.emptyStr?d.addClass(this.checkedNameDiv,"checkedEmptyNameDiv"):d.removeClass(this.checkedNameDiv,"checkedEmptyNameDiv")),a=c?c:this._getCheckedNameDivText(),this._setCheckedNameDivText(a);this.listSelect.set("displayedValue","12345678");this.emit("change")},_clearCheckedTxt:function(){this.runtime&&"dropdown"===this.selectUI&&("multipleDynamic"===this.controlType||"multiplePredefined"===
this.controlType?this.checkedNum.textContent?this.checkedNum.textContent=0:this.checkedNum.innerText=0:"uniqueDynamic"!==this.controlType&&"uniquePredefined"!==this.controlType||this._setCheckedNameDivText(""),this.valueList=[],this.listSelect.checkedList=[],this.listSelect.checkedLabelList=[],this.listSelect.valueInput.set("value",""),"multipleDynamic"===this.controlType&&this.listSelect.showAllList());this.listSelect.set("displayedValue","12345678");this.emit("change")},_layerDataChangedCallback:function(){this.layerDataChanged&&
(this.pageControlForQuery.reset(),this.listSelect.ifFristPage=!0,this.layerDataChanged=!1)},_addNextPage:function(){this.listSelect&&(this._showLoadingIcon(),this._layerDataChangedCallback(),this.pageControlForQuery.queryByPage(this.listSelect.ifFristPage).then(e.hitch(this,function(a){this.listSelect.isCacheFinish=this.pageControlForQuery._isUniqueValueCacheFinish;this.listSelect.ifFristPage&&this._checkIfNoData(a)||(this.listSelect.setCBXData(a,!0,this.listSelect.ifFristPage),this._hideLoadingIcon())}),
e.hitch(this,function(a){console.log(a);this.listSelect.queryState=!1;this._hideLoadingIcon()})))},_searchKey:function(a){this.listSelect&&(this._showLoadingIcon(),this._layerDataChangedCallback(),this.pageControlForQuery._searchKey(a).then(e.hitch(this,function(a){this.listSelect.setCBXContentBySearch(a);this._resetPopupStyles(!a.length);this._hideLoadingIcon()}),e.hitch(this,function(a){console.log(a);this._hideLoadingIcon()})))},_searchKeyLocal:function(a,c){if(this.listSelect){"uniqueDynamic"===
this.controlType&&this._isRestSelectList&&(this.listSelect.keyQueryMode=!1,this._isRestSelectList=this.listSelect.cacheQueryMode=!1);this._showLoadingIcon();var b=this.pageControlForQuery._searchKeyLocal(a);""===a&&0===b.length?(this.layerDataChanged=!0,this._layerDataChangedCallback(),this._addNextPage()):this.listSelect.setCBXContentBySearch(b,c);this._resetPopupStyles(!0);this._hideLoadingIcon()}},queryByPage:function(){var a=this.pageControlForQuery.queryByPage(this.listSelect.ifFristPage);a.then(e.hitch(this,
function(c){a.resolve(c)}),e.hitch(this,function(c){console.log(c);a.reject(c)}))},getCheckedList:function(a){this.listSelect.checkedList=[];this.listSelect.checkedLabelList=[];g.forEach(a,e.hitch(this,function(a){var b;e.isObject(a)?a.isChecked&&(b=a.value):b=a;if(b||0===b)b=this.isNumberField?parseFloat(b):b,this.listSelect.checkedList.push(b)}))},getCheckedStrsList:function(a){var c=[];g.forEach(a,e.hitch(this,function(a){var b;e.isObject(a)?a.isChecked&&(b=a[this.disPlayLabel]):b=a;(b||0===b)&&
c.push(b)}));return c},showContent:function(a){var c=new l;this.getCheckedList(this.valueList);this.listSelect.codedValues=!1;this.listSelect.disPlayLabel="value";var b;if("multiplePredefined"===this.controlType||"uniquePredefined"===this.controlType)return this.runtime&&(this.listSelect.disPlayLabel="alias"),(b=this._checkIfNoData(this.valueList))||this.listSelect.setCBXData(this.valueList,!0,a),this._hideLoadingIcon(),c.resolve(b),c;if(this.staticValues)return b=this._setValueForStaticValues(this.staticValues),
c.resolve(b),c;if(this.codedValues)if(this.filterCodedValue)this.listSelect.codedValues=!0;else return b=this._setValueForStaticValues(this.codedValues),c.resolve(b),c;this._showLoadingIcon();if("multipleDynamic"===this.controlType||"uniqueDynamic"===this.controlType)this._layerDataChangedCallback(),this.pageControlForQuery.queryByPage(a).then(e.hitch(this,function(d){this.listSelect.isCacheFinish=this.pageControlForQuery._isUniqueValueCacheFinish;d=this._handleCodedValue(d);(b=this._checkIfNoData(d))||
this.listSelect.setCBXData(d,!0,a);this._hideLoadingIcon();c.resolve(b)}),e.hitch(this,function(a){console.log(a);this._hideLoadingIcon();c.reject(a)}));return c},_handleCodedValue:function(a){this.listSelect.disPlayLabel="label";if(!this.codedValues)return this.listSelect._updateCheckedLabelListFromCheckedList(),a;this.pageControlForQuery._codedvalueCache=a;"uniqueDynamic"===this.controlType&&this._setCheckedName(this.listSelect.checkedList?this.listSelect.checkedList[0]:"",a);this.listSelect._updateCheckedLabelList(this.codedValues);
return a},_showDropdown:function(a){var c=d.position(a.target),b;b=this.isInFilterSet?this.domNode.parentNode.parentNode.parentNode:this.domNode.parentNode;var e=d.position(b);if("none"!==d.getStyle(this.listContentPopup,"display"))d.setStyle(this.listContentPopup,"display","none");else{g.forEach(h(".value-type-popup",b),function(a){d.setStyle(a,"display","none")},this);d.place(this.listContentPopup,b);var f;f=d.hasClass(h(".desktop-add-section",b.parentNode)[0],"hidden")?-5:30;f=c.y-e.y-b.parentNode.scrollTop+
f;f+170>b.parentNode.scrollHeight&&(f=b.parentNode.scrollHeight-170-40);window.isRTL?c=c.x-e.x+20:(c=c.x-e.x-100-90,c+150>b.clientWidth&&(c=b.clientWidth-150));d.setStyle(this.listContentPopup,{display:"block",left:c+"px",top:f+"px"});a.stopPropagation()}},_calculatePopup:function(){var a=d.position(this.domNode.parentNode),c=d.position(document.body).h,b=a.y+30;c-b<this._cbxHeight&&(b=a.y-this._cbxHeight);return{left:a.x,top:b}},_cbxWidth:210,_cbxHeight:362,popupIsNoData:!1,isPopupLoading:!1,isLoadDataAdvanced:!1,
_showPopup:function(){if(!this.isPopupLoading)if(this.cbxPopup&&this.cbxPopup.domNode&&"block"===d.getStyle(this.cbxPopup.domNode,"display"))this._resetListSelectState(this),this.cbxPopup.hide();else{var a=this._resetPageControlNewExpr();a&&this.cbxPopup&&(this.cbxPopup.close(),this._clearCheckedTxt());var c=this._calculatePopup();this._cbxWidth=d.getStyle(this.checkedBtn,"width");if(!a&&this.cbxPopup&&this.cbxPopup.domNode&&!this.layerDataChanged)this.popupIsNoData?this._checkIfNoData([]):(this.cbxPopup.show(),
this._resetPopupStyles(),this.listSelect.valueInput&&"block"===d.getStyle(this.listSelect.searchKeyInput,"display")?this.listSelect.valueInput.focus():this.listSelect.listContent.focus(),this.listSelect.queryState=!1);else{this.isPopupLoading=!0;this.isLoadDataAdvanced||this._showDataQueryingIcon();var b=this.showContent(!0);b.then(e.hitch(this,function(a){this.isPopupLoading=!1;this._hideDataQueryingIcon();this.popupIsNoData=a;a||(this.cbxPopup=new y({width:this._cbxWidth,height:this._cbxHeight,
content:this.listSelect.domNode,enableMoveable:!1,hasTitle:!1,hasOverlay:!1,contentHasNoMargin:!0,moveToCenter:!1,customPosition:{left:c.left,top:c.top},hiddenAfterInit:this.isLoadDataAdvanced,useFocusLogic:!1,onClose:e.hitch(this,function(){this.cbxPopup.hide();return!1}),buttons:[]}),this.cbxPopup.setDomNodeStyls({"border-radius":0,border:"1px solid #999"}),this.cbxPopup.on("popupHasInitedSuccessfully",e.hitch(this,function(a){this._resetPopupStyles(!1,!0);a||(this.listSelect.valueInput&&"block"===
d.getStyle(this.listSelect.searchKeyInput,"display")?this.listSelect.valueInput.focus():this.listSelect.listContent.focus())})));this.isLoadDataAdvanced&&(this.isLoadDataAdvanced=!1)}),e.hitch(this,function(a){this.isPopupLoading=!1;console.log(a);b.reject(a)}))}}},_itemContainerH:300,_resetPopupStyles:function(a,c){var b=this._itemContainerH,e=d.getStyle(this.listSelect.listContent,"height");0===e&&this.cbxPopup&&this.cbxPopup.domNode&&"none"===d.getStyle(this.cbxPopup.domNode,"display")&&(e=this.popupInitHeight);
c&&(this.popupInitHeight=e);!a||this.listSelect.codedValues||this.pageControlForQuery._isUniqueValueCacheFinish||(e+=25);this.pageControlForQuery._isUniqueValueCacheFinish&&"block"===d.getStyle(this.listSelect.noDataTips,"display")&&(e+=30);b=e<b?e:b;d.setStyle(this.listSelect.listContainer,"height",b+"px");d.setStyle(this.listSelect.selectedContainer,"height",b+30+"px");"multipleDynamic"===this.controlType?b=b+30+30:"uniqueDynamic"===this.controlType&&(b+=30);this._cbxHeight=b+10;a=this._calculatePopup();
this._cbxWidth=d.getStyle(this.checkedBtn,"width");this.cbxPopup.setCustomPosition(a.left,a.top,this._cbxWidth,this._cbxHeight);this._resetItemWidth()},_resetItemWidth:function(){var a=this._cbxWidth-20;"uniqueDynamic"===this.controlType||this.runtime&&"uniquePredefined"===this.controlType&&"dropdown"===this.selectUI||!this.runtime&&("multiplePredefined"===this.controlType||"uniquePredefined"===this.controlType)||(a=!this.runtime||"dropdown"===this.selectUI||"uniquePredefined"!==this.controlType&&
"multiplePredefined"!==this.controlType?a-30:a-15);window.isRTL&&(a-=3);this.listSelect._itemLabelW=a;h(".item .label",this.listSelect.listContent).style({"max-width":a+"px"})},_setValueForStaticValues:function(a){this.listSelect.codedValues=!0;this.listSelect._updateCheckedLabelList(this.codedValues);if(a){this.pageControlForQuery._codedvalueCache=a;var c=this._checkIfNoData(a);c||(this.listSelect.disPlayLabel="label",this.listSelect.setCBXData(a,!0,!0));return c}return!1},_checkIfNoData:function(a){if(this.runtime&&
"dropdown"===this.selectUI){if(a&&0<a.length)return!1;this.msgDiv?d.setStyle(this.msgDiv,"display","block"):(this.msgDiv=document.createElement("div"),d.addClass(this.msgDiv,"jimu-filter-list-value-provider-tip-container"),this.msgDiv.innerHTML=this.noDataTips,this.checkedBtn.parentNode.appendChild(this.msgDiv));return!0}return!1},getDijits:function(){return[this.listSelect]},_setCheckedName:function(a,c){var b=a;if(c=c?c:this.codedValues){for(var e=!1,f=0;f<c.length;f++){var g=c[f];if(g.value===
a){b=g.label;e=!0;break}}e||(b=this.emptyStr,this.valueList=[],this.listSelect&&(this.listSelect.checkedList=[],this.listSelect.checkedLabelList=[]))}else void 0===a?(b=this.emptyStr,d.addClass(this.checkedNameDiv,"checkedEmptyNameDiv")):d.removeClass(this.checkedNameDiv,"checkedEmptyNameDiv");this._setCheckedNameDivText(b)},setValueObject:function(a){a.value=a.value||0===a.value?a.value:[];this.valueList=a.value;this.enableEmpty=a.enableEmpty;this.listSelect.enableEmpty=a.enableEmpty;if("multipleDynamic"===
this.controlType)this.checkedNum.innerText=this.valueList.length,this.isLoadDataAdvanced&&this._checkedBtnEvent();else if("uniqueDynamic"===this.controlType)a=this.valueList,e.isArray(a)&&0===a.length&&(a=void 0),this._setCheckedName(a),this.valueList=[this.valueList],this.isLoadDataAdvanced&&this._checkedBtnEvent();else{this.emptyStr=a.emptyLabel?a.emptyLabel:this.emptyStr;this.listSelect.emptyStr=this.emptyStr;if(this.runtime&&"dropdown"===this.selectUI){var c=[];"value"===this.disPlayLabel?(this.getCheckedList(this.valueList),
c=this.listSelect.checkedList):c=this.getCheckedStrsList(this.valueList);"uniquePredefined"===this.controlType?0<this.listSelect.checkedList.length?this._setCheckedNameDivText(c[0]):this._setCheckedNameDivText(a.enableEmpty?this.emptyStr:""):this.checkedNum.innerText=c.length}this.showContent(!0);setTimeout(e.hitch(this,function(){this._cbxWidth=d.getStyle(this.listSelect.listContent,"width");this._resetItemWidth()}),50)}},_getCheckedNameDivText:function(){return this.checkedNameDiv.textContent||
this.checkedNameDiv.innerText||""},_setCheckedNameDivText:function(a){this.isNumberField&&"number"===typeof a&&(a=k._getValues(this.layerDefinition,this.fieldPopupInfo,this.fieldName,[a])[0].label);this.checkedNameDiv.textContent?this.checkedNameDiv.textContent=a:this.checkedNameDiv.innerText=a},tryGetValueObject:function(){if(this.isValidValue())return this.getValueObject();if(this.isEmptyValue()){var a=null,a="multipleDynamic"===this.controlType||"multiplePredefined"===this.controlType?[]:"string"===
this.shortType?"":null;return{isValid:!0,type:this.partObj.valueObj.type,value:a}}return null},getValueObject:function(){if(this.isValidValue()){var a;a="multipleDynamic"===this.controlType||"uniqueDynamic"===this.controlType?this.listSelect.getListCheckedValues():this.listSelect.getListValues();"uniqueDynamic"===this.controlType&&(a=e.isArray(a)?a[0]:a);!this.runtime&&this.cbxPopup&&this.cbxPopup.domNode&&(this.cbxPopup.onClose=e.hitch(this,function(){return!0}),this.cbxPopup.close());return{isValid:!0,
type:this.partObj.valueObj.type,value:a}}return null},setRequired:function(a){this.listSelect.set("required",a)},_showDataQueryingIcon:function(){this._validatingNode||(this._validatingNode=d.create("div",{"class":"jimu-circle-loading"},this.checkedBtn));d.setStyle(this._validatingNode,"display","block")},_hideDataQueryingIcon:function(){this._validatingNode&&d.setStyle(this._validatingNode,"display","none")},_showLoadingIcon:function(){this.listSelect&&this.listSelect.listContainer&&d.addClass(this.listSelect.listContainer,
"jimu-circle-loading")},_hideLoadingIcon:function(){this.listSelect&&this.listSelect.listContainer&&d.removeClass(this.listSelect.listContainer,"jimu-circle-loading")},destroy:function(){this._multipleSelectProviderEventHandler&&document.removeEventListener("click",this._multipleSelectProviderEventHandler,{capture:!0});this.inherited(arguments)},destroyProvider:function(){this.listSelect&&this.listSelect.destroy();this.listSelect=null}})});