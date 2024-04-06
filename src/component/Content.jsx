import image from "./image.png"
const Content = () => {
  return (
    <main className="bg-[#282D35] px-7 py-6 relative">
      <img src={image} alt="" className="absolute right-0 bottom-0"/>
      <h1 className="text-white font-bold text-3xl my-4">
        Fun fact about React
      </h1>
      <ul className="text-white text-sm space-y-2 ml-10 max-w-80 list-disc marker:text-[#00d8ff] marker:text-2xl leading-loose">
        <li> Was first released in 2013</li>
        <li> Was originally created by Jordan Walke</li>
        <li> Has well over 100K stars on GitHub</li>
        <li> Is maintained by Facebook</li>
        <li> Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Content;
