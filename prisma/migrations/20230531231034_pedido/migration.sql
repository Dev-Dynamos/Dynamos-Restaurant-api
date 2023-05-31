/*
  Warnings:

  - You are about to drop the column `description` on the `pedidos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "description",
ADD COLUMN     "descricao" TEXT NOT NULL;
