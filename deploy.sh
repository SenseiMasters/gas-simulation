NETWORK=localhost

npx hardhat run scripts/deploy.ts --network $NETWORK
echo "----------------------------------------------"
npx hardhat run scripts/collection/1_deploy_erc721_collection.ts --network $NETWORK
echo "----------------------------------------------"
npx hardhat run scripts/collection/2_deploy_erc1155_collection.ts --network $NETWORK