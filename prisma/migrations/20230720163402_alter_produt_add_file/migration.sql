/*
  Warnings:

  - A unique constraint covering the columns `[ficheiroId]` on the table `productos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ficheiroId` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "productos" ADD COLUMN     "ficheiroId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "productos_ficheiroId_key" ON "productos"("ficheiroId");

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_ficheiroId_fkey" FOREIGN KEY ("ficheiroId") REFERENCES "ficheiros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
