/*
  Warnings:

  - You are about to drop the column `idCategoria` on the `productos` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "productos" DROP COLUMN "idCategoria",
ADD COLUMN     "categoriaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
