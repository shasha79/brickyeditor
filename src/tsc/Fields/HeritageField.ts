
/// <reference path="ImageField.ts"/>

namespace BrickyEditor {
  export namespace Fields {

    export class HeritageField extends ImageField {
      private instance_id;
      private $tooltip;

      bind() {
        let field = this;
        let $field = this.$field;
        let data = this.data;
        this.instance_id = Math.floor(Math.random() * 10000); // generate random id for unique instance identification
        console.log("Binding instance id: " + this.instance_id);

        let $iframe = $('<iframe src="http://localhost:3000/app/search-widget?id=' + this.instance_id + '" style="width: 100%; height: 100%"></iframe>');

        this.setSrc(this.data.src, false);
        $field.on("click", async () => {
          Editor.UI.setModal(); // reset modal
          Editor.UI.modal.showModal($iframe, false);

          window.addEventListener('message', message => {
            console.log("Iframe Chosen items event: " + JSON. stringify(message.data.message)  + ", items: " + JSON. stringify(message.data.value));
            // make sure that message is intended for this instance
            if (message.data.message == this.instance_id) {
              const chosenItem = message.data.value[0]
              field.setSrc(chosenItem.preview_url);
              field.setFile(null);
              field.setAlt(chosenItem.title);
              field.setLink(chosenItem.image_url);
              Editor.UI.modal.hideModal();
              field.setInfoTooltip(chosenItem);

            }
          });

          field.select();
        });
      }

      truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
      };

      setInfoTooltip(item) {
        let $tooltip = this.$field.next(".j-story__photo_credits");
        if ($tooltip) {
          $tooltip.find(".title").html('<a href="' + item.record_url + '">' + this.truncate(item.title, 40) + '</a>');
          $tooltip.find(".provider").html(this.truncate(item.provider, 50) + " | " 
          + '<a href=' + item.rights.url + '><img src="' + item.rights.icon + '" style="width: 6vw"/></a>');
        }

      }
    }
  }
}
