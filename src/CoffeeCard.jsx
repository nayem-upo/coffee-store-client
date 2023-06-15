/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { name, photo, _id, quantity, supplier, taste, category, details } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-slate-100 shadow-xl items-center">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Taste: {taste}</p>
                <p>Category: {category}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical gap-2">
                    <button className="btn btn-active">VIEW</button>
                    <Link className="btn btn-active" to={`/update/${_id}`}><button>EDIT</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-active">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;