import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const { name, photo, _id, quantity, supplier, taste, category, details } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Closs'
                    })
                }
            })
    }

    return (
        <div>
            <div className="bg-[#F4F3F0] p-10 w-[80%] mx-auto">
                <h1 className="text-3xl font-bold text-center">Update info of {name}</h1>
                <form onSubmit={handleUpdateCoffee} className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Name</span>
                                <input defaultValue={name} type="text" name="name" placeholder="Coffee Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Availble Quantity</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Quantity</span>
                                <input defaultValue={quantity} type="text" name="quantity" placeholder="Availble Quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Supplier</span>
                                <input defaultValue={supplier} type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Taste</span>
                                <input defaultValue={taste} type="text" name="taste" placeholder="Taste" className="input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Category</span>
                                <input defaultValue={category} type="text" name="category" placeholder="Category" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Details</span>
                                <input defaultValue={details} type="text" name="details" placeholder="Details" className="input input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="">
                        <div className="form-control text-white">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <span className="w-24">Photo</span>
                                <input defaultValue={photo} type="text" name="photo" placeholder="Photo" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <input className="bg-stone-500 rounded p-3 mt-10 cursor-pointer btn btn-block" type="submit" value="Update Coffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;