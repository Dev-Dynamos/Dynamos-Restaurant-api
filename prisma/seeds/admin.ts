import { prismaClient } from "../../src/database/prismaClient";
import { AppError } from "../../src/errors/AppError";

async function seedAdmin() {
    const name = process.env.ADMIN_EMAIL as string;
    const email = process.env.ADMIN_EMAIL as string;
    const password = process.env.ADMIN_PASSWORD as string;

    if(!email && !password) {
        throw new AppError("Noem, email e palavra-passe do administrador necessarias !")
    }

    const adminExists = await prismaClient.admin.findUnique({
        where: {
            email
        }
    });

    if (adminExists) return
    await prismaClient.admin.create({
        data: {
            name,
            email,
            password
        },
    });
}

seedAdmin()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    }).finally(async () => {
        await prismaClient.$disconnect();
    })