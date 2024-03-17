import { Container, Form, Input } from "semantic-ui-react";
import { useState } from "react";
import { useUploadPhotoMutation } from "../services/index";

export default function AddGlass() {
  const [uploadFile, { isLoading }] = useUploadPhotoMutation();
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (photo) {
      try {
        await uploadFile({ photo }).unwrap();
        // Handle successful upload here
      } catch (error) {
        return <p>{error}</p>;
      }
    }
  };

  return (
    <Container className="container-styles">
      <h1>Add a new glass</h1>
      <Form onSubmit={handleSubmit} className="ui form padding-table">
        <div className="ui one column grid">
          <div className="row">
            <div className="column" style={{ width: "35vw" }}>
              <div className="field">
                <label className="label-search-field">
                  A new glass called...
                </label>
                <Input
                  type="text"
                  name="glass-name"
                  placeholder="Enter glass name"
                />
              </div>
            </div>

            <div className="column" style={{ width: "35vw" }}>
              <div className="field">
                <label className="label-search-field">How it looks like?</label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Enter description"
                />
              </div>
            </div>

            <div className="column" style={{ width: "35vw" }}>
              <div className="field">
                <label className="label-search-field">Add a photo</label>
                <Input
                  type="file"
                  onChange={handlePhotoChange}
                  name="add photo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ui hidden divider"></div>

        <div className="three column row">
          <div className="column centered-text">
            <button
              className="ui animated button"
              tabIndex="0"
              type="submit"
              disabled={isLoading}
            >
              <div className="visible content">Add the glass to database</div>
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
