"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6457],{4646:function(t,e,i){i.d(e,{n:function(){return normalizeChainId}});function normalizeChainId(t){return"string"==typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"==typeof t?Number(t):t}},76457:function(t,e,i){i.d(e,{EmbeddedWalletConnector:function(){return EmbeddedWalletConnector}});var n=i(16074),a=i(42009),s=i(19485),r=i(20722),o=i(27021),h=i(4646),c=i(58142);i(65007);var u=new WeakMap,l=new WeakMap;let EmbeddedWalletConnector=class EmbeddedWalletConnector extends o.C{constructor(t){super(),(0,a._)(this,"id",r.w.paper),(0,a._)(this,"name","Embedded Wallet"),(0,a._)(this,"ready",!0),(0,a._)(this,"user",null),(0,n._)(this,u,{writable:!0,value:void 0}),(0,n._)(this,l,{writable:!0,value:void 0}),(0,a._)(this,"onAccountsChanged",async t=>{0===t.length?await this.onDisconnect():this.emit("change",{account:s.getAddress(t[0])})}),(0,a._)(this,"onChainChanged",t=>{let e=(0,h.n)(t),i=-1===this.options.chains.findIndex(t=>t.chainId===e);this.emit("change",{chain:{id:e,unsupported:i}})}),(0,a._)(this,"onDisconnect",async()=>{this.emit("disconnect")}),this.options=t}getEmbeddedWalletSDK(){return(0,n.b)(this,u)||(0,n.a)(this,u,new c.E({clientId:this.options.clientId,chain:"Ethereum",onAuthSuccess:this.options.onAuthSuccess})),(0,n.b)(this,u)}async connect(t){if(t){if(!t.authResult)throw Error("Missing authData - call authenticate() first with your authentication strategy");if(!t.authResult.user)throw Error("Missing authData.user - call authenticate() first with your authentication strategy");this.user=t.authResult.user}else{let t=await this.authenticate({strategy:"iframe"});if(!t.user)throw Error("Error connecting User");this.user=t.user}return t?.chainId&&this.switchChain(t.chainId),this.getAddress()}async disconnect(){let t=(0,n.b)(this,u);await t?.auth.logout(),(0,n.a)(this,l,void 0),(0,n.a)(this,u,void 0),this.user=null}async getAddress(){if(!this.user)throw Error("Embedded Wallet is not connected");return await this.getSigner().then(t=>t.getAddress())}async isConnected(){try{let t=await this.getAddress();return!!t}catch(t){return!1}}async getProvider(){let t=await this.getSigner();if(!t.provider)throw Error("Provider not found");return t.provider}async getSigner(){if((0,n.b)(this,l))return(0,n.b)(this,l);let t=await this.getUser(),e=await t.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""});if(!e)throw Error("Signer not found");return(0,n.a)(this,l,e),e}async isAuthorized(){return!1}async switchChain(t){let e=this.options.chains.find(e=>e.chainId===t);if(!e)throw Error("Chain not configured");try{await this.user?.wallet.setChain({chain:"Ethereum"}),(0,n.a)(this,l,await this.user?.wallet.getEthersJsSigner({rpcEndpoint:e.rpc[0]||""})),this.emit("change",{chain:{id:t,unsupported:!1}})}catch(t){console.warn("Failed to switch chain",t)}}async setupListeners(){return Promise.resolve()}updateChains(t){this.options.chains=t}async getUser(){if(!this.user||!this.user.wallet||!this.user.wallet.getEthersJsSigner){let t=this.getEmbeddedWalletSDK(),e=await t.getUser();if(e.status===c.U.LOGGED_IN_WALLET_INITIALIZED)this.user=e;else throw Error("Embedded Wallet is not authenticated, please authenticate first")}return this.user}async getEmail(){let t=await this.getUser();return t.authDetails.email}async getRecoveryInformation(){let t=await this.getUser();return t.authDetails}async sendVerificationEmail(t){let{email:e}=t,i=this.getEmbeddedWalletSDK();return i.auth.sendEmailLoginOtp({email:e})}async authenticate(t){let e=this.getEmbeddedWalletSDK(),i=t.strategy;switch(i){case"email_verification":return await e.auth.verifyEmailLoginOtp({email:t.email,otp:t.verificationCode,recoveryCode:t.recoveryCode});case"apple":case"facebook":case"google":{let n=d[i];return e.auth.loginWithOauth({oauthProvider:n,closeOpenedWindow:t.closeOpenedWindow,openedWindow:t.openedWindow})}case"jwt":return e.auth.loginWithCustomJwt({jwt:t.jwt,encryptionKey:t.encryptionKey});case"iframe_email_verification":return e.auth.loginWithEmailOtp({email:t.email});case"iframe":case void 0:return e.auth.loginWithModal();default:!function(t){throw Error("Invalid param: "+t)}(i)}}};let d={google:c.c.GOOGLE,facebook:c.c.FACEBOOK,apple:c.c.APPLE}}}]);