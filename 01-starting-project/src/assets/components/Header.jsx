import reactImg from "../../assets/react-core-concepts.png";
const reactDesc = ["Fundamental", "Crucial", "Core"];
const genRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const randomTitle = reactDesc[genRandomInt(reactDesc.length)];
export const Header = () => {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomTitle} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
export default Header;
