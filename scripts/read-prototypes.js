const main = async () => {
    try {
        const contractId = '0x3648Bde60a2130dC125898E84B7B37035A1aA385';

        const [owner] = await hre.ethers.getSigners();
        const nftContract = await hre.ethers.getContractAt("InterdimensionalOne", contractId);
        console.log("InterdimensionalOne connected to:", nftContract.address);
        
        const prototypes = await nftContract.connect(owner).getPrototypesForCollectionId(1);
        console.log("all prototypes=", prototypes); 
        for(let i=0; i<prototypes.length; i++) {
          console.log("prototypes[i].soundFiles=", prototypes[i].soundFiles); 

        }

    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
    
  main();