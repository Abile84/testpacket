(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6998],{11163:function(e,t,i){e.exports=i(59974)},87536:function(e,t,i){"use strict";i.d(t,{cI:function(){return useForm}});var r=i(67294),isCheckBoxInput=e=>"checkbox"===e.type,isDateObject=e=>e instanceof Date,isNullOrUndefined=e=>null==e;let isObjectType=e=>"object"==typeof e;var isObject=e=>!isNullOrUndefined(e)&&!Array.isArray(e)&&isObjectType(e)&&!isDateObject(e),getEventValue=e=>isObject(e)&&e.target?isCheckBoxInput(e.target)?e.target.checked:e.target.value:e,getNodeParentName=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,isNameInFieldArray=(e,t)=>e.has(getNodeParentName(t)),isPlainObject=e=>{let t=e.constructor&&e.constructor.prototype;return isObject(t)&&t.hasOwnProperty("isPrototypeOf")},s="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function cloneObject(e){let t;let i=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(s&&(e instanceof Blob||e instanceof FileList))&&(i||isObject(e))))return e;else if(t=i?[]:{},i||isPlainObject(e))for(let i in e)e.hasOwnProperty(i)&&(t[i]=cloneObject(e[i]));else t=e;return t}var compact=e=>Array.isArray(e)?e.filter(Boolean):[],isUndefined=e=>void 0===e,get=(e,t,i)=>{if(!t||!isObject(e))return i;let r=compact(t.split(/[,[\].]+?/)).reduce((e,t)=>isNullOrUndefined(e)?e:e[t],e);return isUndefined(r)||r===e?isUndefined(e[t])?i:e[t]:r},isBoolean=e=>"boolean"==typeof e;let a={BLUR:"blur",FOCUS_OUT:"focusout"},l={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},n={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};r.createContext(null);var getProxyFormState=(e,t,i,r=!0)=>{let s={defaultValues:t._defaultValues};for(let a in e)Object.defineProperty(s,a,{get:()=>(t._proxyFormState[a]!==l.all&&(t._proxyFormState[a]=!r||l.all),i&&(i[a]=!0),e[a])});return s},isEmptyObject=e=>isObject(e)&&!Object.keys(e).length,shouldRenderFormState=(e,t,i,r)=>{i(e);let{name:s,...a}=e;return isEmptyObject(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!r||l.all))},convertToArrayPayload=e=>Array.isArray(e)?e:[e],isString=e=>"string"==typeof e,generateWatchOutput=(e,t,i,r,s)=>isString(e)?(r&&t.watch.add(e),get(i,e,s)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),get(i,e))):(r&&(t.watchAll=!0),i),isKey=e=>/^\w*$/.test(e),stringToPath=e=>compact(e.replace(/["|']|\]/g,"").split(/\.|\[/));function set(e,t,i){let r=-1,s=isKey(t)?[t]:stringToPath(t),a=s.length,l=a-1;for(;++r<a;){let t=s[r],a=i;if(r!==l){let i=e[t];a=isObject(i)||Array.isArray(i)?i:isNaN(+s[r+1])?{}:[]}e[t]=a,e=e[t]}return e}var appendErrors=(e,t,i,r,s)=>t?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:s||!0}}:{},getValidationModes=e=>({isOnSubmit:!e||e===l.onSubmit,isOnBlur:e===l.onBlur,isOnChange:e===l.onChange,isOnAll:e===l.all,isOnTouch:e===l.onTouched}),isWatched=(e,t,i)=>!i&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let iterateFieldsByAction=(e,t,i,r)=>{for(let s of i||Object.keys(e)){let i=get(e,s);if(i){let{_f:e,...a}=i;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!r||e.ref&&t(e.ref,e.name)&&!r)break}else isObject(a)&&iterateFieldsByAction(a,t)}}};var updateFieldArrayRootError=(e,t,i)=>{let r=compact(get(e,i));return set(r,"root",t[i]),set(e,i,r),e},isFileInput=e=>"file"===e.type,isFunction=e=>"function"==typeof e,isHTMLElement=e=>{if(!s)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},isMessage=e=>isString(e),isRadioInput=e=>"radio"===e.type,isRegex=e=>e instanceof RegExp;let u={value:!1,isValid:!1},d={value:!0,isValid:!0};var getCheckboxValue=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!isUndefined(e[0].attributes.value)?isUndefined(e[0].value)||""===e[0].value?d:{value:e[0].value,isValid:!0}:d:u}return u};let o={isValid:!1,value:null};var getRadioValue=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,o):o;function getValidateError(e,t,i="validate"){if(isMessage(e)||Array.isArray(e)&&e.every(isMessage)||isBoolean(e)&&!e)return{type:i,message:isMessage(e)?e:"",ref:t}}var getValueAndMessage=e=>isObject(e)&&!isRegex(e)?e:{value:e,message:""},validateField=async(e,t,i,r,s)=>{let{ref:a,refs:l,required:u,maxLength:d,minLength:o,min:c,max:f,pattern:g,validate:y,name:m,valueAsNumber:p,mount:h,disabled:b}=e._f,V=get(t,m);if(!h||b)return{};let v=l?l[0]:a,setCustomValidity=e=>{r&&v.reportValidity&&(v.setCustomValidity(isBoolean(e)?"":e||""),v.reportValidity())},_={},F=isRadioInput(a),O=isCheckBoxInput(a),A=(p||isFileInput(a))&&isUndefined(a.value)&&isUndefined(V)||isHTMLElement(a)&&""===a.value||""===V||Array.isArray(V)&&!V.length,S=appendErrors.bind(null,m,i,_),getMinMaxMessage=(e,t,i,r=n.maxLength,s=n.minLength)=>{let l=e?t:i;_[m]={type:e?r:s,message:l,ref:a,...S(e?r:s,l)}};if(s?!Array.isArray(V)||!V.length:u&&(!(F||O)&&(A||isNullOrUndefined(V))||isBoolean(V)&&!V||O&&!getCheckboxValue(l).isValid||F&&!getRadioValue(l).isValid)){let{value:e,message:t}=isMessage(u)?{value:!!u,message:u}:getValueAndMessage(u);if(e&&(_[m]={type:n.required,message:t,ref:v,...S(n.required,t)},!i))return setCustomValidity(t),_}if(!A&&(!isNullOrUndefined(c)||!isNullOrUndefined(f))){let e,t;let r=getValueAndMessage(f),s=getValueAndMessage(c);if(isNullOrUndefined(V)||isNaN(V)){let i=a.valueAsDate||new Date(V),convertTimeToDate=e=>new Date(new Date().toDateString()+" "+e),l="time"==a.type,n="week"==a.type;isString(r.value)&&V&&(e=l?convertTimeToDate(V)>convertTimeToDate(r.value):n?V>r.value:i>new Date(r.value)),isString(s.value)&&V&&(t=l?convertTimeToDate(V)<convertTimeToDate(s.value):n?V<s.value:i<new Date(s.value))}else{let i=a.valueAsNumber||(V?+V:V);isNullOrUndefined(r.value)||(e=i>r.value),isNullOrUndefined(s.value)||(t=i<s.value)}if((e||t)&&(getMinMaxMessage(!!e,r.message,s.message,n.max,n.min),!i))return setCustomValidity(_[m].message),_}if((d||o)&&!A&&(isString(V)||s&&Array.isArray(V))){let e=getValueAndMessage(d),t=getValueAndMessage(o),r=!isNullOrUndefined(e.value)&&V.length>+e.value,s=!isNullOrUndefined(t.value)&&V.length<+t.value;if((r||s)&&(getMinMaxMessage(r,e.message,t.message),!i))return setCustomValidity(_[m].message),_}if(g&&!A&&isString(V)){let{value:e,message:t}=getValueAndMessage(g);if(isRegex(e)&&!V.match(e)&&(_[m]={type:n.pattern,message:t,ref:a,...S(n.pattern,t)},!i))return setCustomValidity(t),_}if(y){if(isFunction(y)){let e=await y(V,t),r=getValidateError(e,v);if(r&&(_[m]={...r,...S(n.validate,r.message)},!i))return setCustomValidity(r.message),_}else if(isObject(y)){let e={};for(let r in y){if(!isEmptyObject(e)&&!i)break;let s=getValidateError(await y[r](V,t),v,r);s&&(e={...s,...S(r,s.message)},setCustomValidity(s.message),i&&(_[m]=e))}if(!isEmptyObject(e)&&(_[m]={ref:v,...e},!i))return _}}return setCustomValidity(!0),_};function unset(e,t){let i=Array.isArray(t)?t:isKey(t)?[t]:stringToPath(t),r=1===i.length?e:function(e,t){let i=t.slice(0,-1).length,r=0;for(;r<i;)e=isUndefined(e)?r++:e[t[r++]];return e}(e,i),s=i.length-1,a=i[s];return r&&delete r[a],0!==s&&(isObject(r)&&isEmptyObject(r)||Array.isArray(r)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!isUndefined(e[t]))return!1;return!0}(r))&&unset(e,i.slice(0,-1)),e}function createSubject(){let e=[];return{get observers(){return e},next:t=>{for(let i of e)i.next&&i.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}}var isPrimitive=e=>isNullOrUndefined(e)||!isObjectType(e);function deepEqual(e,t){if(isPrimitive(e)||isPrimitive(t))return e===t;if(isDateObject(e)&&isDateObject(t))return e.getTime()===t.getTime();let i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(let s of i){let i=e[s];if(!r.includes(s))return!1;if("ref"!==s){let e=t[s];if(isDateObject(i)&&isDateObject(e)||isObject(i)&&isObject(e)||Array.isArray(i)&&Array.isArray(e)?!deepEqual(i,e):i!==e)return!1}}return!0}var isMultipleSelect=e=>"select-multiple"===e.type,isRadioOrCheckbox=e=>isRadioInput(e)||isCheckBoxInput(e),live=e=>isHTMLElement(e)&&e.isConnected,objectHasFunction=e=>{for(let t in e)if(isFunction(e[t]))return!0;return!1};function markFieldsDirty(e,t={}){let i=Array.isArray(e);if(isObject(e)||i)for(let i in e)Array.isArray(e[i])||isObject(e[i])&&!objectHasFunction(e[i])?(t[i]=Array.isArray(e[i])?[]:{},markFieldsDirty(e[i],t[i])):isNullOrUndefined(e[i])||(t[i]=!0);return t}var getDirtyFields=(e,t)=>(function getDirtyFieldsFromDefaultValues(e,t,i){let r=Array.isArray(e);if(isObject(e)||r)for(let r in e)Array.isArray(e[r])||isObject(e[r])&&!objectHasFunction(e[r])?isUndefined(t)||isPrimitive(i[r])?i[r]=Array.isArray(e[r])?markFieldsDirty(e[r],[]):{...markFieldsDirty(e[r])}:getDirtyFieldsFromDefaultValues(e[r],isNullOrUndefined(t)?{}:t[r],i[r]):i[r]=!deepEqual(e[r],t[r]);return i})(e,t,markFieldsDirty(t)),getFieldValueAs=(e,{valueAsNumber:t,valueAsDate:i,setValueAs:r})=>isUndefined(e)?e:t?""===e?NaN:e?+e:e:i&&isString(e)?new Date(e):r?r(e):e;function getFieldValue(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:isFileInput(t)?t.files:isRadioInput(t)?getRadioValue(e.refs).value:isMultipleSelect(t)?[...t.selectedOptions].map(({value:e})=>e):isCheckBoxInput(t)?getCheckboxValue(e.refs).value:getFieldValueAs(isUndefined(t.value)?e.ref.value:t.value,e)}var getResolverOptions=(e,t,i,r)=>{let s={};for(let i of e){let e=get(t,i);e&&set(s,i,e._f)}return{criteriaMode:i,names:[...e],fields:s,shouldUseNativeValidation:r}},getRuleValue=e=>isUndefined(e)?e:isRegex(e)?e.source:isObject(e)?isRegex(e.value)?e.value.source:e.value:e,hasValidation=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function schemaErrorLookup(e,t,i){let r=get(e,i);if(r||isKey(i))return{error:r,name:i};let s=i.split(".");for(;s.length;){let r=s.join("."),a=get(t,r),l=get(e,r);if(a&&!Array.isArray(a)&&i!==r)break;if(l&&l.type)return{name:r,error:l};s.pop()}return{name:i}}var skipValidation=(e,t,i,r,s)=>!s.isOnAll&&(!i&&s.isOnTouch?!(t||e):(i?r.isOnBlur:s.isOnBlur)?!e:(i?!r.isOnChange:!s.isOnChange)||e),unsetEmptyArray=(e,t)=>!compact(get(e,t)).length&&unset(e,t);let c={mode:l.onSubmit,reValidateMode:l.onChange,shouldFocusError:!0};function useForm(e={}){let t=r.useRef(),i=r.useRef(),[n,u]=r.useState({isDirty:!1,isValidating:!1,isLoading:isFunction(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:isFunction(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let i,r={...c,...e},n={submitCount:0,isDirty:!1,isLoading:isFunction(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},u={},d=(isObject(r.defaultValues)||isObject(r.values))&&cloneObject(r.defaultValues||r.values)||{},o=r.shouldUnregister?{}:cloneObject(d),f={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},y=0,m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:createSubject(),array:createSubject(),state:createSubject()},h=e.resetOptions&&e.resetOptions.keepDirtyValues,b=getValidationModes(r.mode),V=getValidationModes(r.reValidateMode),v=r.criteriaMode===l.all,debounce=e=>t=>{clearTimeout(y),y=setTimeout(e,t)},_updateValid=async e=>{if(m.isValid||e){let e=r.resolver?isEmptyObject((await _executeSchema()).errors):await executeBuiltInValidation(u,!0);e!==n.isValid&&p.state.next({isValid:e})}},_updateIsValidating=e=>m.isValidating&&p.state.next({isValidating:e}),updateErrors=(e,t)=>{set(n.errors,e,t),p.state.next({errors:n.errors})},updateValidAndValue=(e,t,i,r)=>{let s=get(u,e);if(s){let a=get(o,e,isUndefined(i)?get(d,e):i);isUndefined(a)||r&&r.defaultChecked||t?set(o,e,t?a:getFieldValue(s._f)):setFieldValue(e,a),f.mount&&_updateValid()}},updateTouchAndDirty=(e,t,i,r,s)=>{let a=!1,l=!1,u={name:e};if(!i||r){m.isDirty&&(l=n.isDirty,n.isDirty=u.isDirty=_getDirty(),a=l!==u.isDirty);let i=deepEqual(get(d,e),t);l=get(n.dirtyFields,e),i?unset(n.dirtyFields,e):set(n.dirtyFields,e,!0),u.dirtyFields=n.dirtyFields,a=a||m.dirtyFields&&!i!==l}if(i){let t=get(n.touchedFields,e);t||(set(n.touchedFields,e,i),u.touchedFields=n.touchedFields,a=a||m.touchedFields&&t!==i)}return a&&s&&p.state.next(u),a?u:{}},shouldRenderByError=(t,r,s,a)=>{let l=get(n.errors,t),u=m.isValid&&isBoolean(r)&&n.isValid!==r;if(e.delayError&&s?(i=debounce(()=>updateErrors(t,s)))(e.delayError):(clearTimeout(y),i=null,s?set(n.errors,t,s):unset(n.errors,t)),(s?!deepEqual(l,s):l)||!isEmptyObject(a)||u){let e={...a,...u&&isBoolean(r)?{isValid:r}:{},errors:n.errors,name:t};n={...n,...e},p.state.next(e)}_updateIsValidating(!1)},_executeSchema=async e=>r.resolver(o,r.context,getResolverOptions(e||g.mount,u,r.criteriaMode,r.shouldUseNativeValidation)),executeSchemaAndUpdateState=async e=>{let{errors:t}=await _executeSchema(e);if(e)for(let i of e){let e=get(t,i);e?set(n.errors,i,e):unset(n.errors,i)}else n.errors=t;return t},executeBuiltInValidation=async(e,t,i={valid:!0})=>{for(let s in e){let a=e[s];if(a){let{_f:e,...s}=a;if(e){let s=g.array.has(e.name),l=await validateField(a,o,v,r.shouldUseNativeValidation&&!t,s);if(l[e.name]&&(i.valid=!1,t))break;t||(get(l,e.name)?s?updateFieldArrayRootError(n.errors,l,e.name):set(n.errors,e.name,l[e.name]):unset(n.errors,e.name))}s&&await executeBuiltInValidation(s,t,i)}}return i.valid},_getDirty=(e,t)=>(e&&t&&set(o,e,t),!deepEqual(getValues(),d)),_getWatch=(e,t,i)=>generateWatchOutput(e,g,{...f.mount?o:isUndefined(t)?d:isString(e)?{[e]:t}:t},i,t),setFieldValue=(e,t,i={})=>{let r=get(u,e),s=t;if(r){let i=r._f;i&&(i.disabled||set(o,e,getFieldValueAs(t,i)),s=isHTMLElement(i.ref)&&isNullOrUndefined(t)?"":t,isMultipleSelect(i.ref)?[...i.ref.options].forEach(e=>e.selected=s.includes(e.value)):i.refs?isCheckBoxInput(i.ref)?i.refs.length>1?i.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(s)?!!s.find(t=>t===e.value):s===e.value)):i.refs[0]&&(i.refs[0].checked=!!s):i.refs.forEach(e=>e.checked=e.value===s):isFileInput(i.ref)?i.ref.value="":(i.ref.value=s,i.ref.type||p.values.next({name:e,values:{...o}})))}(i.shouldDirty||i.shouldTouch)&&updateTouchAndDirty(e,s,i.shouldTouch,i.shouldDirty,!0),i.shouldValidate&&trigger(e)},setValues=(e,t,i)=>{for(let r in t){let s=t[r],a=`${e}.${r}`,l=get(u,a);!g.array.has(e)&&isPrimitive(s)&&(!l||l._f)||isDateObject(s)?setFieldValue(a,s,i):setValues(a,s,i)}},setValue=(e,i,r={})=>{let s=get(u,e),a=g.array.has(e),l=cloneObject(i);set(o,e,l),a?(p.array.next({name:e,values:{...o}}),(m.isDirty||m.dirtyFields)&&r.shouldDirty&&p.state.next({name:e,dirtyFields:getDirtyFields(d,o),isDirty:_getDirty(e,l)})):!s||s._f||isNullOrUndefined(l)?setFieldValue(e,l,r):setValues(e,l,r),isWatched(e,g)&&p.state.next({...n}),p.values.next({name:e,values:{...o}}),f.mount||t()},onChange=async e=>{let t=e.target,s=t.name,l=!0,d=get(u,s),_updateIsFieldValueUpdated=e=>{l=Number.isNaN(e)||e===get(o,s,e)};if(d){let c,f;let y=t.type?getFieldValue(d._f):getEventValue(e),h=e.type===a.BLUR||e.type===a.FOCUS_OUT,_=!hasValidation(d._f)&&!r.resolver&&!get(n.errors,s)&&!d._f.deps||skipValidation(h,get(n.touchedFields,s),n.isSubmitted,V,b),F=isWatched(s,g,h);set(o,s,y),h?(d._f.onBlur&&d._f.onBlur(e),i&&i(0)):d._f.onChange&&d._f.onChange(e);let O=updateTouchAndDirty(s,y,h,!1),A=!isEmptyObject(O)||F;if(h||p.values.next({name:s,type:e.type,values:{...o}}),_)return m.isValid&&_updateValid(),A&&p.state.next({name:s,...F?{}:O});if(!h&&F&&p.state.next({...n}),_updateIsValidating(!0),r.resolver){let{errors:e}=await _executeSchema([s]);if(_updateIsFieldValueUpdated(y),l){let t=schemaErrorLookup(n.errors,u,s),i=schemaErrorLookup(e,u,t.name||s);c=i.error,s=i.name,f=isEmptyObject(e)}}else c=(await validateField(d,o,v,r.shouldUseNativeValidation))[s],_updateIsFieldValueUpdated(y),l&&(c?f=!1:m.isValid&&(f=await executeBuiltInValidation(u,!0)));l&&(d._f.deps&&trigger(d._f.deps),shouldRenderByError(s,f,c,O))}},_focusInput=(e,t)=>{if(get(n.errors,t)&&e.focus)return e.focus(),1},trigger=async(e,t={})=>{let i,s;let a=convertToArrayPayload(e);if(_updateIsValidating(!0),r.resolver){let t=await executeSchemaAndUpdateState(isUndefined(e)?e:a);i=isEmptyObject(t),s=e?!a.some(e=>get(t,e)):i}else e?((s=(await Promise.all(a.map(async e=>{let t=get(u,e);return await executeBuiltInValidation(t&&t._f?{[e]:t}:t)}))).every(Boolean))||n.isValid)&&_updateValid():s=i=await executeBuiltInValidation(u);return p.state.next({...!isString(e)||m.isValid&&i!==n.isValid?{}:{name:e},...r.resolver||!e?{isValid:i}:{},errors:n.errors,isValidating:!1}),t.shouldFocus&&!s&&iterateFieldsByAction(u,_focusInput,e?a:g.mount),s},getValues=e=>{let t={...d,...f.mount?o:{}};return isUndefined(e)?t:isString(e)?get(t,e):e.map(e=>get(t,e))},getFieldState=(e,t)=>({invalid:!!get((t||n).errors,e),isDirty:!!get((t||n).dirtyFields,e),isTouched:!!get((t||n).touchedFields,e),error:get((t||n).errors,e)}),setError=(e,t,i)=>{let r=(get(u,e,{_f:{}})._f||{}).ref;set(n.errors,e,{...t,ref:r}),p.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&r&&r.focus&&r.focus()},unregister=(e,t={})=>{for(let i of e?convertToArrayPayload(e):g.mount)g.mount.delete(i),g.array.delete(i),t.keepValue||(unset(u,i),unset(o,i)),t.keepError||unset(n.errors,i),t.keepDirty||unset(n.dirtyFields,i),t.keepTouched||unset(n.touchedFields,i),r.shouldUnregister||t.keepDefaultValue||unset(d,i);p.values.next({values:{...o}}),p.state.next({...n,...t.keepDirty?{isDirty:_getDirty()}:{}}),t.keepIsValid||_updateValid()},_updateDisabledField=({disabled:e,name:t,field:i,fields:r,value:s})=>{if(isBoolean(e)){let a=e?void 0:isUndefined(s)?getFieldValue(i?i._f:get(r,t)._f):s;set(o,t,a),updateTouchAndDirty(t,a,!1,!1,!0)}},register=(e,t={})=>{let i=get(u,e),s=isBoolean(t.disabled);return set(u,e,{...i||{},_f:{...i&&i._f?i._f:{ref:{name:e}},name:e,mount:!0,...t}}),g.mount.add(e),i?_updateDisabledField({field:i,disabled:t.disabled,name:e}):updateValidAndValue(e,!0,t.value),{...s?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:getRuleValue(t.min),max:getRuleValue(t.max),minLength:getRuleValue(t.minLength),maxLength:getRuleValue(t.maxLength),pattern:getRuleValue(t.pattern)}:{},name:e,onChange,onBlur:onChange,ref:s=>{if(s){register(e,t),i=get(u,e);let r=isUndefined(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,a=isRadioOrCheckbox(r),l=i._f.refs||[];(a?l.find(e=>e===r):r===i._f.ref)||(set(u,e,{_f:{...i._f,...a?{refs:[...l.filter(live),r,...Array.isArray(get(d,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),updateValidAndValue(e,!1,void 0,r))}else(i=get(u,e,{}))._f&&(i._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&!(isNameInFieldArray(g.array,e)&&f.action)&&g.unMount.add(e)}}},_focusError=()=>r.shouldFocusError&&iterateFieldsByAction(u,_focusInput,g.mount),handleSubmit=(e,t)=>async i=>{i&&(i.preventDefault&&i.preventDefault(),i.persist&&i.persist());let s=cloneObject(o);if(p.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await _executeSchema();n.errors=e,s=t}else await executeBuiltInValidation(u);unset(n.errors,"root"),isEmptyObject(n.errors)?(p.state.next({errors:{}}),await e(s,i)):(t&&await t({...n.errors},i),_focusError(),setTimeout(_focusError)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:isEmptyObject(n.errors),submitCount:n.submitCount+1,errors:n.errors})},_reset=(i,r={})=>{let a=i?cloneObject(i):d,l=cloneObject(a),c=i&&!isEmptyObject(i)?l:d;if(r.keepDefaultValues||(d=a),!r.keepValues){if(r.keepDirtyValues||h)for(let e of g.mount)get(n.dirtyFields,e)?set(c,e,get(o,e)):setValue(e,get(c,e));else{if(s&&isUndefined(i))for(let e of g.mount){let t=get(u,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(isHTMLElement(e)){let t=e.closest("form");if(t){t.reset();break}}}}u={}}o=e.shouldUnregister?r.keepDefaultValues?cloneObject(d):{}:cloneObject(c),p.array.next({values:{...c}}),p.values.next({values:{...c}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},f.mount||t(),f.mount=!m.isValid||!!r.keepIsValid,f.watch=!!e.shouldUnregister,p.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:r.keepDirty?n.isDirty:!!(r.keepDefaultValues&&!deepEqual(i,d)),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:r.keepDirtyValues?n.dirtyFields:r.keepDefaultValues&&i?getDirtyFields(d,i):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&n.isSubmitSuccessful,isSubmitting:!1})},reset=(e,t)=>_reset(isFunction(e)?e(o):e,t);return{control:{register,unregister,getFieldState,handleSubmit,setError,_executeSchema,_getWatch,_getDirty,_updateValid,_removeUnmounted:()=>{for(let e of g.unMount){let t=get(u,e);t&&(t._f.refs?t._f.refs.every(e=>!live(e)):!live(t._f.ref))&&unregister(e)}g.unMount=new Set},_updateFieldArray:(e,t=[],i,r,s=!0,a=!0)=>{if(r&&i){if(f.action=!0,a&&Array.isArray(get(u,e))){let t=i(get(u,e),r.argA,r.argB);s&&set(u,e,t)}if(a&&Array.isArray(get(n.errors,e))){let t=i(get(n.errors,e),r.argA,r.argB);s&&set(n.errors,e,t),unsetEmptyArray(n.errors,e)}if(m.touchedFields&&a&&Array.isArray(get(n.touchedFields,e))){let t=i(get(n.touchedFields,e),r.argA,r.argB);s&&set(n.touchedFields,e,t)}m.dirtyFields&&(n.dirtyFields=getDirtyFields(d,o)),p.state.next({name:e,isDirty:_getDirty(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else set(o,e,t)},_updateDisabledField,_getFieldArray:t=>compact(get(f.mount?o:d,t,e.shouldUnregister?get(d,t,[]):[])),_reset,_resetDefaultValues:()=>isFunction(r.defaultValues)&&r.defaultValues().then(e=>{reset(e,r.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:e=>{n={...n,...e}},_disableForm:e=>{isBoolean(e)&&(p.state.next({disabled:e}),iterateFieldsByAction(u,t=>{t.disabled=e},0,!1))},_subjects:p,_proxyFormState:m,get _fields(){return u},get _formValues(){return o},get _state(){return f},set _state(value){f=value},get _defaultValues(){return d},get _names(){return g},set _names(value){g=value},get _formState(){return n},set _formState(value){n=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger,register,handleSubmit,watch:(e,t)=>isFunction(e)?p.values.subscribe({next:i=>e(_getWatch(void 0,t),i)}):_getWatch(e,t,!0),setValue,getValues,reset,resetField:(e,t={})=>{get(u,e)&&(isUndefined(t.defaultValue)?setValue(e,get(d,e)):(setValue(e,t.defaultValue),set(d,e,t.defaultValue)),t.keepTouched||unset(n.touchedFields,e),t.keepDirty||(unset(n.dirtyFields,e),n.isDirty=t.defaultValue?_getDirty(e,get(d,e)):_getDirty()),!t.keepError&&(unset(n.errors,e),m.isValid&&_updateValid()),p.state.next({...n}))},clearErrors:e=>{e&&convertToArrayPayload(e).forEach(e=>unset(n.errors,e)),p.state.next({errors:e?n.errors:{}})},unregister,setError,setFocus:(e,t={})=>{let i=get(u,e),r=i&&i._f;if(r){let e=r.refs?r.refs[0]:r.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState}}(e,()=>u(e=>({...e}))),formState:n});let d=t.current.control;return d._options=e,!function(e){let t=r.useRef(e);t.current=e,r.useEffect(()=>{let i=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}({subject:d._subjects.state,next:e=>{shouldRenderFormState(e,d._proxyFormState,d._updateFormState,!0)&&u({...d._formState})}}),r.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),r.useEffect(()=>{if(d._proxyFormState.isDirty){let e=d._getDirty();e!==n.isDirty&&d._subjects.state.next({isDirty:e})}},[d,n.isDirty]),r.useEffect(()=>{e.values&&!deepEqual(e.values,i.current)?(d._reset(e.values,d._options.resetOptions),i.current=e.values):d._resetDefaultValues()},[e.values,d]),r.useEffect(()=>{d._state.mount||(d._updateValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),t.current.formState=getProxyFormState(n,d),t.current}}}]);