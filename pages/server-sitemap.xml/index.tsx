import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: any[] = await response.json();

  const todosArray: ISitemapField[] = todos.map((todo) => ({
    loc: `https://en.tiket.com/todos/${todo.id}`,
    lastmod: new Date().toISOString()
  }));

  return getServerSideSitemap(ctx, todosArray);
};

export default function Todos() {}