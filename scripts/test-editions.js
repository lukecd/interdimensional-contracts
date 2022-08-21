const main = async () => {
    try {
        const [owner] = await hre.ethers.getSigners();
        const nftContractFactory = await hre.ethers.getContractFactory("InterdimensionalOne");
        const nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();
        console.log("Contract deployed to:", nftContract.address);    

        const collectionName = 'Dot Portal';
        let txId = await nftContract.connect(owner).mintCollection(collectionName);
        console.log("Collection Minted:" );

        let soundFiles = {};
        soundFiles = JSON.stringify(soundFiles);
        const editionSize = 4;
        const name = 'Drone Inside';
        const price = hre.ethers.utils.parseEther(".024");
        const color = '#8F0380';
        const type = 'drone';
        const instrument = 'drone-inside';
      
        //console.log(1, editionSize, name, price, color, type, instrument, soundFiles, owner.address);
      
        txId = await nftContract.connect(owner).mintPrototype(1, editionSize, name, price,
                                                                           color, type, instrument, soundFiles, owner.address); 
        console.log("Prototype Minted: ", name); 

        let svgData = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 400 400' style='background-color:#022ccc'><circle cx='200' cy='200' r='50' fill='#57359f' /><circle cx='200' cy='200' r='80' stroke='#57359f' stroke-width='1' fill-opacity='0' /><circle cx='227.47276990360865' cy='275.13485818063' r='23' fill='#372ebe' /><circle cx='200' cy='200' r='140' stroke='#57359f' stroke-width='3' fill-opacity='0' /><circle cx='78.33155667752408' cy='269.2588615231688' r='38' fill='#442fb5' /><circle cx='200' cy='200' r='170' stroke='#57359f' stroke-width='4' fill-opacity='0' /><circle cx='264.7691879361634' cy='357.17809101172446' r='28' fill='#4930b0' /><circle cx='200' cy='200' r='200' stroke='#57359f' stroke-width='5' fill-opacity='0' /><circle cx='226.7144554431112' cy='398.2078148569779' r='34' fill='#4e31ac' /></svg>`;
        txId = await nftContract.connect(owner).mint(1, svgData, { value: ethers.utils.parseEther("0.024") });
        console.log("minted an NFT");

        txId = await nftContract.connect(owner).mint(1, svgData, { value: ethers.utils.parseEther("0.024") });
        console.log("minted an NFT");

        txId = await nftContract.connect(owner).mint(1, svgData, { value: ethers.utils.parseEther("0.024") });
        console.log("minted an NFT");

        txId = await nftContract.connect(owner).mint(1, svgData, { value: ethers.utils.parseEther("0.024") });
        console.log("minted an NFT");

        txId = await nftContract.connect(owner).mint(1, svgData, { value: ethers.utils.parseEther("0.024") });
        console.log("minted an NFT");
        
        let myNFTs = await nftContract.connect(owner).getMyNFTS();
        for(let i=0; i<myNFTs.length; i++) {
            console.log(`tokenId = #${myNFTs[i].tokenId} and editionId = ${myNFTs[i].editionId}`);
        }

    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
  };
    
  main();