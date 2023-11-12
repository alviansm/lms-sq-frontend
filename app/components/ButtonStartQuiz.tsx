'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const ButtonStartQuiz = (props: any) => {
    const router = useRouter();
    const pathname = usePathname();
    const slug = pathname?.split('/');

    const [isAgreementApproved, setIsAgreementApproved] = React.useState(false);
    const [isTokenCorrect, setIsTokenCorrect] = React.useState(false);
    const [isReadyButtonDisabled, setIsReadyButtonDisabled] = React.useState(true);
    const [token, setToken] = React.useState("ABCDE");
    const [userTokenValue, setUserTokenValue] = React.useState("");
    const [userApproval, setUserApproval] = React.useState("false");

    const checkRequisite = () => {
        if (isAgreementApproved==true && isTokenCorrect==true) {
            setIsReadyButtonDisabled(false);
        } else {
            setIsReadyButtonDisabled(true);
        }
    }

    const handleUserApproval = (event: React.ChangeEvent<any>): void => {
        if (event.target.checked) {
            setUserApproval("true");
            setIsAgreementApproved(true);
        } else {
            setUserApproval("false");
            setIsAgreementApproved(false);
        }
    }

    const checkToken = (event: React.ChangeEvent<any>) => {
        setUserTokenValue(event.target.value);        
    }

    React.useEffect(() => {
        if (userTokenValue == token) {
            setIsTokenCorrect(true);
        }
        if (userTokenValue != token) {
            setIsTokenCorrect(false);
        }
    }, [userTokenValue]);

    React.useEffect(() => {
        checkRequisite();
    }, [userTokenValue, userApproval]);

    return (
        <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm text-slate-700 mt-2">
                Silahkan input <span className="font-bold text-red-700">token</span>
            </p>
            <div className="flex flex-row items-center mt-0">
                <TextInput
                    color={
                        isTokenCorrect
                        ? "success"
                        : "failure"
                    }
                    id="quiz-token"
                    onChange={(event) => checkToken(event)}
                />
                <Label htmlFor="quiz-token" className="ml-4">
                    {
                        isTokenCorrect==true
                        ? <p>BENAR</p>
                        : <p>SALAH</p>
                    }
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox
                    id="user-agreement" 
                    name="user-agreement"
                    value={userApproval}
                    onChange={handleUserApproval}
                />
                <Label htmlFor="user-agreement">
                    Saya telah membaca dan menyetujui <span className='font-bold text-blue-700 underline'>kode kehormatan akademik</span>, sehingga saya bersedia menerima risiko jika terbukti melakukan kecurangan. 
                </Label>
            </div>
            <Button
                disabled={
                    isReadyButtonDisabled
                    ? true
                    : false
                }
                onClick={() => router.push(`/quiz/ongoing/${slug![slug!.length - 1]}`)}
            >
                Mulai Kerjakan
            </Button>
        </div>
    )
}

export default ButtonStartQuiz;