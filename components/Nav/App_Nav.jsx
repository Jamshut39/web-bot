import { Button, Container, Flex, ScrollArea } from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then((res) => res.json());
const App_Nav = () => {
    const { id } = useParams ();
    const { data, error, isLoading } = useSWR("https://lesson-bot-node.onrender.com/api/categories", fetcher);

    
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <>
            <Container size={"xl"} pt={"xs"}>
                <ScrollArea w={"100%"} type="auto" overscrollBehavior="contain" pb={"md"}>
                    <Flex gap={"sm"} miw={600}>
                         <Link  href={`/`}>
                                    <Button variant="subtle" color="black">
                                        Asosiy Sahifa
                                    </Button>
                                </Link>
                        {data.map((item) => {
                            return (
                                <Link key={item._id} href={`/category/${item._id}`}>
                                    <Button variant={id == item._id ? "filled" : "subtle" }  color={"dark"}>
                                        {item.name}
                                    </Button>
                                </Link>
                            );
                        })}
                    </Flex>
                </ScrollArea>
            </Container>
        </>

    );
};

export default App_Nav;