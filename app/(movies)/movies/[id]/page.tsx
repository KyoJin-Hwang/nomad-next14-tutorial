interface Params {
  id: string;
}

export default function MovieDetail({ params }: { params: Params }) {
  return <h1>Movie! {params.id}</h1>;
}
