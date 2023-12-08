/*
  Warnings:

  - You are about to drop the column `is_premi` on the `employee_violations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employee_violations" DROP COLUMN "is_premi",
ADD COLUMN     "is_allowance" BOOLEAN NOT NULL DEFAULT false;
