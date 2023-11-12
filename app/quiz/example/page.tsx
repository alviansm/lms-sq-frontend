import React from "react";
import { useRouter } from "next/router";

const QuizExample = () => {
    const router = useRouter();
    const query = router.query;
    const waktu = query['waktu'];
    const jeda = query['jeda'];
    const jumlah_soal = query['jumlah_soal'];
    const tingkat_kesulitan = query['tingkat_kesulitan'];
    const deskripsi = query['deskripsi'];
    const judul = query['judul'];
    const organizer_image_url = query['organizer_image_url'];
    const organizer = query['organizer'];
    
    return (
        <div>
            <p>Mulailah mengerjakan kuis</p>
        </div>
    )
}

export default QuizExample;