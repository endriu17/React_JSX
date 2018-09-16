var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'http://icons.veryicon.com/png/Application/iOS8%20Cirtangle%20Concept/Contacts.png'}/>
                <h3 className={'contactLabelHeader'}>
                    Name:
                </h3>
                <p className={'contactLabel'}>
                    {this.props.item.firstName}
                </p>
                <h3 className={'contactLabelHeader'}>
                    Last name:
                </h3>
                <p className={'contactLabel'}>
                    {this.props.item.lastName}
                </p>
                <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div> 
        )
    }
});