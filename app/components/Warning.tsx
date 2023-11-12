import Link from "next/link";

const Warning = () => {
    return (
        <div className="flex justify-end mx-8">
            <p>
                Tujuan belajar Anda masih <b>belum ditetapkan</b> • <Link href={"/"}><span className="text-blue-600">Tetapkan sekarang</span></Link>
            </p>
        </div>
    )
}

export default Warning;