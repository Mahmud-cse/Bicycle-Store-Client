import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';


const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();


    const onSubmit = data => {
        fetch('https://shielded-shelf-30657.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Added Successfully');
                    // reset();
                }
            })
    };

    return (
        <div style={{ marginLeft: "30%" }}>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email")} />
                <input placeholder="Enter Your Rating from 0-5" defaultValue="" {...register("rating", { required: true, max: 5 })} />
                <input placeholder="Enter Your comment" defaultValue="" {...register("comment", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;