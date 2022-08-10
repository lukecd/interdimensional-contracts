const main = async () => {
    try {
        const contractId = '0x04B4a2aC975fc6f15D22AF4B06A3E4141318E8fc';

        const [owner] = await hre.ethers.getSigners();
        const nftContract = await hre.ethers.getContractAt("InterdimensionalOne", contractId);
        console.log("InterdimensionalOne connected to:", nftContract.address);
        
        const collections = await nftContract.connect(owner).getCollections();
        console.log("Got Collections:", collections);
        const collectionId = hre.ethers.utils.formatUnits(collections[0].collectionId, 0);
        console.log("Got collectionId:", collectionId);

    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
    
  main();