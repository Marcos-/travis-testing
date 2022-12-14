function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = process.env.FAVORITE_FOOD;
  console.log(`My favorite food is ${favoriteFood}`);
}

main();
