'use client';

type quizInformationDataProps = {    
    time: string,
    cooldown: string,
    question_sum: string,
    difficulty: string,
}

const QuizInformation = (props: quizInformationDataProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Peraturan
                        </th>
                        <th scope="col" className="px-6 py-3">
                            {" "}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Waktu
                        </th>
                        <td className="px-6 py-4">
                            {props.time}
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jeda Ambil Ujian
                        </th>
                        <td className="px-6 py-4">
                            {props.cooldown}
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jumlah Soal
                        </th>
                        <td className="px-6 py-4">
                            {props.question_sum}
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Tingkat Kesulitan
                        </th>
                        <td className="px-6 py-4">
                            {props.difficulty}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuizInformation;