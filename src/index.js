import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import'./bootstrap.4.1.1.min.css'

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
    };
  }
  render(){
    return(
      <div>
      <div className="bg-dark-overlay"></div>
      <div className="text-white d-table w-100 h-100">
        <div className="d-table-cell align-middle">
           <div className="container burger-responsive">
             <div className="row">
               <div className="col-lg-9 col-xl-6 col-sm-12 col-md-9">
                 <div className="banner-text position-relative d-flex flex-column justify-content-center">
                   <h1 className="text-white big-font">{this.props.headertag1}</h1>
                    <p className="">{this.props.headertag2}</p>
                    <form className="form form-newsletter input-group" action="https://themunsel.us16.list-manage.com/subscribe/post" method="POST">
                    <input type="hidden" name="u" value="c329fe2eda98c3e32046a5d3b"/>
                    <input type="hidden" name="id" value="872877f839"/>
                        <input className="form-control mr-md-3 mr-1"
                            placeholder="Enter@email.com"
                            type="email"
                            name="EMAIL"
                            id="MERGE0"
                            value={this.state.emailValue}
                            onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                            autoCapitalize="off"
                            autoCorrect="off"
                         />
                  <button type="submit" name="button" id="mc-embedded-subscribe" className="input-group-append btn dark-btn">
                  Get Starter </button>
                  </form>
                    <p className="mt-3 lead border-dashed">{this.props.subtag1}</p>
                  </div> {/* }/banner text */}
                </div>{/* }/col */}
               </div> {/* /row */ }
              </div> {/* }/container */}
            </div>
           </div>
           </div>
           );
          }
        }

export default NewsletterForm;
