export default function Card({ item }) {
  return (
    <article className="article">
      <h1 className="article__title">{item.title}</h1>
      {item.description}
    </article>
  );
}