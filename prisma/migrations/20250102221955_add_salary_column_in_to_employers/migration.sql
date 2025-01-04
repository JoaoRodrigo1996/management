/*
  Warnings:

  - Added the required column `salary` to the `employers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "hireDate" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL
);
INSERT INTO "new_employers" ("city", "cpf", "dateOfBirth", "email", "hireDate", "id", "job", "name", "state") SELECT "city", "cpf", "dateOfBirth", "email", "hireDate", "id", "job", "name", "state" FROM "employers";
DROP TABLE "employers";
ALTER TABLE "new_employers" RENAME TO "employers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
