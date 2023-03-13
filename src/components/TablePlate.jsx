import React from 'react';

const TablePlate = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact  w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Coord</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody className='bg-base-300'>
                    {
                        data.map(({ coords, text }, i) => <tr
                            className='border-2 border-base-200'
                            key={text + " " + i}>
                            <th>{i + 1}</th>
                            <td>
                                {
                                    coords.map((item, i) => <p key={item + " " + i}>{item}{i < 3 && ','}</p>)
                                }
                            </td>
                            <td>{text}</td>
                        </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablePlate;