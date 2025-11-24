"use client"

import { Container } from "@mantine/core";

import useSWR from 'swr'
import App_Nav from "../components/Nav/App_Nav";
import Card_List from "../components/Cards/Card_List";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://web-bot-node-npbl.onrender.com/api/products",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Container>loading...</Container>;
  return (
    <>
      <App_Nav />
      <Container size="xl" py="md">
        <Card_List data={data} />
      </Container>
    </>
  );
}
