import Link from "next/link"

const Projects = () => {
  return (
    <div className="dashboard flex min-h-screen justify-between items-center p-10 relative bg-slate-900 ">
      <Link
        className="absolute top-5 left-8 px-4 py-2 border rounded-xl hover:text-black hover:bg-white transition-all duration-200"
        href={"/pages/dashboard"}
      >
        Dashboard
      </Link>
      <div className="hidden h-auto w-80 backdrop-blur border rounded-xl 2xl:block">
        <div className="p-8 w-full flex flex-col justify-center items-center space-y-4 ">
          <Link
            className="border px-6 py-4 rounded-2xl w-full text-center font-extrabold hover:opacity-80  hover:text-black hover:bg-white transition duration-200"
            href={"/guide/twitter"}
          >
            Twitter
          </Link>
          <Link
            className="border px-6 py-4 rounded-2xl w-full text-center font-extrabold hover:opacity-80  hover:text-black hover:bg-white transition duration-200"
            href={"/guide/linkedIn"}
          >
            LinkedIn
          </Link>
          <Link
            className="border px-6 py-4 rounded-2xl w-full text-center font-extrabold hover:opacity-80  hover:text-black hover:bg-white transition duration-200"
            href={"/guide/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className="border px-6 py-4 rounded-2xl w-full text-center font-extrabold hover:opacity-80  hover:text-black hover:bg-white transition duration-200"
            href={"/guide/resume"}
          >
            Resume
          </Link>
          <Link
            className="border px-6 py-4 rounded-2xl w-full text-center font-extrabold hover:opacity-80  text-black bg-white transition duration-200"
            href={"/guide/projects"}
          >
            Projects
          </Link>
          <Link
            className="border px-6 py-4 rounded-2xl w-full text-center font-extrabold hover:opacity-80  hover:text-black hover:bg-white transition duration-200 "
            href={"/guide/interview"}
          >
            Interview
          </Link>
        </div>
      </div>
      <div className="h-[80vh] 2xl:h-[90vh] w-[1480px] border-2 rounded-xl backdrop-blur-lg z-10 p-4 overflow-y-auto overflow-x-hidden scroll">
        Projects
      </div>
      <Link
        className="absolute left-6 bottom-5 px-4 py-2 border rounded-xl hover:text-black hover:bg-white transition duration-200"
        href={"/pages/dashboard"}
      >
        Back
      </Link>
    </div>
  )
}

export default Projects
