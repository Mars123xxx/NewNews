import { createApp } from 'vue'
import App from './App.vue'
import ElementUIPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router/index.js";
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';
import "./App.scss"

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});


const app = createApp(App)
app.use(ElementUIPlus)
app.use(router)
app.use(VMdPreview)
app.mount('#app')
