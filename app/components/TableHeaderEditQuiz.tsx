'use client';

import { Table } from 'flowbite-react';

const TableHeaderEditQuiz = () => {
    return (
        <>
            <Table.HeadCell>
                    #
                </Table.HeadCell>
                <Table.HeadCell>
                    Course or Quiz Name
                </Table.HeadCell>
                <Table.HeadCell>
                    Description
                </Table.HeadCell>
                <Table.HeadCell>
                    Organizer
                </Table.HeadCell>
                <Table.HeadCell>
                    Time
                </Table.HeadCell>
                <Table.HeadCell>
                    Cooldown
                </Table.HeadCell>
                <Table.HeadCell>
                    Number of Quesions
                </Table.HeadCell>
                <Table.HeadCell>
                    Difficulty
                </Table.HeadCell>
                <Table.HeadCell>
                    Token
                </Table.HeadCell>
                <Table.HeadCell>
                <span className="sr-only">Edit</span>
                <span className="sr-only">Report</span>
            </Table.HeadCell>
        </>
    )
}

export default TableHeaderEditQuiz;