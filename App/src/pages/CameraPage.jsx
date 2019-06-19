import React, { Component } from 'react';
import { Page, Toast } from 'react-onsenui';


class CameraPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Camera app',
            toastShown: false,
        };
        this.takePicture = this.takePicture.bind(this);
    }


    takePicture(){
        this.setState({ toastShown: !this.state.toastShown });
        setTimeout(() => {
            this.setState({ toastShown: !this.state.toastShown });
        }, 2000);
    }

    
/* TODO: Implementera kamera + album, spara bilder till kontosidan
    takePicture(event) {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.SourceType.CAMERA
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
        event.preventDefault();
    }
*/

    render() {
        return (
            <Page >
                <div className="camera-container">
                    <div className="cameraButton" onTouchStart={this.takePicture}>Take Picture
                    </div>
                    <img id="myImage" ></img>

                </div>
                <Toast isOpen={this.state.toastShown}>
                    <div className="message">
                        Not available in beta
                    </div>
                </Toast>
            </Page>
        )
    }
}
export const CAMERA_ROUTE = {
    key: 'CAMERA_PAGE',
    component: CameraPage
}
export default CameraPage;