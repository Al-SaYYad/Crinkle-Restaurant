import UnopDropdown from "unop-react-dropdown";
import "../../Styles/searchCountResult.css";

const SearchCountResult = ({ title }) => {
  const handler = () => {};
  return (
    <div className="main-search-count">
      <div className="sub-title">{title}</div>
      <div className="search-count-text">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <div className="sort-by">
              <p>Sort By</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z" />
              </svg>
            </div>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div>Best Seller</div>
            <div>Latest Meals</div>
            <div>The Most Famous Foods</div>
            <div>Price from highest to lowest</div>
            <div>Price from lowest to highest</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};
export default SearchCountResult;