const { any } = require("hardhat/internal/core/params/argumentTypes");

async function createBytes(name) {
    const bytes = ethers.utils.formatBytes32String(name);
    return bytes;
}

async function parseBytes(bytes) {
    const name = ethers.utils.parseBytes32String(bytes);
    return name;
}

const mintDroneInside = async (owner, nftContract, collectionId) => {
  const soundFiles = `{}`;

  const editionSize = 42;
  const name = 'Drone Inside';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#8F0380';
  const type = 'drone';
  const instrument = 'drone-inside';

  console.log(collectionId, editionSize, name, price, color, type, instrument, soundFiles, owner.address);

  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintPadDeepCanyonDreams = async (owner, nftContract, collectionId) => {
      let soundFiles = `{
          urls: {
              C3: "pad-e-canyon-C3.mp3",
              D3: "pad-e-canyon-D3.mp3",
              E3: "pad-e-canyon-E3.mp3",
              F3: "pad-e-canyon-F3.mp3",
              G3: "pad-e-canyon-G3.mp3",
              A3: "pad-e-canyon-A3.mp3",
              B3: "pad-e-canyon-B3.mp3",
          },
          baseUrl: "/audio/pads/pad-canyon/",
          envelope: {
              attack: 1,
              release: 4
          }
      }`;
      //soundFiles = JSON.stringify(soundFiles);
      const editionSize = 42;
      const name = 'Deep Canyon Dreams';
      const price = hre.ethers.utils.parseEther(".024");
      const color = '#EC205B';
      const type = 'pad';
      const instrument = 'pad-canyon';

      txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                         color, type, instrument, soundFiles, owner.address); 
      console.log("Prototype Minted: ", name);    
}

const mintRhythmMarimbaMyMind = async (owner, nftContract, collectionId) => {
  let soundFiles = `{
    urls: {
        C3: "mallet-marimba-C3.mp3",
        D3: "mallet-marimba-D3.mp3",
        E3: "mallet-marimba-E3.mp3",
        F3: "mallet-marimba-F3.mp3",
        G3: "mallet-marimba-G3.mp3",
        A3: "mallet-marimba-A3.mp3",
        B3: "mallet-marimba-B3.mp3",
    },
    baseUrl: "/audio/mallets/mallet-marimba/",
    envelope: {
        attack: .25,
        release: 2
    }
  }`;
  //soundFiles = JSON.stringify(soundFiles);

  const editionSize = 42;
  const name = 'Marimba My Mind';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#7701AD';
  const type = 'rhythm';
  const instrument = 'mallet-marimba';

  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintRhythmMellowYellow = async (owner, nftContract, collectionId) => {
  let soundFiles = {
    urls: {
        C3: "mallet-mellow-C3.mp3",
        D3: "mallet-mellow-D3.mp3",
        E3: "mallet-mellow-E3.mp3",
        F3: "mallet-mellow-F3.mp3",
        G3: "mallet-mellow-G3.mp3",
        A3: "mallet-mellow-A3.mp3",
        B3: "mallet-mellow-B3.mp3",
    },
    baseUrl: "/audio/mallets/mallet-mellow/",
    envelope: {
        attack: .25,
        release: 2
  }};
  
  //soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = 'Mellow Yellow';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#FC7208';
  const type = 'rhythm';
  const instrument = 'mallet-mellow';
  
  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintNFT = async (owner, prototypeId, nftContract) => {
  let svgData = `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 400 400' style='background-color:#022ccc'><circle cx='200' cy='200' r='50' fill='#57359f' /><circle cx='200' cy='200' r='80' stroke='#57359f' stroke-width='1' fill-opacity='0' /><circle cx='227.47276990360865' cy='275.13485818063' r='23' fill='#372ebe' /><circle cx='200' cy='200' r='140' stroke='#57359f' stroke-width='3' fill-opacity='0' /><circle cx='78.33155667752408' cy='269.2588615231688' r='38' fill='#442fb5' /><circle cx='200' cy='200' r='170' stroke='#57359f' stroke-width='4' fill-opacity='0' /><circle cx='264.7691879361634' cy='357.17809101172446' r='28' fill='#4930b0' /><circle cx='200' cy='200' r='200' stroke='#57359f' stroke-width='5' fill-opacity='0' /><circle cx='226.7144554431112' cy='398.2078148569779' r='34' fill='#4e31ac' /></svg>`;

  txId = await nftContract.connect(owner).mint(prototypeId, svgData, { value: ethers.utils.parseEther("0.024") });
  console.log("minted an NFT");
}

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
        
        const collections = await nftContract.connect(owner).getCollections();
        console.log("Got Collections:", collections);
        //const collectionId = hre.ethers.utils.formatUnits(collections[0].collectionId, 0);
        //console.log("Got collectionId:", collectionId);
        collectionId = 1;
        await mintRhythmMarimbaMyMind(owner, nftContract, collectionId);
        await mintDroneInside(owner, nftContract, collectionId);
        await mintPadDeepCanyonDreams(owner, nftContract, collectionId);
        await mintRhythmMellowYellow(owner, nftContract, collectionId);
    
        // get all prototypes in my collection, currently just 1
        const prototypes = await nftContract.connect(owner).getPrototypesForCollectionId(collectionId);
        console.log("all prototypes=", prototypes); 
        let prototypeId = 1; // TEMP
        // try minting an NFT
        // await mintNFT(owner, prototypeId, nftContract);

        // const myNFTs = await nftContract.connect(owner).getMyNFTS();
        // console.log("myNFTs=", myNFTs);


    } 
    catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
    
  main();