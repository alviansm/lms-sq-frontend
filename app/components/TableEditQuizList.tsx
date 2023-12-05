'use client';

import { Table } from 'flowbite-react';
import TableHeaderEditQuiz from './TableHeaderEditQuiz';
import TableRowEditQuiz from './TableRowEditQuiz';

const item = {
    id: "1",
    slug: "strategic-leadership-illionis",
    title: "Strategic Leadership",
    organizer: "The University of Illionis at Urbana-Champaign",
    category: "Spesialisasi Ketrampilan",
    image_url: "/images/dummy-quiz-thumbnail.jpg",
    organizer_logo_url: "/images/the-uni-of-illinois-uc.png",
    time: "60 menit",
    cooldown: "2 Kali dalam 1 hari",
    question_sum: "10 Pilihan Ganda dan 5 Isian Singkat",
    difficulty: "Menengah",
    description: "Serangkaian ujian pengetahuan kepemimpinan strategis."
}   

const TableEditQuizList = () => {
    return (
        <Table hoverable>
            <Table.Head>
                <TableHeaderEditQuiz/>
            </Table.Head>
            <Table.Body className="divide-y">
                <TableRowEditQuiz
                    item={item}
                />
            </Table.Body>
        </Table>
    )
}

export default TableEditQuizList;