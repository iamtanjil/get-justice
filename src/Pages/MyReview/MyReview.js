import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../Contexts/AuthContext';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    useTitle('My Review')
    const { user } = useContext(AuthProvider)
    const [myreview, setMyReivew] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-wine.vercel.app/myreview?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReivew(data))
    }, [])
    const handleDelte = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://assignment-11-server-wine.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = myreview.filter(odr => odr._id !== id);
                        setMyReivew(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Review</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            myreview.map(review =>

                                <tbody>
                                    <tr>
                                        <th>
                                            <label>
                                                <button onClick={() => handleDelte(review._id)}>X</button>
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{review.name}</div>
                                                    <div className="text-sm opacity-50">{review.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <textarea defaultValue={review.review} className="textarea textarea-primary" placeholder="Bio"></textarea>
                                        </td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">Update</button>
                                        </th>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;