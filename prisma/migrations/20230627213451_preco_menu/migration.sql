/*
  Warnings:

  - Added the required column `preco` to the `menus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;
