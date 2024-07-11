import { useNavigate } from "react-router-dom";

const Collection = ({ logo, name }) => {
    const navigate = useNavigate();
    return (
        <div className=" w-[100%] flex cursor-pointer my-2" onClick={() => navigate(`/posts/${name}`)}>
            <div className="w-[5rem] p-2  mr-3 bg-pink-600">
                  <img src={logo} alt="logo" />
            </div>
            <div className="w-[100%] p-2  bg-pink-600">
               {name}
            </div>
        </div>
    )
}

export default Collection;