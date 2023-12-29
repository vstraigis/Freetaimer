import { Link } from "react-router-dom";

const MailSection = () => {
  return (
    <section className="w-full bg-one">
      <div className="container py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                Welcome to our email client
              </h1>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                Manage all your emails in one place. Securely and efficiently.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2">
              <input className="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600" type="email" placeholder="Designation" />
                <button className="bg-white text-black h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600" type="submit">
                  Start Now
                </button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Start managing your emails today.
                <Link
                  className="underline underline-offset-2 text-white"
                  to="#"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default MailSection;
