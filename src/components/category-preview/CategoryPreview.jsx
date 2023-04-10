import { Link } from "react-router-dom";

const CategoryPreview = ({title}) => {
    return (
        <div className="bg-lightgrey h-[25%] flex justify-left items-center m-[8px]">
            <Link to={title} className="text-xl uppercase font-medium ml-[10px]">{title}</Link>
        </div>
    )
}

export default CategoryPreview;