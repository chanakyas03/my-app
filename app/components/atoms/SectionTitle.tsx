interface Props {
  id?: string;
  title: string;
}

export default function SectionTitle({ id, title }: Props) {
  return (
    <h2 id={id} className="h2 border-bottom pb-2 mb-4">
      {title}
    </h2>
  );
}
