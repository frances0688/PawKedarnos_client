import { MDBCard, MDBCardBody, MDBCardImage, MDBFile, MDBRow } from 'mdb-react-ui-kit';
import React from 'react'
import ImgUploader from './ImgUploader';

function ProfileCard(props) {

    const handleFileUpload = (e) => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
     
        const uploadData = new FormData();
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new pet in '/api/pets/add' POST route
        uploadData.append("imageUrl", e.target.files[0]);
     
        ImgUploader(uploadData)
          .then(response => {
            console.log("response is: ", response);
            // response carries "imgUrl" which we can use to update the state
            props.setImgPath(response.imgUrl);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

  return (
    <MDBCard className="mb-4">
        <MDBCardBody className="text-center">
            <MDBCardImage
                id="upload_widget"
                src={props.imgPath}
                alt="pet picture"
                className="rounded-circle"
                style={{ width: '150px' }}
                fluid 
            />
            {props.name &&(
                <h5 className="my-3">{props.name}</h5>
            )}
            <MDBRow>
                <MDBFile label='Add profile picture' id='customFile' name="pet-picture" onChange={(e) => handleFileUpload(e)}/>
            </MDBRow>
        </MDBCardBody>
    </MDBCard>
  )
}

export default ProfileCard