import React from "react";
import adminLayout from "../hoc/adminLayout";
import ModalComponent from "../components/ModalComponent";
class HotelPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'showModal': false,
            'selectedLocation':'',
            'searchSelectedLocation':'',
            'data': [
                {
                    id: 1,
                    hotelName: "Tarun Dhiman",
                    ownerName: "tarun.dhiman@abc.com",
                    mobileNumber: "Website",
                    emailId: "23-aug-2019",
                    location: "26-aug-2019",
                    yearJoined: "26-aug-2019",
                },
                {
                    id: 2,
                    hotelName: "Ashwani Dhiman",
                    ownerName: "ashwani.dhiman@abc.com",
                    mobileNumber: "IPO",
                    emailId: "23-aug-2019",
                    location: "26-aug-2019",
                    yearJoined: "26-aug-2019",
                }]
        };

    }

    handleLocationSelect = (location) => {
        this.setState({selectedLocation:location});
        document.getElementById("locationInput").value = location;
      };

    handleSearchLocationSelect = (location) => {
        this.setState({searchSelectedLocation:location});
        document.getElementById("searchLocationInput").value = location;
      };

    // Handle input change
    handleInputChange = (e, id) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            data: prevState.data.map(hotel =>
                hotel.id === id ? { ...hotel, [name]: value } : hotel
            )
        }));
    }

    // Handle editing a row
    handleEditRow = (id) => {
        this.setState(prevState => ({
            data: prevState.data.map(hotel =>
                hotel.id === id ? { ...hotel, editing: true } : hotel
            )
        }));
    }

    // Handle deleting a row
    handleDeleteRow = (id) => {
        this.setState(prevState => ({
            data: prevState.data.filter(hotel => hotel.id !== id)
        }));
    }

    // Handle saving a row after editing
    handleSaveRow = (id) => {
        this.setState(prevState => ({
            data: prevState.data.map(hotel =>
                hotel.id === id ? { ...hotel, editing: false } : hotel
            )
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };


    modalFooterContent() {
        return <>
            {/* <div style={{ width: "100%" }}>
                <button className="btn btn-default">Save</button>
            </div> */}
        </>;
    }

    modalContent() {
        return (<>

            {/* {this.state.showModal && ( */}
                <div id="modal-container">
                    <div id="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="hotelName">Hotel Name</label><br/>
                            <input type="text" minLength={4} maxLength={30} id="hotelName" name="hotelName" required /><br/><br/>
                            <label htmlFor="ownerName">Owner Name</label><br/>
                            <input type="text" id="ownerName" name="ownerName" required /><br/><br/>
                            <label htmlFor="mobileNumber">Mobile Number  </label><br/>
                            <input type="tel" id="mobileNumber" name="mobileNumber" required /><br/><br/>
                            <label htmlFor="emailId">Email ID</label><br/>
                            <input type="email" id="emailId" name="emailId" required /><br/><br/>
                            <div className="dropdown">
  <label htmlFor="location">Location</label><br/>
  <button className="btn btn-primary dropdown-toggle" type="button" id="locationDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
  {this.state.selectedLocation ? this.state.selectedLocation : "Select a location"}
  </button>
  <ul className="dropdown-menu" aria-labelledby="locationDropdownButton">
    <li><h6 className="dropdown-header">Select a location</h6></li>
    {['Chennai','Mysore', 'Bangalore', 'Mumbai', 'Chandigarh', 'Delhi','Hyderabad'].map((location) => (
      <li key={location}>
        <button className="dropdown-item" type="button" onClick={() => this.handleLocationSelect(location)}>{location}</button></li>
    ))}
  </ul><br/>
  <input type="hidden" id="locationInput" name="location" required />
</div><br/><br/>
                            <label htmlFor="yearJoined">Year Joined:    </label><br/>
                            <input type="date" id="yearJoined" name="yearJoined" required /><br/><br/>
                            <button type="submit" className="btn btn-primary">Create</button>
                        </form>
                        
                    </div>
                </div>
            {/* //)} */}
        </>
        );
    }

    render() {
        return (
            <>
                <div className="table-container">
                    <div className="row">
                        <div className="col">
                            <h5 className="pb-2 mb-0">Hotel</h5>
                        </div>
                        <div className="col text-right">
                            <button onClick={() => this.setState.setShowModal = true} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rightModalDefault">


                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    {/* right modal */}
                    <ModalComponent title="Create Hotel" footerContent={this.modalFooterContent()} content={this.modalContent()} className="right" dataBsBackdrop="static" id="rightModalDefault" />
                    <div style={{ display: "flex", "column-gap": "30px" }}>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="locationDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
  {this.state.searchSelectedLocation ? this.state.searchSelectedLocation : "Select a location"}
  </button>
  <ul className="dropdown-menu" aria-labelledby="locationDropdownButton">
    <li><h6 className="dropdown-header">Select a location</h6></li>
    {['Chennai','Mysore', 'Bangalore', 'Mumbai', 'Chandigarh', 'Delhi','Hyderabad'].map((location) => (
      <li key={location}>
        <button className="dropdown-item" type="button" onClick={() => this.handleSearchLocationSelect(location)}>{location}</button></li>
    ))}
  </ul><br/>
  <input type="hidden" id="searchLocationInput" name="location" required />
</div>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <div className="d-flex text-muted">
                        <table className="table" style={{ "fontSize": "14px" }}>
                            <thead>
                                <tr>
                                    <th >S.No.</th>
                                    <th>Hotel Name</th>
                                    <th>Owner Name</th>
                                    <th>Mobile Number</th>
                                    <th>Email Id</th>
                                    <th>Location</th>
                                    <th>Year Joined</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((hotel) => (
                                    <tr id={hotel.id} key={hotel.id}>
                                        <td>{hotel.id}</td>
                                        <td>{hotel.editing ? <input type="text" name="hotelName" value={hotel.hotelName} onChange={(e) => this.handleInputChange(e, hotel.id)} /> : hotel.hotelName}</td>
                                        <td>{hotel.editing ? <input type="text" name="ownerName" value={hotel.ownerName} onChange={(e) => this.handleInputChange(e, hotel.id)} /> : hotel.ownerName}</td>
                                        <td>{hotel.editing ? <input type="text" name="mobileNumber" value={hotel.mobileNumber} onChange={(e) => this.handleInputChange(e, hotel.id)} /> : hotel.mobileNumber}</td>
                                        <td>{hotel.editing ? <input type="text" name="emailId" value={hotel.emailId} onChange={(e) => this.handleInputChange(e, hotel.id)} /> : hotel.emailId}</td>
                                        <td>{hotel.editing ? <input type="text" name="location" value={hotel.location} onChange={(e) => this.handleInputChange(e, hotel.id)} /> : hotel.location}</td>
                                        <td>{hotel.editing ? <input type="text" name="yearJoined" value={hotel.yearJoined} onChange={(e) => this.handleInputChange(e, hotel.id)} /> : hotel.yearJoined}</td>
                                        <td>
                                            {hotel.editing ? (
                                                <button className="btn btn-primary btn-sm" onClick={() => this.handleSaveRow(hotel.id)}>Save</button>
                                            ) : (
                                                <button className="btn btn-secondary btn-sm" onClick={() => this.handleEditRow(hotel.id)}>Edit</button>
                                            )}
                                            <button className="btn btn-danger btn-sm" onClick={() => this.handleDeleteRow(hotel.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>
        );
    }
}

export default adminLayout(HotelPage);