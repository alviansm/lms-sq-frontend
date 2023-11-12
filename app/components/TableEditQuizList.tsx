'use client';

import { Table } from 'flowbite-react';
import TableHeaderEditQuiz from './TableHeaderEditQuiz';
import TableRowEditQuiz from './TableRowEditQuiz';

const TableEditQuizList = () => {
    return (
        <Table hoverable>
            <Table.Head>
                <TableHeaderEditQuiz/>
            </Table.Head>
            <Table.Body className="divide-y">
                <TableRowEditQuiz/>
                <TableRowEditQuiz/>
            </Table.Body>
        </Table>
    )
}

export default TableEditQuizList;