/*
  Warnings:

  - Added the required column `category_fk` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "category_fk" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_category_fk_fkey" FOREIGN KEY ("category_fk") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
