-- CreateTable
CREATE TABLE "employers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "hireDate" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "employers_pkey" PRIMARY KEY ("id")
);
