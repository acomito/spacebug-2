/*import React from 'react';
import { withApollo } from 'react-apollo';
//antd
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import message from 'antd/lib/message';
//
//
import ApolloClient from '/imports/ui/apollo/ApolloClient'
//
import { handleSignup } from '../../../../modules/helpers'
import { FormErrorArea } from '../../../components/common'

const FormItem = Form.Item;


class FormComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = { loading: false, errors: [] };
	}
	handleSubmit = (e) => {
	    e.preventDefault();
      this.setState({ loading: true, errors: [] });
	    this.props.form.validateFields((err, { email, password, firstName, lastName  }) => {
        if (err) { return this.setState({ loading: false }) }
          let profile = {
            firstName, lastName 
          }
          let token = this.props && this.props.params && this.props.params.token;
        handleSignup(email, password, profile, ApolloClient, this)
	    });

	  }
	render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width: 500, margin: 'auto', textAlign: 'center'}} >
      <Card style={{height: 400, width: 500, border: 0}}>
        <h1 style={{textAlign: 'center', marginBottom: 20, color: '#000'}}>Signup</h1>
        <Form onSubmit={this.handleSubmit}>
            <FormItem hasFeedback>
              {getFieldDecorator('firstName', {
                rules: [{ required: true, message: 'Input your firstName!' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="firstName..." />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Input your lastName!' }],
              })(
                <Input prefix={<Icon type="user" />} placeholder="lastName..." />
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Input your Email!' }],
              })(
                <Input prefix={<Icon type="mail" />} placeholder="Email..." />
              )}
            </FormItem>
            
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
              )}
            </FormItem>
          <Button loading={this.state.loading} type="primary" htmlType="submit" style={{position: 'absolute', right: 31}}>
            CREATE ACCOUNT
          </Button>
        </Form>
      </Card>
      <FormErrorArea errors={this.state.errors} />
      </div>
    );
  }
}


export default Form.create()(FormComponent);*/