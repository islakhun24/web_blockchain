import React, { Component} from 'react';
import axios from 'axios';
const queryString = require('query-string');
// function About() {
class Addnode extends Component {

  state = {
    field1: '',
  }

  handleChange = event => {
    this.setState({ field1: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    // const param = {
    //   field1: this.state.field1
    // };

    const requestBody = {
      field1: this.state.field1
    }
    
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post('http://xxx/addnode', queryString.stringify(requestBody),config)
      .then(res => {
        console.log(res);
      })



      
  }
  render(){
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Node</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="fake_url">Home</a></li>
                  <li className="breadcrumb-item"><a href="fake_url">Layout</a></li>
                  <li className="breadcrumb-item active">Fixed Layout</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* Default box */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Title</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i className="fas fa-minus" /></button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                        <i className="fas fa-times" /></button>
                    </div>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Ip</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" name="field1" onChange={this.handleChange} placeholder="Masukan ip" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Port</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" name="field1" onChange={this.handleChange} placeholder="Masukan port" />
                        </div>
                        <button type="submit" className="mt-4 btn btn-primary">Kirim</button>
                      </div>
                    </form>

                  </div>
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>

    );
  }
}

export default Addnode;
