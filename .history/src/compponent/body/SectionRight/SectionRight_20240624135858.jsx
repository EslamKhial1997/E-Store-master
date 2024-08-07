const SectionRight = () => {
  return (
    <div className="sticky-top z-0 mt-3">
      <h2 className="text-center  l p-3 my-2 bg-gray-400 dark:bg-gray-200 rounded-lg tracking-widest">
        Recommended{" "}
      </h2>
      <div className="grid grid-cols-2  md:grid-cols gap-4">
        <div className="grid gap-4">
          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>

          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>

          <div className="cursor-pointer drop-shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img
              className="h-auto max-w-full rounded-lg  "
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionRight;
