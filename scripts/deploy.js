async function main() {
    const NftEat = await hre.ethers.getContractFactory('NftEat'),
        nft = await NftEat.deploy();

    await nft.deployed();

    console.log('NFT deployed to:', nft.address);

    const signer = await ethers.provider.getSigner(0);

    await nft.safeMint(
        await signer.getAddress(),
        'ipfs://QmNNgQpoHmaAHtVTn3h1ZDaHcN9M6shD9pxRPfec9Cty1J' // Metadata
    );

    console.log('NFT Minted!');
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
