/*
  Warnings:

  - Added the required column `descricao` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "productos" ADD COLUMN     "descricao" TEXT NOT NULL;
