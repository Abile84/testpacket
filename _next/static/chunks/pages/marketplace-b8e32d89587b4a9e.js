(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2465],{35610:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketplace",function(){return t(59466)}])},79018:function(n,e,t){"use strict";t.d(e,{XD:function(){return i},YJ:function(){return c},eF:function(){return a}});let a="0x42d5CF6D84cea0dE5dE5094d3226C9125434a161",i="0x9f3F548c28EC1E607c926D8aC059b800EC4A3233",c="0x87c692201acbD287EB09CfF1d2fB4781644c5937"},59466:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Marketplace}});var a=t(85893),i=t(29035),c=t(36612),r=t.n(c),d=t(79018);function NFTCard(n){var e,t;let{tokenID:c,listingID:l}=n,o=(0,i.SFn)(),{contract:s}=(0,i.cqn)(d.XD,"edition"),{data:u}=(0,i.elG)(s,c),{contract:f}=(0,i.cqn)(d.YJ,"marketplace-v3"),{data:h,isLoading:v}=(0,i.GLe)(f,l);async function buyNFT(){let n;if(h)n=await (null==f?void 0:f.directListings.buyFromListing(h.id,1));else throw Error("No valid listing found");return n}return console.log(h),(0,a.jsxs)("div",{className:r().nftCard,children:[(0,a.jsx)(i.W85,{src:null==u?void 0:null===(e=u.metadata)||void 0===e?void 0:e.image,height:"200px",width:"200px"}),(0,a.jsx)("p",{className:r().cardName,children:null==u?void 0:null===(t=u.metadata)||void 0===t?void 0:t.name}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Price:"})," ",null==h?void 0:h.currencyValuePerToken.displayValue," "," ".concat(null==h?void 0:h.currencyValuePerToken.symbol)]}),o?(0,a.jsx)(i.tnh,{contractAddress:d.YJ,action:()=>buyNFT(),className:r().buyButton,children:"Buy Now"}):(0,a.jsx)("p",{children:"Please login to buy"})]})}function Marketplace(){let{contract:n}=(0,i.cqn)(d.YJ,"marketplace-v3"),{data:e,isLoading:t}=(0,i.aBe)(n,{tokenContract:d.XD});return(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsx)("h1",{children:"Marketplace"}),(0,a.jsx)("div",{className:r().grid,children:t?(0,a.jsx)("p",{children:"Loading..."}):null==e?void 0:e.map((n,e)=>(0,a.jsx)("div",{children:(0,a.jsx)(NFTCard,{tokenID:n.asset.id,listingID:n.id})},e))})]})}}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=35610)}),_N_E=n.O()}]);