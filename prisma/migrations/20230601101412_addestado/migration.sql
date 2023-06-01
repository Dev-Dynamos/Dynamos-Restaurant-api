/*
  Warnings:

  - Added the required column `estado` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "estado" TEXT NOT NULL;
