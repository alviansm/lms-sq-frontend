'use client';

import QuizCard from "./QuizCard"

const PopularQuiz = () => {
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
        description: "Serangkaian ujian pengetahuan kepemimpinan strategis. "
    }    

    const item2 = {
        id: "2",
        slug: "precalculus-trigonometry",
        title: "Precalculus: Trignometry",
        organizer: "The University of Sydney",
        category: "Ujian Akademik",
        image_url: "/images/trigonometry-intro-thumbnail.jpg",
        organizer_logo_url: "/images/the-uni-of-sydney.png",
        time: "90 menit",
        cooldown: "1 Kali dalam 1 hari",
        question_sum: "30 Pilihan Ganda dan 5 Isian Singkat",
        difficulty: "Pemula",
        description: "Serangkaian ujian mengenai konsep trigonometri secara interaktif. Anda akan mendapatkan sertifikat dan analisis kelemahan beserta kelebihan Anda dalam mengerjakan ujian."
    }   

    return (        
        <div className="mx-8 mt-4">
            <h4 className="text-xl tracking-tight text-gray-900 dark:text-white mb-4">Ujian Paling Populer</h4>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <QuizCard
                        item={item}
                    />
                </div>
                <div>
                    <QuizCard
                        item={item2}
                    />
                </div>
            </div>
        </div>
    )
}

export default PopularQuiz;