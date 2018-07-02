import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DocumentUpload extends Component {
  constructor (props) {
    super(props);

    this.state = {
      attachment_file_name: '',
      attachment: false,
      isUploaded: false,
      isUploading: false,
      isSubmitting: false,
      errors: []
    };
  }

  submit () {
  }

  onCreate() {
  }

  onSuccessfulSave() {
  }

  onFileChange () {
  }

  handleFileNameInput() {
  }

  render () {
    const { errors, attachment } = this.state;
    const submitText = !this.state.isSubmitting ? 'Upload' : 'Uploading...';
    return (
      <form onSubmit={this.submit}>
        <div>
          {
            errors.map((e, i) => <span key={i} className=''>{e}</span>)
          }
          <div>
            <div className='mb'>
              <button className="btn btn--purple btn-full" type="submit">
                Select File
              </button>
            </div>

            {this.state.isUploading && <span>Uploading...</span>}
            <div className='mb'>
              <label>Title: </label>
              <input type="text"/>
            </div>
          </div>
          <div className=''>
            <button className="btn btn--green btn-full" type="submit">
              {submitText}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default DocumentUpload;
