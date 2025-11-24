import { Button, Card, Grid, Group, Image, Text } from '@mantine/core';
import { IconShoppingCartPlus, IconShoppingCartX } from '@tabler/icons-react';
import React from 'react'

const Card_List = ({ data }) => {
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
                    fit="cover"
                    src={item.image || "https://i.pinimg.com/736x/c7/a8/dd/c7a8ddb4755af10a89035040f6b3bdcd.jpg"}
                    alt="Norway"
                  />
                </Card.Section>


                <Text fw={500} size="sm" mt={"xs"} lineClamp={1}>
                  {item.name}
                </Text>
                <Text fw={500} size="sm" mt={"xs"}>
                  {item.price} so'm
                </Text>


                <Group grow mt={"xs"} >
                  <Button color='dark'  rightSection={<IconShoppingCartPlus size={20}/>}>
                    Savatga Qo'shish
                  </Button>
                </Group>


              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  )
}

export default Card_List