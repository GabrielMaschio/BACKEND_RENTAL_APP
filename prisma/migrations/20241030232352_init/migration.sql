-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Car" (
    "car_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "license_plate" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "rental_price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("car_id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "rental_id" SERIAL NOT NULL,
    "customer_fk" INTEGER NOT NULL,
    "car_fk" INTEGER NOT NULL,
    "rental_days" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "total_price" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("rental_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Car_license_plate_key" ON "Car"("license_plate");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_customer_fk_fkey" FOREIGN KEY ("customer_fk") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_car_fk_fkey" FOREIGN KEY ("car_fk") REFERENCES "Car"("car_id") ON DELETE RESTRICT ON UPDATE CASCADE;
