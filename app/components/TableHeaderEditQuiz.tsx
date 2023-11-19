'use client';

import { Table } from 'flowbite-react';

const TableHeaderEditQuiz = () => {
    return (
        <>
            <Table.HeadCell>
                    #
            </Table.HeadCell>
            <Table.HeadCell>
                Judul
            </Table.HeadCell>
            <Table.HeadCell>
                Deskripsi
            </Table.HeadCell>
            <Table.HeadCell>
                Pengorganisir
            </Table.HeadCell>
            <Table.HeadCell>
                Waktu
            </Table.HeadCell>
            <Table.HeadCell>
                Jeda
            </Table.HeadCell>
            <Table.HeadCell>
                ΣPertanyaan
            </Table.HeadCell>
            <Table.HeadCell>
                Kesulitan
            </Table.HeadCell>
            <Table.HeadCell>
                Token
            </Table.HeadCell>
            <Table.HeadCell>
                Actions
            </Table.HeadCell>
        </>
    )
}

export default TableHeaderEditQuiz;