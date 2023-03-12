import React from 'react';

const TableDamage = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact  w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Action</th>
                        <th>Coord</th>
                        <th>Severty Model</th>
                        <th>Severty</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody className='bg-base-300'>
                    {
                        data.map(({ action, coords, severity, severity_model, type }, i) => <tr
                            className='border-2 border-base-200'
                            key={severity}>
                            <th>{i + 1}</th>
                            <td>{action}</td>
                            <td>
                                {
                                    coords.map((item, i) => <p key={item}>{item}</p>)
                                }
                            </td>
                            <td>{severity_model}</td>
                            <td>{severity}</td>
                            <td>{type}</td>
                        </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableDamage;