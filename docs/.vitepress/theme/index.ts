import DefaultTheme from 'vitepress/theme'
import './custom.css'
import UniversityGrid from './components/UniversityGrid.vue'
import UniversityFilters from './components/UniversityFilters.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('UniversityGrid', UniversityGrid)
    app.component('UniversityFilters', UniversityFilters)
  }
}
