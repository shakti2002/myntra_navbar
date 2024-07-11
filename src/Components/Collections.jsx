

import Collection from "./Collection";

const Collections = () => {
    const data = [{ logo: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Collection1" }, { logo: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Collection2" }, { logo: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600", name: "Collection3" }];
   
    return (
        <div className="w-[100%] m-auto text-white">
            <div className="m-auto w-[80%]">
                <input type="text" placeholder="Search" className=" m-auto p-2 bg-pink-300"/>
            </div>
            <div className="w-[80%] p-4 m-auto bg-pink-300">
                {data.map((ele, key) => (
                    <Collection logo={ele.logo} name={ele.name}  />
                ))}
            </div>
        </div>
    )
}

export default Collections;