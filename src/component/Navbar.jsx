import logo from "./react.svg";
import Toggle from "./Toggle";
const Navbar = (props) => {
  console.log(props.mode);
  return (
    <nav
      className={
        props.mode
          ? "bg-[#21222A] flex items-center px-8 py-5 justify-between"
          : "bg-[#fff] flex items-center px-8 py-5 justify-between"
      }
    >
      <section className="flex items-center">
        <img src={logo} alt="logo" />
        <h3 className="font-semibold ml-2 text-xl text-[#61DAFB]">ReactFact</h3>
      </section>
      <Toggle change={props.handleToggle} />
    </nav>
  );
};

export default Navbar;
