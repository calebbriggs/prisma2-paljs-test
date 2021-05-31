-- CreateEnum
CREATE TYPE "EntityActionType" AS ENUM ('create', 'update', 'delete');

-- CreateTable
CREATE TABLE "EntityLog" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "model" TEXT NOT NULL,
    "changes" JSONB NOT NULL,
    "action" "EntityActionType" NOT NULL,

    PRIMARY KEY ("id")
);
