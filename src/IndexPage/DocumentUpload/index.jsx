import React, { Component } from 'react';

class DocumentUpload extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isUploading: false,
      isSubmitting: false,
      errors: []
    };
  }

  render () {
    const { errors } = this.state;
    const submitText = !this.state.isSubmitting ? 'Upload' : 'Uploading...';
    return (
      <form>
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
