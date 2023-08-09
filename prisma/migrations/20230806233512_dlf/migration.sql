/*
  Warnings:

  - The values [entrege] on the enum `PedidoStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PedidoStatus_new" AS ENUM ('pendente', 'aceite', 'entregue', 'cancelado', 'negado');
ALTER TABLE "pedidos" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "pedidos" ALTER COLUMN "status" TYPE "PedidoStatus_new" USING ("status"::text::"PedidoStatus_new");
ALTER TYPE "PedidoStatus" RENAME TO "PedidoStatus_old";
ALTER TYPE "PedidoStatus_new" RENAME TO "PedidoStatus";
DROP TYPE "PedidoStatus_old";
ALTER TABLE "pedidos" ALTER COLUMN "status" SET DEFAULT 'pendente';
COMMIT;
