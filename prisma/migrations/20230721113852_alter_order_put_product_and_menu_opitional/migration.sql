-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_menuId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_productoId_fkey";

-- AlterTable
ALTER TABLE "pedidos" ALTER COLUMN "menuId" DROP NOT NULL,
ALTER COLUMN "productoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
