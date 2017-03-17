global.origemPath = 'src/app/';
global.destinoPath = 'public_html/';
global.testePath = 'teste/';
global.outroPath = 'outro-src/';

module.exports = function(grunt){

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

            index: {
                expand: true,
                cwd: global.origemPath,
                src: 'index.html',
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

    console.log(global.origemPath + 'index.html');
    // console.log(global.destinoPath);

    //Carregando tarefas do NPM
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //Registra tarefas
    grunt.registerTask('dist', ['clean:public', 'copy:public']);
    grunt.registerTask('teste', ['clean:teste', 'copy:teste']);
    grunt.registerTask('default', ['copy:index']);
};
