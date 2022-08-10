// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

// contract deployed to 0x738A5D7a9eC3Abba03df5Dc51AC493b4F67708E0
contract PolkadotNation is ERC721URIStorage {

    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint private nonce;

    mapping(uint256 => Design) public tokenIDToDesign;

    // create Struct
    // track levels, hp, strength, speed (or somethinglikethat)

    constructor() ERC721("Chain Battles", "CBTLS") {

    }

    struct Design { 
        uint256 numberPerSide; // 5-9
        uint256 paddingOffset; // 1-9
    }

    string[6] private _colorArray = ["fuchsia", "deeppink", "grey", "chartreuse", "blue", "lime"];

    /**
     * @dev Generates the SVG
     */
    function generateDesign(uint256 tokenId) public view returns(string memory){
        // open the design
        bytes memory svg = abi.encodePacked(
            '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">'
        );

        // add the circles
        Design memory myDesign = tokenIDToDesign[tokenId];
        uint loopIncrement = myDesign.numberPerSide + 1;
        string memory radius = (((myDesign.numberPerSide + 1) / 2)-1).toString();
        radius = string(abi.encodePacked(radius, '.', myDesign.paddingOffset.toString()));

        // go through 0-100, but increment numberPerSide+1
        // adds the rows
        uint colorIndex = 0;
        for(uint256 i=(0+loopIncrement); i<(100-loopIncrement); i+=loopIncrement) {
            if(colorIndex == _colorArray.length) colorIndex = 0;

            for(uint256 j=(0+loopIncrement); j<(100-loopIncrement); j+=loopIncrement) {
                svg = abi.encodePacked(svg, '<circle r="',radius,'%" cx="',(i+1).toString(),'%" cy="',(j+1).toString(),'%" fill="',_colorArray[colorIndex],'" opacity="0.83"/>');
            }

            // it would be prettier to just create a getRandomColor() funciton
            // but I think that would eat more gas. this seems more optimal.
            colorIndex++;
        }

        // close it off
        svg = abi.encodePacked(svg,     
            '</svg>'
        );

        return string(
            abi.encodePacked(
                "data:image/svg+xml;base64,",
                Base64.encode(svg)
            )    
        );
    }
    
    /**
     * @dev Generates the full URI
     */
    function getTokenURI(uint256 tokenId) public view returns (string memory){
        bytes memory dataURI = abi.encodePacked(
            '{',
                '"name": "Polkdadot Nation #', tokenId.toString(), '",',
                '"description": "Dots On Chain",',
                '"image": "', generateDesign(tokenId), '"',
            '}'
        );
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                //dataURI
                Base64.encode(dataURI)
            )
        );
    }

     /**
     * @dev Returns a random number between 5-9
     */
    function getRandomNumberPerSide() private returns (uint) {
        nonce++;
        // get a number between 0 and 4
        uint base =  uint(keccak256(abi.encodePacked(nonce, block.timestamp, block.difficulty, msg.sender))) % 5;
        // add 5 as we want a number between 5-9
        return base + 5;
    }  

    /**
     * @dev Returns a number between 1-9, becomes the decimal part of r="4.5%"
     */
    function getRandomPaddingOffset() private returns (uint) {
        nonce++;
        // get a number between 0 and 8
        uint base =  uint(keccak256(abi.encodePacked(nonce, block.timestamp, block.difficulty, msg.sender))) % 9;
        // add 1 as we want a number between 1-9
        return base + 1;
    }

    function mint() public {
        _tokenIds.increment();
        uint256 newItemID = _tokenIds.current();
        _safeMint(msg.sender, newItemID);

        Design memory myDesign = Design(getRandomNumberPerSide(), getRandomPaddingOffset());
        tokenIDToDesign[newItemID] = myDesign;

        _setTokenURI(newItemID, getTokenURI(newItemID));
    }

    function train(uint256 tokenId) public {
        require(_exists(tokenId), "please use an existing token");
        require(ownerOf(tokenId) == msg.sender, "you can only train your own token");
        
        Design storage myDesign = tokenIDToDesign[tokenId];
        myDesign.numberPerSide = getRandomNumberPerSide();
        myDesign.paddingOffset = getRandomPaddingOffset();

         _setTokenURI(tokenId, getTokenURI(tokenId));    
    }
} 