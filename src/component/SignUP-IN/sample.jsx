

const Signup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-primary text-white p-8 rounded-lg shadow-lg flex max-w-4xl w-11/12">
                <div className="flex-grow pr-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <SiGnuprivacyguard className="text-3xl mr-2" />
                            <div className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                                BUYHIVE
                            </div>
                        </div>
                        <button onClick={onClose} className="text-red-500 hover:text-red-400">
                            <IoClose className="text-2xl" />
                        </button>
                    </div>
                    <p className="mt-2 mb-4 text-sm">
                        BUYHIVE is an e-commerce company based in Morocco, dedicated to providing the latest technology and electronics across Africa. We strive to deliver quality products and exceptional customer service.
                    </p>
                    <form className="mt-4">
                        <input type="text" placeholder="Name" className="mb-4 p-2 rounded w-full" />
                        <input type="email" placeholder="Email" className="mb-4 p-2 rounded w-full" />
                        <input type="password" placeholder="Password" className="mb-4 p-2 rounded w-full" />
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                            Create Account
                        </button>
                    </form>
                </div>
                <div className="border-l-2 pl-4 flex-none">
                    <p className="text-lg mb-2">About Us</p>
                    <p className="text-sm">
                        BUYHIVE is an e-commerce company based in Morocco, dedicated to providing the latest technology and electronics across Africa. We strive to deliver quality products and exceptional customer service.
                    </p>
                </div>
            </div>
        </div>
    );
};