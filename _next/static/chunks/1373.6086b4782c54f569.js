"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1373],{83287:function(e,t,r){r.d(t,{W:function(){return WagmiConnector}});var n=r(22555),i=r(65007);let WagmiConnector=class WagmiConnector extends i.Z{constructor(e){let{chains:t=n.gL9,options:r}=e;super(),this.chains=t,this.options=r}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},50002:function(e,t,r){r.d(t,{A:function(){return AddChainError},C:function(){return ChainNotConfiguredError},R:function(){return ResourceUnavailableError},S:function(){return SwitchChainError},U:function(){return UserRejectedRequestError},a:function(){return ConnectorNotFoundError}});var n=r(42009);let RpcError=class RpcError extends Error{constructor(e,t){let{cause:r,code:n,data:i}=t;if(!Number.isInteger(n))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(r)}`),this.cause=r,this.code=n,this.data=i}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(e,t){let{cause:r,code:n,data:i}=t;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:r,code:n,data:i})}};let AddChainError=class AddChainError extends Error{constructor(){super(...arguments),(0,n._)(this,"name","AddChainError"),(0,n._)(this,"message","Error adding chain")}};let ChainNotConfiguredError=class ChainNotConfiguredError extends Error{constructor(e){let{chainId:t,connectorId:r}=e;super(`Chain "${t}" not configured for connector "${r}".`),(0,n._)(this,"name","ChainNotConfigured")}};let ConnectorNotFoundError=class ConnectorNotFoundError extends Error{constructor(){super(...arguments),(0,n._)(this,"name","ConnectorNotFoundError"),(0,n._)(this,"message","Connector not found")}};let ResourceUnavailableError=class ResourceUnavailableError extends RpcError{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,n._)(this,"name","ResourceUnavailable")}};let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,n._)(this,"name","SwitchChainError")}};let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,n._)(this,"name","UserRejectedRequestError")}}},4646:function(e,t,r){r.d(t,{n:function(){return normalizeChainId}});function normalizeChainId(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},32252:function(e,t,r){r.d(t,{g:function(){return getValidPublicRPCUrl},i:function(){return isTwUrl}});var n=r(22555);function isTwUrl(e){let t=new URL(e).hostname;return t.endsWith(".thirdweb.com")||"localhost"===t||"0.0.0.0"===t}function getValidPublicRPCUrl(e){return(0,n.OZ$)(e).map(e=>{try{let t=new URL(e);return t.hostname.endsWith(".thirdweb.com")&&(t.pathname="",t.search=""),t.toString()}catch(t){return e}})}},91373:function(e,t,r){r.d(t,{FrameConnector:function(){return FrameConnector}});var n=r(16074),i=r(42009),s=r(19485),o=r(241),c=r(16441),a=r(32252),h=r(83287),d=r(4646),u=r(50002);r(65007);var l=new WeakMap;let FrameConnector=class FrameConnector extends h.W{constructor(e){let{chains:t,options:r,connectorStorage:o}=e,c={shimDisconnect:!0,...r};super({chains:t,options:c}),(0,i._)(this,"id","frame"),(0,i._)(this,"name","Frame"),(0,i._)(this,"ready",!0),(0,i._)(this,"shimDisconnectKey",`${this.id}.shimDisconnect`),(0,n._)(this,l,{writable:!0,value:void 0}),(0,i._)(this,"onAccountsChanged",e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:s.getAddress(e[0])})}),(0,i._)(this,"onChainChanged",e=>{let t=(0,d.n)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})}),(0,i._)(this,"onDisconnect",()=>{this.emit("disconnect"),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey)}),this.connectorStorage=o}async connect(e){try{let t=await this.getProvider();if(!t)throw new u.a;this.setupListeners(),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),n=s.getAddress(r[0]),i=await this.getChainId(),o=this.isChainUnsupported(i);if(e?.chainId&&i!==e?.chainId){let t=await this.switchChain(e?.chainId);i=t.chainId,o=this.isChainUnsupported(i)}return this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),{account:n,provider:t,chain:{id:i,unsupported:o}}}catch(e){if(this.isUserRejectedRequestError(e))throw new u.U(e);if(-32002===e.code)throw new u.R(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.isInjected()||e.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new u.a;let t=await e.request({method:"eth_accounts"});return s.getAddress(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new u.a;let t=await e.request({method:"eth_chainId"});return(0,d.n)(t)}async getProvider(){return(0,n.a)(this,l,this.isInjected()?this.injectedProvider():await this.createProvider()),(0,n.b)(this,l)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=await Promise.all([this.getProvider(),this.getAccount()]);return new o.Q(t,e).getSigner(r)}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new u.a;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new u.a;let r=c.hexValue(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",r=>{let{chain:n}=r;n?.id===e&&t()}))]),this.chains.find(t=>t.chainId===e)??{chainId:e,name:`Chain ${r}`,slug:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(i){let n=this.chains.find(t=>t.chainId===e);if(!n)throw new u.C({chainId:e,connectorId:this.id});if(4902===i.code)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:(0,a.g)(n),blockExplorerUrls:this.getBlockExplorerUrls(n)}]});let i=await this.getChainId();if(i!==e)throw new u.U(Error("User rejected switch after adding network."));return n}catch(e){if(this.isUserRejectedRequestError(e))throw new u.U(e);throw new u.A(e.message)}if(this.isUserRejectedRequestError(i))throw new u.U(i);throw new u.S(i)}}async watchAsset(e){let{address:t,decimals:r=18,image:n,symbol:i}=e,s=await this.getProvider();if(!s)throw new u.a;return s.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:r,image:n,symbol:i}}})}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}injectedProvider(){return window?.ethereum}isInjected(){return!!this.injectedProvider()?.isFrame}async createProvider(){let e=(await r.e(215).then(r.t.bind(r,215,23))).default;return e("frame")}}}}]);