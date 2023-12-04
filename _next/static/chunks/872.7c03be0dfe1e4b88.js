"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{52153:function(t,r,a){a.d(r,{C:function(){return ContractInterceptor}});let ContractInterceptor=class ContractInterceptor{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},40795:function(t,r,a){a.d(r,{D:function(){return DropErc1155ClaimConditions},e:function(){return Erc1155},f:function(){return Erc1155SignatureMintable}});var e=a(2593),i=a(16441),n=a(21046),o=a(9279),s=a(29251),c=a(7860),p=a(89208),l=a(89536),h=a(89050),d=a(19578),u=a(1604),m=a(83833),g=a(64063),y=a.n(g),W=a(58179),C=a(68828),w=a(38776),f=a(19824),b=a(41518);let DropErc1155ClaimConditions=class DropErc1155ClaimConditions{constructor(t,r,a){this.storage=a,this.contractWrapper=t,this.metadata=r}async getActive(t,r){let a=await this.get(t),e=await this.metadata.get();return await (0,W.v)(a,0,this.contractWrapper.getProvider(),e.merkle,this.storage,r?.withAllowList||!1)}async get(t,r){if(this.isLegacySinglePhaseDrop(this.contractWrapper)){let r=await this.contractWrapper.read("claimCondition",[t]);return(0,W.w)(r)}if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){let a=void 0!==r?r:await this.contractWrapper.read("getActiveClaimConditionId",[t]),e=await this.contractWrapper.read("getClaimConditionById",[t,a]);return(0,W.w)(e)}if(this.isNewSinglePhaseDrop(this.contractWrapper)){let r=await this.contractWrapper.read("claimCondition",[t]);return(0,W.x)(r)}if(this.isNewMultiphaseDrop(this.contractWrapper)){let a=void 0!==r?r:await this.contractWrapper.read("getActiveClaimConditionId",[t]),e=await this.contractWrapper.read("getClaimConditionById",[t,a]);return(0,W.x)(e)}throw Error("Contract does not support claim conditions")}async getAll(t,r){if(!(this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)))return[await this.getActive(t,r)];{let a=await this.contractWrapper.read("claimCondition",[t]),e=a.currentStartId.toNumber(),i=a.count.toNumber(),n=[];for(let r=e;r<e+i;r++)n.push(await this.get(t,r));let o=await this.metadata.get();return Promise.all(n.map(t=>(0,W.v)(t,0,this.contractWrapper.getProvider(),o.merkle,this.storage,r?.withAllowList||!1)))}}async canClaim(t,r,a){return a&&(a=await (0,c.aP)(a)),0===(await this.getClaimIneligibilityReasons(t,r,a)).length}async getClaimIneligibilityReasons(t,r,o){let s,p;let l=[];if(void 0===o)try{o=await this.contractWrapper.getSignerAddress()}catch(t){console.warn("failed to get signer address",t)}if(!o)return[W.C.NoWallet];let h=await (0,c.aP)(o);try{p=await this.getActive(t)}catch(t){if((0,c.B)(t,"!CONDITION")||(0,c.B)(t,"no active mint condition"))return l.push(W.C.NoClaimConditionSet),l;return l.push(W.C.Unknown),l}if("unlimited"!==p.availableSupply&&e.O$.from(p.availableSupply).lt(r))return l.push(W.C.NotEnoughSupply),l;let d=i.stripZeros(p.merkleRootHash),u=d.length>0,m=null;if(u){if(!(m=await this.getClaimerProofs(t,h))&&(this.isLegacySinglePhaseDrop(this.contractWrapper)||this.isLegacyMultiPhaseDrop(this.contractWrapper)))return l.push(W.C.AddressNotAllowed),l;if(m)try{let a;let e=await this.prepareClaim(t,r,!1,h);if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){if(s=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[a]=await this.contractWrapper.read("verifyClaimMerkleProof",[s,h,t,r,e.proofs,e.maxClaimable]),!a)return l.push(W.C.AddressNotAllowed),l}else if(this.isLegacySinglePhaseDrop(this.contractWrapper)){if([a]=await this.contractWrapper.read("verifyClaimMerkleProof",[t,h,r,{proof:e.proofs,maxQuantityInAllowlist:e.maxClaimable}]),!a)return l.push(W.C.AddressNotAllowed),l}else this.isNewSinglePhaseDrop(this.contractWrapper)?await this.contractWrapper.read("verifyClaim",[t,h,r,e.currencyAddress,e.price,{proof:e.proofs,quantityLimitPerWallet:e.maxClaimable,currency:e.currencyAddressInProof,pricePerToken:e.priceInProof}]):this.isNewMultiphaseDrop(this.contractWrapper)&&(s=await this.contractWrapper.read("getActiveClaimConditionId",[t]),await this.contractWrapper.read("verifyClaim",[s,h,t,r,e.currencyAddress,e.price,{proof:e.proofs,quantityLimitPerWallet:e.maxClaimable,currency:e.currencyAddressInProof,pricePerToken:e.priceInProof}]))}catch(r){console.warn("Merkle proof verification failed:","reason"in r?r.reason:r);let t=r.reason;switch(t){case"!Qty":l.push(W.C.OverMaxClaimablePerWallet);break;case"!PriceOrCurrency":l.push(W.C.WrongPriceOrCurrency);break;case"!MaxSupply":l.push(W.C.NotEnoughSupply);break;case"cant claim yet":l.push(W.C.ClaimPhaseNotStarted);break;default:l.push(W.C.AddressNotAllowed)}return l}}if(this.isNewSinglePhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){let a=e.O$.from(0),i=(0,W.y)(p.maxClaimablePerWallet,0);try{a=await this.getSupplyClaimedByWallet(t,h)}catch(t){}if(m&&(i=(0,W.y)(m.maxClaimable,0)),i.gt(0)&&i.lt(a.add(r)))return l.push(W.C.OverMaxClaimablePerWallet),l;if((!u||u&&!m)&&(i.lte(a)||i.eq(0)))return l.push(W.C.AddressNotAllowed),l}let[g,y]=[e.O$.from(0),e.O$.from(0)];this.isLegacyMultiPhaseDrop(this.contractWrapper)?(s=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[g,y]=await this.contractWrapper.read("getClaimTimestamp",[t,s,h])):this.isLegacySinglePhaseDrop(this.contractWrapper)&&([g,y]=await this.contractWrapper.read("getClaimTimestamp",[t,h]));let w=e.O$.from(Date.now()).div(1e3);if(g.gt(0)&&w.lt(y))return y.eq(n.Bz)?l.push(W.C.AlreadyClaimed):l.push(W.C.WaitBeforeNextClaimTransaction),l;if(p.price.gt(0)&&(0,c.d7)()){let t=p.price.mul(r),e=this.contractWrapper.getProvider();if((0,C.i)(p.currencyAddress)){let r=await e.getBalance(h);r.lt(t)&&l.push(W.C.NotEnoughTokens)}else{let r=(await Promise.resolve().then(a.t.bind(a,49242,19))).default,i=new c.cu(e,p.currencyAddress,r,{},this.storage),n=await i.read("balanceOf",[h]);n.lt(t)&&l.push(W.C.NotEnoughTokens)}}return l}async getClaimerProofs(t,r,a){let e=await this.get(t,a),n=e.merkleRoot,o=i.stripZeros(n);if(!(o.length>0))return null;{let t=await this.metadata.get(),a=await (0,c.aP)(r);return await (0,W.f)(a,n.toString(),t.merkle,this.contractWrapper.getProvider(),this.storage,this.getSnapshotFormatVersion())}}async getSupplyClaimedByWallet(t,r){let a=await (0,c.aP)(r);if(this.isNewSinglePhaseDrop(this.contractWrapper))return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,a]);if(this.isNewMultiphaseDrop(this.contractWrapper)){let r=await this.contractWrapper.read("getActiveClaimConditionId",[t]);return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,r,a])}throw Error("This contract does not support the getSupplyClaimedByWallet function")}set=(0,d.c)((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.setBatch.prepare([{tokenId:r,claimConditions:a}],e)}})());setBatch=(0,d.c)((()=>{var t=this;return async function(r){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={},n=await Promise.all(r.map(async r=>{let{tokenId:n,claimConditions:s}=r,c=s;if(t.isLegacySinglePhaseDrop(t.contractWrapper)){if(a=!0,0===s.length)c=[{startTime:new Date(0),currencyAddress:o.d,price:0,maxClaimableSupply:0,maxClaimablePerWallet:0,waitInSeconds:0,merkleRootHash:i.hexZeroPad([0],32),snapshot:[]}];else if(s.length>1)throw Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed")}(t.isNewSinglePhaseDrop(t.contractWrapper)||t.isNewMultiphaseDrop(t.contractWrapper))&&c.forEach(t=>{if(t.snapshot&&t.snapshot.length>0&&(void 0===t.maxClaimablePerWallet||"unlimited"===t.maxClaimablePerWallet))throw Error("maxClaimablePerWallet must be set to a specific value when an allowlist is set.\nSet it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist.\n\nex:\ncontract.claimConditions.set(tokenId, [{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])");if(t.snapshot&&t.snapshot.length>0&&t.maxClaimablePerWallet?.toString()==="0"&&0===t.snapshot.map(t=>"string"==typeof t?0:Number(t.maxClaimable?.toString()||0)).reduce((t,r)=>t+r,0))throw Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.")});let{snapshotInfos:p,sortedConditions:l}=await (0,W.D)(c,0,t.contractWrapper.getProvider(),t.storage,t.getSnapshotFormatVersion());return p.forEach(t=>{e[t.merkleRoot]=t.snapshotUri}),{tokenId:n,sortedConditions:l}})),s=await t.metadata.get(),c=[];for(let t of Object.keys(s.merkle||{}))e[t]=s.merkle[t];if(!y()(s.merkle,e)){let r=await t.metadata.parseInputMetadata({...s,merkle:e}),a=await t.metadata._parseAndUploadMetadata(r);if((0,l.h)("setContractURI",t.contractWrapper)){let r=new C.C(t.contractWrapper);c.push(r.encode("setContractURI",[a]))}else throw Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.")}if(n.forEach(r=>{let{tokenId:e,sortedConditions:i}=r,n=new C.C(t.contractWrapper);if(t.isLegacySinglePhaseDrop(t.contractWrapper)){let r=new C.C(t.contractWrapper);c.push(r.encode("setClaimConditions",[e,(0,W.E)(i[0]),a]))}else if(t.isLegacyMultiPhaseDrop(t.contractWrapper))c.push(n.encode("setClaimConditions",[e,i.map(W.E),a]));else if(t.isNewSinglePhaseDrop(t.contractWrapper))c.push(n.encode("setClaimConditions",[e,(0,W.F)(i[0]),a]));else if(t.isNewMultiphaseDrop(t.contractWrapper))c.push(n.encode("setClaimConditions",[e,i.map(W.F),a]));else throw Error("Contract does not support claim conditions")}),(0,l.h)("multicall",t.contractWrapper))return d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[c]});throw Error("Contract does not support multicall")}})());update=(0,d.c)(async(t,r,a)=>{let e=await this.getAll(t),i=await (0,W.H)(r,a,e);return await this.set.prepare(t,i)});async prepareClaim(t,r,a,e){let i=await (0,c.aP)(e||await this.contractWrapper.getSignerAddress());return(0,W.z)(i,r,await this.getActive(t),async()=>(await this.metadata.get()).merkle,0,this.contractWrapper,this.storage,a,this.getSnapshotFormatVersion())}async getClaimArguments(t,r,a,e){let i=await (0,c.aP)(r);return this.isLegacyMultiPhaseDrop(this.contractWrapper)?[i,t,a,e.currencyAddress,e.price,e.proofs,e.maxClaimable]:this.isLegacySinglePhaseDrop(this.contractWrapper)?[i,t,a,e.currencyAddress,e.price,{proof:e.proofs,maxQuantityInAllowlist:e.maxClaimable},s.Y0("")]:[i,t,a,e.currencyAddress,e.price,{proof:e.proofs,quantityLimitPerWallet:e.maxClaimable,pricePerToken:e.priceInProof,currency:e.currencyAddressInProof},s.Y0("")]}async getClaimTransaction(t,r,a,e){if(e?.pricePerToken)throw Error("Price per token should be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");let i=await this.prepareClaim(r,a,e?.checkERC20Allowance||!0);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:await this.getClaimArguments(r,t,a,i),overrides:i.overrides})}isNewSinglePhaseDrop(t){return(0,l.d)(t,"ERC1155ClaimConditionsV2")}isNewMultiphaseDrop(t){return(0,l.d)(t,"ERC1155ClaimPhasesV2")}isLegacySinglePhaseDrop(t){return(0,l.d)(t,"ERC1155ClaimConditionsV1")}isLegacyMultiPhaseDrop(t){return(0,l.d)(t,"ERC1155ClaimPhasesV1")}getSnapshotFormatVersion(){return this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isLegacySinglePhaseDrop(this.contractWrapper)?W.A.V1:W.A.V2}};let Erc1155BatchMintable=class Erc1155BatchMintable{featureName=c.d8.name;constructor(t,r,a){this.erc1155=t,this.contractWrapper=r,this.storage=a}to=(0,d.c)(async(t,r)=>{let a=r.map(t=>t.metadata),e=r.map(t=>t.supply),i=await (0,h.u)(a,this.storage),o=await (0,c.aP)(t),s=new C.C(this.contractWrapper),p=await Promise.all(i.map(async(t,r)=>s.encode("mintTo",[o,n.Bz,t,e[r]])));return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[p],parse:t=>{let r=this.contractWrapper.parseLogs("TokensMinted",t.logs);if(0===r.length||r.length<a.length)throw Error("TokenMinted event not found, minting failed");return r.map(r=>{let a=r.args.tokenIdMinted;return{id:a,receipt:t,data:()=>this.erc1155.get(a)}})}})})};let Erc1155Burnable=class Erc1155Burnable{featureName=c.d9.name;constructor(t){this.contractWrapper=t}tokens=(0,d.c)(async(t,r)=>{let a=await this.contractWrapper.getSignerAddress();return this.from.prepare(a,t,r)});from=(0,d.c)(async(t,r,a)=>d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await (0,c.aP)(t),r,a]}));batch=(0,d.c)(async(t,r)=>{let a=await this.contractWrapper.getSignerAddress();return this.batchFrom.prepare(a,t,r)});batchFrom=(0,d.c)(async(t,r,a)=>d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnBatch",args:[await (0,c.aP)(t),r,a]}))};let Erc1155Enumerable=class Erc1155Enumerable{featureName=c.da.name;constructor(t,r){this.erc1155=t,this.contractWrapper=r}async all(t){let r=e.O$.from(t?.start||0).toNumber(),a=e.O$.from(t?.count||h.D).toNumber(),i=Math.min((await this.totalCount()).toNumber(),r+a);return await Promise.all([...Array(i-r).keys()].map(t=>this.erc1155.get((r+t).toString())))}async totalCount(){return await this.contractWrapper.read("nextTokenIdToMint",[])}async totalCirculatingSupply(t){return await this.contractWrapper.read("totalSupply",[t])}async owned(t,r){let[a,e]=await Promise.all([(0,c.aP)(t||await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("nextTokenIdToMint",[])]),i=await this.contractWrapper.read("balanceOfBatch",[Array(e.toNumber()).fill(a),Array.from(Array(e.toNumber()).keys())]),n=i.map((t,r)=>({tokenId:r,balance:t})).filter(t=>t.balance.gt(0));if(r){let t=r?.start||0,a=r?.count||h.D;n=n.slice(t,t+a)}let o=(await Promise.all(n.map(t=>this.erc1155.get(t.tokenId.toString())))).map((t,r)=>({...t,owner:a,quantityOwned:n[r].balance.toString()}));return o}};let Erc1155LazyMintable=class Erc1155LazyMintable{featureName=c.db.name;constructor(t,r,a){this.erc1155=t,this.contractWrapper=r,this.storage=a,this.revealer=this.detectErc1155Revealable()}lazyMint=(0,d.c)(async(t,r)=>{let a=await this.erc1155.nextTokenIdToMint(),e=await (0,h.u)(t,this.storage,a.toNumber(),r),i=e[0].substring(0,e[0].lastIndexOf("/"));for(let t=0;t<e.length;t++){let r=e[t].substring(0,e[t].lastIndexOf("/"));if(i!==r)throw Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${i}' but got '${r}'`)}let parse=t=>{let r=this.contractWrapper.parseLogs("TokensLazyMinted",t?.logs),a=r[0].args.startTokenId,e=r[0].args.endTokenId,i=[];for(let r=a;r.lte(e);r=r.add(1))i.push({id:r,receipt:t,data:()=>this.erc1155.getTokenMetadata(r)});return i},n=await (0,c.dd)(this.contractWrapper.address,this.contractWrapper.getProvider());return this.isLegacyEditionDropContract(this.contractWrapper,n)?d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,`${i.endsWith("/")?i:`${i}/`}`],parse}):d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,`${i.endsWith("/")?i:`${i}/`}`,s.Y0("")],parse})});detectErc1155Revealable(){if((0,l.d)(this.contractWrapper,"ERC1155Revealable"))return new m.D(this.contractWrapper,this.storage,c.dc.name,()=>this.erc1155.nextTokenIdToMint())}isLegacyEditionDropContract(t,r){return r&&"DropERC1155"===r.type&&r.version<3||!1}};let Erc1155Mintable=class Erc1155Mintable{featureName=c.de.name;constructor(t,r,a){this.erc1155=t,this.contractWrapper=r,this.storage=a,this.batch=this.detectErc1155BatchMintable()}to=(0,d.c)(async(t,r)=>{let a=await this.getMintTransaction(t,r);return a.setParse(t=>{let r=this.contractWrapper.parseLogs("TransferSingle",t?.logs);if(0===r.length)throw Error("TransferSingleEvent event not found");let a=r[0].args.id;return{id:a,receipt:t,data:()=>this.erc1155.get(a.toString())}}),a});async getMintTransaction(t,r){let a=await (0,h.b)(r.metadata,this.storage);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await (0,c.aP)(t),n.Bz,a,r.supply]})}additionalSupplyTo=(0,d.c)(async(t,r,a)=>{let i=await this.erc1155.getTokenMetadata(r);return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await (0,c.aP)(t),r,i.uri,a],parse:t=>({id:e.O$.from(r),receipt:t,data:()=>this.erc1155.get(r)})})});detectErc1155BatchMintable(){if((0,l.d)(this.contractWrapper,"ERC1155BatchMintable"))return new Erc1155BatchMintable(this.erc1155,this.contractWrapper,this.storage)}};let P=u.z.object({address:c.bd,quantity:c.cz.default(1)}),T=u.z.union([u.z.array(u.z.string()).transform(async t=>await Promise.all(t.map(t=>P.parseAsync({address:t})))),u.z.array(P)]);let ERC1155Claimable=class ERC1155Claimable{featureName=c.df.name;constructor(t){this.contractWrapper=t}async getClaimTransaction(t,r,a,e){let i={};return e&&e.pricePerToken&&(i=await (0,m.c)(this.contractWrapper,e.pricePerToken,a,e.currencyAddress,e.checkERC20Allowance)),d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[await (0,c.aP)(t),r,a],overrides:i})}to=(0,d.c)(async(t,r,a,e)=>await this.getClaimTransaction(t,r,a,e))};let Erc1155ClaimableWithConditions=class Erc1155ClaimableWithConditions{featureName=c.dg.name;constructor(t,r){this.contractWrapper=t,this.storage=r;let a=new l.C(this.contractWrapper,c.bk,this.storage);this.conditions=new DropErc1155ClaimConditions(t,a,this.storage)}to=(0,d.c)(async(t,r,a,e)=>await this.conditions.getClaimTransaction(t,r,a,e))};let Erc1155SignatureMintable=class Erc1155SignatureMintable{featureName=c.dh.name;constructor(t,r,a){this.contractWrapper=t,this.storage=r,this.roles=a}mint=(0,d.c)(async t=>{let r=t.payload,a=t.signature,[e,i]=await Promise.all([this.mapPayloadToContractStruct(r),this.contractWrapper.getCallOverrides()]);return await (0,b.s)(this.contractWrapper,e.pricePerToken.mul(e.quantity),r.currencyAddress,i),d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,a],overrides:i,parse:t=>{let r=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===r.length)throw Error("No MintWithSignature event found");let a=r[0].args.tokenIdMinted;return{id:a,receipt:t}}})});mintBatch=(0,d.c)(async t=>{let r=await Promise.all(t.map(t=>this.mapPayloadToContractStruct(t.payload))),a=t.map((t,a)=>{let i=r[a],n=t.signature,o=t.payload.price;if(e.O$.from(o).gt(0))throw Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:i,signature:n}}),i=new C.C(this.contractWrapper),n=a.map(t=>i.encode("mintWithSignature",[t.message,t.signature]));if((0,l.h)("multicall",this.contractWrapper))return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:t=>{let r=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===r.length)throw Error("No MintWithSignature event found");return r.map(r=>({id:r.args.tokenIdMinted,receipt:t}))}});throw Error("Multicall not supported on this contract!")});async verify(t){let r=t.payload,a=t.signature,e=await this.mapPayloadToContractStruct(r),i=await this.contractWrapper.read("verify",[e,a]);return i[0]}async generate(t){let r={...t,tokenId:n.Bz};return this.generateFromTokenId(r)}async generateFromTokenId(t){let r=await this.generateBatchFromTokenIds([t]);return r[0]}async generateBatch(t){let r=t.map(t=>({...t,tokenId:n.Bz}));return this.generateBatchFromTokenIds(r)}async generateBatchFromTokenIds(t){let r=this.contractWrapper.getSigner();(0,w.Z)(r,"No signer available"),await this.roles?.verify(["minter"],await r.getAddress());let a=await Promise.all(t.map(t=>W.o.parseAsync(t))),e=a.map(t=>t.metadata),[i,n,o]=await Promise.all([(0,h.u)(e,this.storage),this.contractWrapper.getChainID(),(0,c.dd)(this.contractWrapper.address,this.contractWrapper.getProvider())]),s=await Promise.all(a.map((t,r)=>W.p.parseAsync({...t,uri:i[r]}))),p=await Promise.all(s.map(t=>this.mapPayloadToContractStruct(t))),l=o?.type==="TokenERC1155",d=await Promise.all(p.map(t=>this.contractWrapper.signTypedData(r,{name:l?"TokenERC1155":"SignatureMintERC1155",version:"1",chainId:n,verifyingContract:this.contractWrapper.address},{MintRequest:W.t},t)));return d.map((t,r)=>({payload:s[r],signature:t.toString()}))}async mapPayloadToContractStruct(t){let r=await (0,f.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,tokenId:t.tokenId,uri:t.uri,quantity:t.quantity,pricePerToken:r,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}};let Erc1155=class Erc1155{featureName=c.di.name;get chainId(){return this._chainId}constructor(t,r,a){this.contractWrapper=t,this.storage=r,this.query=this.detectErc1155Enumerable(),this.mintable=this.detectErc1155Mintable(),this.burnable=this.detectErc1155Burnable(),this.lazyMintable=this.detectErc1155LazyMintable(),this.signatureMintable=this.detectErc1155SignatureMintable(),this.claimCustom=this.detectErc1155Claimable(),this.claimWithConditions=this.detectErc1155ClaimableWithConditions(),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){let[r,a]=await Promise.all([this.contractWrapper.read("totalSupply",[t]).catch(()=>e.O$.from(0)),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...h.F}))]);return{owner:o.d,metadata:a,type:"ERC1155",supply:r.toString()}}async totalSupply(t){if((0,l.d)(this.contractWrapper,"ERC1155Supply"))return await this.contractWrapper.read("totalSupply",[t]);throw new c.x(c.dj)}async balanceOf(t,r){return await this.contractWrapper.read("balanceOf",[await (0,c.aP)(t),r])}async balance(t){return await this.balanceOf(await this.contractWrapper.getSignerAddress(),t)}async isApproved(t,r){return await this.contractWrapper.read("isApprovedForAll",[await (0,c.aP)(t),await (0,c.aP)(r)])}transfer=(0,d.c)((()=>{var t=this;return async function(r,a,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0],n=await t.contractWrapper.getSignerAddress();return d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[n,await (0,c.aP)(r),a,e,i]})}})());transferFrom=(0,d.c)((()=>{var t=this;return async function(r,a,e,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0];return d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[await (0,c.aP)(r),await (0,c.aP)(a),e,i,n]})}})());setApprovalForAll=(0,d.c)(async(t,r)=>d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[t,r]}));airdrop=(0,d.c)((()=>{var t=this;return async function(r,a,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0],o=i?await (0,c.aP)(i):await t.contractWrapper.getSignerAddress(),s=await t.balanceOf(o,r),p=await T.parseAsync(a),l=p.reduce((t,r)=>e.O$.from(t).add(e.O$.from(r?.quantity||1)),e.O$.from(0));if(s.lt(e.O$.from(l)))throw Error(`The caller owns ${s.toString()} NFTs, but wants to airdrop ${l.toString()} NFTs.`);let h=new C.C(t.contractWrapper),u=p.map(t=>{let{address:a,quantity:e}=t;return h.encode("safeTransferFrom",[o,a,r,e,n])});return d.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[u]})}})());async nextTokenIdToMint(){if((0,l.h)("nextTokenIdToMint",this.contractWrapper))return await this.contractWrapper.read("nextTokenIdToMint",[]);throw Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint")}async getAll(t){return(0,p.a)(this.query,c.da).all(t)}async totalCount(){return(0,p.a)(this.query,c.da).totalCount()}async totalCirculatingSupply(t){return(0,p.a)(this.query,c.da).totalCirculatingSupply(t)}async getOwned(t,r){return t&&(t=await (0,c.aP)(t)),(0,p.a)(this.query,c.da).owned(t,r)}mint=(0,d.c)(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t));mintTo=(0,d.c)(async(t,r)=>(0,p.a)(this.mintable,c.de).to.prepare(t,r));async getMintTransaction(t,r){return(0,p.a)(this.mintable,c.de).getMintTransaction(t,r)}mintAdditionalSupply=(0,d.c)(async(t,r)=>(0,p.a)(this.mintable,c.de).additionalSupplyTo.prepare(await this.contractWrapper.getSignerAddress(),t,r));mintAdditionalSupplyTo=(0,d.c)(async(t,r,a)=>(0,p.a)(this.mintable,c.de).additionalSupplyTo.prepare(t,r,a));mintBatch=(0,d.c)(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t));mintBatchTo=(0,d.c)(async(t,r)=>(0,p.a)(this.mintable?.batch,c.d8).to.prepare(t,r));burn=(0,d.c)(async(t,r)=>(0,p.a)(this.burnable,c.d9).tokens.prepare(t,r));burnFrom=(0,d.c)(async(t,r,a)=>(0,p.a)(this.burnable,c.d9).from.prepare(t,r,a));burnBatch=(0,d.c)(async(t,r)=>(0,p.a)(this.burnable,c.d9).batch.prepare(t,r));burnBatchFrom=(0,d.c)(async(t,r,a)=>(0,p.a)(this.burnable,c.d9).batchFrom.prepare(t,r,a));lazyMint=(0,d.c)(async(t,r)=>(0,p.a)(this.lazyMintable,c.db).lazyMint.prepare(t,r));async getClaimTransaction(t,r,a,e){let i=this.claimWithConditions,n=this.claimCustom;if(i)return i.conditions.getClaimTransaction(t,r,a,e);if(n)return n.getClaimTransaction(t,r,a,e);throw new c.x(c.df)}claim=(0,d.c)(async(t,r,a)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r,a));claimTo=(0,d.c)(async(t,r,a,e)=>{let i=this.claimWithConditions,n=this.claimCustom;if(i)return i.to.prepare(t,r,a,e);if(n)return n.to.prepare(t,r,a,e);throw new c.x(c.df)});get claimConditions(){return(0,p.a)(this.claimWithConditions,c.dg).conditions}get signature(){return(0,p.a)(this.signatureMintable,c.dh)}get revealer(){return(0,p.a)(this.lazyMintable?.revealer,c.dc)}async getTokenMetadata(t){let r=await this.contractWrapper.read("uri",[t]);if(!r)throw new c.n;return(0,h.f)(t,r,this.storage)}detectErc1155Enumerable(){if((0,l.d)(this.contractWrapper,"ERC1155Enumerable"))return new Erc1155Enumerable(this,this.contractWrapper)}detectErc1155Mintable(){if((0,l.d)(this.contractWrapper,"ERC1155Mintable"))return new Erc1155Mintable(this,this.contractWrapper,this.storage)}detectErc1155Burnable(){if((0,l.d)(this.contractWrapper,"ERC1155Burnable"))return new Erc1155Burnable(this.contractWrapper)}detectErc1155LazyMintable(){if((0,l.d)(this.contractWrapper,"ERC1155LazyMintableV1")||(0,l.d)(this.contractWrapper,"ERC1155LazyMintableV2"))return new Erc1155LazyMintable(this,this.contractWrapper,this.storage)}detectErc1155SignatureMintable(){if((0,l.d)(this.contractWrapper,"ERC1155SignatureMintable"))return new Erc1155SignatureMintable(this.contractWrapper,this.storage)}detectErc1155Claimable(){if((0,l.d)(this.contractWrapper,"ERC1155ClaimCustom"))return new ERC1155Claimable(this.contractWrapper)}detectErc1155ClaimableWithConditions(){if((0,l.d)(this.contractWrapper,"ERC1155ClaimConditionsV1")||(0,l.d)(this.contractWrapper,"ERC1155ClaimConditionsV2")||(0,l.d)(this.contractWrapper,"ERC1155ClaimPhasesV1")||(0,l.d)(this.contractWrapper,"ERC1155ClaimPhasesV2"))return new Erc1155ClaimableWithConditions(this.contractWrapper,this.storage)}}}}]);