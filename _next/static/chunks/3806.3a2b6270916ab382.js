"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3806],{52153:function(t,r,e){e.d(r,{C:function(){return ContractInterceptor}});let ContractInterceptor=class ContractInterceptor{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},5995:function(t,r,e){e.d(r,{C:function(){return ContractPlatformFee}});var a=e(19578),n=e(7860);let ContractPlatformFee=class ContractPlatformFee{featureName=n.dn.name;constructor(t){this.contractWrapper=t}async get(){let[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bJ.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}set=(0,a.c)(async t=>{let r=await n.bJ.parseAsync(t);return a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})})}},82714:function(t,r,e){e.d(r,{C:function(){return ContractPrimarySale}});var a=e(19578),n=e(7860);let ContractPrimarySale=class ContractPrimarySale{featureName=n.d6.name;constructor(t){this.contractWrapper=t}async getRecipient(){let t=await this.contractWrapper.read("primarySaleRecipient",[]);return t}setRecipient=(0,a.c)(async t=>a.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]}))}},78012:function(t,r,e){e.d(r,{S:function(){return StandardErc20}});var a=e(19578),n=e(11846);let StandardErc20=class StandardErc20{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc20=new n.f(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}transfer=(0,a.c)(async(t,r)=>this.erc20.transfer.prepare(t,r));transferFrom=(0,a.c)(async(t,r,e)=>this.erc20.transferFrom.prepare(t,r,e));setAllowance=(0,a.c)(async(t,r)=>this.erc20.setAllowance.prepare(t,r));transferBatch=(0,a.c)(async t=>this.erc20.transferBatch.prepare(t))}},73806:function(t,r,e){e.r(r),e.d(r,{TokenDrop:function(){return TokenDrop}});var a=e(9279),n=e(7860),c=e(19578),s=e(89536),i=e(68828),o=e(52153),p=e(5995),h=e(74935),l=e(82714),u=e(62245),d=e(78012);e(13550),e(77191),e(71770),e(64063);let TokenDrop=class TokenDrop extends d.S{static contractRoles=n.dG;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cu(t,r,c,a,e);super(f,e,d),this.abi=n.bn.parse(c||[]),this.metadata=new s.C(this.contractWrapper,n.dH,this.storage),this.app=new s.b(this.contractWrapper,this.metadata,this.storage),this.roles=new h.C(this.contractWrapper,TokenDrop.contractRoles),this.encoder=new i.C(this.contractWrapper),this.estimator=new s.G(this.contractWrapper),this.events=new s.a(this.contractWrapper),this.sales=new l.C(this.contractWrapper),this.platformFees=new p.C(this.contractWrapper),this.interceptor=new o.C(this.contractWrapper),this.claimConditions=new u.D(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await (0,n.aP)(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await (0,n.aP)(t)])}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,n.H)("transfer"),a.d]);return!t}claim=(0,c.c)((()=>{var t=this;return async function(r){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})());claimTo=(0,c.c)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return t.erc20.claimTo.prepare(r,e,{checkERC20Allowance:a})}})());delegateTo=(0,c.c)(async t=>c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await (0,n.aP)(t)]}));burnTokens=(0,c.c)(async t=>this.erc20.burn.prepare(t));burnFrom=(0,c.c)(async(t,r)=>this.erc20.burnFrom.prepare(t,r));async prepare(t,r,e){return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);