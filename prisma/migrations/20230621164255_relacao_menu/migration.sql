/*
  Warnings:

  - You are about to drop the column `idProducto` on the `menus` table. All the data in the column will be lost.
  - Added the required column `menuId` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menus" DROP COLUMN "idProducto";

-- AlterTable
ALTER TABLE "productos" ADD COLUMN     "menuId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
