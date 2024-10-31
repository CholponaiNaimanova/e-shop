import React from 'react';
import Image from 'next/image';
import phoneImg from "@/public/assets/img/Gf.png"

const SignUp: React.FC = () => {

    return(
        <div className="signup">
            <div className="signup">

            <Image src={phoneImg} alt="" className='img' />
            </div>
        </div>
    )
}

export default SignUp