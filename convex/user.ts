import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("UserTable")
            .filter(q => q.eq(q.field("email"), args.email))
            .first();

        if (!user) {
            const userData = {
                name: args.name,
                email: args.email,
                imageUrl: args.imageUrl,
            };
            const id = await ctx.db.insert("UserTable", userData);
            return { ...userData, _id: id };
        }

        return user;
    },
});
