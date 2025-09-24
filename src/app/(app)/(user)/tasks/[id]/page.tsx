export default async function Task({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <div>Task {id}</div>;
}