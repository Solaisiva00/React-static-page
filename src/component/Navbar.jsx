import logo from "./react.svg";
const Navbar = () => {
  return (
    <nav className="bg-[#21222A] flex items-center px-8 py-5 justify-between">
      <section className="flex items-center">
        <img src={logo} alt="logo" />
        <h3 className="font-semibold ml-2 text-xl text-[#61DAFB]">ReactFact</h3>
      </section>
      <h4 className="text-white">React course-project 1</h4>
    </nav>
  );
};

export default Navbar;
