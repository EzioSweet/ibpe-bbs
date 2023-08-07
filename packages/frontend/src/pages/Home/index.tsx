import React from 'react';
import {Button} from "@mantine/core";
import {trpc} from "../../trpc";

const Home = () => {
    const {data} = trpc.userLine.useSWR()
    return (
        <div>
            {/*<Button >Hello{data!==undefined?data.mod_date:""} </Button>*/}
        </div>
    );
};

export default Home;
