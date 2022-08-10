const hre = require("hardhat");

async function main() {
    try {
        const [owner, p1, p2, p3, p4, p5, p6, p7, p8, p9] = await hre.ethers.getSigners();
        const nftFactory = await hre.ethers.getContractAt("MosEisleyCantina", '0x1a204cA3B80EE96f976611A98451Ee5F7e94FDf0');
        
        const nfts = await nftFactory.connect(owner).getAllNFTs();
        //console.log(nfts);
        const uri = await nftFactory.connect(owner).getTokenURI(4);
        console.log(uri)
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
  }
};
  
main();