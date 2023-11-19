'use client';

import { Table } from 'flowbite-react';

const TableRowEditQuestions = () => {
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
                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Edit
                        </a>
                    </Table.Cell>
                    <Table.Cell>
                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Report
                        </a>
                    </Table.Cell>
                </Table.Row>     
        </>
    )
}

export default TableRowEditQuestions