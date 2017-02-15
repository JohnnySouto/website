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
                cwd: '/',
                src: global.origemPath + 'index.html',
                dest: global.destinoPath
            }
        }

    });

    // console.log(global.origemPath + 'index.html');
    // console.log(global.destinoPath);

    //Carregando tarefas do NPM
    grunt.loadNpmTasks('grunt-contrib-copy');

    //Registra tarefas
    grunt.registerTask('default', ['copy']);
};
