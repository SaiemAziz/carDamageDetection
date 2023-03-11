import React, { useState } from 'react';
import axios from "axios";
const FormDamage = () => {
    let handlerForm = async (e) => {
        e.preventDefault()
        let image = e.target.image.files[0];
        let formData = new FormData();
        formData.append("image", image);

        let myHeaders = new Headers();
        myHeaders.set('Content-Type', "multipart/form-data")
        myHeaders.set('Accept', "application/json")
        let url = "http://ec2-54-74-190-189.eu-west-1.compute.amazonaws.com:5000/predict_damages/";
        let config = {
            myHeaders
        };

        const result = await axios.post(url, formData, config);
        let data = await result.json()
        console.log(data);
    }


    return (
        <div className="hero">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Check Damage!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handlerForm} className="flex gap-5">
                            <input type="file" name="image" className="file-input file-input-bordered file-input-accent w-full max-w-xs" accept="image/png, image/gif, image/jpeg"
                            />
                            <input type="submit" className='btn btn-info btn-outline' value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormDamage;