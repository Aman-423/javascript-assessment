const nftCollection = [];

function createNFT(name, eyeColor, clothing, accessory) {
  
  const nft = {
    name,
    eyeColor,
    clothing,
    accessory,
  };
  nftCollection.push(nft);
  console.log(`NFT minted for: ${name}`);
}

function displayNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log(nftCollection[i]);
  }
}

function getTotalNFTs() {
  console.log(`Total NFTs in collection: ${nftCollection.length}`);
}

createNFT("Aman Kumar Pal", "Black", "Casual", "Gamepad");
displayNFTs();
getTotalNFTs();
