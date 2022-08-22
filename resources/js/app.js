import '../css/app.css'
import Alpine from 'alpinejs'
import EditorJS from '@editorjs/editorjs';

// const editor = new EditorJS('editorjs');
const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs',

});

window.Alpine = Alpine

Alpine.start()
