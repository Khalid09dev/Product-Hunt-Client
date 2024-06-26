import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: userProducts = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/getSubmittedProduct/${user.email}`, {
            });
            return res.data;
        }
    });
    console.log(userProducts)
    return (
        <div className="mt-12">
            <h3 className="text-[#1B2530] text-[35px] font-medium">My Products</h3>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Votes</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    userProducts.map((product,idx) => 
                    <tr key={product._id}>
                        <th>{idx+1}</th>
                        <td>{product.title}</td>
                        <td>{product.upvote}</td>
                        <td>{product.pending_status ? 'Accepted' : 'Pending'}</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyProducts;