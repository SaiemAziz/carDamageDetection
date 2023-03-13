import React, { useState } from 'react';
import axios from "axios";
import TableDamage from './TableDamage';
const FormDamage = () => {

    const [errordamage, setErrorDamage] = useState(true);
    const [damageData, setDamageData] = useState([]);

    const [loading, setLoading] = useState(false);
    const [percentage, setPercentage] = useState(0 + " %");

    const handlerForm = async (e) => {
        e.preventDefault();
        let newDamageData = []
        let len = e.target?.image?.files.length;
        for (let i = 0; i < len; i++) {
            const fileData = new FormData();
            const fileDamage = e.target?.image?.files[i];
            setLoading(true);

            fileData.append("file", fileDamage);

            const url =
                "http://ec2-54-74-190-189.eu-west-1.compute.amazonaws.com:5000/predict_damages/";

            const res = await fetch(url, {
                method: "POST",
                body: fileData,
            });
            const data = await res.json();
            newDamageData.push(data);
            setPercentage((100 * (i + 1) / len).toFixed(2) + " %")
        }
        setPercentage(0 + " %")
        setDamageData(newDamageData);
        setLoading(false);
    };
    // console.log(damageData);
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
                                multiple />
                            {
                                loading ? <div className='flex gap-5'>
                                    <div className='h-10 w-10 animate-spin border-4 border-l-0 border-r-0 rounded-full border-red-500'></div>
                                    <p className='flex'>{percentage}</p>
                                </div>
                                    :
                                    <input type="submit" className='btn btn-info btn-outline' value="SUBMIT" />
                            }
                        </form>
                    </div>
                    <div className='flex flex-wrap gap-5 justify-center'>
                        {
                            damageData.map((item, i) => <div
                                key={"damagedata " + i}
                                className='bg-base-300 rounded-lg'>
                                <p className='text-center text-xl p-5'>{item?.damage_model}</p>
                                <TableDamage data={item?.damages} />
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormDamage;