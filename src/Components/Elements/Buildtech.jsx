import React from 'react'

const Buildtech = () => {
  return (
    <div className="buildtech-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="./Assists/dg-stack.svg" className='mt-md-5 mt-2 mb-md-5 mb-2' alt ="" />
                </div>
                <div className="col-md-6">
                    <h1 className='mt-md-5 mt-2'>Built with the best technology</h1>
                    <p>Polkadot’s relay chain is built with Substrate, a blockchain-building framework that is the distillation of Parity Technologies’ learnings building Ethereum, Bitcoin, and enterprise blockchains.</p>
                    <p>Polkadot’s state machine is compiled to WebAssembly (Wasm), a super performant virtual environment. Wasm is developed by major companies, including Google, Apple, Microsoft, and Mozilla, that have created a large ecosystem of support for the standard.</p>
                    <p>Polkadot’s networking uses libp2p, a flexible cross-platform network framework for peer-to-peer applications. Positioned to be the standard for future decentralized applications, libp2p handles the peer discovery and communication in the Polkadot ecosystem.</p>
                    <p className='mb-md-5 mb-2'>The Polkadot runtime environment is being coded in Rust, C++, and Golang, making Polkadot accessible to a wide range of developers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buildtech