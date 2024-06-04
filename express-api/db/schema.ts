import {pgTable, text, uuid} from "drizzle-orm/pg-core";


export const documents
    = pgTable("documents",
    {
        id: uuid("id").defaultRandom().primaryKey(),
        title: text("title").notNull(),
        author: text("author").notNull(),
    }
)