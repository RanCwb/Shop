/*
  Warnings:

  - You are about to drop the column `hair_id` on the `services` table. All the data in the column will be lost.
  - Added the required column `haircut_id` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_hair_id_fkey";

-- AlterTable
ALTER TABLE "services" DROP COLUMN "hair_id",
ADD COLUMN     "haircut_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_haircut_id_fkey" FOREIGN KEY ("haircut_id") REFERENCES "haircuts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
