'use server';

import { db } from '@/db/drizzle';
import { tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

const getSession = async () => {
  const headerList = await headers()
  const session = await auth.api.getSession({
    headers: headerList
  })
  return session
}

export const getTasks = async () => {
  const session = await getSession();
  if (!session) return [];

  return await db
    .select()
    .from(tasks)
    .where(eq(tasks.userId, session.user.id));
};

export const createTask = async (title: string) => {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');

  await db.insert(tasks).values({
    id: uuidv4(),
    userId: session.user.id,
    title,
  });

  revalidatePath('/dashboard');
};

export const deleteTask = async (id: string) => {
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');

  await db.delete(tasks).where(eq(tasks.id, id));

  revalidatePath('/dashboard');
};
