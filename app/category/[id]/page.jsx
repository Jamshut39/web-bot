"use client"
import { Badge, Button, Card, Container, Grid, Group, Text, Image } from "@mantine/core";
import { useParams } from 'next/navigation'
import React from 'react'
import App_Nav from '../../../components/Nav/App_Nav';
import useSWR from "swr";
import Link from "next/link";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Card_List from "../../../components/Cards/Card_List";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const page = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useSWR(
        `https://web-bot-node-npbl.onrender.com/api/products/category/${id}`,
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <Container size={'xl'}>loading...</Container>;


    return (
        <div>
            <App_Nav />
            <Container size="xl" py="md">
                <Card_List data={data} />

            </Container>
        </div>
    )
}

export default page