"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8692],{4646:function(e,t,r){r.d(t,{n:function(){return normalizeChainId}});function normalizeChainId(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},38692:function(e,t,r){r.d(t,{PaperWalletConnector:function(){return PaperWalletConnector}});var s=r(16074),a=r(42009),l=r(74018),h=r(19485),g=r(20722),p=r(27021),w=r(4646);r(65007);var f=new WeakMap;let PaperWalletConnector=class PaperWalletConnector extends p.C{constructor(e){super(),(0,a._)(this,"id",g.w.paper),(0,a._)(this,"name","Paper Wallet"),(0,a._)(this,"ready",!0),(0,a._)(this,"user",null),(0,s._)(this,f,{writable:!0,value:void 0}),(0,a._)(this,"onAccountsChanged",async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:h.getAddress(e[0])})}),(0,a._)(this,"onChainChanged",e=>{let t=(0,w.n)(e),r=-1===this.options.chains.findIndex(e=>e.chainId===t);this.emit("change",{chain:{id:t,unsupported:r}})}),(0,a._)(this,"onDisconnect",async()=>{this.emit("disconnect")}),this.options=e}getPaperSDK(){return this.paper||(this.paper=new Promise(async(e,t)=>{let s=this.options.advancedOptions?.recoveryShareManagement;try{let{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(r.bind(r,74018)),a={AWS_MANAGED:l.pw.AWS_MANAGED,USER_MANAGED:l.pw.USER_MANAGED},h=s?a[s]:void 0;e(new t({advancedOptions:{recoveryShareManagement:h},clientId:this.options.clientId,chain:"Ethereum",styles:this.options.styles,onAuthSuccess:this.options.onAuthSuccess}))}catch(e){t(e)}})),this.paper}async connect(e){let t=await this.getPaperSDK();if(!t)throw Error("Paper SDK not initialized");let r=await t.getUser();switch(r.status){case l.J0.LOGGED_OUT:{let r;if(e?.googleLogin){let s=e.googleLogin;r=await t.auth.loginWithGoogle("object"==typeof s?s:void 0)}else r=e?.email&&e?.otp?await t.auth.verifyPaperEmailLoginOtp({email:e.email,otp:e.otp,recoveryCode:e.recoveryCode}):e?.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal();this.user=r.user;break}case l.J0.LOGGED_IN_WALLET_INITIALIZED:"object"==typeof e?.googleLogin&&e.googleLogin.closeOpenedWindow&&e.googleLogin.openedWindow&&e.googleLogin.closeOpenedWindow(e.googleLogin.openedWindow),this.user=r}if(!this.user)throw Error("Error connecting User");return e?.chainId&&this.switchChain(e.chainId),this.setupListeners(),this.getAddress()}async disconnect(){let e=await this.paper;await e?.auth.logout(),(0,s.a)(this,f,void 0),this.user=null}async getAddress(){let e=await this.getSigner();return e.getAddress()}async isConnected(){try{let e=await this.getAddress();return!!e}catch(e){return!1}}async getProvider(){let e=await this.getSigner();if(!e.provider)throw Error("Provider not found");return e.provider}async getSigner(){if((0,s.b)(this,f))return(0,s.b)(this,f);if(!this.user){let e=await this.getPaperSDK(),t=await e.getUser();t.status===l.J0.LOGGED_IN_WALLET_INITIALIZED&&(this.user=t)}let e=await this.user?.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""});if(!e)throw Error("Signer not found");return(0,s.a)(this,f,e),e}async isAuthorized(){return!1}async switchChain(e){let t=this.options.chains.find(t=>t.chainId===e);if(!t)throw Error("Chain not configured");await this.user?.wallet.setChain({chain:"Ethereum"}),(0,s.a)(this,f,await this.user?.wallet.getEthersJsSigner({rpcEndpoint:t.rpc[0]||""})),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},74018:function(e,t,r){r.d(t,{J0:function(){return P},PaperEmbeddedWalletSdk:function(){return $},pw:function(){return _}});var s,a,l,h,g=r(73934),p=r(27349),w=r(48088),f=r(6881),E=Object.defineProperty,A=Object.defineProperties,S=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&k(e,r,t[r]);if(O)for(var r of O(t))C.call(t,r)&&k(e,r,t[r]);return e},y=(e,t)=>A(e,S(t)),i=(e,t,r)=>new Promise((s,a)=>{var o=e=>{try{d(r.next(e))}catch(e){a(e)}},n=e=>{try{d(r.throw(e))}catch(e){a(e)}},d=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,n);d((r=r.apply(e,t)).next())}),M="/sdk/2022-08-12/embedded-wallet",L=e=>`paperEwsWalletUserId-${e}`,I=e=>`walletToken-${e}`,W=(e,t)=>`a-${e}-${t}`,_=((s=_||{}).USER_MANAGED="USER_MANAGED",s.AWS_MANAGED="AWS_MANAGED",s),N=((a=N||{}).PAPER_EMAIL_OTP="PaperEmailOTP",a.GOOGLE="Google",a.TWITTER="Twitter",a.COGNITO="Cognito",a.AUTH0="Auth0",a.CUSTOM_JWT="CustomJWT",a),P=((l=P||{}).LOGGED_OUT="Logged Out",l.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",l),T=((h=T||{}).LOGGED_OUT="Logged Out",h.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",h.LOGGED_IN_NEW_DEVICE="Logged In, New Device",h.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",h),G=new Map,U=class{constructor({clientId:e}){this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=e}getItem(e){return i(this,null,function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=G.get(e))?t:null})}setItem(e,t){return i(this,null,function*(){if(this.isSupported)return window.localStorage.setItem(e,t);G.set(e,t)})}removeItem(e){return i(this,null,function*(){let t=yield this.getItem(e);return!!this.isSupported&&!!t&&(window.localStorage.removeItem(e),!0)})}saveAuthCookie(e){return i(this,null,function*(){yield this.setItem(I(this.clientId),e)})}getAuthCookie(){return i(this,null,function*(){return this.getItem(I(this.clientId))})}removeAuthCookie(){return i(this,null,function*(){return this.removeItem(I(this.clientId))})}saveDeviceShare(e,t){return i(this,null,function*(){yield this.saveWalletUserId(t),yield this.setItem(W(this.clientId,t),e)})}getDeviceShare(){return i(this,null,function*(){let e=yield this.getWalletUserId();return e?this.getItem(W(this.clientId,e)):null})}removeDeviceShare(){return i(this,null,function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(W(this.clientId,e))})}getWalletUserId(){return i(this,null,function*(){return this.getItem(L(this.clientId))})}saveWalletUserId(e){return i(this,null,function*(){yield this.setItem(L(this.clientId),e)})}removeWalletUserId(){return i(this,null,function*(){return this.removeItem(L(this.clientId))})}};function v(e){return new Promise(t=>{setTimeout(t,1e3*e)})}var b={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},R=new Map,j=class{constructor({link:e,iframeId:t,container:r=document.body,iframeStyles:s,onIframeInitialize:a}){this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let l=document.getElementById(t),h=new URL(e),g="1.2.5";if(!g)throw Error("Missing SDK_VERSION env var");if(h.searchParams.set("sdkVersion",g),!l||l.src!=h.href){if(!l){l=document.createElement("iframe");let e=u(u({},b),s);Object.assign(l.style,e),l.setAttribute("id",t),l.setAttribute("fetchpriority","high"),r.appendChild(l)}l.src=h.href,l.setAttribute("data-version",g),l.onload=this.onIframeLoadHandler(l,this.POST_LOAD_BUFFER_SECONDS,a)}this.iframe=l}onIframeLoadedInitVariables(){return i(this,null,function*(){return{}})}onIframeLoadHandler(e,t,r){return()=>i(this,null,function*(){yield new Promise((s,a)=>i(this,null,function*(){var l;let h=new MessageChannel;h.port1.onmessage=t=>{let{data:l}=t;return h.port1.close(),l.success?(R.set(e.src,!0),r&&r(),s(!0)):a(Error(l.error))},yield v(t),null==(l=null==e?void 0:e.contentWindow)||l.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},`${(0,g.OB)()}${M}`,[h.port2])}))})}call(e){return i(this,arguments,function*({procedureName:e,params:t,showIframe:r=!1,injectRecoveryCode:s={isInjectRecoveryCode:!1}}){for(;!R.get(this.iframe.src);)yield v(this.POLLING_INTERVAL_SECONDS);return r&&(this.iframe.style.display="block",yield v(.005)),new Promise((a,l)=>{var h;if(s.isInjectRecoveryCode){let c=e=>i(this,null,function*(){var t,r;if(e.origin!==(0,g.OB)()||"paper_getRecoveryCode"!==e.data.type||"string"!=typeof e.data.userWalletId)return;let a=yield null==(t=s.getRecoveryCode)?void 0:t.call(s,e.data.userWalletId);null==(r=this.iframe.contentWindow)||r.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:a},(0,g.OB)()),window.removeEventListener("message",c)});window.addEventListener("message",c)}let p=new MessageChannel;p.port1.onmessage=e=>i(this,null,function*(){let{data:t}=e;p.port1.close(),r&&(yield v(.1),this.iframe.style.display="none"),t.success?a(t.data):l(Error(t.error))}),null==(h=this.iframe.contentWindow)||h.postMessage({eventType:e,data:t},`${(0,g.OB)()}${M}`,[p.port2])})})}destroy(){R.delete(this.iframe.src)}},q=class extends j{constructor({clientId:e,customizationOptions:t}){super({iframeId:Q,link:function({clientId:e,path:t,queryParams:r}){var s;let a=new URL(t,(0,g.OB)());if(r)for(let e of Object.keys(r))a.searchParams.set(e,(null==(s=r[e])?void 0:s.toString())||"");return a.searchParams.set("clientId",e),a}({clientId:e,path:M,queryParams:t}).href,container:document.body}),this.clientId=e}onIframeLoadedInitVariables(){return i(this,null,function*(){let e=new U({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}})}},Q="paper-embedded-wallet-iframe",z=class{constructor({querier:e,preLogin:t,postLogin:r,clientId:s}){this.LoginQuerier=e,this.preLogin=t,this.postLogin=r,this.clientId=s}sendPaperEmailLoginOtp(e){return i(this,arguments,function*({email:e,recoveryShareManagement:t}){yield this.preLogin();let{isNewUser:r,isNewDevice:s,recoveryShareManagement:a}=yield this.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:e,recoveryShareManagement:t}});return{isNewUser:r,isNewDevice:s,recoveryShareManagement:a}})}},x=class extends z{constructor(){super(...arguments),this.closeWindow=({isWindowOpenedByFn:e,win:t,closeOpenedWindow:r})=>{e?null==t||t.close():t&&r?r(t):t&&t.close()}}loginWithPaperModal(){return i(this,null,function*(){yield this.preLogin();let e=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(e)})}getGoogleLoginUrl(){return i(this,null,function*(){return yield this.LoginQuerier.call({procedureName:"getHeadlessGoogleLoginLink",params:void 0})})}loginWithGoogle(e){return i(this,null,function*(){yield this.preLogin();let t=null==e?void 0:e.openedWindow,r=!1;if(t||(t=window.open("","Login","width=350, height=500"),r=!0),!t)throw Error("Something went wrong opening pop-up");yield this.preLogin();let{loginLink:s}=yield this.getGoogleLoginUrl();t.location.href=s;let a=yield new Promise((s,a)=>{let l=window.setInterval(()=>i(this,null,function*(){t&&t.closed&&(clearInterval(l),window.removeEventListener("message",m),a(Error("User closed login window")))}),1e3),m=h=>i(this,null,function*(){if(h.origin===(0,g.OB)()){if("object"!=typeof h.data){a(Error("Invalid event data"));return}switch(h.data.eventType){case"userLoginSuccess":window.removeEventListener("message",m),clearInterval(l),this.closeWindow({isWindowOpenedByFn:r,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),h.data.authResult&&s(h.data.authResult);break;case"userLoginFailed":window.removeEventListener("message",m),clearInterval(l),this.closeWindow({isWindowOpenedByFn:r,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),a(Error(h.data.error));break;case"injectDeveloperClientId":null==t||t.postMessage({eventType:"injectDeveloperClientIdResult",developerClientId:this.clientId},(0,g.OB)())}}});window.addEventListener("message",m)});return this.postLogin({storedToken:y(u({},a.storedToken),{shouldStoreCookieString:!0}),walletDetails:y(u({},a.walletDetails),{isIframeStorageEnabled:!1})})})}loginWithPaperEmailOtp(e){return i(this,arguments,function*({email:e}){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(t)})}verifyPaperEmailLoginOtp(e){return i(this,arguments,function*({email:e,otp:t}){let r=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(r)})}},B=class extends z{loginWithPaperModal(e){return i(this,null,function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)})}loginWithGoogle(e){return i(this,null,function*(){throw Error("loginWithGoogle is not yet supported in the RecoveryShareManagement.USER_MANAGED flow. Please use RecoveryShareManagement.AWS_MANAGED instead.")})}loginWithPaperEmailOtp(e){return i(this,arguments,function*({email:e,recoveryCode:t}){yield this.preLogin();let r=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryCode:t},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(r)})}verifyPaperEmailLoginOtp(e){return i(this,arguments,function*({email:e,otp:t,recoveryCode:r}){let s=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryCode:r},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(s)})}},F=class{constructor({clientId:e,advancedOptions:t,querier:r,onAuthSuccess:s}){var a;this.clientId=e,this.advancedOptions={recoveryShareManagement:null!=(a=null==t?void 0:t.recoveryShareManagement)?a:"AWS_MANAGED"},this.AuthQuerier=r,this.localStorage=new U({clientId:e}),this.onAuthSuccess=s,this.userManagedLogin=new B({postLogin:e=>i(this,null,function*(){return this.postLogin(e)}),preLogin:()=>i(this,null,function*(){yield this.preLogin()}),querier:r,clientId:e}),this.awsManagedLogin=new x({postLogin:e=>i(this,null,function*(){return this.postLogin(e)}),preLogin:()=>i(this,null,function*(){yield this.preLogin()}),querier:r,clientId:e})}preLogin(){return i(this,null,function*(){yield this.logout()})}postLogin(e){return i(this,arguments,function*({storedToken:e,walletDetails:t}){return e.shouldStoreCookieString&&(yield this.localStorage.saveAuthCookie(e.cookieString)),yield this.onAuthSuccess({storedToken:e,walletDetails:t})})}loginWithJwtAuth(e){return i(this,arguments,function*({token:e,authProvider:t,recoveryCode:r}){yield this.preLogin();let s=yield this.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:e,authProvider:t,recoveryCode:r}});return this.postLogin(s)})}loginWithPaperModal(e){return i(this,null,function*(){return yield this.preLogin(),"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)})}loginWithPaperEmailOtp(e){return i(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)})}loginWithGoogle(e){return i(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithGoogle(e):this.userManagedLogin.loginWithGoogle()})}sendPaperEmailLoginOtp(e){return i(this,arguments,function*({email:e}){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.sendPaperEmailLoginOtp({email:e,recoveryShareManagement:"AWS_MANAGED"}):this.userManagedLogin.sendPaperEmailLoginOtp({email:e})})}verifyPaperEmailLoginOtp(e){return i(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)})}logout(){return i(this,null,function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),r=yield this.localStorage.removeWalletUserId();return{success:e||t||r}})}},H=class{constructor({chain:e,clientId:t,querier:r}){this.chain=e,this.clientId=t,this.gaslessTransactionQuerier=r}callContract(e){return i(this,arguments,function*({contractAddress:e,methodArgs:t,methodInterface:r}){return yield this.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:this.chain,contractAddress:e,method:{args:t,stub:r}}})})}},J=class extends w.Signer{constructor({provider:e,clientId:t,querier:r}){var s;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=t,this.querier=r,this.endpoint=null==(s=e.connection)?void 0:s.url,(0,f.defineReadOnly)(this,"provider",e)}getAddress(){return i(this,null,function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e})}signMessage(e){return i(this,null,function*(){var t,r,s,a;let l=yield null==(t=this.provider)?void 0:t.getNetwork();l&&l._defaultProvider;let{signedMessage:h}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(a=null==(s=yield null==(r=this.provider)?void 0:r.getNetwork())?void 0:s.chainId)?a:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return h})}signTransaction(e){return i(this,null,function*(){var t,r,s;let{signedTransaction:a}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(s=null==(r=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:r.chainId)?s:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return a})}_signTypedData(e,t,r){return i(this,null,function*(){var s,a,l;let{signedTypedData:h}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:r,chainId:null!=(l=null==(a=yield null==(s=this.provider)?void 0:s.getNetwork())?void 0:a.chainId)?l:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return h})}connect(e){return new J({clientId:this.clientId,provider:e,querier:this.querier})}},V=class{constructor({clientId:e,chain:t,querier:r}){this.clientId=e,this.chain=t,this.walletManagerQuerier=r,this.gasless=new H({chain:t,clientId:e,querier:r}),this.localStorage=new U({clientId:e})}postWalletSetUp(e){return i(this,arguments,function*({deviceShareStored:e,walletAddress:t,isIframeStorageEnabled:r,walletUserId:s}){return r||(yield this.localStorage.saveDeviceShare(e,s)),{walletAddress:t}})}getUserWalletStatus(){return i(this,null,function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:y(u({},e.user),{wallet:this})}:e})}setChain(e){return i(this,arguments,function*({chain:e}){this.chain=e,this.gasless=new H({chain:e,clientId:this.clientId,querier:this.walletManagerQuerier})})}getEthersJsSigner(e){return i(this,null,function*(){var t;return new J({clientId:this.clientId,provider:(0,p.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:g.g1[this.chain]),querier:this.walletManagerQuerier})})}},$=class{constructor({clientId:e,chain:t,styles:r,advancedOptions:s,onAuthSuccess:a}){this.clientId=e,this.querier=new q({clientId:e,customizationOptions:r}),this.wallet=new V({clientId:e,chain:t,querier:this.querier}),this.auth=new F({clientId:e,advancedOptions:u({recoveryShareManagement:"USER_MANAGED"},null!=s?s:{}),querier:this.querier,onAuthSuccess:e=>i(this,null,function*(){return yield this.wallet.postWalletSetUp(y(u({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),yield this.querier.call({procedureName:"initIframe",params:{deviceShareStored:e.walletDetails.deviceShareStored,clientId:this.clientId,walletUserId:e.storedToken.authDetails.userWalletId,authCookie:e.storedToken.cookieString}}),null==a||a(e),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}})})}getUser(){return i(this,null,function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return u({status:"Logged In, Wallet Initialized"},e.user)}})}}}}]);