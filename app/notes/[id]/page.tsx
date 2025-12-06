import NoteDetailsClient from "./NoteDetails.client";

interface NotePageProps {
  params: Promise<{ id: string }>
}

export default async function NoteDetailsPage({ params }: NotePageProps) {
  return <NoteDetailsClient noteId={(await params).id} />;
}
