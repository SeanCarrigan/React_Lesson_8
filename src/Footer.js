const Footer = ({ length }) => {
  const today = new Date();

  // const displayListCount = () => {
  //   return length > 1 ? "List Items" : "List Item";
  // };

  return (
    <footer>
      <p>
        {/* {length} {displayListCount()} */}
        {length} List {length === 1 ? "item" : "items"}
      </p>
      <p>Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
