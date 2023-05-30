/*
  Warnings:

  - You are about to drop the `cargoss` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departamentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `funcionarios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reastaurantes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refeicoes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idProducto` to the `menus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idMenu` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idProducto` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localizacao` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCategoria` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "idProducto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "idMenu" TEXT NOT NULL,
ADD COLUMN     "idProducto" TEXT NOT NULL,
ADD COLUMN     "localizacao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "productos" ADD COLUMN     "idCategoria" TEXT NOT NULL;

-- DropTable
DROP TABLE "cargoss";

-- DropTable
DROP TABLE "departamentos";

-- DropTable
DROP TABLE "funcionarios";

-- DropTable
DROP TABLE "reastaurantes";

-- DropTable
DROP TABLE "refeicoes";

-- CreateTable
CREATE TABLE "operadores" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "morada" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,

    CONSTRAINT "operadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stocks" (
    "id" TEXT NOT NULL,
    "idProducto" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);
