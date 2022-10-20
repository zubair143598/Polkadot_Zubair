// import React from "react";
// import Faq from "react-faq-component";
// const data = {
//   rows: [
//     {
//       title: "What is PorkSwap?",
//       content: `PorkSwap is a decentralized platform for spot and futures trading. You can trade any BEP-20 tokens on Binance Smart Chain. It eliminates trusted intermediaries and unnecessary forms of rent extraction, allowing for fast, efficient trading. Porkswap will be open-source under GPL license.`,
//     },
//     {
//       title: "How do I use PorkSwap?",
//       content:
//         "First you’ll need a Binance Smart Chain Wallet and some BNB. Once completed, head over to the app to start using the platform to provide liquidity to spot or leverage pool and place orders. Remember that each transaction on BSC costs BNB (this is called the “gas fee” and it’s paid to miners to keep the network running).",
//     },
//     {
//       title: "How does Spot Trading Work?",
//       content: `PorkSwap uses an improved version of Uniswap's automated market maker protocol by utilizing liquidity pools.
//       In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade.`,
//     },
//     {
//       title: "How are prices determined?",
//       content: `Prices are determined by the amount of tokens against liquidity in each pool. The smart contract maintains a constant using the following formula: price = liquidity / tokens. In this case liquidity = base token, y = trading token.
//         For each trade a certain amount of tokens are removed from the pool for an amount of the other token. To maintain price, the balances held by the smart contract are adjusted during the execution of the trade and each block mined, therefore changing the price`,
//     },
//     {
//       title: "What tokens will be available for leveraged trading?",
//       content: `PorkSwap will be listing Binance-Pegged: ETH, Wrapped BNB, ADA, BUSD-T, DOT, XRP, UNI, LTC, LINK BCH, USDC/
//         The trading will only happen when there's enough liquidity on the spot platform for each token.`,
//     },
//     {
//       title: "What is the insurance fund?",
//       content: `The insurance fund is protocol to cover liquidity providers in case of impermanent loss.
//         In the future using governance, PSWAP token holders will have a right to manage insurance fund's assets and may decide to use part of the fund for better good.
//         `,
//     },
//   ],
// };
// const styles = {
//   bgColor: "transparent",
//   titleTextColor: "black",
//   rowTitleColor: "black",
//   rowContentColor: "black",
//   arrowColor: "black",
// };
// const config = {
//   // animate: true,
//   // arrowIcon: "V",
//   // tabFocus: true
// };

// const Faqs = () => {
//   return (
//     <div className="container-fluid faqs">
//       <>
//         <div id="faq" className="container-fluid faq-fluid">
//           <div className="container p-4">
//             <h1 className="text-center">FAQs</h1>
//             <div className="row">
//               <div className="col-md-12 faq-cont ">
//                 <Faq data={data} styles={styles} config={config} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default Faqs;
