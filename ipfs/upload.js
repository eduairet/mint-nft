async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = await create();

    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: 'NftEat',
            attributes: [
                {
                    trait_type: 'Color',
                    value: '100',
                },
                {
                    trait_type: 'Python',
                    value: '200',
                },
                {
                    trait_type: 'Random',
                    value: '500',
                },
                {
                    trait_type: 'Web3',
                    value: '1000',
                },
            ],

            image: 'https://ipfs.io/ipfs/QmRmixAJpapKUsTtrQ2oC4WUdGkygdLyoTMzMmjooPMPcX?filename=nfteat.png',
            description: 'Random color grid with swag!',
        }),
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();
