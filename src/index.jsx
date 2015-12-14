var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
        <div className="column">
    <img className="thumbnail" src="http://placehold.it/300x400" />
    <h5>{this.props.title}</h5>
  <p>{this.props.price}</p>
<a href="#" className="button expanded">Buy</a>
</div>
);
}
});