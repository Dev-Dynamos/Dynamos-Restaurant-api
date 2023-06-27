/*
  Warnings:

  - You are about to drop the column `produtoId` on the `stocks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productoId]` on the table `stocks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productoId` to the `stocks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stocks" DROP CONSTRAINT "stocks_produtoId_fkey";

-- DropIndex
DROP INDEX "stocks_produtoId_key";

-- AlterTable
ALTER TABLE "stocks" DROP COLUMN "produtoId",
ADD COLUMN     "productoId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "stocks_productoId_key" ON "stocks"("productoId");

-- AddForeignKey
ALTER TABLE "stocks" ADD CONSTRAINT "stocks_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
