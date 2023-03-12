import React, { useState } from 'react';
import axios from "axios";
import TableDamage from './TableDamage';
const FormDamage = () => {

    const [errordamage, setErrorDamage] = useState(true);
    const [damageData, setDamageData] = useState(null);

    const [loading, setLoading] = useState(false);

    const handlerForm = async (e) => {
        e.preventDefault();
        const fileData = new FormData();
        const fileDamage = e.target?.image?.files[0];
        if (!fileDamage) return setErrorDamage(true);

        setLoading(true);

        fileData.append("file", fileDamage);

        const url =
            "http://ec2-54-74-190-189.eu-west-1.compute.amazonaws.com:5000/predict_damages/";

        const res = await fetch(url, {
            method: "POST",
            body: fileData,
        });
        const data = await res.json();
        setDamageData(data);
        setLoading(false);
    };


    return (
        <div className="hero">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Check Damage!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handlerForm} className="flex gap-5 mx-auto">
                            <input type="file" name="image" className="file-input file-input-bordered file-input-accent w-full max-w-xs" accept="image/png, image/gif, image/jpeg"
                            />
                            {
                                loading ? <div className='h-10 w-10 animate-spin border-4 border-l-0 border-r-0 rounded-full border-red-500'></div> :
                                    <input type="submit" className='btn btn-info btn-outline' value="SUBMIT" />
                            }
                        </form>
                    </div>
                    {
                        damageData &&
                        <div className='bg-base-300 rounded-lg'>
                            <p className='text-center text-xl p-5'>{damageData?.damage_model}</p>
                            <TableDamage data={damageData?.damages} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default FormDamage;