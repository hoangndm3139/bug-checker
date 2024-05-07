import { redirect } from 'next/navigation';

export default function Home({ params }: { params: { id: string } }) {
    const { id } = params;
    redirect(`/admin/projects/${id}/feedback`);
}
