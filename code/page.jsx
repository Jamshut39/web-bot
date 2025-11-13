"use client"

import { Badge, Button, Card, Container, Grid, Group, Text, Image, Space } from "@mantine/core";

import useSWR from 'swr'
import App_Nav from "../components/Nav/App_Nav";
import { IconShoppingCart } from "@tabler/icons-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
    const { data, error, isLoading } = useSWR(
        "https://lesson-bot-node.onrender.com/api/products",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    return (
        <>
            <App_Nav />
            <Container size={"xl"} py={"md"}>
                <Grid gutter={"xs"}>
                    {data?.map((item)=>{
                        return(
                            <Grid.Col key={item_id} span={{ base: 6, md: 6, lg: 3 }}>
                                <Card
                                    shadow="sm"
                                    padding="lg"
                                    radius="md"
                                    withBorder

                                    style={{ width: 260 }}
                                >
                                    <Card.Section>
                                        <Image
                                            src="https://avatars.mds.yandex.net/get-eda/3595513/347697a54a8a1ac3270e8895fb16a7a4/M_height"
                                            height={160}
                                            alt="Lavash"

                                            fit="cover"
                                        />
                                        <Badge
                                            color="red"
                                            variant="filled"
                                            size="lg"
                                            style={{
                                                position: 'absolute',
                                                top: 10,
                                                left: 10,
                                            }}
                                        >
                                            NEW
                                        </Badge>
                                    </Card.Section>
                                    <Group position="apart" mt="md" mb="xs">
                                        <Text fw={700} weight={600} size="md" style={{ minHeight: 40 }}>
                                            {item.name}
                                        </Text>
                                    </Group>
                                    <Text size="sm" c="dimmed" style={{ minHeight: 60 }}>
                                        {item.price}
                                    </Text>

                                    <Text size="xl" weight={700} c="dark">

                                    </Text>
                                    <Space h="md" />
                                    <Button
                                        variant="light"
                                        color="green"
                                        fullWidth
                                        radius="xl"
                                        rightSection={<IconShoppingCart size={18} />}
                                    >
                                        Savatga qo'shish
                                    </Button>
                                </Card>
                            </Grid.Col>
                        )
                    })}
                   
                </Grid>
 
            </Container>
           
        </>
    );
}
