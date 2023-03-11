import React, { useState } from 'react';

const FormPlate = () => {

    return (
        <div className="hero">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Check Plate!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form className="flex gap-5">
                            <input type="file" name="image" className="file-input file-input-bordered file-input-accent w-full max-w-xs" accept="image/png, image/gif, image/jpeg" />
                            <input type="submit" className='btn btn-info btn-outline' value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPlate;