global.origemPath = 'src/app/';
global.destinoPath = 'public_html/'

module.exports = function(grunt){

    // Carregando tarefas em diretorios
    grunt.loadTasks('src/tasks/index');

    //Configuração inicial do grunt
    grunt.initConfig({
        clean: {

            destino: {
                src: global.destinoPath
            }
        },

        copy: {

            public: {
                expand: true,
                cwd: global.origemPath,
                src: 'index.html',
                dest: global.destinoPath
            }
        }

    });

    // console.log(global.origemPath + 'index.html');
    // console.log(global.destinoPath);

    //Carregando tarefas do NPM
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //Registra tarefas
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('default', ['copy']);
};
