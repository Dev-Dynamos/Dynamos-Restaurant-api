/*
  Warnings:

  - You are about to drop the column `email` on the `pedidos` table. All the data in the column will be lost.
  - Added the required column `idCliente` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "email",
ADD COLUMN     "idCliente" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
