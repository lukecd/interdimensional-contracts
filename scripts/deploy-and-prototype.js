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
  let soundFiles = {};
  soundFiles = JSON.stringify(soundFiles);
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
      let soundFiles = {
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
      };
      soundFiles = JSON.stringify(soundFiles);
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

const mintPadLostInTheWind = async (owner, nftContract, collectionId) => {
  let soundFiles = {
      urls: {
          C3: "pad-lost-in-the-wind-C3.mp3",
          D3: "pad-lost-in-the-wind-D3.mp3",
          E3: "pad-lost-in-the-wind-E3.mp3",
          F3: "pad-lost-in-the-wind-F3.mp3",
          G3: "pad-lost-in-the-wind-G3.mp3",
          A3: "pad-lost-in-the-wind-A3.mp3",
          B3: "pad-lost-in-the-wind-B3.mp3",
      },
      baseUrl: "/audio/pads/pad-lost-in-the-wind/",
      envelope: {
          attack: 1,
          release: 4
      }
  };
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = 'Lost In The Wind';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#38FF13';
  const type = 'pad';
  const instrument = 'pad-lost-wind';

  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintPadTheOnlyWayOutIsIn = async (owner, nftContract, collectionId) => {
  let soundFiles = {
      urls: {
          C3: "pad-the-only-way-out-is-in-C3.mp3",
          D3: "pad-the-only-way-out-is-in-D3.mp3",
          E3: "pad-the-only-way-out-is-in-E3.mp3",
          F3: "pad-the-only-way-out-is-in-F3.mp3",
          G3: "pad-the-only-way-out-is-in-G3.mp3",
          A3: "pad-the-only-way-out-is-in-A3.mp3",
          B3: "pad-the-only-way-out-is-in-B3.mp3",
      },
      baseUrl: "/audio/pads/pad-the-only-way-out-is-in/",
      envelope: {
          attack: 1,
          release: 4
      }
  };
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = 'The Only Way Out Is In';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#FE30A5';
  const type = 'pad';
  const instrument = 'pad-out-is-in';

  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintPadFollowTheBlueMan = async (owner, nftContract, collectionId) => {
  let soundFiles = {
      urls: {
          C3: "pad-follow-the-blue-man-C3.mp3",
          D3: "pad-follow-the-blue-man-D3.mp3",
          E3: "pad-follow-the-blue-man-E3.mp3",
          F3: "pad-follow-the-blue-man-F3.mp3",
          G3: "pad-follow-the-blue-man-G3.mp3",
          A3: "pad-follow-the-blue-man-A3.mp3",
          B3: "pad-follow-the-blue-man-B3.mp3",
      },
      baseUrl: "/audio/pads/pad-follow-the-blue-man/",
      envelope: {
          attack: 1,
          release: 4
      }
  };
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = 'Follow The Blue Man';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#b0e0e6';
  const type = 'pad';
  const instrument = 'pad-follow-the-blue-man';

  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}
const mintPadTheBlissSea = async (owner, nftContract, collectionId) => {
  let soundFiles = {
      urls: {
          C3: "pad-the-bliss-sea-C3.mp3",
          D3: "pad-the-bliss-sea-D3.mp3",
          E3: "pad-the-bliss-sea-E3.mp3",
          F3: "pad-the-bliss-sea-F3.mp3",
          G3: "pad-the-bliss-sea-G3.mp3",
          A3: "pad-the-bliss-sea-A3.mp3",
          B3: "pad-the-bliss-sea-B3.mp3",
      },
      baseUrl: "/audio/pads/pad-the-bliss-sea/",
      envelope: {
          attack: 1,
          release: 4
      }
  };
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = 'The Bliss Sea';
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#a020f0';
  const type = 'pad';
  const instrument = 'pad-the-bliss-sea';

  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintRhythmMarimbaMyMind = async (owner, nftContract, collectionId) => {
  let soundFiles = {
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
  };
  soundFiles = JSON.stringify(soundFiles);
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
  soundFiles = JSON.stringify(soundFiles);
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

const mintRhythmIsThatWhereIWasnt = async (owner, nftContract, collectionId) => {
  let soundFiles = {
    urls: {
        C3: "key-is-that-where-i-wasnt-C3.mp3",
        D3: "key-is-that-where-i-wasnt-D3.mp3",
        E3: "key-is-that-where-i-wasnt-E3.mp3",
        F3: "key-is-that-where-i-wasnt-F3.mp3",
        G3: "key-is-that-where-i-wasnt-G3.mp3",
        A3: "key-is-that-where-i-wasnt-A3.mp3",
        B3: "key-is-that-where-i-wasnt-B3.mp3",
    },
    baseUrl: "/audio/keys/key-is-that-where-i-wasnt/",
    envelope: {
        attack: .05,
        release: 2
  }};
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = "Is That Where I Wasn't";
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#05F2DB';
  const type = 'rhythm';
  const instrument = 'keys-where-i-wasnt';
  
  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintRhythmQuartzCavern = async (owner, nftContract, collectionId) => {
  let soundFiles = {
    urls: {
        C3: "key-quartz-cavern-C3.mp3",
        D3: "key-quartz-cavern-D3.mp3",
        E3: "key-quartz-cavern-E3.mp3",
        F3: "key-quartz-cavern-F3.mp3",
        G3: "key-quartz-cavern-G3.mp3",
        A3: "key-quartz-cavern-A3.mp3",
        B3: "key-quartz-cavern-B3.mp3",
    },
    baseUrl: "/audio/keys/key-quartz-cavern/",
    envelope: {
        attack: .05,
        release: 2
  }};
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = "Quartz Cavern";
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#05C7F2';
  const type = 'rhythm';
  const instrument = 'keys-quartz-cavern';
  
  txId = await nftContract.connect(owner).mintPrototype(collectionId, editionSize, name, price,
                                                                     color, type, instrument, soundFiles, owner.address); 
  console.log("Prototype Minted: ", name);    
}

const mintRhythmSlowDownInside = async (owner, nftContract, collectionId) => {
  let soundFiles = {
    urls: {
        C3: "key-slow-down-inside-C3.mp3",
        D3: "key-slow-down-inside-D3.mp3",
        E3: "key-slow-down-inside-E3.mp3",
        F3: "key-slow-down-inside-F3.mp3",
        G3: "key-slow-down-inside-G3.mp3",
        A3: "key-slow-down-inside-A3.mp3",
        B3: "key-slow-down-inside-B3.mp3",
    },
    baseUrl: "/audio/keys/key-slow-down-inside/",
    envelope: {
        attack: .05,
        release: 2
  }};
  soundFiles = JSON.stringify(soundFiles);
  const editionSize = 42;
  const name = "Slow Down Inside";
  const price = hre.ethers.utils.parseEther(".024");
  const color = '#3805F2';
  const type = 'rhythm';
  const instrument = 'keys-slow-down-inside';
  
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
        let nftContract;

        // const contractId = '0x9548EE6e1B7B4a5de565959Ee460833bdd845f71';
        // nftContract = await hre.ethers.getContractAt("InterdimensionalOne", contractId);
        // console.log("Contract connected to:", nftContract.address);    

        const nftContractFactory = await hre.ethers.getContractFactory("InterdimensionalOne");
        nftContract = await nftContractFactory.deploy();
        await nftContract.deployed();
        console.log("Contract deployed to:", nftContract.address);    

        const collectionName = 'Dot Portal';

        let txId = await nftContract.connect(owner).mintCollection(collectionName);
        console.log("Collection Minted:" );
        
        const collections = await nftContract.connect(owner).getCollections();
        console.log("Got Collections:", collections);
        //const collectionId = hre.ethers.utils.formatUnits(collections[0].collectionId, 0);
        let collectionId = 1;
        console.log("Got collectionId:", collectionId);

        await mintDroneInside(owner, nftContract, collectionId);

        await mintPadDeepCanyonDreams(owner, nftContract, collectionId);
        await mintPadLostInTheWind(owner, nftContract, collectionId);
        await mintPadTheOnlyWayOutIsIn(owner, nftContract, collectionId);
        await mintPadFollowTheBlueMan(owner, nftContract, collectionId);
        await mintPadTheBlissSea(owner, nftContract, collectionId);

        await mintRhythmMarimbaMyMind(owner, nftContract, collectionId);
        await mintRhythmMellowYellow(owner, nftContract, collectionId);
        await mintRhythmIsThatWhereIWasnt(owner, nftContract, collectionId);
        await mintRhythmQuartzCavern(owner, nftContract, collectionId);
        await mintRhythmSlowDownInside(owner, nftContract, collectionId);

        // get all prototypes in my collection, 
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