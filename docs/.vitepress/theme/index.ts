import DefaultTheme from 'vitepress/theme'
import './custom.css'
import UniversityCard from './components/UniversityCard.vue'
import UniversityFilters from './components/UniversityFilters.vue'
import UniversityGrid from './components/UniversityGrid.vue'
import UniversitySearch from './components/UniversitySearch.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('UniversityCard', UniversityCard)
    app.component('UniversityFilters', UniversityFilters)
    app.component('UniversityGrid', UniversityGrid)
    app.component('UniversitySearch', UniversitySearch)
  }
}
