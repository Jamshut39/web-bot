"use client"
import { Badge, Button, Card, Container, Grid, Group, Text, Image } from "@mantine/core";
import { useParams } from 'next/navigation'
import React from 'react'
import App_Nav from '../../../components/Nav/App_Nav';
import useSWR from "swr";
import Link from "next/link";
import { IconShoppingCartPlus } from "@tabler/icons-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const page = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useSWR(
        `https://web-bot-node-npbl.onrender.com/api/products/category/${id}`,
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;


    return (
        <div>
            <App_Nav />
            <p>{id}</p>
            <Container size="xl" py="md">
                <Grid gutter="xs">
                    {data?.map((item) => {
                        return (
                            <Grid.Col key={item._id} span={{ base: 6, md: 6, lg: 3 }}>
                                <Card shadow="sm" padding="xs" radius="sm" withBorder>
                                    <Card.Section>
                                        <Image
                                            src={item.image || "https://i.pinimg.com/736x/c7/a8/dd/c7a8ddb4755af10a89035040f6b3bdcd.jpg"}
                                            alt="Norway"
                                        />
                                    </Card.Section>

                                    <Group justify="space-between" mt="md" mb="xs">
                                        <Text fw={500} size="sm">
                                            {item.name}
                                        </Text>
                                        <Text fw={500} size="sm">
                                            {item.price} so'm
                                        </Text>
                                    </Group>

                                    <Text size="xs" c="dimmed" lineClamp={2}>
                                        {item.description}
                                    </Text>

                                    <Link href={`/product/${id}`}>
                                        <Button color="dark" fullWidth mt="md" size="compact-md"
                                            rightSection={<IconShoppingCartPlus size={20} />}>
                                            Savatga Qo'shish
                                        </Button>
                                    </Link>
                                </Card>
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default page