var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      <form className={'contactForm'}>
        <h2 className={'formHeader'}>
          Enter contact details
        </h2>
        <input type={'text'} placeholder={'Name'} value={this.props.contact.firstName}/>
        <input type={'text'} placeholder={'Last name'} value={this.props.contact.lastName}/>
        <input type={'email'} placeholder={'email'} value={this.props.contact.email}/>
        <button type={'submit'}>
          Add contact
        </button>
      </form>
    
    )
  },
})