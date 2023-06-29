import { prismaClient } from "../../src/database/prismaClient";

async function main() {
    await import('./admin');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    }).finally(async () => {
        await prismaClient.$disconnect();
    })