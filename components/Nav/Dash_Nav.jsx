import { Button, Flex } from "@mantine/core";
import Link from "next/link";


function Dash_Nav() {
    return (
        <>
            <Flex py={"xs"} gap={'sm'}>
                <Link href={"/"}>
                    <Button>
                        Bosh Sahifa
                    </Button>
                </Link>
                <Link href={`/dashboard/add`}>
                    <Button variant="light">
                        Mahsulotni qo'shish
                    </Button>
                </Link>
            </Flex>
        </>
    );
}

export default Dash_Nav;