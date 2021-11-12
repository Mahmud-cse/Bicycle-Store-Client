import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch('https://shielded-shelf-30657.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                    history.push('/home');
                }
            })
    };

    return (
        <div className="mt-5 mb-5">
            <Container className="d-flex align-items-center justify-content-center">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Bicycle Name" defaultValue="" {...register("name", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Price" defaultValue="" {...register("price", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Image Link" defaultValue="" {...register("img", { required: true })} style={{ width: "130%" }} />
                    <input placeholder="Instructions" defaultValue="The latest cycling news, covering global races, bikes and cycling products" {...register("description")} style={{ width: "130%" }} />

                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;