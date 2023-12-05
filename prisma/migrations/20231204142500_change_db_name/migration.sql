/*
  Warnings:

  - You are about to drop the `EmployeeViolation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmployeeViolation" DROP CONSTRAINT "EmployeeViolation_employee_id_fkey";

-- DropTable
DROP TABLE "EmployeeViolation";

-- CreateTable
CREATE TABLE "employee_violations" (
    "id" SERIAL NOT NULL,
    "violation_id" INTEGER NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "salary_cuts_percentage" INTEGER NOT NULL DEFAULT 0,
    "salary_cuts_amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "premi_id" INTEGER NOT NULL,
    "is_premi" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_violations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee_violations" ADD CONSTRAINT "employee_violations_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
