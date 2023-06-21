-- AddForeignKey
ALTER TABLE "operadores" ADD CONSTRAINT "operadores_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
