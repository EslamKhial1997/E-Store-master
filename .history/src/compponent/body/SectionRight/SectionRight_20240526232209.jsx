import React from "react";
import CoronavirusSharpIcon from "@mui/icons-material/CoronavirusSharp";
import LoopSharpIcon from '@mui/icons-material/LoopSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import AirplanemodeActiveSharpIcon from '@mui/icons-material/AirplanemodeActiveSharp';
import ShowCase from "./ShowCase";
const SectionRight = () => {
  return (
    <div className="sticky-top mt-3">
    <h2 className="text-center text-light s p-3 my-2 bg-gray-800 rounded-lg">Recommended </h2>
<div className="grid grid-cols-2  md:grid-cols gap-4">
    <div className="grid gap-4">
        
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
        </div>
        
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
    </div>
</div>

    </div>
  );
};

export default SectionRight;
