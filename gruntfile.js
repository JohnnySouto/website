<<<<<<< HEAD

global.origem = 'src/app/';
global.destino = 'public_html/';

module.exports = function(grunt){

    //Carregando tarefas do NPM
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
=======
global.origemPath = 'src/app/';
global.destinoPath = 'public_html/';
global.testePath = 'teste/';
global.outroPath = 'outro-src/';

module.exports = function(grunt){

  //Carregando tarefas do NPM
  grunt.loadNpmTasks('grunt-chokidar');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
>>>>>>> origin/master

    // variavel Config
    var config = function(){
      this.clean = {

<<<<<<< HEAD
        destino: {
          src: global.destino
        }
=======
            public: {
                src: global.destinoPath
            },

            teste: {
              src: global.testePath
            }
        },
>>>>>>> origin/master

      };

      this.copy = {

<<<<<<< HEAD
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
=======
            teste: {
              expand: true,
              cwd: global.outroPath,
              src:'**',
              dest: global.testePath
            }
>>>>>>> origin/master

        jquery: {
          expand: true,
          cwd: 'bower_components/jquery/',
          src: 'jquery.js',
          dest: global.destino + 'js/'
        }

      };

<<<<<<< HEAD
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

=======
    //Tarefa que cria o arquivo index.html inicial
    grunt.registerTask('index', 'Cria o index', function(){
      var index = '';

      index += '<!DOCTYPE html>';
      index += '<html lang="pt-BR">';
      index += '<head>';
      index += '<title>Johnny Souto - Verificando idioma ...</title>';
      index += '<meta charset="utf-8">';
      index += '<meta name="robots" content="noindex">';
      index += '</head>';
      index += '<body>';
      index += '<script>';
      index += 'var lang = navigator.language || navigator.userLanguage;';
      index += 'if(lang == 'en-US'){';
      index += 'window.location.replace("./en");';
      index += '} else {';
      index += 'window.location.replace("./br");';
      index += '}';
      index += 'console.log("Navegador esta no idioma: " + lang);';
      index += '</script></body></html>';

      grunt.file.write(origemPath + 'outro.html', index);
    });

    // console.log(global.origemPath + 'index.html');
    // console.log(global.destinoPath);


    //Registra tarefas
    grunt.registerTask('dist', ['clean:public', 'copy:public']);
    grunt.registerTask('dist-teste', ['clean:teste', 'copy:teste']);
    grunt.registerTask('index');
    grunt.registerTask('default', ['chokidar']);
>>>>>>> origin/master
};
