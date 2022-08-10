// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "hardhat/console.sol";


// contract deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3
contract InterdimensionalOne is ERC721URIStorage {
    address payable owner;

    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _collectionIds;    
    Counters.Counter private _prototypeIds;    
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    uint256 listPrice = 0.042 ether;

    Collection[] private collections;

    mapping(uint256 => Collection) public collectionIdToCollection;
    mapping(uint256 => Prototype[]) public collectionIdToPrototypes;
    mapping(uint256 => Prototype) public prototypeIdToPrototype;
    mapping(address => NFT[]) public ownerToNFTs;
    mapping(uint256 => NFT) public tokenIdToNFT;

    constructor() ERC721("InterdimensionalOne", "SPACE") {
        owner = payable(msg.sender);
    }

    struct Collection {
        uint256 collectionId;
        string name;
    }

    struct Prototype {
        uint256 prototypeId;        
        uint256 collectionId;
        uint256 editionSize;
        uint256 currentlyMinted;
        string name;
        uint256 price;
        string color; 
        string part; //drone, pad, rhythm
        string instrument;
        string soundFiles; // from json TODO is storing this way expensive?
        address payable owner;
    }

    struct NFT {
        uint256 tokenId;
        uint256 editionId;
        uint256 prototypeId;
        address payable owner;
        address payable seller;
        string svgData; //  todo: eventually i want to make this an html canvas NFT
    }

    /**
     8 @notice Allows for updating the refernced sound files.
     */
    function updateSoundFilesForPrototypeId(uint256 prototypeId, string memory soundFiles) public {
        require(msg.sender == owner, "only owner can update");
        prototypeIdToPrototype[prototypeId].soundFiles = soundFiles;
    }

    /**
     * @notice Returns an array of all Collection.
     *         A collection is a unique grouping of Prototypes that has its own visual representation.
     *         Each Collection will appear differently on the interdimensional.one UI.
     */
    function getCollections() public view returns (Collection[] memory) {
        return collections;
    }

    /**
     * @notice Returns all available NFT prototypes for a given Collection
     */
    function getPrototypesForCollectionId(uint256 collectionId) public view returns (Prototype[] memory) {
        return collectionIdToPrototypes[collectionId];
    }

    /**
     * @notice Returns all NFTs I currently own.
     */
    function getMyNFTS() public view returns (NFT[] memory) {
        return ownerToNFTs[msg.sender];
    }
 

    /**
     * @notice Creates a new Collection
     * @return The Id of the new Collection
     */
    function mintCollection(string memory collectioName) public returns (uint256) {
        _collectionIds.increment();
        uint256 newId = _collectionIds.current();
        Collection memory newCollection = Collection(newId, collectioName);

        // store pointers to the Collection twice
        collectionIdToCollection[newId] = newCollection;
        collections.push(newCollection);

        return newId;
    }


    /**
     * @notice Creates a new NFT Prototype. The color / sound profile for an actual NFT.
     * @return The Id of the new Prototype
     */
    function mintPrototype(uint256 collectionId, uint256 editionSize, string memory name, uint256 price, 
                          string memory color, string memory part, string memory instrument, 
                          string memory soundFiles, address payable owner) public returns (uint256) {
        _prototypeIds.increment();
        uint256 newId =  _prototypeIds.current();
        Prototype memory newPrototype = Prototype(newId,
                                                 collectionId,
                                                 editionSize,
                                                 0, // 0 currently minted
                                                 name,
                                                 price,
                                                 color,
                                                 part,
                                                 instrument,
                                                 soundFiles,
                                                 owner);
        prototypeIdToPrototype[newId] = newPrototype;
        //todo updates thos
        Prototype[] storage prototypes = collectionIdToPrototypes[collectionId];
        prototypes.push(newPrototype);

        return newId;                                           
    }

    function mint(uint256 prototypeId, string memory svgData) public payable {
        uint price = prototypeIdToPrototype[prototypeId].price;
        address owner = prototypeIdToPrototype[prototypeId].owner;
        require(msg.value == price, "insufficent funds to mint");

        _tokenIds.increment();
        uint256 newNFTId = _tokenIds.current();
        Prototype memory curPrototype = prototypeIdToPrototype[prototypeId];
        uint256 editionId = curPrototype.currentlyMinted;
        editionId++;
        require(editionId <= curPrototype.editionSize, "edition sold out");

        NFT memory newNFT = NFT(newNFTId,
                        editionId,
                        prototypeId,
                        payable(msg.sender),
                        payable(msg.sender),
                        svgData); // default is to not list for sale
        ownerToNFTs[msg.sender].push(newNFT);
        tokenIdToNFT[newNFTId] = newNFT;
        // increase currentlyMinted count
        curPrototype.currentlyMinted++;
        _safeMint(msg.sender, newNFTId);
        _setTokenURI(newNFTId, getTokenURI(newNFTId));
        // transfer mint fee to prototype owner
        payable(owner).transfer(msg.value);
    }
    
    /**
     * @notice Generates the full URI
     */
    function getTokenURI(uint256 tokenId) public view returns (string memory){
        NFT memory curNFT = tokenIdToNFT[tokenId];
        Prototype memory curPrototype = prototypeIdToPrototype[curNFT.prototypeId];
        bytes memory svg = abi.encodePacked(curNFT.svgData);

        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "',curPrototype.name,' #', tokenId.toString(), '",',
                '"description": "Quiet Your Monkey Mind",',
                '"edition": "',curNFT.editionId.toString(),':', curPrototype.editionSize.toString(), '",',
                '"part": "', curPrototype.part, '",',
                '"instrument": "', curPrototype.instrument, '",',
                 '"image": "data:image/svg+xml;base64,', Base64.encode(svg), '"',
            '}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(dataURI)
            )
        );
    }

    // function executeSale(uint256 tokenId) public payable {
    //     uint price = tokenIdToNFT[tokenId].price;
    //     require(msg.value == price, "Please submit the exact asking price");
    //     address seller = tokenIdToNFT[tokenId].seller;

    //     tokenIdToNFT[tokenId].currentlyListed = false;
    //     tokenIdToNFT[tokenId].seller = payable(msg.sender);
    //     _itemsSold.increment();

    //     // execute the transfer
    //     _transfer(address(this), msg.sender, tokenId);
    //     // now that we don't own the contract anymore,
    //     // approve this to sell in the future. allows the contract to 
    //     // execute future transfers
    //     approve(address(this), tokenId);

    //     payable(owner).transfer(listPrice);
    //     payable(seller).transfer(msg.value);
    // }
 
} 