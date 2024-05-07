import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default function Home({}) {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    redirect('/auth/sign-in');
  }
  
  redirect('/admin/projects');
}
