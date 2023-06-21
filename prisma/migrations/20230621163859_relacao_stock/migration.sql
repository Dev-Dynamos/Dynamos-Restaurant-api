/*
  Warnings:

  - You are about to drop the column `idProducto` on the `stocks` table. All the data in the column will be lost.
  - Added the required column `produtoId` to the `stocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stocks" DROP COLUMN "idProducto",
ADD COLUMN     "produtoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
