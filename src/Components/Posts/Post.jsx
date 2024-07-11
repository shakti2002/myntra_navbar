import { useNavigate } from "react-router-dom";

const Post = ({ img, desc }) => {
    const navigate = useNavigate();
    return (
        <div className=" w-[100%]  cursor-pointer my-2 text-white bg-pink-300 rounded p-4">
            <div className="w-[30rem] m-auto  p-2 bg-black rounded">
                <img src={img} alt="image" />
            </div>
            <div className="w-fit m-auto mt-2 p-2 bg-pink-600 ">
                {desc}
            </div>
            <div className="w-[100%] ml-auto">
                <button className="flex ml-auto bg-blue-600 rounded px-2 py-1" onClick={() => { navigate(`/comments`)}}>Comment</button>
            </div>
        </div>
    )
}

export default Post;