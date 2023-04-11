import { Link } from "react-router-dom";

const CategoryPreview = ({title}) => {
    return (
        <Link to={title} className="bg-lightgrey h-[25%] flex justify-left items-center m-[8px]">
            <span className="text-xl uppercase font-medium ml-[10px]">{title}</span>
        </Link>
    )
}

export default CategoryPreview;