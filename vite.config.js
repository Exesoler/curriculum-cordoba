const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        quienes_somos: './quienes_somos.html',
        comunidades_aprendizaje: './comunidades_aprendizaje.html',
        progresiones_aprendizaje: './progresiones_aprendizaje.html',
        progresiones_lengua_matematica: './progresiones_lengua_matematica.html',
        progresiones_sociales_naturales: './progresiones_sociales_naturales.html',
        progresiones_ciudadania_humanidades: './progresiones_ciudadania_humanidades.html',
        metas_ciclo: './metas_ciclo.html',
        marco_curricular: './marco_curricular.html',
        contacto: './contacto.html',
      }
    }
  }
})