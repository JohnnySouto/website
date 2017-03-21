global.origemPath = 'src/app/';
global.destinoPath = 'public_html/';
global.testePath = 'teste/';
global.outroPath = 'outro-src/';

module.exports = function(grunt){

  //Carregando tarefas do NPM
  grunt.loadNpmTasks('grunt-chokidar');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

    //Configuração inicial do grunt
    grunt.initConfig({
        clean: {

            public: {
                src: global.destinoPath
            },

            teste: {
              src: global.testePath
            }
        },

        copy: {

            public: {
                expand: true,
                cwd: global.origemPath,
                src: '**',
                dest: global.destinoPath
            },

            teste: {
              expand: true,
              cwd: global.outroPath,
              src:'**',
              dest: global.testePath
            }

        }

    });

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
};
