'use client';

import { Table } from 'flowbite-react';
import { IconButton, Box, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableRowEditQuiz = () => {
    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        1
                    </Table.Cell>
                    <Table.Cell>
                        Precalculust: Trigonometry
                    </Table.Cell>
                    <Table.Cell>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet assumenda nostrum perferendis non consequuntur autem unde quos officiis illo quas!
                    </Table.Cell>
                    <Table.Cell>
                        The University of Sydney
                    </Table.Cell>
                    <Table.Cell>
                        90 Menit
                    </Table.Cell>
                    <Table.Cell>
                        1 Kali dalam 1 hari
                    </Table.Cell>
                    <Table.Cell>
                        30 Pilihan Ganda dan 5 Isian singkat
                    </Table.Cell>
                    <Table.Cell>
                        Pemula
                    </Table.Cell>
                    <Table.Cell>
                        ABCDE
                    </Table.Cell>
                    <Table.Cell>
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                                <Tooltip title="Edit">
                                <IconButton onClick={() => (console.log("clicked"))}>
                                    <EditIcon />
                                </IconButton>
                                </Tooltip>
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