/*
  Warnings:

  - You are about to drop the column `estado` on the `pedidos` table. All the data in the column will be lost.
  - Added the required column `status` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "estado",
ADD COLUMN     "status" TEXT NOT NULL;
