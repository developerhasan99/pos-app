const Profile = () => {
    return (
        <div className="container max-w-screen-md px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Update your profile
            </h2>
            <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                    Update your profile picture
                </h4>
                <div className="mb-4">
                    <img className="h-32 w-32 rounded-full" src="https://avatars.githubusercontent.com/u/11780169?v=4" alt="Avatar" />
                </div>
                <input
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4 file:rounded-md
                    file:border-0 file:text-sm file:font-semibold
                    file:bg-pink-50 file:text-pink-700
                    hover:file:bg-pink-100"
                    id="small_size"
                    type="file" />
                <hr className="my-8 border-gray-300 dark:border-gray-600" />
            </div>
        </div>
    );
};

export default Profile;