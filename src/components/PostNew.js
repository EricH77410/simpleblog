import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component{

  renderField = (field) => {
    const { meta: {touched, error} } = field
    const className = `form-group ${touched && error ? 'has-danger':''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  submitForm = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });    
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  // validate the input from values
  if (!values.title) {
    errors.title = 'Enter a title!'
  }
  if (!values.categories) {
    errors.categories = 'Enter a category'
  }
  if (!values.content) {
    errors.content = 'Enter a content'
  }

  // if errors is empty, the form is good to submit
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostNewForm'
})(
  connect(null,{ createPost })(PostNew)
);
