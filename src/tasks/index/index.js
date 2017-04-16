module.exports = function(grunt){
    grunt.registerTask('index', 'cria o index', function() {
        var index = '';
        index += '<!DOCTYPE html>';
        index += '<html lang="pt-BR"><head>';
        index += '<title>Johnny Souto - Verificando idioma ...</title>';
        index += '<meta charset="utf-8">';
        index += '<meta name="robots" content="noindex">';
        index += '</head><body><script>';
        index += 'var lang = navigator.language || navigator.userLanguage;';
        index += 'if(lang == 'en-US'){';
        index += 'window.location.replace("http://www.johnnysouto.com.br/en");';
        index += '// window.location.replace("../en");';
        index += '} else {';
        index += 'window.location.replace("http://www.johnnysouto.com.br/br");';
        index += '// window.location.replace("../br");';
        index += '}';
        index += 'console.log("Navegador esta no idioma: " + lang);';
        index += '</script></body></html>';

        grunt.file.write(global.destinoPath + 'index.html', index);
    });
};
