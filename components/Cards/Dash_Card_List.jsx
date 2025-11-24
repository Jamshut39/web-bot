import { ActionIcon, Box, Button, Card, Flex, Grid, Group, Image, Modal, Text } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";


function Dash_Card_list({ data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const DeleteProduct = async () => {
    try {
      let res = await fetch(
        `https://web-bot-node-npbl.onrender.com/api/products/${deleteItem._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Grid gutter="xs">
        {data?.map((item) => {
          return (
            <Grid.Col key={item._id} span={{ base: 6, md: 6, lg: 3 }}>
              <Card shadow="sm" padding="xs" radius="sm" withBorder>
                <Card.Section>
                  <Image
                    height={160}
                    fit={"cover"}
                    src={
                      item.image ||
                      "https://mma.prnewswire.com/media/1420527/Logo.jpg?p=facebook"
                    }
                    alt="Norway"
                  />
                </Card.Section>


                <Text fw={500} size="sm" mt={"xs"} lineClamp={1}>
                  {item.name}
                </Text>
                <Text fw={"bold"} size="sm" mt={"xs"}>
                  {item.price}so'm
                </Text>


                <Box>
                  <Flex justify={"flex-end"} gap={"xs"}>
                    <ActionIcon color="green">
                      <IconPencil size={16} />
                    </ActionIcon>
                    <ActionIcon color="red" onClick={() => {
                      setDeleteItem(item);
                      open();
                    }}>
                      <IconTrash size={16} />
                    </ActionIcon>
                  </Flex>
                </Box>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      <Modal opened={opened} onClose={close} title="Confirm Delection">
        <Text> ({deleteItem?.name}) ni o'chirishni hohlaysizmi ? </Text>
        <Group mt={"md"} grow>
          <Button onClick={close} color="red">Bekor Qilish</Button>
          <Button color="green" onClick={DeleteProduct}>O'chrib Tashlash</Button>
        </Group>
      </Modal>
    </>
  );
};


export default Dash_Card_list;