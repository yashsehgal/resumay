
export default function DefaultScreenView() {
  return (
    <div className="default-screen-view w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-zinc-900">
      <div className="default-screen-content-wrapper w-[420px]">
        <h1 className="leading-snug text-xl text-white font-semibold">
          Thanks for using Resumay for creating your next resume
        </h1>
        <p className="leading-snug text-zinc-600 mt-3 flex flex-col items-start gap-1 mb-6">
          {"For creating a resume, add data in the configuration file,"}
          <span className="font-mono text-zinc-300 px-2 py-1 bg-zinc-700 rounded-md">{"src/config/resume-config.json"}</span>
        </p>
        <a href="https://github.com/yashsehgal/resumay/blob/master/README.md" target="_blank" 
          className="font-normal text-blue-500 hover:text-blue-600 hover:underline text-sm"
        >
          Learn how to work with resumay
        </a>
      </div>
    </div>
  )
}