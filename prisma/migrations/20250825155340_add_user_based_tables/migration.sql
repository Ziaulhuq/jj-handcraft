/*
  Warnings:

  - You are about to drop the column `row` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "row",
ADD COLUMN     "paymentMethod" TEXT,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user',
ALTER COLUMN "address" DROP NOT NULL;
