-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Budget" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "income" INTEGER NOT NULL DEFAULT 0,
    "savings" INTEGER NOT NULL DEFAULT 0,
    "housing" INTEGER NOT NULL DEFAULT 0,
    "food" INTEGER NOT NULL DEFAULT 0,
    "education" INTEGER NOT NULL DEFAULT 0,
    "recreation" INTEGER NOT NULL DEFAULT 0,
    "clothing" INTEGER NOT NULL DEFAULT 0,
    "communications" INTEGER NOT NULL DEFAULT 0,
    "personalCare" INTEGER NOT NULL DEFAULT 0,
    "insurance" INTEGER NOT NULL DEFAULT 0,
    "transportation" INTEGER NOT NULL DEFAULT 0,
    "medical" INTEGER NOT NULL DEFAULT 0,
    "fees" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Budget" ("clothing", "communications", "education", "fees", "food", "housing", "id", "income", "insurance", "medical", "personalCare", "recreation", "savings", "transportation") SELECT "clothing", "communications", "education", "fees", "food", "housing", "id", "income", "insurance", "medical", "personalCare", "recreation", "savings", "transportation" FROM "Budget";
DROP TABLE "Budget";
ALTER TABLE "new_Budget" RENAME TO "Budget";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
