'use client';

import { Table } from 'flowbite-react';
import Link from "next/link";
import { IconButton, Box, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableRowEditQuiz = ({item}: {item: any}) => {
    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item?.id}
                    </Table.Cell>
                    <Table.Cell>
                        {item?.title}
                    </Table.Cell>
                    <Table.Cell>
                    {item?.description}
                    </Table.Cell>
                    <Table.Cell>
                        {item?.organizer}
                    </Table.Cell>
                    <Table.Cell>
                        {item?.time}
                    </Table.Cell>
                    <Table.Cell>
                        {item?.cooldown}
                    </Table.Cell>
                    <Table.Cell>
                        {item?.question_sum}
                    </Table.Cell>
                    <Table.Cell>
                        {item?.difficulty}
                    </Table.Cell>
                    <Table.Cell>
                        ABCDE
                    </Table.Cell>
                    <Table.Cell>
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                                <Link href={"edit/quiz/"+item?.slug}>
                                    <Tooltip title="Edit">
                                        <IconButton onClick={() => (console.log("clicked"))}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Link>                                
                                <Tooltip title="Delete">
                                <IconButton color="error" onClick={() => console.log("clicked")}>
                                    <DeleteIcon />
                                </IconButton>
                                </Tooltip>
                            </Box>  
                    </Table.Cell>
                </Table.Row>     
        </>
    )
}

export default TableRowEditQuiz