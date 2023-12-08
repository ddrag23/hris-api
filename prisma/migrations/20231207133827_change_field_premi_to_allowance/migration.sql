/*
  Warnings:

  - You are about to drop the column `premi_id` on the `employee_violations` table. All the data in the column will be lost.
  - Added the required column `allowance_id` to the `employee_violations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employee_violations" DROP COLUMN "premi_id",
ADD COLUMN     "allowance_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "warning_letters" ADD CONSTRAINT "warning_letters_violation_id_fkey" FOREIGN KEY ("violation_id") REFERENCES "violations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_violations" ADD CONSTRAINT "employee_violations_allowance_id_fkey" FOREIGN KEY ("allowance_id") REFERENCES "allowances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_violations" ADD CONSTRAINT "employee_violations_violation_id_fkey" FOREIGN KEY ("violation_id") REFERENCES "violations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
