import React from 'react';
import { DataTable, Text } from 'grommet';

const SearchResult = ({data}) => {
    console.log(data);
    return (
        <div>
            <DataTable
                columns={[
                    {
                        property: 'price',
                        header: <Text> Price </Text>,
                    },
                    {
                        property: 'type',
                        header: <Text> Type </Text>,
                    },
                    {
                        property: 'bed',
                        header: <Text> #Bedroom </Text>,
                    },
                    {
                        property: 'bath',
                        header: <Text> #Bathroom </Text>,
                    },
                    {
                        property: 'city',
                        header: <Text> City </Text>,
                    },
                    {
                        property: 'zip',
                        header: <Text> Zip </Text>,
                    },
                    {
                        property: 'street',
                        header: <Text> street </Text>,
                    },
                    ]}
                data={data}
                sortable
                paginate={{align: 'center'}}
            />
        </div>
    )
}

export default SearchResult;