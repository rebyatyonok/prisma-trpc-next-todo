import { createRouter } from './context';
import { z } from 'zod';

export const todoItemsRouter = createRouter()
  .query('list', {
    input: z
      .object({
        take: z.number().optional(),
        skip: z.number().optional(),
      })
      .strict(),
    async resolve({ ctx, input }) {
      return ctx.prisma.todoItem.findMany(input);
    },
  })
  .mutation('create', {
    input: z
      .object({
        title: z.string(),
        text: z.string().optional(),
        expiresAt: z.date(),
      })
      .strict(),
    async resolve({ ctx, input }) {
      return ctx.prisma.todoItem.create({
        data: input,
      });
    },
  })
  .mutation('update', {
    input: z
      .object({
        id: z.string(),
        title: z.string().optional(),
        expiresAt: z.date().optional(),
        done: z.boolean().optional(),
        order: z.number().optional(),
      })
      .strict(),
    async resolve({ ctx, input }) {
      return ctx.prisma.todoItem.update({
        where: { id: input.id },
        data: input,
      });
    },
  })
  .mutation('delete', {
    input: z
      .object({
        id: z.string(),
      })
      .strict(),
    async resolve({ ctx, input }) {
      return ctx.prisma.todoItem.delete({
        where: input,
      });
    },
  });
