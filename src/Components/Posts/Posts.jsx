import { useState,useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";


const Posts = () => {
    const posts = [
        { id: "Collection1", img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Some description of post1" },
        { id: "Collection2", img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Some description of post2" },
        { id: "Collection3", img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Some description of post3" },
        { id: "Collection1", img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Some description of post1" },
        { id: "Collection2", img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Some description of post2" },
        { id: "Collection3", img: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", desc: "Some description of post3" },
];

    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(posts.filter((d) => d.id === id));
    }, []);
    console.log(data);
    console.log(id);
    return (
        <div className="w-[100%] m-auto text-white">
            <div className="flex m-auto w-[80%] bg-pink-300 p-3">
                <input type="text" placeholder="Search" className="w-[100%] text-black p-2 bg-white" />
                <button className="bg-pink-600 px-2 py-1">Search</button>
            </div>
            <h1 className="w-fit mt-3 px-4 py-2 m-auto bg-pink-600">{id}</h1>
            <div className="w-[80%] p-4 m-auto ">
                {data.map((ele, key) => (<Post key={key} img={ele.img} desc={ele.desc} />))}
            </div>
            
        </div>
    )
}

export default Posts;