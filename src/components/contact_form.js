import React, {Component} from 'react'
import Field from './field'

class Contact_form extends Component{
    constructor(props){
        super(props);
        this.state ={
            form: {
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const{value,name} = event.target;
        const {form}= this.state;
        // setting the name to the value
        form[name] =value;
        this.setState({
            form: {...form}
        })
    }
    handleSubmit(event){
        // prevents form from trying to refresh the page
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
        this.props.add(this.state.form);
    }
    render(){
        const {firstName, lastName,email,phone} = this.state.form;
        return(<form onSubmit={this.handleSubmit}>
               <Field name = "firstName" label = "First Name" type ="text" value ={firstName} onChange = {this.handleInputChange}/>
               <Field name = "lastName" label = "Last Name" type ="text" value ={lastName} onChange = {this.handleInputChange}/>
               <Field name = "phone" label = "Phone" type ="text" value ={phone} onChange = {this.handleInputChange}/>
               <Field name = "email" label = "Email" type ="text" value ={email} onChange = {this.handleInputChange}/>
               <button className="form-group">Add Contact</button>
               </form>)
    }
}

export default Contact_form;