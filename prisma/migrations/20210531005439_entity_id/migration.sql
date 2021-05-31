/*
  Warnings:

  - Added the required column `entityId` to the `EntityLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EntityLog" ADD COLUMN     "entityId" TEXT NOT NULL;
