import Multiselect from "multiselect-react-dropdown";
import { Col, Row } from "react-bootstrap";
import { TbBackground } from "react-icons/tb";

const AdminAddProduct = () => {
  const options = [
    { name: "First Classification", id: 1 },
    { name: "Second Classification", id: 2 },
  ];
  const onSelect = () => {};
  const onRemove = () => {};
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">Add New Brand</div>
        <Col sm="8">
          <div className="text-form pb-2">Image Brand</div>
          <svg
            width="120px"
            height="120px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 8V3M18 3L16 5M18 3L20 5"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Brand Name"
          />
          <textarea
            className="input-form-area mt-3 p-2"
            rows={4}
            cols={50}
            placeholder="Product Description"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price Before Discount"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Price"
          />
          <select name="languages" id="lang" className="select mt-3 px-2">
            <option value="val">Main Classification</option>
            <option value="val2">First Classification</option>
            <option value="val3">Second Classification</option>
            <option value="val4">Third Classification</option>
            <option value="val5">Fourth Classification</option>
          </select>
          <Multiselect
            className="mt-2"
            placeholder="Subclassification"
            options={options} // Options to display in the dropdown
            // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2"
          >
            <option value="val">The Brand</option>
            <option value="val2">First Brand Classification</option>
            <option value="val3">Second Brand Classification</option>
            <option value="val4">Third Brand Classification</option>
            <option value="val5">Fourth Brand Classification</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">Save Changes</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProduct;