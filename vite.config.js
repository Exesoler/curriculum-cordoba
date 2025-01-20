const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        quienes_somos: './quienes_somos.html',
        progresiones_aprendizaje: './progresiones_aprendizaje.html',
        metas_ciclo: './metas_ciclo.html',
        marco_curricular: './marco_curricular.html',
        functions: './js/functions.js',
      }
    }
  }
})