global.origem = 'src/app/';
global.origemJquery = 'bower_components/jquery/';
global.origemBootstrapCss = 'bower_components/bootstrap/dist/css/';
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
          cwd: global.origemBootstrapCss,
          src: 'bootstrap.css',
          dest: global.origem + 'css/'
        },

        jquery: {
          expand: true,
          cwd: global.origemJquery,
          src: 'jquery.js',
          dest: global.origem + 'js/'
        }

      };

    };

    //Configuração inicial do grunt
    grunt.initConfig(new config());

    //Registra tarefas
    grunt.registerTask('limpeza', ['clean']);
    grunt.registerTask('copiar', ['copy:bootstrapcss','copy:jquery']);
    // grunt.registerTask('default', ['']);
    grunt.registerTask('initialize', [
      'index',
      'copiar'
    ]);

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

        grunt.file.write(global.origem + 'index.html', index);
    });

};
