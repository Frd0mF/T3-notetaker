import { signIn, signOut, useSession } from 'next-auth/react';


const Header = () => {
    const { data: session } = useSession();
    return (
        // header with daisyUi
        <header className="navbar bg-base-200 text-primary-content">
            <div className="flex-1 px-2 mx-2">
                <span className="text-lg font-bold">
                    T3 Notetaker
                    {session?.user?.name ? ` for ${session?.user?.name}` : ''}
                </span>
            </div>
            <div className="flex-none">
                {session ? (
                    <div className='flex space-x-3'>
                        {session?.user?.image ? (
                            <img
                                src={session?.user?.image}
                                alt="user image"
                                className="rounded-full w-8 h-8"
                            />
                        ) : ''}
                        <button
                            className="btn btn-ghost btn-sm rounded-btn"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn btn-ghost btn-sm rounded-btn"
                        onClick={() => signIn()}
                    >
                        Sign in
                    </button>
                )}
            </div>
        </header>
    );
};


export default Header;