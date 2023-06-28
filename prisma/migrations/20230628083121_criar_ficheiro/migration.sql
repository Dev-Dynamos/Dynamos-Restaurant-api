-- CreateTable
CREATE TABLE "ficheiros" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "extensao" TEXT NOT NULL,
    "caminho" TEXT NOT NULL,

    CONSTRAINT "ficheiros_pkey" PRIMARY KEY ("id")
);
