const React = require('react');
const Boron = require('boron');

const Poster = React.createClass({

  toggleDialog: function(ref){
    return () => {
      this.refs[ref].toggle();
    };
  },

  getContent: function(modalName){
    return <div>
      <img className="poster-modal" src="poster/AAN2016_FinalPoster.png" alt="poster"></img>
    </div>;
  },

  getTriggerAndModal: function(modalName){
    let Modal = Boron['FadeModal'];

    let backdropStyle = {};

    const modalStyle = {
      background: "transparent",
      width: "80%"
    };

    const contentStyle = {
      background: "transparent",
      width: "100%",
      padding: 0
    };

    return (
      <div>
        <Modal
          onClick={ this.toggleDialog(modalName) }
          ref={ modalName }
          className="img_modal"
          modalStyle={ modalStyle }
          contentStyle={ contentStyle }
          backdropStyle={ backdropStyle }>
          { this.getContent(modalName) }
        </Modal>
      </div>
    );
  },

  render () {
    const self = this;
    return (
      <div>
        <img
          className="poster"
          src="poster/AAN2016_FinalPoster.png" alt="poster"
          onClick= { this.toggleDialog("poster").bind(this)} ></img>
        { this.getTriggerAndModal("poster") }
      </div>
    );
  }
});

module.exports = Poster;
