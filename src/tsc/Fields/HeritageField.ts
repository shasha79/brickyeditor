
/// <reference path="ImageField.ts"/>

namespace BrickyEditor {
  export namespace Fields {

    export class HeritageField extends ImageField {

      bind() {
        let field = this;
        let $field = this.$field;
        let data = this.data;
        let random_id = Math.floor(Math.random() * 10000);
        console.log("Binding random id: " + random_id);

        let $iframe = $('<iframe src="http://localhost:3000/app/FullModalView?id=' + random_id + '" style="width: 100%; height: 100%"></iframe>');

        this.setSrc(this.data.src, false);
        $field.on("click", async () => {
          Editor.UI.modal.showModal($iframe, false);

          window.addEventListener('message', message => {
            console.log("Iframe Chosen items event: " + JSON. stringify(message.data.message)  + ", items: " + JSON. stringify(message.data.value));
            if (message.data.message == random_id) {
              Editor.UI.modal.hideModal();
              const chosenItem = message.data.value[0]
              field.setSrc(chosenItem.preview_url);
              field.setFile(null);
              field.setAlt(chosenItem.title);
              field.setLink(chosenItem.image_url);

            }
          });

          field.select();
        });
      }
    }
  }
}
