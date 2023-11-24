const Heading = ({heading}) => {
    return (
        <div className="flex justify-center relative max-w-screen-sm mx-auto">
            <h1 className="relative text-xl text-[#0A0808] md:text-3xl uppercase font-semibold my-6">{heading}</h1>
            <div className="bg-red-500 w-12 h-1 absolute"></div>
        </div>
    );
};

export default Heading;