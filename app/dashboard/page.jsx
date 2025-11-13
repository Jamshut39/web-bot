"use client";
import { Container } from "@mantine/core";
import React from "react";
import useSWR from "swr";
import Dash_Nav from "../../components/Nav/Dash_Nav";
import Dash_Card_List from "../../components/Cards/Dash_Card_List";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const page = () => {
    const { data, error, isLoading } = useSWR(
        "https://lesson-bot-node.onrender.com/api/products",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <Container>loading...</Container>;

    return (
        <>
            <Container>
                <Dash_Nav />
                 <Dash_Card_List data={data}/>
            </Container>
        </>
    );
};

export default page;