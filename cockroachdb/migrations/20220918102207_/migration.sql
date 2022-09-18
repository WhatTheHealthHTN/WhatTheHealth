-- CreateTable
CREATE TABLE "Word" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "text" STRING NOT NULL,
    "xmin" INT4 NOT NULL,
    "ymin" INT4 NOT NULL,
    "xmax" INT4 NOT NULL,
    "ymax" INT4 NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);
