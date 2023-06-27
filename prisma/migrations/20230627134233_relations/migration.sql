/*
  Warnings:

  - You are about to drop the column `idCliente` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `idMenu` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `idProducto` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `menuId` on the `productos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[produtoId]` on the table `stocks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clienteId` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `menuId` to the `pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productoId` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_menuId_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "idCliente",
DROP COLUMN "idMenu",
DROP COLUMN "idProducto",
ADD COLUMN     "clienteId" TEXT NOT NULL,
ADD COLUMN     "menuId" TEXT NOT NULL,
ADD COLUMN     "productoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "menuId";

-- CreateTable
CREATE TABLE "MenuProducto" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,

    CONSTRAINT "MenuProducto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stocks_produtoId_key" ON "stocks"("produtoId");

-- AddForeignKey
ALTER TABLE "MenuProducto" ADD CONSTRAINT "MenuProducto_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuProducto" ADD CONSTRAINT "MenuProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
