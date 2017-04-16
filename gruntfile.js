
global.origem = 'src/app/';
global.destino = 'public_html/';

module.exports = function(grunt){

    //Carregando tarefas do NPM
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // variavel Config
    var config = function(){
      this.clean = {

        destino: {
          src: global.destino
        }

      };

      this.copy = {

        public: {
          expand: true,
          cwd: global.origem,
          src: '**',
          dest: global.destino
        },

        bootstrapcss: {
          expand: true,
          cwd: 'bower_components/bootstrap/dist/css/',
          src: 'bootstrap.css',
          dest: global.destino + 'css/'
        },

        jquery: {
          expand: true,
          cwd: 'bower_components/jquery/',
          src: 'jquery.js',
          dest: global.destino + 'js/'
        }

      };

    };

    //Configuração inicial do grunt
    grunt.initConfig(new config());

    //Registra tarefas
    grunt.registerTask('dist', ['clean', 'index']);
    grunt.registerTask('base', ['copy:bootstrapcss','copy:jquery']);
    grunt.registerTask('default', ['copy:index']);

    grunt.registerTask('index', 'cria o index', function() {
        var index = '';
        index += '<!DOCTYPE html>';
        index += '<html lang="pt-BR"><head>';
        index += '<title>Johnny Souto - Verificando idioma ...</title>';
        index += '<meta charset="utf-8">';
        index += '<meta name="robots" content="noindex">';
        index += '</head><body><script>';
        index += 'var lang = navigator.language || navigator.userLanguage;';
        index += 'if(lang == "en-US"){';
        index += '//window.location.replace("http://www.johnnysouto.com.br/en");';
        index += '} else {';
        index += '//window.location.replace("http://www.johnnysouto.com.br/br");';
        index += '}console.log("Navegador esta no idioma: " + lang);</script></body></html>';

        grunt.file.write(global.destino + 'index.html', index);
    });

};
